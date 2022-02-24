app.component('pokemon-display', {
    template:
    /*html*/
    `
    <pokemon-search @s-poke="sPokemon"></pokemon-search>
    <pokemon-details :result="result" :isShown="isShown"></pokemon-details>

    <div class="pokemondisplay">
        <ul> 
        <a href="#haut">
            <li class="pokeall" v-for="pokemon in pokemons" v-on:click="getpokemon(GetIndice(pokemon))" :key="pokemon.url">  
                <p class="pokename">#{{GetIndice(pokemon)}} {{pokemon.name}}</p>
                <img class="pokeimage" v-bind:src="getImage(GetIndice(pokemon))">
            </li>
            </a>
        </ul>
    </div>

    `, 
    methods:{
        GetIndice(pokemon){
        return this.pokemons.indexOf(pokemon) + 1
        },

        getImage(indice){
            console.log()
            mystring="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+indice+".svg";
            return mystring
        },

        async getpokemon(indice){
            await axios.get('https://pokeapi.co/api/v2/pokemon/'+indice+'/')
            .then(response=>this.result=(response.data))
            this.isShown=true
        },

        closeinfos(){
            this.isShown=false
        },

        sPokemon(search){
            console.log(search)
            this.getpokemon(search)
        }
    },
    data(){
        return{
            pokemons:[{}],
            result:[{}],
            isShown:false,
        } 
    },       
    mounted () {
         axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then(response => this.pokemons=(response.data.results))
    }
 })