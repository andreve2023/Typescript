const sinFin = () => {
    while (true){
        console.log("nunca pares de aprender")
    }
}

const fail = (message: string) => {
    throw new Error(message)
}

const example = (input:unknown) => {
    if (typeof input === 'string'){
        return "es un string"
    }else if(Array.isArray(input)){
        return "es un array"
    }
    return fail("no hizo match")
}

console.log(example("hola"))
console.log(example([1,2,3,4]))
console.log(example(1234))
console.log("hola despues del fail")