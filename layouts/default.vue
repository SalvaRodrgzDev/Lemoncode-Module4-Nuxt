<template>
  <v-app>
    <v-card class="overflow-hidden fill-height" >
    <v-app-bar
      app
      height="100px"
      scroll-target="#scrolling-techniques-7"
    >
        <v-toolbar-title>Github Members</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-form @submit.prevent="updateSearchTerm">
            <v-text-field
              :append-icon="'mdi-magnify'"
              label="Search..."
              v-model="searchterm"
            >
            </v-text-field>
          </v-form>
    </v-app-bar>
    <v-main
      id="scrolling-techniques-7"
      class="overflow-y-auto fill-height"
    >
    <Nuxt />
    </v-main>
  </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      searchterm: "lemoncode",
    }
  },
  methods: {
    async updateSearchTerm() {
      this.$store.commit('setSearchTerm', this.searchterm)
    },
  }
})
</script>
