<template>
  <v-container pa-12>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
          New Activity
        </v-btn>
      </template>
      <v-card>
        <span class="headline">{{ formTitle }}</span>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  truncate-length="15"
                  @change="onFileSelected"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  required
                  label="Price"
                  v-model="editedItem.price"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  required
                  label="description"
                  v-model="editedItem.description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>

          <v-btn color="blue darken-1" text @click="validate"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row align-content="stretch" justify="center">
        <v-col
          v-for="(activity, index) in activities"
          :key="index"
          lg="4"
          sm="6"
          xs="12"
        >
          <v-card style="height:100%" class="rounded-lg" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="`/api/images/${activity.image}`"
            >
            </v-img>
            <v-card-text class="font-weight-black">
              <div>Service : {{ activity.description }}</div>
              <div>Price : {{ activity.price }} DT</div>
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions class="action">
              <v-btn x-small color="warning" text @click="editItem(activity)">
                <v-icon left>
                  mdi-pencil
                </v-icon>
                edit
              </v-btn>

              <v-btn
                x-small
                color="secondary"
                dark
                text
                @click="deleteItem(activity)"
              >
                <v-icon left>
                  mdi-delete
                </v-icon>
                delete
              </v-btn>
              <v-spacer />
              <v-btn color="blue darken-1" text :to="`/places/${activity._id}`">
                <v-icon left>
                  mdi-map-marker-multiple
                </v-icon>
                Add Places</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    activities: [],
    selectedFile: null,
    valid: true,
    editedIndex: -1,
    editedItem: {
      image: "",
      price: 0,
      description: ""
    },
    defaultItem: {
      image: "",
      price: 0,
      description: ""
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created() {
    this.initialize();
  },

  methods: {
    onFileSelected(file) {
      this.selectedFile = file;
    },
    async initialize() {
      const activities = await this.$axios.$get("/api/activity");
      this.activities = activities;
      console.log({ activities });
    },

    async validate() {
      const fb = new FormData();
      if (this.selectedFile !== null) {
        fb.append(
          "image",
          this.selectedFile,
          this.selectedFile.name,
          this.editedItem.image
        );
      }

      fb.append("description", this.editedItem.description);
      fb.append("price", this.editedItem.price);

      if (this.editedIndex > -1) {
        Object.assign(this.activities[this.editedIndex], this.editedItem);
        axios
          .put(`/api/activity/${this.editedItem._id}`, fb, {
            onUploadProgress: uploadEvent => {
              console.log(
                "upload Progress" +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          })
          .then(res => {
            this.initialize();
          })
          .then(() => this.close());
      } else {
        axios
          .post("/api/activity", fb, {
            onUploadProgress: uploadEvent => {
              console.log(
                "upload Progress" +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          })
          .then(res => {
            this.initialize();
          })
          .then(() => this.close());
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editItem(activity) {
      this.editedIndex = this.activities.indexOf(activity);
      this.editedItem = Object.assign({}, activity);
      this.dialog = true;
    },
    async deleteItem(activity) {
      await this.$axios.$delete(`/api/activity/${activity._id}`);
      this.initialize();
      this.editedIndex = this.activities.indexOf(activity);
      this.editedItem = Object.assign({}, activity);
      this.dialogDelete = true;
    }
  }
};
</script>
<style scoped>
.font-weight-black {
  height: 80px;
}
</style>
