(() => {
    //union-types da la posibilidad de decirle a  una variable que tipos puede ser
    let userId: string | number;

    userId = 1;
    userId = "asdada"

    function gretting(myText:number| string) {
        if (typeof myText === 'string'){
            myText.toLowerCase()
        }else {
            myText.toFixed()
        }
    }

    gretting(5)
    gretting("hola")
})