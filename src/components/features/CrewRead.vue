<template>
  <v-container>
    <v-card class="mx-auto hasMarginTop" max-width="400">
      <v-img class="white--text align-end" height="400px" :src="singleMember.image"> </v-img>
    </v-card>
    <v-container class="grey lighten-5 mb-6">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(key, index) in Object.keys(singleMember)" :key="index">
              <td v-if="typeof singleMember[key] !== 'object' && key !== 'image' && key !== 'status'">
                <strong>{{ key.toUpperCase() }}</strong>
              </td>
              <td v-if="typeof singleMember[key] !== 'object' && key !== 'image' && key !== 'status'">
                {{ singleMember[key] }}
              </td>
              <td v-if="key === 'status'">
                <strong>{{ key.toUpperCase() }}</strong>
              </td>
              <td v-if="key === 'status'">
                <v-chip :color="getColor(singleMember[key])" dark label>
                  {{ singleMember[key].toUpperCase() }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CrewRead',
  computed: {
    ...mapGetters(['singleMember'])
  },
  methods: {
    ...mapActions(['fetchSingleMember']),
    getColor(status) {
      if (status === 'active') return 'green'
      else return 'red'
    }
  },
  created() {
    this.fetchSingleMember(this.$route.params.id)
  },
  props: ['id']
}
</script>

<style scoped>
.hasMarginTop {
  margin-top: 20px;
}
</style>
