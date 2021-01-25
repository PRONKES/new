<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <div>
          <h3>ESCAPER'S CHAT</h3>
          <v-form>
            <v-select
              label="Send to"
              v-model="to"
              :items="users"
              item-value="_id"
              item-text="username"
              @change="getMessages"
            ></v-select>
            <v-text-field
              v-model="message"
              label="Type Your Message Here"
              required
            ></v-text-field>
            <v-btn color="blue" @click="submit">
              Send
              <v-icon dark right> mdi-send </v-icon>
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-card max-width="700px" height="400px" class="scroll">
          <v-toolbar dark color="primary darken-1">
            <v-toolbar-title class="name">Hi, There!</v-toolbar-title>
          </v-toolbar>
          <v-list id="messages" dense v-for="(msg, i) in messages" :key="i">
            <div class="msg">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title id="sender"
                    >{{ msg.from.username }}
                  </v-list-item-title>
                  <br />
                  <v-list-item-subtitle id="rec">{{
                    msg.message
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
          <p v-if="feedback !== ''">
            <em>{{ feedback }} is typing a message...</em>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";
import io from "socket.io-client";

export default {
  mixins: [validationMixin],

  validations: {
    message: { required }
  },

  data: () => ({
    messages: [],
    users: [],
    message: "",
    to: "",
    socket: "",
    feedback: ""
  }),
  async mounted() {
    this.socket = io.connect();
    this.socket.on("connect", async () => {
      let user = await this.$axios.$put(`/api/users`, {
        socket: this.socket.id
      });
    });
    this.socket.on("update", async data => {
      this.getMessages();
    });
    this.socket.on("typing", data => {
      this.feedback = data;
    });
    this.initialize();
  },

  computed: {
    ...mapState(["user"])
  },
  methods: {
    async initialize() {
      const users = await this.$axios.$get("/api/users");
      this.users = users;
      await this.getMessages();
    },
    async submit() {
      let rtn;
      let chatObject = {
        from: this.user._id,
        message: this.message,
        to: this.to
      };
      rtn = await this.$axios.$post("/api/chats", chatObject);
      this.getMessages();
      let chat = this.socket.emit("update", {
        from: this.user._id,
        to: this.to
      });
      this.message = "";
    },
    async getMessages() {
      if (this.to) {
        const messages = await this.$axios.$get(`/api/chats?user2=${this.to}`);
        this.messages = messages;
      }
    },
    typing() {
      this.socket.emit("typing", this.to);
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Englebert&display=swap");

.scroll {
  overflow-y: auto;
}
h3 {
  font-family: "Englebert", sans-serif;
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin: 40px 0 20px;
  text-align: center;
}
.test {
  position: relative;
  top: 50px;
  width: 500px;
  left: 290px;
  height: 500px;
}
.msg {
  height: 80px;
  background-color: rgb(250, 248, 248);
  border-radius: 25px;
}
#sender {
  font-size: 20px;
  color: black;
  font-family: "Englebert", sans-serif;
}
.name {
  font-family: "Englebert", sans-serif;
}
#rec {
  color: rgb(34, 32, 32);
}
</style>
