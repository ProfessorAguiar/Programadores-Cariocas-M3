const fetch=require('node-fetch')
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((result)=>{
  result.json().then((JsonData) => console.log(JsonData));
})
.catch((erro)=>{
  console.log(erro)
})