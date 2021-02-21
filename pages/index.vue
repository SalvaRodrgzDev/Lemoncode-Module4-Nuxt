<template>
  <ul>
    <v-data-table
      :headers="headers"
      :items="members"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.login="{ item }">
        <NuxtLink :to="`/detail/${item.login}`">{{ item.login }}</NuxtLink>
      </template>
      <template v-slot:item.avatar_url="{ item }">
        <v-img
          :src="item.avatar_url"
          :lazy-src="item.avatar_url"
          max-width="75px"
        ></v-img>
      </template>
      <template v-slot:item.url="{ item }">
        <a :href="item.url">Link to Github profile</a>
      </template>
    </v-data-table>
  </ul>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      searchTerm: 'lemoncode',
      members: [],
      headers: [
        { text: 'login', value: 'login'},
        { text: 'avatar_url', value: 'avatar_url'},
        { text: 'url', value: 'url'},
      ]
    }
  },
  computed: {
    organization() {
      return this.$store.state.searchTerm
    }
  },
  methods: {
    async search() {
      this.searchTerm = this.organization
      this.members = await fetch(
      `https://api.github.com/orgs/${this.searchTerm}/members`
    ).then(res => res.json())
    },
  },
  watch: {
    organization() {
      this.search()
    }
  },
  created() {
    this.search()
  }
})
</script>
