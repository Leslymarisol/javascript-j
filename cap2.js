
//Array

/*let fruits = ["apple","orange","grape",5,9];
document.write(fruits[3]);

//Arrays asociativos

let computer = {
    name:"MarisolPC",
    processor: "Intel Core i7",
    ram: "12GB",
    space:"1TB"
};
*/
/*
let computerName = computer["name"];
let computerProcessor = computer["processor"];
let computerRam = computer["ram"];
let computerSpace = computer["space"]; 

let details = `My computer's name is: ${computerName} <br>
                its processor is: ${computerProcessor} <br>
                its memory RAM is: ${computerRam} <br>
                its HD space is:${computerSpace}`;

document.write(details);



//FOR
for (let i = 0; i < array.length ; i++) {
    const element = array[i];
    
}

//FUNCIONES

function saludar(){
    alert("saludar");
    return "la funcion se ejecuto correctamente"
}

let saludo = saludar();
document.write(saludo);

//Parámetros


function suma(num1, num2){
let res = num1+num2;
return res;
}

let resultado = suma(20,4);
document.write(resultado);


const saludar = function(nombre){
    let frase = `Hi, it's me ${nombre}`
}



//Si solo se usa un parámetro no se pone paréntesis

const saludar = nombre => document.write(frase);


const saludar = (nombre)=>{
    let frase = `Hi, it's me ${nombre}`;
    document.write(frase);
}

saludar("Lesly");


//EXERCISES

let free = false;
const validateCustomer = (time)=>{
    let age = prompt("¿How old are you?");
    if(age>18){

        if(time >= 2 && time <7 && free==false){
            alert(`You can access free because it's ${time}:00Hs`);
            free= true;
        }else{
            alert(`It's ${time}:00Hs You can access but you have to pay`);
        }
    }else{
        alert("You can't access because you are minor");
    }
}

validateCustomer(23);
validateCustomer(13);
validateCustomer(3);
*/

//EXERCISE 2

let quantity = prompt("¿How many students are there?");
let totalStudents = [];

for(i=0; i <quantity; i++){
    totalStudents[i]=[prompt("Student name: "+ (i+1)),0];

}

const takeAssistance = (name, p)=>{
    let attendance = prompt(name);
    if(attendance == "p" || attendance =="P"){
        totalStudents[p][1]++;
    }
}

for(i=0; i<30; i++){
    for(student in totalStudents){
        takeAssistance(totalStudents[student][0],student);
    }

}

for(student in totalStudents){
    let result = `${totalStudents[student][0]}: <br>
    ____________Present: ${totalStudents[student][1]}<br>
    ____________Absence: ${30 - totalStudents[student][1]}
    `;

    if(30 - totalStudents[student][1] > 18){
        result+= "FAILED FOR FAULTS<br>"
    }else{
        result+="<br><br>";
    }
    document.write(result);
}