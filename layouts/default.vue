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
        <SearchForm />
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
