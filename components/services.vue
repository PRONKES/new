<template>
  <v-container justify="center">
    <v-row align-content="stretch" justify="center">
      <v-col v-for="(activity, index) in activities" :key="index">
        <v-card style="height:100%" class="rounded-lg" max-width="400">
          <v-img
            class="white--text align-end"
            height="300px"
            :src="`/api/images/${activity.image}`"
          >
          </v-img>
          <div class="grey lighten-5">
            <v-card-text class="font-weight-black">
              <div class="est">{{ activity.description }}</div>
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                :to="`/seeDetails/${activity._id}`"
              >
                See More Details</v-btn
              >
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    activities: []
  }),
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
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");

.text {
  font-family: "Gloria Hallelujah", cursive;
}

.font-weight-black {
  color: black;
  text-align: center;
  height: 20px;
  font-family: "Gloria Hallelujah", cursive;
}
.est {
  font-size: 20px;
}
</style>
