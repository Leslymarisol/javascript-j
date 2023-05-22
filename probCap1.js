dineroLuis = prompt("¿Cuánto dinero tiene Luis?");
dineroRoberto = prompt("¿Cuánto dinero tiene Roberto?");
dineroPedro = prompt("¿Cuánto dinero tiene Pedro?");


if(dineroLuis >= 0.60 && dineroLuis<1){
alert("Puedes comprar un helado de agua");
dineroLuis = parseInt(dineroLuis);
alert("Te sobran "+ (dineroLuis - 0.60));
}

/*
else if (dineroLuis >= 1 && dineroLuis<1.6 ){
    alert("Puedes comprar un helado de crema");
}

else if (dineroLuis >= 1.6 && dineroLuis<1.7 ){
    alert("Puedes comprar un helado de chocolate");
}
else if (dineroLuis >= 1.7 && dineroLuis<1.8 ){
    alert("Puedes comprar un helado de naranja");
}
else if (dineroLuis >= 1.8 && dineroLuis<2.9 ){
    alert("Puedes comprar un helado de pistacho");
}

else if (dineroLuis >= 2.9 ){
    alert("Puedes comprar un helado con frutas");
} else {
    alert("No te alcanza para ningún helado");
}*/