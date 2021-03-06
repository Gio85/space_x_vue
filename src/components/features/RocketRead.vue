<template>
  <v-container class="container">
    <v-row :justify="'space-around'">
      <v-col sm="8">
        <div v-if="!singleRocket">
          <v-sheet :color="'grey lighten-4'" class="pa-3">
            <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
          </v-sheet>
        </div>
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <template v-slot:prev="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"><span class="arrowSize">⬅️</span></v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"><span class="arrowSize">➡️️</span></v-btn>
          </template>
          <v-carousel-item v-for="(image, i) in singleRocket.flickr_images" :key="i">
            <v-sheet>
              <v-row align="center" justify="center">
                <div>
                  <v-img contain class="white--text align-end" height="400px" :src="image"></v-img>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <strong class="headline">{{ singleRocket.name }}</strong>
      </v-col>
      <v-col sm="8">
        <p class="description">{{ singleRocket.description }}</p>
        <v-container class="grey lighten-5 mb-6">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="(key, index) in Object.keys(singleRocket)" :key="index">
                  <td
                    v-if="
                      typeof singleRocket[key] !== 'object' &&
                        key !== 'image' &&
                        key !== 'status' &&
                        key !== 'active' &&
                        key !== 'id' &&
                        key !== 'name' &&
                        key !== 'description'
                    "
                  >
                    <strong>{{
                      key
                        .toUpperCase()
                        .replace('_', ' ')
                        .replace('_', ' ')
                    }}</strong>
                  </td>
                  <td
                    v-if="
                      typeof singleRocket[key] !== 'object' &&
                        key !== 'image' &&
                        key !== 'status' &&
                        key !== 'active' &&
                        key !== 'id' &&
                        key !== 'name' &&
                        key !== 'description'
                    "
                  >
                    {{ singleRocket[key] }}
                  </td>
                  <td v-if="typeof singleRocket[key] !== 'object' && key === 'active'">
                    <strong>{{ key.toUpperCase() }}</strong>
                  </td>
                  <td v-if="typeof singleRocket[key] !== 'object' && key === 'active'">
                    {{ getStatus(singleRocket[key]) }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RocketRead',
  computed: {
    ...mapGetters(['singleRocket'])
  },
  methods: {
    ...mapActions(['fetchRocket']),
    getStatus(status) {
      if (status) return '✅'
      else return '❌'
    }
  },
  created() {
    this.fetchRocket(this.$route.params.id)
  },
  props: ['id']
}
</script>
<style scoped>
.arrowSize {
  font-size: 30px;
}
.description {
  text-align: center;
}
</style>
