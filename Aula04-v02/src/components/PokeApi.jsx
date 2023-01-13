import axios from "axios"
function PokeApi() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((resposta) => {
        //poke=resposta.data.name
        console.log(resposta.data.name)
        })
      .catch((erro) => { console.log(erro) })
  return (
    <p>pokeApi</p>
  )
}
export default PokeApi