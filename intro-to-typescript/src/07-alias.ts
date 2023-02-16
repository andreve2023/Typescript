(() => {
    //let userId: string | number;
    type UserId = string | number;

    let userId: UserId

    function gretting(myText:UserId) {
        if (typeof myText === 'string'){
            myText.toLowerCase()
        }
    }

    gretting(5)
    gretting("hola")

    //LITERAL TYPES
    type ShirtSize = 'S'|'M'|'L';
    let shirtSize: ShirtSize;
    shirtSize = 'M'
    shirtSize = 'L'
    shirtSize = 'S'
    //shirtSize = "dfsdfsd"❌
    function gretting(myText:UserId, size:ShirtSize) {
        if (typeof myText === 'string'){
            myText.toLowerCase()
        }
    }
    gretting(1122, 'M');
})