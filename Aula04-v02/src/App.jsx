import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';
import Botao from './components/Botao';
import BarraDeNavegacao from './components/BarraDeNavegacao'
import './App.css'
import BtnUseState from './components/BtnUseState';
import PokeApi from './components/PokeApi';
import Tarefa from './components/Tarefa';
import imagemjs from './imagemjs.jpg'
function App() {
  return (
    <div>
      <BarraDeNavegacao></BarraDeNavegacao>
      <img src={imagemjs} width="100%"></img>
      <Formulario></Formulario>
      <div className='container-sm'>
        <Botao texto='enviar' cor='primary'></Botao>
        <br/>
        <br/>
        <Botao texto='preto' cor='dark' id='p'></Botao>
        <Botao texto='branco' cor='light'></Botao>
        <Botao texto='azul' cor='primary'></Botao>
        <Botao texto='cinza' cor='secondary'></Botao>
        <Botao texto='verde' cor='success'></Botao>
        <Botao texto='amarelo' cor='amarelo'></Botao>
        <Botao texto='roxo' cor='purple'></Botao>
        <Botao texto='laranja' cor='laranja'></Botao>
        <Botao texto='azul claro' cor='info'></Botao>
        <Botao texto='vermelho' cor='danger'></Botao>
        <br/>
        <br/>
        <br/>
        <br/>
        <BtnUseState></BtnUseState>
        <br/>
        <br/>
        <br/>
        <PokeApi></PokeApi>
        <Tarefa titulo='Titulo da Tarefa: '></Tarefa>
      </div> 
    </div>
  )
}

export default App
