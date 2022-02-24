app.component('pokemon-details', {
    template:
    /*html*/
    `
    <div id="moreinfo" class="moreinfos" v-if="isShown">
        <div class="imgdetails">
        <h2 id="pokenamedetails">{{result.name}} #{{result.id}}</h2>
        <img class="pokeimagedetails" v-bind:src="getImage(result.id)">
        </div>
        <div id="details" class="caradetails">    
            <p>Height: {{result.height / 10}} meter(s)</p>
            <p>Weight: {{result.weight / 10}} kilo(s)</p>
            <p> Type(s) :</p>
            <div v-for="type in result.types" :key="type.url">
                <p class="poketype">{{type.type.name}}</p>
            </div> 
        </div>
    </div>
    `,
    props:["result", "isShown"],
    
    methods:{
        getImage(id){
            return this.$parent.getImage(id)
        }
    }
}) 