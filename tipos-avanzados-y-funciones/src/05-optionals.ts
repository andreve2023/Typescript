//export const createProduct = (id:string | number, stock?:number, isNew: boolean)
//? quiere decir que le puedes pasar un parametro opcional
export const createProduct = (id:string | number, isNew: boolean,stock?:number) => {
    return {
        id,
        isNew,
        stock: stock ?? 10,
    }
}
const product1 = createProduct(1, true, 2)
const product2 = createProduct(1, true)
const product3 = createProduct(1, false, 0)
console.log(product1)
console.log(product2)
console.log(product3)



