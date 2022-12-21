// const Red = "\x1b[31m";
// const Green = "\x1b[32m";

// console.log(Green, "Ocorreu tudo certo!");
// console.log(Red, "Ocorreu um erro tente novamente!");

const chalk=require('chalk')
console.log(chalk.blue('Olá') + ' Mundo' + chalk.red(' Colorido'));