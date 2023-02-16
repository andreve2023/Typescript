(() => {
    type Product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: ShirtSize
    }
    type ShirtSize = 'S'|'M'|'L';

    //IMPORTANT
    const products: Product[] = []
    const addProduct = (data: Product) => {
        products.push(data)
    }
    addProduct({
        title: 'otro',
        createAt: new Date(),
        stock: 15,
        size: 'M'
    })
    console.log(products)
})