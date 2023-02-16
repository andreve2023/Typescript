import {addProduct, calcStock, products} from './product.service';

addProduct({
    title: 'otro1',
    createAt: new Date(),
    stock: 15,
    size: 'M'
})
addProduct({
    title: 'otro2',
    createAt: new Date(),
    stock: 15,
    size: 'M'
})

console.log(products)

const total = calcStock()
console.log(total)