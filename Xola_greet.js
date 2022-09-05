import chalk from 'chalk';
//import greet module that is in current folder
import greet from './greet.js'
const styledMessage = chalk.bgGreen.black(greet('Xola'))
console.log(styledMessage)

import fun from 'everyday-fun'
import figlet from 'figlet'
figlet('The Riddler', function(err, data){
    console.log(data)
    const teaser = fun.getRandomRiddle()
console.log(chalk.black.bgCyan(teaser.riddle))
setTimeout (function(){
    console.log(chalk.gray.bgGreen(teaser.answer));
}, 5000)
})