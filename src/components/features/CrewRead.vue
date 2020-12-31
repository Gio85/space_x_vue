<template>
  <div>
    <v-card class="mx-auto hasMarginTop" max-width="400">
      <v-img class="white--text align-end" height="400px" :src="singleMember.image">
        <v-card-title>{{ singleMember.name }}</v-card-title>
      </v-img>
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
                {{ singleMember[key].toUpperCase() }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CrewRead',
  computed: {
    ...mapGetters(['singleMember'])
  },
  methods: mapActions(['fetchSingleMember']),
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
