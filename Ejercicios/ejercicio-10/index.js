import * as matematicas from './controller.js'
import chalk from 'chalk';

const mul = matematicas.multiplicacion(2, 1);
console.log(mul)

const sum = matematicas.suma(4, 5);
console.log(chalk.green(sum));