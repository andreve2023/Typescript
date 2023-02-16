(() => {
    // any puede ser cualquier de tipo variable
    let dinamyVar: any;
    dinamyVar = 100;
    dinamyVar = "Hola";
    dinamyVar = {}


    dinamyVar = 'hola';
    const rta = (dinamyVar as string).toLowerCase();
    console.log(rta);
    const rta2 = (<number> dinamyVar).toFixed();
    console.log(rta2);
})