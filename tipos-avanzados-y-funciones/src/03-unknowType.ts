let anyVar: any

anyVar = "hola"
anyVar = 5
anyVar = null
anyVar = undefined
anyVar = {}

let isNew: boolean = anyVar

anyVar.doSomething()

let unknowVar: unknown

unknowVar = "hola"
unknowVar = 5
unknowVar = null
unknowVar = undefined
unknowVar = {}
//let isNew2: boolean = unknowVar

//Me oblogiga a  verificar el tipo de valor
if (typeof unknowVar === 'boolean'){
    let isNew2: boolean = unknowVar
}

