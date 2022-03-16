'use strict';

const fs = require("fs");
const _ = require('lodash')

let gammaRate = '';
let zero = 0;
let one = 1;

fs.readFile('/home/besim/code/adventOfCode/day3/data.txt', (error, data) => {
    if(error) {
        throw error;
    }

    let bitArray = data.toString().split('\n');
    let counter = 0;
    _.each(bitArray, function(bits) {
        if(bits[counter] === '0') {
            console.log('zero plus');
            zero++
        }
        if(bits[counter] === '1') {
            console.log('one plus');
            one++;
        }
        counter++
        if(counter === bitArray.length) {
            if(zero > one) {
                gammaRate = gammaRate+ '0'
                return
            }
            if(one > zero) {
                gammaRate = gammaRate+ '1'
            }
        }
    })
    console.log(gammaRate);

    
});




