'use strict';

const fs = require("fs");
const _ = require('lodash')

let fileData;
let forwardArr = [];
let AIM = 0;
let depth = 0;

fs.readFile('/home/besim/code/adventOfCode/day2/data.txt', (error, data) => {
    if(error) {
        throw error;
    }
    let instructions = data.toString().split('\n');
    _.each(instructions, function(instruct){
        if(instruct.startsWith('forward')){
            forwardArr.push(Number(instruct.charAt(instruct.length-1)));
            if(AIM !== 0) {
                depth = depth + (Number(instruct.charAt(instruct.length-1)) * AIM);
            }
        }
        if(instruct.startsWith('up')) {
            AIM = AIM - Number(instruct.charAt(instruct.length-1));
        }
        if(instruct.startsWith('down')) {
            AIM = AIM + Number(instruct.charAt(instruct.length-1));
        }
    })
    const result = _.sum(forwardArr) * depth;
    console.log(result);
});




