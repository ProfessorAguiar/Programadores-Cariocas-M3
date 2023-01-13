import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
function BtnUseState(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  return(
    <div>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Mensagem: {mensagem}</p>
    <Button variant='primary' onClick={() => {
      const nome=document.getElementById('nome').value
      setNome(nome)
      const email=document.getElementById('email').value
      setEmail(email)
      const mensagem=document.getElementById('mensagem').value
      setMensagem(mensagem)
      }}>UseState</Button>
    </div>
  )
}
export default BtnUseState