
function generaexcusa() {
    //declaracion de arrays
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    //declaracion indices aleatorios
    let indice1 = Math.floor(Math.random() * who.length);
    let indice2 = Math.floor(Math.random() * action.length);
    let indice3 = Math.floor(Math.random() * what.length);
    let indice4 = Math.floor(Math.random() * when.length);

      document.write(who[indice1] + " "+action[indice2] + " "+what[indice3] + " "+when[indice4] );


}

generaexcusa();

