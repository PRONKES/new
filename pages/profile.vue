<template>
  <v-container class="ma-4">
    <div class="h1 text-center font-weight-bold font-italic">PROFILE</div>
    <v-divider></v-divider>
    <v-row align-content="stretch" justify="center">
      <v-col lg="4" sm="6" xs="12">
        
        <v-card
          id="profile"
          style="height: 100%"
          max-width="500px"
          class="pa-8"
        >
          <v-row justify="center">
            <v-avatar
              class="my-2 ml-8"
              size="100"
            >
            <v-img
              :src="`/api/images/${user.image}`"
            ></v-img>
            </v-avatar>
            <span class="image-upload">
              <label for="file-input">
                <v-icon>mdi-camera</v-icon>
              </label>

              <input id="file-input" type="file" @change="onFileSelected" />
            </span>
          </v-row>
          <v-card-title class="my-0" style="justify-content: center">{{
            user.username
          }}</v-card-title>
          <v-card-subtitle class="my-0" style="text-align: center">{{
            user.email
          }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <div class="h1 text-center font-weight-bold font-italic mt-2">RESERVATIONS</div>
    <v-divider></v-divider>
    <v-row v-if="appointments.length>0" align-content="stretch" justify="center">
      <v-col
        v-for="(appointment, index) in appointments"
        :key="index"
        lg="4"
        sm="6"
        xs="12"
      >
        <v-card style="height: 100%">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`/api/images/${appointment.activity.image}`"
          >
          </v-img>
          <v-card-text class="text--primary">
            <v-card-title>{{ appointment.activity.description }}</v-card-title>
            <v-card-subtitle>{{ appointment.place.title }}</v-card-subtitle>
            <v-card-text>
              <div>
                <span class="font-weight-black">Date: </span
                >{{ appointment.appointmentDate }}
              </div>
              <div>
                <span class="font-weight-black">Number of people: </span
                >{{ appointment.numberOfPeople }}
              </div>
              <div>
                <span class="font-weight-black">Price: </span
                >{{ appointment.price }}$
              </div>
            </v-card-text>
          </v-card-text>

          <v-spacer></v-spacer>

          <v-card-actions style="justify-content: center">
            <v-btn
              v-if="!appointment.payed"
              color="primary"
              class="font-weight-black pa-3 ma-1"
              elevation="2"
              rounded
              @click="doPurchase(appointment)"
              >Pay Now</v-btn
            >
            <v-btn
              v-else
              color="success"
              class="font-weight-black pa-3 ma-1"
              elevation="2"
              rounded
              >Payed
              <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <div class="Subtitle 1 text-center font-weight-bold font-italic mt-2">
          No Reservation Available
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    stripeHandler: {},
    appointments: [],
    appointment: {},
  }),
  mounted() {
    this.initialize();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["changeUser"]),
    async initialize() {
      const appointments = await this.$axios.$get("/api/appointment");
      this.appointments = appointments;
      this.stripeHandler = StripeCheckout.configure({
        key:
          "pk_test_51I7JK2JGJbW9PNmvQWMzVhyhW7ocVnU1NpmDpMo8JXqjKsPCScxCuVYbLEJh55koKUwpyzvjPmeXzxQnxjVstut300o1TN4Ssj",
        locale: "en",
        token: async (token) => {
          console.log({ token });
          await this.$axios.$put(`/api/appointment/${this.appointment._id}`, {
            stripeTokenId: token.id,
          });
          const appointments = await this.$axios.$get("/api/appointment");
          this.appointments = appointments;
        },
      });
    },
    doPurchase(appointment) {
      this.appointment = appointment;
      this.stripeHandler.open({
        amount: appointment.price * 100,
      });
    },
    async onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      const fb = new FormData();
      fb.append("image", this.selectedFile, this.selectedFile.name);
      await axios.put("/api/users/image", fb, {
        onUploadProgress: (uploadEvent) => {
          console.log(
            "upload Progress" +
              Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
              "%"
          );
        },
      });
      const user = await this.$axios.$get("/api/user");
      if (user.username) {
        this.changeUser(user);
      } else {
        this.changeUser({ username: false });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-upload > input {
  display: none;
}
</style>
