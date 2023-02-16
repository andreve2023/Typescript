(() => {
    const calcTotal = (price:number[]):number=> {
        let total = 0;
        price.forEach((price) => {
            total += price
        })

        return total
    }

    const rta = calcTotal([1, 2,3,5])

    function v2(price:number[]):number {
        let total = 0;
        price.forEach((price) => {
            total += price
        })

        return total
    }
    v2([1, 2,3,5])
    const v3 = (price:number[]):void => {
        const rta = calcTotal(price)
        console.log(rta)
    }
    v3([1, 2,3,5])

})