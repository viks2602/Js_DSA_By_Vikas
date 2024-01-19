//Array Sorting 
let data = [2,99,32,1,9,44];
for(let i=0; i<data.length; i++){
  for(let j=0; j<data.length; j++){
    if(data[j] > data[j+1]){
      let temp = data[j];
      data[j]=data[j+1];
      data[j+1]=temp;
    }
  }
}
console.log(data,"sorting array using for loop");

// data.sort() /* inbuilt js method for sorting array */

//Array Searching 
let arr = [3,88,55,22,9];
let serchEl=88;
for(let i=0; i<arr.length ;i++){
  if(arr[i] == serchEl){
    console.log(i,"search element position in array using for loop");
  }
}

/* console.log(arr.indexOf(88)); */ /* inbuilt method for searching  */


//Array mearge
let d1=[3,4,5,6];
let d2=[0,9,8,7];
let d3=[];

for(let i=0; i<d1.length ; i++){
  d3[i]=d1[i];
}
for(let i=0; i < d2.length ; i++){
  d3[d1.length+i]=d2[i];
}

console.log(d3,"merged array using for loop");

/* console.log(d3=[...d1,...d2],"merge") inbuilt operator to merge arrays */


//merge array using while loop 
// if we use while loop to mergeing arrays we need to sorted arrays it only works on sorted arrays
let a1=[1,2,3,4,5];
let a2=[6,7,8,9];
let a3=[];
let ai1=0;
let ai2=0;
let ai3=0;

while(ai1 < a1.length && ai2 < a2.length ){
  if(a1[ai1] < a1[ai2]){
    a3[ai3]=a1[ai1];
    ai1++
  } else {
    a3[ai3] = a2[ai2];
    ai2++
  }
  ai3++
}
while(ai1 < a1.length){
  a3[ai3]=a1[ai1];
  ai1++;
  ai3++
}

console.log(a3, "merged array using while loop");



//insert in array 
let ar=[3,2,9,5,8];
let newEl=88;
let position =3;
for(let i = ar.length - 1; i > 0; i--){
  if(i>=position){
    ar[i+1]=ar[i];
    if(i == position){
      ar[i]=newEl;
    }
  }
}

console.log(ar,"insert in array");
let newArr = ar.splice(1,0,333);  /* default method insert element in array */

console.log(ar,"default method insert element in array")


//delete value from array 

let delArr = [2,4,3,5,6,1];
let delposition = 1;
for(let i = delposition ; i<delArr.length ; i++){
    delArr[i] = delArr[i+1];
}
delArr.length = delArr.length-1;
console.log(delArr,"delete from Array");


//Using above we'll learn Array data structure in javascript 