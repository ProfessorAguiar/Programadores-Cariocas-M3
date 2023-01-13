import Button from 'react-bootstrap/Button';
function Botao({texto,cor}){
  const corBtn= cor
  const textoBtn= texto
  return(
    <>
    <style type="text/css">
        {`
    .btn-laranja {
      background-color: orange;
      color: black;
    }
    .btn-amarelo {
      background-color: yellow;
      color: black;
    }
    .btn-purple {
      background-color: purple;
      color: white;
    }
    `}
    </style>
    <Button variant={corBtn} 
    onClick={((e) =>{ 
          if(textoBtn === 'preto'){
            document.body.style.backgroundColor = 'black'
          }else if(textoBtn === 'branco'){
            document.body.style.backgroundColor = 'white'
          }else if(textoBtn === 'azul'){
            document.body.style.backgroundColor = 'blue'
          }else if(textoBtn === 'cinza'){
            document.body.style.backgroundColor = 'grey'
          }else if(textoBtn === 'verde'){
            document.body.style.backgroundColor = 'green'
          }else if(textoBtn === 'amarelo'){
            document.body.style.backgroundColor = 'yellow'
          }else if(textoBtn === 'roxo'){
            document.body.style.backgroundColor = 'purple'
          }else if(textoBtn === 'laranja'){
            document.body.style.backgroundColor = 'orange'
          }else if(textoBtn === 'azul claro'){
            document.body.style.backgroundColor = 'aqua'
          }else if(textoBtn === 'vermelho'){
            document.body.style.backgroundColor = 'red'
          }else{
            document.body.style.backgroundColor = 'white'
          }
        })} 
          >{textoBtn}</Button>
    </>
  )
}
export default Botao