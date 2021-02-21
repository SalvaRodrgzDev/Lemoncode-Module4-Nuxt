<template>
  <v-container fill-height>
    <v-row>
      <v-col class="d-flex flex-column justify-space-between ">
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <div v-else>
          <MemberCard :member="member" />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          to="/"
          class="ma-2"
          outlined
          color="white"
        >
          Back to Members table
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
      member: {}
    }
  },
  async fetch() {
    this.member = await fetch(
      `https://api.github.com/users/${this.id}`
    ).then((res) => res.json())
  }
})
</script>
