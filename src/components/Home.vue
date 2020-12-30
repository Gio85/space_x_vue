<template>
  <v-container>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
          <tr v-for="(key, index) in Object.keys(companyInfo)" :key="index">
            <td v-if="typeof companyInfo[key] !== 'object'">{{ key }}</td>
            <td v-if="typeof companyInfo[key] !== 'object'">{{ companyInfo[key] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
          <tr v-for="(key, index) in Object.keys(companyInfo)" :key="index">
            <td v-if="key === 'headquarters'" class='tab-width'>{{ key }}</td>
            <td v-if="key === 'headquarters'">
              {{ companyInfo[key].address }}, {{ companyInfo[key].city }}, {{ companyInfo[key].state }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
        <tr v-for="(key, index) in Object.keys(companyInfo)" :key="index">
          <td v-if="key === 'links'" class='tab-width'>{{ key }}</td>
          <td v-if="key === 'links'">
            <span>Website: </span><a target='_blank'>{{ companyInfo[key].website}}</a>
            <br/>
            <span>Flickr: </span><a target='_blank'>{{ companyInfo[key].flickr}}</a>
            <br/>
            <span>Twitter: </span><a target='_blank'>{{ companyInfo[key].twitter}}</a>
            <br />
            <span>Elon twitter: </span><a target='_blank'>{{ companyInfo[key].elon_twitter}}</a>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Homepage',
  computed: mapGetters(['companyInfo']),
  methods: mapActions(['fetchCompanyInfo']),
  created() {
    this.fetchCompanyInfo()
  }
}
</script>

<style>
.tab-width {
  width: 11%;
}
</style>
