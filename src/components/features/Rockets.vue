<template>
  <div>
    <h1>Rockets</h1>
    <v-row :justify="'space-around'">
      <div v-for="rocket in rockets" :key="rocket.id">
        <v-col md="12">
          <v-card class="mx-auto" max-width="350">
            <v-img class="white--text align-end" height="400px" :src="rocket.flickr_images[0]"></v-img>
            <v-card-actions>
              <v-btn color="blue" text :to="`/rockets/${rocket.id}`">
                <v-card-title>{{ rocket.name }}</v-card-title>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Rockets',
  computed: {
    ...mapGetters(['rockets'])
  },
  methods: mapActions(['fetchRocketsList']),
  created() {
    this.fetchRocketsList()
  }
}
</script>
