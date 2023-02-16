( () => {
    // let myNumber:number;
    // let myString:string;
    //
    // myNumber = undefined ❌
    // myString = null ❌

    let myNull: null = null
    let myUndefined:undefined = undefined

    // function hi(name:string|null) {
    //     let  hello = 'hola';
    //     if (name) {
    //         hello += name
    //     }else {
    //         hello+="otro hola"
    //     }
    // }
    function hiV2(name:string|null) {
        let  hello = 'hola';
        hello += name?.toLowerCase() || 'otro hola'
        console.log(hello)
    }

})