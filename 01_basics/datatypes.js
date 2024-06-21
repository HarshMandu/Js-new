// "use strict";
 
// let name="HARSH"
// let age=22

// let score="33abc"

// console.log(typeof(score));

// let valueInNumber=Number(score)
// console.log(typeof(valueInNumber));

//**********************OPERATIONS*************************

// console.log("2"===2);

//Primitive

//  7 types:STRING, NUMBER, BOOLEAN, NULL , UNDEFINED, SYMBOL

// const score =  100
// const scoreValue=100.3

// const isLoggedIn =false


// REFERENCE

//ARRAY,OBJECTS,FUNCTIONS

// const heros=["shaktiman","naagraj","doga"]
// let obj={
//     name:"harsh",
//     age=23,
// }

// const myFunction=function(){
//     console.log("hello world")

// }

// //**********************************************

// // STACK (PRIMITVE , HEAP(non-Primitive)

// let myName="HARSH MANDVIYA"

// let anothername= myName

// console.log(anothername);

// let user={
//     email:"harsh@gmail.com"
   
// }

// let userTwo=user
// userTwo.email="dhruvi@gmail.com"

// console.log(user.email);
// console.log(userTwo.email);

// const name="harsh"
// const repoCount=50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const url ="https:/harsh.com/harsh%20mandviya"

// console.log(url.replace('%20','-'))

// console.log(url.includes('sundar'))

// const score=400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toString);

// const otherNumber=123.8677

// console.log(otherNumber.toPrecision(4));

// const hundreds =10000000
// console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++MATHS+++++++++++++++++++++++++==

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.7))
// console.log((Math.random())*10);

// const min=10
// const max=20

// console.log(Math.floor(Math.random() * (max-min+1))+min)


//++++++++++++++++++++DATES AND TIME+++++++++++++++++++++++++//

// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// let myCreatedDate= new Date("01-14-2023")
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// let NewDate = new Date()
// console.log(NewDate)
// console.log(NewDate.getMonth()+1)

// //++++++++++++++++++++++++++++ARRAY++++++++++++++++++++++++

//  const myArray=[0,1,2,3,4,5]
//  console.log(myArray[0])
// const myn1=myArray.splice(1,3)
// console.log(myn1)
// console.log("C",myArray)

// const marvel_heros=["tohr","antman","ironman"]
// const dc_heros=["superman","flash"]

// const all_heros=[...marvel_heros,...dc_heros]

// console.log(all_heros)

// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_array=another_array.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("HARSH"))
// console.log(Array.from("HARSH MANDVIYA"))
// console.log(Array.from({name:"harsh"})) //intersting concept

// let score1 =100
// let socre2 =200
// let score3 =300

// console.log(Array.of(score1,score3,socre2))


//****************************************//

//singleton

//object litera

// const mysym=Symbol("key 1")

// const JsUser={
//     name:"HARSH",
//     location:"Miraroad",
//     [mysym]:"key1",
//     email:"harshmandu@gmail.com",
// }

// console.log(JsUser["email"])
// console.log(JsUser[mysym])
// console.log(typeof(JsUser[mysym]))
// // Object.freeze(JsUser)

// JsUser.greeting=function(){
//     console.log(`HELLO JS USER, ${this.name}`);
// }

// console.log(JsUser.greeting());

const tinderUser=new Object()

tinderUser.id="113abc"
tinderUser.name="harshu"
tinderUser.isLoggedIn=false
console.log(tinderUser);

// const obj1={1:"a",2:"b"}
// const obj2={3:"e",4:"r"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

 







