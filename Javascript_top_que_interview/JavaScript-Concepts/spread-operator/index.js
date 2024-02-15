// function sum(name,...args){ // Rest Operator

// }

// sum("Tanu",20,30,40)

// let arr = [20,30,40]

// sum("Tanu",arr); // 

// sum("tanu",...arr) 

// Spread operator introduce in ES6
// spread operator always uses at the calling time


function sum(name,...args){
    console.log(arguments)

    

    let sum=0;
    for(let i in args){
        sum += args[i]
    }

  
}

var arr = [10,20,30]

sum("tanu",arr)
sum("tanu1",[...arr])

/*
[Arguments] { '0': 'tanu', '1': [ 10, 20, 30 ] }
[Arguments] { '0': 'tanu1', '1': 10, '2': 20, '3': 30 }

*/