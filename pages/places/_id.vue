<template>
  <v-container pa-12 justify="center">
    <v-flex class="map">
      <v-text-field
        prepend-icon="mdi-map-marker"
        v-model="customText"
        label="Place Title"
        required
        clearable
      ></v-text-field
      ><br /><br />
    </v-flex>

    <v-card id="map-wrap" style="height: 80vh">
      <no-ssr>
        <l-map
          :zoom="7"
          :center="[34.46427430192848, 9.551030828063602]"
          @click="addMarker"
        >
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>

          <l-marker
            v-for="(place, index) in places"
            :lat-lng="getLatLng(place)"
            :key="index"
            @click="removeMarker(index)"
          >
            <l-tooltip :options="{ permanent: true, interactive: true }">{{
              place.title
            }}</l-tooltip>
          </l-marker>
        </l-map>
      </no-ssr>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    places: [],
    customText: ""
  }),
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      const places = await this.$axios.$get(
        `/api/place/${this.$route.params.id}`
      );
      this.places = places;
    },
    getLatLng({ lat, lng }) {
      return [lat, lng];
    },
    async addMarker(event) {
      let { lat, lng } = event.latlng;
      if (this.customText !== "") {
        let place = {
          activity: this.$route.params.id,
          lat,
          lng,
          title: this.customText
        };

        await this.$axios.$post("/api/place", place);
        await this.initialize();
      }
    },
    async removeMarker(index) {
      let place = this.places[index];
      await this.$axios.$delete(`/api/place/${place._id}`);
      await this.initialize();
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
  margin-bottom: 200px;
  width: 700px;
  float: center;
  top: 100px;
  left: 300px;
  position: absolute;

  border: 1px solid white;
}
.map {
  float: left;
}
</style>
