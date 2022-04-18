<template>
  <v-app id="inspire">
    <v-navigation-drawer
      style="background-color: rgb(211, 190, 203)"
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" style="color: rgb(99, 19, 66)">
            BERITA SAAT INI
          </v-list-item-title>
          <v-list-item-subtitle style="color: rgb(99, 19, 66)">
            berita terkini
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-list-item
        v-for="item in berita"
        id="article"
        :key="item.title"
        style="color: rgb(12, 70, 88)"
        link
      >
        <v-avatar
          class="d-block text-center mx-auto mr-5"
          color="yellow"
          size="40"
        >
          <img :src="item.urlToImage" alt="" />
        </v-avatar>
        <v-list-item-content>
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <br />
    <v-app-bar style="background-color: rgb(211, 190, 203)" app>
      <v-app-bar-nav-icon
        style="color: black"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white"
        >BERITA HARI INI</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <v-card
        elevation="9"
        shaped
        style="width: 50%; margin: auto; margin-bottom: 20px"
        v-for="item in berita"
        id="article"
        :key="item.title"
      >
        <v-img img :src="item.urlToImage" alt=""></v-img>
        <v-card-title> {{ item.title }} </v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  // data: () => ({ drawer: null }),
  data() {
    return {
      berita: [],
      drawer: null,
    };
  },
  mounted() {
    this.$axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-04-14&to=2022-04-14&sortBy=popularity&apiKey=6f7f2269e8ab4459b52c2e97f3b04ac5"
      )
      .then((response) => {
        this.berita = response.data.articles;
      });
  },
};
</script>

<style scoped>
#inspire {
  background-color: rgb(187, 113, 159);
}

.v-navigation-drawer {
  background-color: rgb(156, 70, 127);
  color: rgb(99, 19, 66);
}
.v-list-item-title {
  color: rgb(211, 190, 203);
}
</style>
