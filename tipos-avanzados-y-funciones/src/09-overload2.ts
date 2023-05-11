//sobre carga de metodos
function parseStr(input: string):string[] ;
function parseStr(input: string[]):string ;

export function parseStr(input:string | string[]):string|string[] {
    if (Array.isArray(input)){
        return input.join('')
    }else {
        return input.split('')
    }
}

const rta = parseStr("andres")
rta.reverse()
console.log(rta)
console.log(parseStr("Andres"))
console.log(parseStr(['A', 'n', 'd', 'r', 'e', 's']))