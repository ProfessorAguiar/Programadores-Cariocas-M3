import chalk from 'chalk';
/* EXERCICIO 1 */
const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel']

const [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7]=alunos

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)
console.log(aluno6)
console.log(aluno7)

/* EXERCICIO 2 */
const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia']
const [disciplina1,disciplina2,,disciplina4,disciplina5]=disciplinas
console.log(disciplina1,disciplina2,disciplina4,disciplina5)
/* EXERCICIO 3 */
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca',
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}
const {nome,idade,endereco:{logradouro,numero,bairro,cidade},assinanteDesde}=dadosCliente
console.log(nome,idade,logradouro,numero,bairro,cidade,assinanteDesde)
/* EXERCICIO 4 */
const vestimenta = {
    camisa: {
        listrada: true,
        corCamisa: 'Vermelha e branca',
        colecaoCamisa: 'Outono/Inverno 2019'
    },
    calca: {
        corCalca: 'Azul escuro',
        colecaoCalca: 'Primavera/Verão 2021'
    }
}
const {camisa:{listrada,corCamisa,colecaoCamisa},calca:{corCalca,colecaoCalca}}=vestimenta
console.log(listrada,corCamisa,colecaoCamisa,corCalca,colecaoCalca)
/* EXERCICIO 5 - IF/ELSE/ELSE IF */
/*
Você irá escrever uma condicional que avaliará um saldo de conta e retornará um texto:
SE o saldo for 0 irá exibir 'Não há saldo disponível'
SE o saldo estiver abaixo de 0 irá exibir 'Possivelmente no cheque especial'
SE o saldo for maior que zero, irá exibir o saldo formatado em reais
*/

function avaliaSaldo(saldo) {
    if(saldo===0){
        console.log('Não há saldo disponível')
    }else if(saldo<0){
        console.log('Possivelmente no cheque especial')
    }else{
        console.log(`R$ ${saldo.toFixed(2)}`)
    }
}
avaliaSaldo(-10) // teste a saída passando-a como argumento


/* EXERCICIO 6 - SWITCH/CASE */
/*
Você irá escrever uma condicional que avaliará um texto e retornará um hexadecimal:
SE for 'vermelho' exibirá '#e81c0e'
SE for 'amarelo' exibirá '#eef211'
SE for 'roxo' exibirá '#b322e3'
SE não vier texto válido, exibirá a cor branca '#fff'
*/

function retornaCor(cor) {
    const vermelho=chalk.hex('#e81c0e')
    const amarelo=chalk.hex('#eef211')
    const roxo=chalk.hex('#b322e3')
    const branco=chalk.hex('#fff')
    switch(cor){
        case 'vermelho': console.log(vermelho(cor))
        break
        case 'amarelo': console.log(amarelo(cor))
        break
        case 'roxo': console.log(roxo(cor))
        break
        default: console.log(branco(cor))
        break
    }
}

retornaCor('vermelho') // teste a saída passando-a como argumento

/* EXERCICIO 7 - Object Literal */
/*
Você irá escrever uma condicional que avaliará o produto e definirá uma seção para o mesmo:
Deverá ser criado um objeto chamado secoes
SE for 'cadeira' retornará 'móveis'
SE for 'lápis' retornará 'material escolar'
SE for 'fone de ouvido' retornará 'acessórios eletrônicos'
SE for 'camisa' retornará 'vestuário'
*/


