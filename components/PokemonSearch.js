app.component('pokemon-search', {
    
    template:
    /*html*/
    `
    <div class="search">
        <h1>Search pokemons of the first generation</h1>
        <input type="search" class="searchtext" placeholder="Name or ID" v-model="search" />
        <button type="button" class="searchbutton" @click="searchPokemon()">OK</button>
    </div>
    `,

    methods:{
        searchPokemon(){
            console.log(this.search)
            this.$emit("s-poke", this.search);

        }    

    },

    data(){
        return{
            search:""
        }
    }



})