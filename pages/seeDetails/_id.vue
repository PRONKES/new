<template>
  <v-container pa-12 justify="center">
    <v-card id="map-wrap" style="height: 53vh">
      <no-ssr>
        <l-map :zoom="8" :center="[34.46427430192848, 9.551030828063602]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>

          <l-marker
            v-for="(place, index) in places"
            :lat-lng="getLatLng(place)"
            :key="index"
          >
            <l-tooltip :options="{ permanent: true, interactive: true }">{{
              place.title
            }}</l-tooltip>
          </l-marker>
        </l-map>
      </no-ssr>
    </v-card>
    <v-card class="reservation">
      <appointment :activity="activity" :places="places" />
    </v-card>
  </v-container>
</template>
<script>
import appointment from "@/components/appointment";
export default {
  components: { appointment },
  data: () => ({
    places: [],
    customText: "",
    activity: {}
  }),
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      const activity = await this.$axios.$get(
        `/api/activity/${this.$route.params.id}`
      );
      this.activity = activity;
      const places = await this.$axios.$get(
        `/api/place/${this.$route.params.id}`
      );
      this.places = places;
    },
    getLatLng({ lat, lng }) {
      return [lat, lng];
    }
  }
};
</script>
<style scoped>
#customTextInput {
  background-color: white;
}
#map-wrap {
  border-radius: 25px;

  width: 400px;
  float: right;
  margin: 100px;
}
.reservation {
  height: 400px;
  width: 500px;
  margin: 90px;
  left: -200px;
  border: 1px solid blue;
}
</style>
