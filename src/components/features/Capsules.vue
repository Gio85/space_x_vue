<template>
  <v-row :justify="'space-around'">
    <v-col md="10">
      <v-card class="card">
        <v-card-title>
          Capsules
        </v-card-title>
        <v-data-table :headers="headers" :items="capsules">
          <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)" dark label>
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.launches="{ item }">
            {{ item.launches.length }}
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Capsules',
  computed: mapGetters(['capsules', 'headers']),
  methods: {
    ...mapActions(['fetchCapsules']),
    getColor(status) {
      switch (status) {
        case 'active':
          return 'green'
        case 'retired':
          return 'purple'
        case 'unknown':
          return 'blue'
        default :
          return 'red'
      }
    }
  },
  created() {
    this.fetchCapsules()
  }
}
</script>

<style scoped>
.card {
  margin-top: 10px;
}
</style>
