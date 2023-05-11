function parseStr(input:string | string[]):string|string[] {
    if (Array.isArray(input)){
        return input.join('')
    }else {
        return input.split('')
    }
}

console.log(parseStr("Andres"))
console.log(parseStr(['A', 'n', 'd', 'r', 'e', 's']))
