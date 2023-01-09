export function calculaMedia(notas){
  let total=notas.reduce((acc,atual)=>{
    return acc+atual
  })
  return total/ notas.length
}