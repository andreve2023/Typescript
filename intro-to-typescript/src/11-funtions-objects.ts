(() => {
    // const login = (email: string, pass:string) => {
    //     console.log(email, pass)
    // }
    //login("a@gmail.com", "123")
    const login = (data: {email: string, pass: string}) => {
        console.log(data)
    }
    login({
        email: 'a@gmail.com',
        pass: '12345'
    })
    type ShirtSize = 'S'|'M'|'L';

    const products = []
    const addProduct = (data: {
        title: string,
        createAt: Date,
        stock: number,
        size?: ShirtSize
    }) => {
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