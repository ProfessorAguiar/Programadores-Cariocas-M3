import styles from './Form.module.css'
function Form() {
  return (
    <form className={styles.form}>
      <label htmlFor="nome">nome: </label>
      <input type="text" id="nome" />
      <label htmlFor="email">email: </label>
      <input type="email" id="email" />
      <label htmlFor="mensagem">mensagem: </label>
      <textarea id="mensagem" />
      <input type="submit" value="enviar" className='styles.bt'/>
    </form>
  )
}

export default Form