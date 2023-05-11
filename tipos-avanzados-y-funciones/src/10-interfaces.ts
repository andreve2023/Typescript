// type Sizes = 'S' |'M' | 'L' | 'XL'
//No se pude extender
// type Product = {
//     id: string | number,
//     title: string,
//     creadAt: string,
//     stock: number,
//     size: Sizes
// }

//se puede extender
// interface Product  {
//     id: string | number,
//     title: string,
//     creadAt: string,
//     stock: number,
//     size: Sizes
// }

// const products: Product[] = []
//
// products.push({
//     id: 1,
//     title: 'product 1',
//     creadAt: '19-08-2022',
//     stock: 5,
//     size: 'M'
// })
//
// const addProduct = (data: Product) => {
//     products.push(data)
// }