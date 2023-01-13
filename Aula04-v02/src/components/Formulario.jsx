import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Formulario.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario(){
  return(
    <div className='container-sm'>
        <h4>Formulário - React+bootstrap</h4>
      <div className='entrada'>
      <FloatingLabel controlId="floatingInput" label="nome">
        <Form.Control type="text" id='nome'/>
      </FloatingLabel>
      </div>
      <div className='entrada'>
      <FloatingLabel
        controlId="floatingInput"
        label="email"
      >
        <Form.Control type="email" id='email'/>
      </FloatingLabel>
      </div>
      <div className='entrada'>
      <FloatingLabel controlId="floatingInput" label="mensagem">
        <Form.Control as="textarea" rows={5} id='mensagem'/>
      </FloatingLabel>
      </div>
    </div>
  )
}
export default Formulario