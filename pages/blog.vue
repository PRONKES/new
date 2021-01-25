<template>
  <div>
    <h2>THE ESCAPER'S BLOG</h2>

    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-purple accent-1"
          dark
          class="mb-2"
          v-bind="attrs"
          v-on="on"
        >
          Add Your Post
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
                  label="title"
                  v-model="editedItem.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  required
                  label="body"
                  v-model="editedItem.body"
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
      <v-col v-for="(blog, index) in blogs" :key="index" class="row">
        <v-card class="rounded-lg">
          <h1>{{ blog.title }}</h1>

          <div>
            <v-img class="img" :src="`/api/images/${blog.image}`"> </v-img>
          </div>

          <div class="div">
            <p>{{ blog.body }}</p>

            <v-btn color="warning" text @click="editItem(blog)">
              <v-icon left>
                mdi-pencil
              </v-icon>
              edit
            </v-btn>

            <v-btn color="warning" text @click="deleteItem(blog)">
              <v-icon left>
                mdi-delete
              </v-icon>
              delete
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    blogs: [],
    selectedFile: null,

    valid: true,
    editedIndex: -1,
    editedItem: {
      image: "",
      title: "",
      body: ""
    },
    defaultItem: {
      image: "",
      title: "",
      body: ""
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
      const blogs = await this.$axios.$get("/api/blogs");
      this.blogs = blogs;
      console.log(blogs);
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

      fb.append("body", this.editedItem.body);
      fb.append("title", this.editedItem.title);

      if (this.editedIndex > -1) {
        Object.assign(this.blogs[this.editedIndex], this.editedItem);
        await this.$axios.$put(
          `/api/blogs/${this.editedItem._id}`,
          this.editedItem
        );
        await this.initialize();
      } else {
        axios
          .post("/api/blogs", fb, {
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
    editItem(blog) {
      console.log(blog);
      this.editedIndex = this.blogs.indexOf(blog);
      this.editedItem = Object.assign({}, blog);
      this.dialog = true;
    },
    async deleteItem(blog) {
      console.log(blog);
      await this.$axios.$delete(`/api/blogs/${blog._id}`);
      this.initialize();
      console.log(blog);
      this.editedIndex = this.blogs.indexOf(blog);
      this.editedItem = Object.assign({}, blog);
      this.dialogDelete = true;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Englebert&display=swap");

.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: black;
}

h2 {
  font-family: "Englebert", sans-serif;
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin: 40px 0 20px;
  text-align: center;
}
.img {
  height: 300px;
  width: 650px;
}
p {
  font-family: "italic";
  color: white;
  font-size: 20px;
}
h1 {
  font-size: 30px;
  font-family: "Gloria Hallelujah", cursive;
  text-align: center;
}
.div {
  background-color: #212121;
}
.mb-2 {
  left: 180px;
}
</style>
