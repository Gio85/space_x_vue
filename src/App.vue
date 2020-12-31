<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            SpaceX
          </v-list-item-title>
          <v-list-item-subtitle>
            API
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SpaceX</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>

</template>

<script>
import Footer from '@/components/app/Footer'
export default {
  components: {
    Footer
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-domain', to: '/' },
      { title: 'Capsules', icon: 'mdi-firework', to: '/capsules' },
      { title: 'Rockets', icon: 'mdi-rocket-launch', to: '/rockets' },
      { title: 'Crew', icon: 'mdi-microsoft-teams', to: '/crew' }
    ]
  })
}
</script>
