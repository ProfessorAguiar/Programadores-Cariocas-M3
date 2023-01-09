const frutas=['banana','uva']
const [fruta1,fruta2]=frutas
console.log(typeof fruta1)
console.log(fruta2)
console.log(frutas)
const Cliente={
  nome:'Vinicius',
  sobrenome:'Aguiar'
}
const {nome, sobrenome}=Cliente
console.log(nome)
console.log(sobrenome)
const disciplina={
  arrayProp:[
    'JavaScript',
    {Framework:'React'}
  ]
}
let {arrayProp:[primeiro, segundo]}=disciplina
console.log(primeiro)
console.log(segundo)
segundo=segundo.Framework
console.log(segundo)