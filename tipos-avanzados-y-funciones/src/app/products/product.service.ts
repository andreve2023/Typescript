import {Product} from './product.model';
import {CreateProductDto, UpdateProduct, FindProductDto} from "./productDto";
import faker from "@faker-js/faker";
export const products: Product[] = []

export const addProduct = (data: CreateProductDto):Product => {
    const newProdduct = {
        ...data,
        id: faker.datatype.uuid(),
        creadAt: faker.date.recent(),
        updateAt: faker.date.recent(),
        category: {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            creadAt: faker.date.recent(),
            updateAt: faker.date.recent(),
        }
    }
    products.push(newProdduct)

    return newProdduct
}
export const updateProduct = (id: string | number, changes: UpdateProduct):Product => {
    //code
    const index = products.findIndex(item => item.id === id)
    const prevData = products[index]
    products[index] = <Product>{
        ...prevData,
        ...changes
    }
    return products[index]
}

export const findsProducts = (dto: FindProductDto): Product[] => {
    return products
}