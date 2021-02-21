<template>
  <v-app>
    <v-card class="overflow-hidden">
    <v-app-bar
      app
      elevate-on-scroll
      height="100px"
      scroll-target="#scrolling-techniques-7"
    >
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-form @submit.prevent="updateSearchTerm">
            <v-text-field
              :append-icon="'mdi-magnify'"
              label="Search..."
              v-model="searchTerm"
            >
            </v-text-field>
          </v-form>
    </v-app-bar>
    <v-main
      id="scrolling-techniques-7"
      class="overflow-y-auto"
    >
      <v-container fill-height>
        <Nuxt />
      </v-container>
    </v-main>
  </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      searchTerm: "lemoncode",
    }
  },
  methods: {
    async updateSearchTerm() {
      this.$store.commit('setSearchTerm', this.searchTerm)
    },
  }
})
</script>
