/* console.log("dfsdfd")
let age =10;
if (age>10)
console.log("a");
else if(age>=10&& age<20)
{console.log("b")};
else if(age>=20&& age<30)
{console.log("c")}
else {console.log("d")} */

// function add2numbers(a,b){
//      var c=a+b;
//      return c;
// }
// console.log(add2numbers(3,5))

//

// function letterFinder(word, match){
//     console.log("gfsgs")
//     let arr=word.split("");
//     for (var i=0;i<arr.length;i++){
//         if (arr[i]==match){console.log("found the ",match,"at",i)}
//         else {console.log("no match found")}
//     }
// }
// letterFinder("test","t");

// var string1="abcd";
// var string2='dfgg'
// console.log(string1.concat("fsgdgfdgsdgfsdfg"))

// var randomnum=Math.random()*10;
// console.log(randomnum)
// console.log(Math.ceil(randomnum))
// console.log(Math.floor(randomnum))

/* var object1={name:"AudioNode", lastname:"dfdsfd",3423434:42344}
object1.newkey="fdfdffd";
object1["key no 2"]=4234342;
console.log(object1) */



//ERROR HANDLING
/* try
{console.log(a+b);}

catch(err){}
//{console.log(typeof(err))}
console.log("line no 1") */

/* string='abcd';
console.log(string.match(/b/)) */

/* function add2numbers(a,b){
    //  var c=a+b;
     try
   { console.log(a+b);}
   catch (err){
    console.log(err)
   }
    // console.log(typeof(c))
}
// console.log(add2numbers(3,5))
add2numbers(5,'5') */

/* function add2numbers(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("a is not number");
    } else if (typeof b != "number") {
      throw new ReferenceError("b is not number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}

add2numbers(5, "6");
console.log("end of line");
 */

// var str = "Hello";
// str.match("jello");

/* let a=[2,3,4]

let b=[5,...a]

console.log(b) */

// function add(...a){

// }

// function add(a,b){
//     console.log(a+b)
// }
// function second(callback){

//     console.log ("calling a callback")
//     callback();

// }

// second(add(2,4));
/**MOCK ON 12 SEPTEMBER 22 JS  MEDIUM LEVEL */
// let str='aabbdddca' 
// let arr=str.split('')
// console.log(arr)
// var obj={}
// var n=0;
// for (var i=0;i<arr.length;i++){
//     if(arr[i]){
//         obj[arr[i]]=n++;
//     }
// }
// console.log(obj)
/* function letterFinder(word, match) {

    let condition1=(typeof(word) == 'string' && word.length >= 2)
    let condition2=(typeof(match) == 'string' && match.length == 1)
    if(condition1 && condition2)
   { for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }}
    else {
        console.log("enter correct inputs!")
    }
}
letterFinder(345, "ce") */


//   add(3, "4");​
 /*  function add2numbers(a,b){
     var c=a+b;
     return c;
}
console.log(add2numbers(3,5)) */



 /* function add(a,b) {
     // console.log(a+b);​
       console.log(a+b);
       //ABOVE COMENT OUT LINE IS NOT WORKING BUT ??
      }
      
    add(2,5) */

   /*  var str = "Hello";
console.log(str.match("el"))
 */
try {
    Number(5).toPrecision(10)
    console.log('dafsdfd')
    } catch(e) {
        console.log(e)
    console.log("There was an error")
    }
