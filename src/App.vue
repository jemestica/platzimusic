<template>
  <div id="app">
    <img src="https://jemestica.github.io/platzimusic/dist/logo.png">
    <h1> PlatziMusic</h1>
    <select v-model="selectedCountry">
      <country v-for="country in countries" :country=country :key="country.alpha2Code">{{ country.name }}</country>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid">
        {{ artist.name }}
      </artist>
    </ul>
  </div>
  
</template>

<script>
import Artist from './components/Artist.vue'
import Country from './components/Country.vue'
import Spinner from './components/Spinner.vue'
import { getCountries, getArtists } from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Country,
    Spinner
  },
  methods: {
    refershArtists() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
      })
    }
  },
  mounted: function () {
      const self = this
      getCountries()
        .then(function (countries) {
        self.countries = countries
      })    
    this.refershArtists()
  },
  watch: {
    selectedCountry() {
      this.refershArtists()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
