<template>
  <v-container>
    <div class="CrewList">
      <div v-if="!team">
        <v-sheet :color="'grey lighten-4'" class="pa-1">
          <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
        </v-sheet>
      </div>
      <v-row :justify="'space-around'">
        <div v-for="member in team" :key="member.id">
          <v-col md="12">
            <v-card class="mx-auto" max-width="350">
              <v-img class="white--text align-end" height="400px" :src="member.image">
                <v-card-title>{{ member.name }}</v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn color="blue" text :to="`/crew/${member.id}`">
                  More info
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CrewList',
  computed: {
    ...mapGetters(['team'])
  },
  methods: mapActions(['fetchTeamList']),
  created() {
    this.fetchTeamList()
  }
}
</script>

<style scoped>
.CrewList {
  margin: 10px;
}
</style>
