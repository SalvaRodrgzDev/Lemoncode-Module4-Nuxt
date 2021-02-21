<template>
  <p v-if="$fetchState.pending">Loading....</p>
  <p v-else-if="$fetchState.error">Error while fetching mountains</p>
  <ul v-else-if="typeof members !== 'undefined' && members.length > 0">
    <v-data-table
      :headers="headers"
      :items="members"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.avatar_url="{ item }">
        <v-avatar class="my-2">
          <v-img
            :src="item.avatar_url"
            :lazy-src="item.avatar_url"
            max-width="75px"
          ></v-img>
        </v-avatar>
      </template>
      <template v-slot:item.login="{ item }">
        <v-btn
          target="_blank"
          icon
          color="white"
          :to="`/detail/${item.login}`">{{ item.login }}
        </v-btn>
      </template>
      <template v-slot:item.url="{ item }">
        <v-btn
          :href="item.html_url"
          target="_blank"
          icon
          color="indigo"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </ul>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data() {
    return {
      members: [],
      headers: [
        { text: 'Avatar', value: 'avatar_url'},
        { text: 'Detail', value: 'login'},
        { text: 'Github Profile', value: 'url'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      organization: 'getSearchterm'
    })
  },
  watch: {
    organization() {
      this.$fetch()
    }
  },
  async fetch() {
    this.members = await fetch(
      `https://api.github.com/orgs/${this.organization}/members`
    ).then(res => res.json())
  }
})
</script>
