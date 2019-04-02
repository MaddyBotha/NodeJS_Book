## Chapter One Notes

### Applying JavaScript to the Server Side

Traditional JS

When the below code runs, the JS engine creates a single callstack in an execution context and pushes the getTotal function.

Why a single callstack?

JS is a single-treaded lang, and thus creates a single stack. Js was inteded for adding simple functionality and minimal runtime inside the browser.

JS functions can be ref to a variable within its scope, assigned, passed as an args and returned as a result. Hence being called First-Class functions.

Example:

```
let getTotal = (args) => {
 let result = 0;
 for (let i = 0, len = args.length; i < len; i++) {
  result += args[i];
 }
 return result;
}
console.log(`Output : `, getTotal([2, 2, 3]));
// Output = 7
```

Callback Mechanism

Callbacks are useful in asynchonous execution of code. It is a chief functional programming technique that provides flexibility of passing a function as an args to another function.

Example: 

```
setTimeout(() => {
 console.log(`display after sometime!`);
}, 6000);

// output will be displayed after 6seconds.
```
The snippet is executed and only returns after sometime has passed.

Example: 

```
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
```