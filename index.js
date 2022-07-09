function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

// function wrapAdjective(compliment){
//     const '*' = "a hard worker"
//     const '||' = "a dedicated programmer"
//     return `You are ${compliment}`
// }

function wrapAdjective(compliment="*"){
    return function(comp2="special"){
        return `You are ${compliment}${comp2}${compliment}!`
    }
}