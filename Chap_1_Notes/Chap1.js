// Example One :

/**
let getTotal = (args) => {
 let result = 0;
 for (let i = 0, len = args.length; i < len; i++) {
  result += args[i];
 }
 return result;
}
console.log(`Output : `, getTotal([2, 2, 3]));

//output = 7;
*/

// Example Two : 
/**
setTimeout(() => {
 console.log(`display after sometime!`);
}, 6000);

// output will be displayed after 6seconds.
*/

// Example Three : 

/**
let getTotal = (args) => {
 let result = 0;
 for (let i = 0, len = args.length; i < len; i++) {
  result += args[i];
 }
 return result;
}

console.log(`First Log`);
getData = () => {
 console.log(`Output : `, getTotal([2, 2, 3]));
}
setTimeout(getData, 6000);
console.log(`Last Log`);

// Output :
First Log
Last Log
After 6 seconds 7;
*/