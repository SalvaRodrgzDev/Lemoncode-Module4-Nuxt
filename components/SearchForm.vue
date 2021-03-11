<template>
  <v-form @submit.prevent="updateSearchTerm">
            <v-text-field
              :append-icon="'mdi-magnify'"
              label="Search..."
              v-model="searchterm"
            >
            </v-text-field>
          </v-form>
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
