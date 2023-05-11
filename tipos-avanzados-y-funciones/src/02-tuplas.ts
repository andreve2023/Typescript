const otherPrices:number[] = [1,2,3,4,5]
const prices:(number | string)[] = [1,2,3,4,5]

//Tuplas o array fuertemente tipados
let user: [string, number, boolean]//✔

user = ["andres", 15, true]

const [nombre, numero] = user

console.log(nombre, numero)