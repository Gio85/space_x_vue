<template>
  <v-container>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
          <tr v-for="(key, index) in Object.keys(companyInfo)" :key="index">
            <td v-if="typeof companyInfo[key] !== 'object' && key !== 'id'">
              <strong>{{ key.toUpperCase() }}</strong>
            </td>
            <td v-if="typeof companyInfo[key] !== 'object' && key !== 'id'">{{ companyInfo[key] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <v-simple-table dense>
      <template v-slot:default>
        <tbody>
          <tr v-for="(key, index) in Object.keys(companyInfo)" :key="index">
            <td v-if="key === 'headquarters'" class="tab-width">
              <strong>{{ key.toUpperCase() }}</strong>
            </td>
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
            <td v-if="key === 'links'" class="tab-width">
              <strong>{{ key.toUpperCase() }}</strong>
            </td>
            <td v-if="key === 'links'">
              <strong>Website: </strong><a target="_blank">{{ companyInfo[key].website }}</a>
              <br />
              <strong>Flickr: </strong><a target="_blank">{{ companyInfo[key].flickr }}</a>
              <br />
              <strong>Twitter: </strong><a target="_blank">{{ companyInfo[key].twitter }}</a>
              <br />
              <strong>Elon twitter: </strong><a target="_blank">{{ companyInfo[key].elon_twitter }}</a>
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
  name: 'CompanyInfo',
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
