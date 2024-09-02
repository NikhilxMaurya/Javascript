// Primitive datatypes :
const num = 30 //Number
const username = "Nikhil" //String
const isLoggedin = true //Boolean
const temp = null //null
let useremail; //undefined
const id = Symbol('123')
const anotherid = Symbol('123') //Symbol
console.log(id === anotherid); 
const bigNumber = 123456473372263n //Bigint

// Non - Primitive(Reference)
const cars = ["BMW" , "Audi", "Tata"] //Array
let myobj = {
    Name : "Nikhil",
    age : 20
} //Objects(in key-value pairs inside curlybraces)
const myfunction = function(){
    console.log("Hello world");
    
} //function