<template>
  <div>
    <v-card
      class="mx-auto"
      outlined
    >
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar
        class="mx-auto mr-5"
        size="80"
        right
      >
        <v-img
          :src="member.avatar_url"
          :aspect-ratio="1"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ member.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ member.company }}
        </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon
            color="light"
          >
            mdi-account-supervisor-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ member.followers }}</v-list-item-title>
          <v-list-item-subtitle>Followers</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>{{ member.following }}</v-list-item-title>
          <v-list-item-subtitle>Following</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon
            color="light"
          >
            mdi-book-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ member.public_repos }}</v-list-item-title>
          <v-list-item-subtitle>Repositories</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
    <NuxtLink to="/">Back to Members table</NuxtLink>
  </div>
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
  async created() {
    this.member = await fetch(
      `https://api.github.com/users/${this.id}`
    ).then((res) => res.json())
  }
})
</script>
