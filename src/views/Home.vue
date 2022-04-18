<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <h1>Berita Terkini</h1>
    <div class="container">
      <div v-for="item in berita" id="article" :key="item.title">
        <router-link
          :to="{ name: 'Description', params: { id: item.source.name } }"
          tag="button"
        >
          <div class="item">
            <div class="container2">
              <div class="image">
                <img :src="item.urlToImage" alt="" />
              </div>
              <div class="content">
                <span class="author">{{ item.author }}</span>
                <h4>{{ item.title }}</h4>
                <span class="published">{{ item.publishedAt }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      berita: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-03-11&sortBy=publishedAt&apiKey=b0add871ad124200989a58f18fb4e036"
      )
      .then((response) => {
        this.berita = response.data.articles;
      });
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

button {
  width: 100%;
  border: none;
  background-color: #e3eee8;
  margin: 10px;
}

#article {
  width: 50%;
  display: flex;
  border-radius: 4px;
}

.item {
  display: flex;
  border-radius: 4px;
}
.container2 {
  display: flex;
  flex-direction: row;
  background-color: #e3eee8;
  min-height: 150px;
  cursor: pointer;
  width: 100%;
}
.image {
  display: flex;
  align-items: center;
  width: 200px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-block: auto;
}
.content {
  text-align: left;
  padding: 20px;
}
.author {
  font-size: small;
  font-weight: 600;
}
.published {
  font-size: small;
}
</style>