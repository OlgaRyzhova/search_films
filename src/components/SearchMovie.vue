<template>
    <div class="movies">
        <h1>Movie search</h1>
        <input v-model="findMovie" type="text" name="movieName" id="search" placeholder="Type movie name">
        <button @click="searchMovieList">Search</button>
        <br>

        <label>
        movie
        <input type="radio" name="type" value="movie" id="" checked>
        </label>

        <label>
        series
        <input type="radio" name="type" value="series" id="">
        </label>

        <label>
        episode
        <input type="radio" name="type" value="episode" id="">
        </label>

        <router-link :to="`/movie/${movie.imdbID}`" v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster" :alt="movie.Title">
        <h2>{{ movie.Title }}</h2>
        </router-link>

    </div>
</template>

<script>

const URL = 'http://www.omdbapi.com/?apikey=a5a387ab&s=Man';

export default {
    name: "SearchMovie",
    props: {
        msg: String
    },
    data () {
        return {
            movies: [],
            findMovie: '',
        }
    },
    async mounted() {
        this.searchMovieList()
    },
    methods: {
        async searchMovieList() {
        const res = await fetch(URL + this.findMovie);
        const movies = await res.json();
        this.movies = movies.Search;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin-top: 40px;
        font-family: 'Roboto';
        font-size: 40px;
    }

    input {
        margin-right: 10px;
        margin-bottom: 40px;
        padding: 3px 10px;
    }

    button{
        background-color: grey;
        border: none;
        border-radius: 3px;
        color: white;
        padding: 4px 10px;
    }

    label{
        font-family: 'Roboto';
    }
</style>
