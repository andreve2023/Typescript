import faker from '@faker-js/faker';
import {addProduct, findsProducts, products, updateProduct} from './products/product.service';


for (let i = 0; i < 50 ; i++) {
    addProduct({
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        color: faker.commerce.color(),
        size: faker.random.arrayElements(['S','M','L','XL']),
        price: parseInt(faker.commerce.price()),
        title: faker.commerce.productName(),
        stock: faker.datatype.number(),
        isNew: faker.datatype.boolean(),
        tags: faker.random.arrayElements(),
        categoryId: 'sdasdasd'
    })
    // addProduct({
    //     id: faker.datatype.uuid(),
    //     image: faker.image.imageUrl(),
    //     description: faker.commerce.productDescription(),
    //     color: faker.commerce.color(),
    //     size: faker.random.arrayElements(['S','M','L','XL']),
    //     price: parseInt(faker.commerce.price()),
    //     title: faker.commerce.productName(),
    //     creadAt: faker.date.recent(),
    //     updateAt: faker.date.recent(),
    //     stock: faker.datatype.number(),
    //     isNew: faker.datatype.boolean(),
    //     category: {
    //         id: faker.datatype.uuid(),
    //         name: faker.commerce.department(),
    //         creadAt: faker.date.recent(),
    //         updateAt: faker.date.recent(),
    //     },
    //     tags: faker.random.arrayElements()
    // })
}
const product = products[0]
updateProduct(product.id, {
    title: 'new title',
    stock: 40
})

findsProducts({
    stock: 10,
    color: 'red'
})

