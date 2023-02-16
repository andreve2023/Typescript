(() => {
    type size = 'M'|'S'|'L';
    function createProductToJson(title:string, createAt: Date, stock:number, size:size) {
        return {
            title,
            createAt,
            stock,
            size
        }
    }
    const product1 = createProductToJson('P1', new Date, 12, 'M');
    console.log(product1)

    const createProductToJsonV2 = (title:string, createAt: Date, stock:number, size?:size) => {
        return {
            title,
            createAt,
            stock,
            size
        }
    }
})