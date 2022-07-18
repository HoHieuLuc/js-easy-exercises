## Q. ***Write a program in javascript. sum(2)(3);***

**Example:** Expected output is 5
```javascript
console.log(2 + 3);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to validate file size and extension before upload? Please explain***

```html
<!DOCTYPE html>
<html>

<head>
  <title>JavaScript File Upload Example</title>
  <script type="text/javascript">
    function showFileSize() {
      const fileInput = document.querySelector('#fileinput');
      const file = fileInput.files[0];
      const fileName = file.name;
      const fileSize = file.size;
      const fileType = file.type;

      console.log(`File Name: ${fileName}`);
      console.log(`File Size: ${fileSize} bytes`);
      console.log(`File Extension: ${fileType.split('/')[1]}`);
    }
  </script>
</head>

<body>
  <form action="#" onsubmit="return false;">
    <input type="file" id="fileinput" />
    <input type="button" id="btnLoad" value="Load" onclick="showFileSize();" />
  </form>
</body>
</html>

<!-- Output -->

File Name: pic.jpg 
File Size: 1159168 bytes 
File Extension: jpg 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Create captcha using javascript? Please explain***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Captcha Example</title>
  </head>
  <script>
    let captcha;

    function generateCaptcha() {
      let text = "";
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 6; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      captcha = text;
      document.getElementById("captcha").value = text;
    }
  </script>

  <body onload="generateCaptcha()">
    <input type="text" id="captcha" disabled /><br /><br />
    <button onclick="generateCaptcha()">Refresh</button>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Create a Stopwatch program in javascript? Please explain***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Stopwatch Example</title>
  </head>

  <body>
    <h4>Time: <span id="time">00:00:00</span></h4> <br /><br />
    <button id="start" onclick="start()">Start</button>
    <button id="stop" onclick="stop()">Stop</button>
    <button id="reset" onclick="reset()">Reset</button>

    <script type="text/javascript">
      let time = 0;
      let interval = null;
      const start = () => {
        if (interval) {
          return;
        }
        interval = setInterval(() => {
          time++;
          const hours = Math.floor(time / 3600);
          const minutes = Math.floor(time / 60);
          const seconds = time - minutes * 60;
          const displayTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          document.querySelector('#time').innerHTML = displayTime;
        }, 1000);
      };

      const stop = () => {
          clearInterval(interval);
          interval = null;
      };

      const reset = () => time = 0;
    </script>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a program to reverse a string? Please explain***

```javascript
const reserveString = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); 

// Output: olleH
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to check if object is empty or not in javaScript? Please explain***

```javascript
const obj = {};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmpty(obj)); // true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***JavaScript Regular Expression to validate Email***

```javascript
const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
console.log(validateEmail("thiendepwa21@yahoo.com")); // true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Use RegEx to test password strength in JavaScript? Please explain***

```javascript
// Output
const testPasswordStrength = (password) => {
  const regex = /^[a-zA-Z0-9]{8,}$/gm;
  return regex.test(password);
};
PASS
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to compare objects ES6? (Answer with 3 solutions)***
+ using JSON.stringify()
+ using Object.is()
+ using library like lodash

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to remove array element based on object property? Please explain***

```javascript
const removeElementBasedOnProperty = (arr, property, value) => {
    return arr.filter(item => item[property] !== value);
};

let myArray = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

myArray = removeElementBasedOnProperty(myArray, "field", "money");

console.log(myArray);
```

Output

```
myArray = [
    {field: "id", operator: "eq"}
    {field: "cStatus", operator: "eq"}
]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***
```javascript
console.log(+"meow"); // Explain
```
Output: NaN <br/>
Unary plus, convert "meow" to number

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result); // Explain
```
Output: NaN <br/>
result is undefined => undefined + number = NaN

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = 1.2;
console.log(typeof a); // Explain
```
Output: number <br/>
typeof return the type of the variable

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var x = 10;
if (x) {
  let x = 4;
}
console.log(x); // Explain
```
Output: 10 <br/>
the x in the if statement is a local variable, so the var x = 10 is not affected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(0.1 + 0.2 == 0.3); // Explain
```
Output: 0.300000000000004 <br/>
floating point number is not accurate, so the result is 0.300000000000004

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 + -"1" + 2); // Explain
```
Ouput: 2 <br/>
-"1" is converted to number, so the result is 2

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20); // Explain
```
Ouput: 20 <br/>
the function is defined and then called with 20 as argument, so x = 20

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var num = 20;
var getNumber = function () {
  console.log(num);
  var num = 10;
};
getNumber(); // Explain
```
Output: undefined <br/>
the num in console.log refers to the local variable num, and var get hoisted, so the num is undefined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
function f1() {
  num = 10;
}
f1();
console.log("window.num: " + window.num); // Explain
```
Output: window.num: 10 <br/>
the variable num is declared without var, so it becomes GLOBAL and can be accessed from the window object

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("(null + undefined): " + (null + undefined)); // Explain
```
Output: (null + undefined): NaN <br/>
null + undefined = NaN

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  var a = (b = 3);
})();

console.log("value of a : " + a); // Explain
console.log("value of b : " + b); // Explain
```
Output: ReferenceError: a is not defined <br/>
value of b : 3<br/>
a is defined inside function <br/>
"This statement seemingly declares the variables a and b. However, it only actually declares the variable a. b are either invalid references to nonexistent variables (in strict mode) or, worse, would implicitly create global variables for b in sloppy mode." from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators => b becomes a global variable

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y); // Explain
```
Output: 1undefined <br/>
function f() {} is truthy, so the code inside the if statement is executed <br/>
typeof f return a string, f is not defined, so y = 1 + undefined = 1undefined, y becomes a string

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k); // Explain
```
Output: 1undefined <br/>
foo is defined inside eval, so typeof foo => undefined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k);// Explain
```
Output: 1function <br/>
typeof foo => function

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("(-1 / 0): " + -1 / 0); // Explain
console.log("(1 / 0): " + 1 / 0); // Explain
console.log("(0 / 0): " + 0 / 0); // Explain
console.log("(0 / 1): " + 0 / 1); // Explain
```
Ouput: (-1 / 0): -Infinity <br/>
(1 / 0): Infinity <br/>
(0 / 0): NaN <br/>
(0 / 1): 0 <br/>
https://262.ecma-international.org/5.1/#sec-11.5.2

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = 4;
var b = "5";
var c = 6;

console.log("(a + b): " + (a + b)); // Explain
console.log("(a - b): " + (a - b)); // Explain
console.log("(a * b): " + a * b); // Explain
console.log("(a / b): " + a / b); // Explain
console.log("(a % b): " + (a % b)); // Explain
```
Ouput:(a + b): 45 b is a string, so a + b = "45" <br/> 
(a - b): -1 <br/>
(a * b): 20 <br/>
(a / b): 0.8 <br/>
(a % b): 4 <br/>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("MAX : " + Math.max(10, 2, NaN)); // Explain
console.log("MAX : " + Math.max()); // Explain
```
Output: MAX : NaN <br/>
MAX : -Infinity <br/>
If at least one of arguments cannot be converted to a number, the result is NaN. <br/>
If no arguments are given, the result is -Infinity.

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined")); // Explain
console.log("b defined? " + (typeof b !== "undefined")); // Explain
```
Output: a defined? false </br>
b defined? true <br/>
a is defined inside function <br/>
b becomes a global variable as explained in the above question

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // Explain
    console.log("outer func:  self.foo = " + self.foo); // Explain
    (function () {
      console.log("inner func:  this.foo = " + this.foo); // Explain
      console.log("inner func:  self.foo = " + self.foo); // Explain
    })();
  },
};
myObject.func();
```
Ouput: outer func:  this.foo = bar <br/>
outer func:  self.foo = bar <br/>
inner func:  this.foo = undefined <br/> // this refers to the function itself, not the object
inner func:  self.foo = bar <br/>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(0.1 + 0.2); // Explain
console.log(0.1 + 0.2 == 0.3); // Explain
```
Ouput: 0.30000000000000004 <br/>
false <br/>
floating point number

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
// Explain
```
Ouput: 1 <br/>
4 <br/>
3 <br/>
2 <br/>
event loop https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // Explain
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // Explain
```
Output: array 1: length=5 last=j,o,n,e,s <br/>
array 2: length=5 last=j,o,n,e,s <br/>
```javascript
var arr2 = arr1.reverse(); // reverse() mutates the original array, and returns the reference to it
arr2.push(arr3); // push arr3 (an array) to arr2 (arr1) => ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]
```

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 + "2" + "2"); // Explain
console.log(1 + +"2" + "2"); // Explain
console.log(1 + -"1" + "2"); // Explain
console.log(+"1" + "1" + "2"); // Explain
console.log("A" - "B" + "2"); // Explain
console.log("A" - "B" + 2); // Explain
```
Output: 122 => as expected <br/>
32 => +"2" is converted to number 2 <br/>
02 => -"1" is converted to number -1 <br/>
122 => as expected <br/>
NaN2 => string - string returns NaN <br/>
NaN => NaN + number returns NaN

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Explain
```
Output: 5 <br/>
5 <br/>
5 <br/>
5 <br/>
5 <br/>
Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in. <br/>
var i is in the same scope as the for loop => global scope <br/>
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000); // setTimeout receive a timeout corresponding to the current value of i
  // after that timeout, the callback function is called
  // i is in global scope => i = 5 when the callback function is called
}
```

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i); // defined a function then run immediately with the value of the current i
  // the setTimeout function works as expected
}
```
Output: 0 <br/>
1 <br/>
2 <br/>
3 <br/>
4 <br/>


## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("0 || 1 = " + (0 || 1)); // 0 is falsy, so 1 is returned
console.log("1 || 2 = " + (1 || 2)); // 1 is truthy, so 1 is returned (short-circuit evaluation, 2 is not evaluated)
console.log("0 && 1 = " + (0 && 1)); // 0 is falsy, so 0 is returned (short-circuit evaluation, 1 is not evaluated)
console.log("1 && 2 = " + (1 && 2)); // 1 is truthy, so 2 is returned
// && operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
```
Output: 0 || 1 = 1 <br/>
1 || 2 = 1 <br/>
0 && 1 = 0 <br/>
1 && 2 = 2

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(false == "0"); // the string "0" is falsy, so false == "0" returns true
console.log(false === "0"); // the string "0" is not strictly equal to false, so false === "0" is false (typeof false is "boolean", typeof "0" is "string")
```
Output: true <br/>
false <br/>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123; // b is converted to string "[object Object]" => a["[object Object]"] = 123
a[c] = 456; // => a["[object Object]"] = 456
console.log(a[b]); // => 456
```
Ouput: 456

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
); // recursive function, works as expected
```
Output: 3628800 (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function (x) {
  return (function (y) {
    console.log(x); // x is 1
  })(2);
})(1); // the function is called with 1 as argument => x = 1
```
Output: 1

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // this refers to the global object, so the _name is undefined
console.log(hero.getSecretIdentity()); // this refers to the hero object
```
Output: undefined <br/>
John Doe

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);
```
Ouput: 10 <br/>
2 <br/>
The difference is because of the this context of each method call.

In the first instance, because the call is merely fn();, the this context is Window. The var length = 10; variable declaration at the top happens in the root/Window context, so window.length should be 10, hence the 10 in the console from the first function call.

Because arguments is not an array but is actually an Object of type Arguments, calling arguments[0]() means that the this context of the function call will be of the parent Object, so this.length is equivalent to arguments.length, hence the 2 (since there are 2 arguments, fn and 1). https://stackoverflow.com/questions/48832822/why-this-behavior-for-javascript-code

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  // var x, y are hoisted to the top of the function
  // var x, y;
  try {
    throw new Error();
  } catch (x) {
    var x = 1, // refers to the inner x
      y = 2; // refers to the outer y
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```
Ouput: 1 <br/>
undefined <br/>
2

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var x = 21;
var girl = function () {
  console.log(x); // refers to the inner x => x = undefined
  var x = 20; // var x is hoisted
};
girl();
```
Output: undefined

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 < 2 < 3); // 1 < 2 returns true, true (true has value 1) < 3 return true
console.log(3 > 2 > 1); // 3 > 2 returns true, true > 1 returns false
```
Ouput: true <br/>
false

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(typeof typeof 1); // typeof 1 returns the string "number", typeof "number" is string
```
Output: string

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b); // b refers to the inner b
  }
  inner();
}
outer();
```
Output: 3

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Hoisting example in javascript? Please explain***

```javascript
x = 10;
console.log(x); // x = 10
var x; // var x is hoisted to the top of the scope (global in this context)
```

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
const arr = [1, 2];
arr.push(3); // [1, 2, 3], works as expected
```

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var o = new F();
o.constructor === F;
```
Ouput: F is not defined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
let sum = (a, b) => {
  a + b;
};
console.log(sum(10, 20)); // the function sum returns nothing (void)
```
Ouput: undefined

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var arr = ["javascript", "typescript", "es6"];
var searchValue = (value) => {
  return arr.filter((item) => { // item is a string
    return item.indexOf(value) > -1; // means that the item contains the value
  });
};
console.log(searchValue("script"));
```
Ouput: ['javascript', 'typescript']

## Q. ***Write the program using fatarrow function? Please explain***

```javascript
var a = [1, 2, 3, 4];
function sumUsingFunction(acc, value) {
  return acc + value;
}
var sumOfArrayUsingFunc = a.reduce(sumUsingFunction);
```
Output: 10, works as expected

## Q. ***Write a program that prints the numbers from 1 to 15. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”? Please explain***

```javascript
for (let i = 1; i <= 15; i++) {
  let output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output || i);
}
```
Output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
var output = (function (x) {
  delete x; // delete operator removes a property from an object, x is a local variable, so delete does nothing
  return x;
})(0);

console.log(output);
```
Output: 0

## Q. ***What will be the output of the following code? Please explain***

```javascript
var x = 1;
var output = (function () {
  delete x; // Any property declared with var cannot be deleted from the global scope or from a function's scope.
  return x;
})();

console.log(output);
```
Ouput: 1

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
var x = { foo: 1 };
var output = (function () {
  delete x.foo; // delete the property foo from the object x
  return x.foo;
})();

console.log(output); // works as expected
```
Output: undefined

## Q. ***What will be the output of the following code? Please explain***

```javascript
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company); // delete only has an effect on own properties. emp1.hasOwnProperty('company') => false
```
Ouput: xyz

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length); // When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.
```
Output: 5

## Q. ***What will be the output of the following code? Please explain***

```javascript
var bar = true;
console.log(bar + 0); // 1, true has the value of 1
console.log(bar + "xyz"); // truexyz, works as expected
console.log(bar + true); // 2
console.log(bar + false); // 1, false has the value of 0
```


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
var z = 1,
  y = (z = typeof y);
console.log(y); // undefined, typeof y is undefined, then z is assigned to undefined => y is undefined
```

```javascript
var z;
z = 1;
var y;
z = typeof y; // typeof y = undefined
y = z; // both y and z are undefined
```

## Q. ***What will be the output of the following code? Please explain***

```javascript
// NFE (Named Function Expression)
var foo = function bar() {
  return 12;
};
typeof bar();
```

**Sample 1**

```javascript
var bar = function () {
  return 12;
};
typeof bar();
```

or

**Sample 2**

```javascript
function bar() {
  return 12;
}
typeof bar();
```


```javascript
var foo = function bar() {
  // foo is visible here // works as expected
  // bar is visible here // The function bar is only local to the function body.
  console.log(typeof bar()); // Works here :)
};
// foo is visible here // works as expected
// bar is undefined here
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output of the following? Please explain***

```javascript
bar(); // bar is called first
(function abc() {
  console.log("something");
})();
function bar() { // get hoisted
  console.log("bar got called");
}
```
Output: bar got called <br/>
something

## Q. ***What will be the output of the following code? Please explain***

```javascript
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary); // undefined, salary refers to the local salary

  var salary = "5000$"; // get hoisted

  console.log("My New Salary " + salary); // 5000$
})();
```

```javascript
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary); // works as expected

  salary = "5000$";

  console.log("My New Salary " + salary); // works as expected
})();
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of the following code? Please explain***

```javascript
function User(name) {
  this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person); // USA
// new User("xyz") => { name: "xyz" }, doesn't have a location property, so it is undefined
// then it is assigned to the string "USA" => person = "USA"
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA); // hi there, works as expected
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA); // { prop1: 90 }, prop1 in objB refers to the same prop1 in objA
```

## Q. ***What would be the output of following code? Please explain***

```javascript
var objA = { prop1: 42 };
var objB = objA;
objB = {};
console.log(objA); // { prop1: 42 }, works as expected
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA); // [ 42, 1, 2, 3, 4, 5 ], arrB[0] refers to the same element arrA[0]
```

## Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA); // [0, 1, 2, 3, 4, 5], the slice() method returns a shallow copy of a portion of an array into a new array object => works as expected
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA); // as explained above, works as expected
/* 
[
  { prop1: 42 },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
*/
```

## Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice(); // slice() method returns a shallow copy of a portion of an array into a new array object 
arrB[0].prop1 = 42; // arrB[0].prop1 refers to arrA[0].prop1
arrB[3] = 20; // shallow copy, arrA[3] is not changed
console.log(arrA); // => works as expected
/* 
[
  { prop1: 42 },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
*/
```

```javascript
function slice(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result; // ??????????????????????????????
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***console.log(employeeId);***

1.  Some Value
2.  Undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 4. ReferenceError: employeeId is not defined, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
console.log(employeeId);
var employeeId = "19000";
```

1.  Some Value
2.  undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. undefined, var employeeId is hoisted

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();
```

1.  '122345'
2.  undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. undefined, var employeeId is hoisted, employeeId refers to the local variable

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
  (function () {
    var employeeId = "abc1234";
  })();
})();
```

1.  '122345'
2.  undefined
3.  '1234abe'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. undefined, as explained above

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log("Hi I am inside displayFunc");
  };
})();
```

1.  undefined
2.  function
3.  'Hi I am inside displayFunc'
4.  ReferenceError: displayFunc is not defined

_Answer_and_Explain: 1. undefined, as explained above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";
function foo() {
  employeeId = "123bcd";
  return;
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd'
3.  'abc123'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. '123bcd', employeeId is reassigned to '123bcd'

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";

function foo() {
  employeeId = "123bcd";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd'
3.  'abc123'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. 'abc123', the function employeeId is hoisted, employeeId in foo refers to the local variable

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";

function foo() {
  employeeId();
  return;

  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
```

1.  undefined
2.  function
3.  string
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2. function, as explained above

## Q. ***What would be the output of following code? Please explain***

```javascript
function foo() {
  employeeId();
  var product = "Car";
  return;

  function employeeId() {
    console.log(product);
  }
}
foo();
```

1.  undefined
2.  Type Error
3.  'Car'
4.  ReferenceError: product is not defined

_Answer_and_Explain: 1. undefined, both employeeId and product are hoisted, but employeeId() runs first, so it logs undefined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();
```

1.  undefined undefined
2.  Type Error
3.  function function
4.  ReferenceError: bar is not defined

_Answer_and_Explain: 3. function function, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: true,
  });

  console.log(Object.keys(person));
})();
```

1.  Type Error
2.  undefined
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]

_Answer_and_Explain: 3. ["name", "salary", "country", "phoneNo"], works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: false,
  });

  console.log(Object.keys(person));
})();
```

1.  Type Error
2.  undefined
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]

_Answer_and_Explain: 4. ["name", "salary", "country"], enumerable is false so this property doesn't show up during enumeration

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2. false false, both objA and objB are objects, but they are not the same object, so they are not equal

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = new Object({ foo: "foo" });
  var objB = new Object({ foo: "foo" });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2. false false, as explained above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create({
    foo: "foo",
  });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2. false false, as explained above

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2. false false, as explained above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: true true, both objA.toString() and objB.toString() return the same string '[object Object]', so they are equal

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

1.  true true true false
2.  true false true true
3.  true true true true
4.  true true false false

_Answer_and_Explain: 3. true true true true, objA and objB refers to the same object, as well as objA.toString() and objB.toString() return the same string '[object Object]'

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  bar bar
3.  foo foo
4.  bar foo

_Answer_and_Explain: 2. bar bar, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  bar bar
3.  foo foo
4.  bar foo

_Answer_and_Explain: 3. foo foo <br/>
The Object.create() method creates a new object with the specified prototype object and properties. So objA doesn't have a property called foo, it is present inside the prototype of objA (objA.\_\_proto\_\_.foo).<br/>
We assign the objA to objB, now both variables points to same object. And we create a new foo property in the object. This foo property is different from the foo property inside the prototype object. <br/>
When we delete the foo property in the objA we are just deleting the property we later added (objB.foo = "bar"). The foo property inside prototype object is still available and takes over when the foo property is deleted from the object itself. <br/>
https://stackoverflow.com/questions/49186581/delete-operator-not-deleting-object-property

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = {
    foo: "foo",
  };
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  undefined undefined
3.  foo foo
4.  undefined bar

_Answer_and_Explain: 2. undefined undefined, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = new Array("100");
  console.log(array);
  console.log(array.length);
})();
```

1.  undefined undefined
2.  [undefined × 100] 100
3.  ["100"] 1
4.  ReferenceError: array is not defined

_Answer_and_Explain: 3. ["100"] 1, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();
```

1.  [] [] [Array[5]] 1
2.  [] [undefined × 100] Array[5] 1
3.  [] [] ['1',2,'3',4,5.6] 5
4.  [] [] [Array[5]] 5

_Answer_and_Explain: none of the above, answer: [] [ <100 empty items> ] [Array[5]] 1, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  delete array[10];
  console.log(array.length);
})();
```

1.  11
2.  5
3.  6
4.  undefined

_Answer_and_Explain: 1. 11, directly setting a slot with index greater than array.length will create empty slots until the index is reached. When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();
```

1.  4
2.  5
3.  6
4.  undefined

_Answer_and_Explain: 3. 6, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
})();
```

1.  [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]
2.  [ 'cow', 'horse', 'cat', 'dog', 'rat', 'goat' ]
3.  Type Error
4.  undefined

_Answer_and_Explain: 1. [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ], works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" }));
  console.log([[1], [2], [3], [4]].indexOf([3]));
  console.log("abcdefgh".indexOf("e"));
})();
```

1.  1 -1 -1 4
2.  1 0 -1 4
3.  1 -1 -1 -1
4.  1 undefined -1 4

_Answer_and_Explain: 1. 1 -1 -1 4, indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator). <br/>
{ name: "John" }, { name: "John" } are 2 different objects, [3] and [3] are 2 different arrays

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));
  console.log(array.indexOf(2, 3));
  console.log(array.indexOf(2, 10));
})();
```

1.  1 -1 -1
2.  1 6 -1
3.  1 1 -1
4.  1 undefined undefined

_Answer_and_Explain: 2. 1 6 -1, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleby3 = numbers.some(function (element, index) {
    return element % 3 === 0;
  });

  console.log(containsDivisibleby3);
})();
```

1.  [ 2, 4, 8, 12, 16 ] [ 0, 3, 0, 0, 9, 0, 12]
2.  [ 2, 4, 8, 12, 16 ] [ 3, 9, 12]
3.  [ 2, 4, 8, 12, 16 ] true
4.  [ 2, 4, 8, 12, 16 ] false

_Answer_and_Explain: 3. [2, 4, 8, 12, 16] true, works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var containers = [2, 0, false, "", "12", true];
  var containers = containers.filter(Boolean);
  console.log(containers);
  var containers = containers.filter(Number);
  console.log(containers);
  var containers = containers.filter(String);
  console.log(containers);
  var containers = containers.filter(Object);
  console.log(containers);
})();
```

1. [ 2, '12', true ]
   [ 2, '12', true ]
   [ 2, '12', true ]
   [ 2, '12', true ]
2. [false, true]
   [ 2 ]
   ['12']
   [ ]
3. [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
4. [ 2, '12', true ]
   [ 2, '12', true, false ]
   [ 2, '12', true,false ]
   [ 2, '12', true,false]

_Answer_and_Explain: 1. [ 2, '12', true ] x 4 <br/>
- containers.filter(Boolean): Boolean is used as a function, it's convert value to boolean value.
- containers.filter(Number): Number is used as a function, it's convert value to number value.
- containers.filter(String): String is used as a function, it's convert value to string value.
- containers.filter(Object): Object is used as a function, it returns an object of a Type that corresponds to the given value.
Since 0, false, "" are falsy, they're filtered out.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();
```

1. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
2. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john','ritz ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
3. [ 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
4. [ 'foo' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]

_Answer_and_Explain: 1. works as expected

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();
```

1.  [ 'bar', 'john' ] [] [ 'foo' ]
2.  [ 'bar', 'john' ] [] [ 'bar', 'john' ]
3.  [ 'bar', 'john' ] [ 'bar', 'john' ] [ 'bar', 'john' ]
4.  [ 'bar', 'john' ] [] []

_Answer_and_Explain: 1. works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort();
  console.log(arrayNumb);
})();
```

1.  [2, 8, 15, 16, 23, 42]
2.  [42, 23, 26, 15, 8, 2]
3.  [ 15, 16, 2, 23, 42, 8 ]
4.  [ 2, 8, 15, 16, 23, 42 ]

_Answer_and_Explain: 3, the default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

## Q. ***What would be the output of following code? Please explain***

```javascript
function funcA() {
  console.log("funcA ", this);
  (function innerFuncA1() {
    console.log("innerFunc1", this);
    (function innerFunA11() {
      console.log("innerFunA11", this);
    })();
  })();
}

console.log(funcA());
```

1.  funcA Window {...}
    innerFunc1 Window {...}
    innerFunA11 Window {...}
2.  undefined
3.  Type Error
4.  ReferenceError: this is not defined

_Answer_and_Explain: 1, since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser => just don't do it man.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message);
  })(),
};

console.log(obj.innerMessage);
```

1.  ReferenceError: this.message is not defined
2.  undefined
3.  Type Error
4.  undefined true

_Answer_and_Explain: 4.
- innerMessage is a boolean value, the function runs but doens't return anything => (function () {...})() => undefined => !undefined => true.
- Since the code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser => this.message = undefined.

## Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj.innerMessage());
```

1.  Hello
2.  undefined
3.  Type Error
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 1, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  },
};
console.log(obj.innerMessage());
```

1.  Type Error
2.  Hello
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: undefined undefined, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    var self = this;
    (function () {
      console.log(self.message);
    })();
  },
};
console.log(obj.innerMessage());
```

1.  Type Error
2.  'Hello'
3.  undefined
4.  ReferenceError: self.message is not defined

_Answer_and_Explain: Hello undefined, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(this.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: undefined undefined, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 2. 'Hi John', works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  myFunc.message = "Hi John";
  console.log(myFunc.message);
}
console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 2. 'Hi John', works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc(param1, param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

1.  2 2 2
2.  0 2 4
3.  undefined
4.  ReferenceError

_Answer_and_Explain: 1. 2 2 2, the length property indicates the number of parameters expected by the function (param1, param2).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

1.  2 2 2
2.  0 2 4
3.  undefined
4.  ReferenceError

_Answer_and_Explain: 2. 0 2 4, arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

## Q. ***What would be the output of following code? Please explain***

```javascript
function Person(name, age) {
  this.name = name || "John";
  this.age = age || 24;
  this.displayName = function () {
    console.log(this.name);
  };
}

Person.name = "John";
Person.displayName = function () {
  console.log(this.name);
};

var person1 = new Person("John");
person1.displayName();
Person.displayName();
```

1.  John Person
2.  John John
3.  John undefined
4.  John John

_Answer_and_Explain: 1. John Person, this inside Person.displayName refers to the Person function => this.name returns the function name 'Person'.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);
```

1.  12345678 Window
2.  12345678 John
3.  12345678 undefined
4.  undefined undefined

_Answer_and_Explain: 3. 12345678 undefined, userInfo = { pwd: password }

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId);
```

1.  Reference Error
2.  aq123
3.  bq1uy
4.  undefined

_Answer_and_Explain: 4. undefined, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId);
console.log(new Employee().employeeId);
```

1.  bq1uy 1BJKSJ bq1uy undefined
2.  bq1uy 1BJKSJ bq1uy
3.  bq1uy 1BJKSJ kj182
4.  undefined 1BJKSJ kj182

_Answer_and_Explain: 2. bq1uy 1BJKSJ bq1uy, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";
(function Employee() {
  try {
    throw "foo123";
  } catch (employeeId) {
    console.log(employeeId);
  }
  console.log(employeeId);
})();
```

1.  foo123 aq123
2.  foo123 foo123
3.  aq123 aq123
4.  foo123 undefined

_Answer_and_Explain: 1. foo123 aq123, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var greet = "Hello World";
  var toGreet = [].filter.call(greet, function (element, index) {
    return index > 5;
  });
  console.log(toGreet);
})();
```

1.  Hello World
2.  undefined
3.  World
4.  [ 'W', 'o', 'r', 'l', 'd' ]

_Answer_and_Explain: 4. [ 'W', 'o', 'r', 'l', 'd' ], toGreet is an array, [].filter.call(greet, ...) allows us to use the filter method on the greet string (making the function treats the string as an array of chars).

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return "Total amount left in account: " + this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.bind(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400)());
  console.log(withdrawAmountBy(300)());
})();
```

1. Total amount left in account: 5600 Total amount left in account: 5300
2. undefined undefined
3. Total amount left in account: 3600 Total amount left in account: 3300
4. Total amount left in account: 5600 Total amount left in account: 5600

_Answer_and_Explain: 1. Total amount left in account: 5600 Total amount left in account: 5300, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined

_Answer_and_Explain: 1. 5600 5300 5100, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 6000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 4000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.call(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined

_Answer_and_Explain: 2. 3600 3300 3100, works as expected

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function greetNewCustomer() {
  console.log("Hello " + this.name);
}.bind({
  name: "John",
})());
```

1. Hello John
2. Reference Error
3. Window
4. undefined

_Answer_and_Explain: 1. Hello John, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
function getDataFromServer(apiUrl) {
  var name = "John";
  return {
    then: function (fn) {
      fn(name);
    },
  };
}

getDataFromServer("www.google.com").then(function (name) {
  console.log(name);
});
```

1. John
2. undefined
3. Reference Error
4. fn is not defined

_Answer_and_Explain: 1. John, fn(name), name refers to the local variable name, which is "John".

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  Array.prototype.sort = function (a, b) {
    return a - b;
  };
  arrayNumb.sort();
  console.log(arrayNumb);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    if (a == b) {
      return 0;
    } else {
      return a < b ? -1 : 1;
    }
  });
  console.log(numberArray);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numberArray);
})();
```

1. [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
2. undefined undefined undefined
3. [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
4. Reference Error

_Answer_and_Explain: 1. [ 2, 8, 15, 16, 23, 42 ] x 3, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  function sayHello() {
    var name = "Hi John";
    return;
    {
      fullName: name;
    }
  }
  console.log(sayHello().fullName);
})();
```

1. Hi John
2. undefined
3. Reference Error
4. Uncaught TypeError: Cannot read property 'fullName' of undefined

_Answer_and_Explain: 4. Uncaught TypeError: Cannot read property 'fullName' of undefined, unreachable code(return;).

## Q. ***What would be the output of following code? Please explain***

```javascript
function getNumber() {
  return 2, 4, 5;
}

var numb = getNumber();
console.log(numb);
```

1. 5
2. undefined
3. 2
4. (2,4,5)

_Answer_and_Explain: 1. 5, the comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function getNumber() {
  return;
}

var numb = getNumber();
console.log(numb);
```

1. null
2. undefined
3. ""
4. 0

_Answer_and_Explain: 2. undefined, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return [
      x * y,
      function (z) {
        return x * y + z;
      },
    ];
  };
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6

_Answer_and_Explain: 1. 6, 10, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return {
      result: x * y,
      sum: function (z) {
        return x * y + z;
      },
    };
  };
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6

_Answer_and_Explain: 1. 6, 10, works as expected.

## Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return function (z) {
      return function (w) {
        return function (p) {
          return x * y * z * w * p;
        };
      };
    };
  };
}
console.log(mul(2)(3)(4)(5)(6));
```

1. 720
2. undefined
3. Reference Error
4. Type Error

_Answer_and_Explain: 1. 720, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of `foo`? Please explain***

```javascript
var foo = 10 + "20";
```

_Answer_and_Explain: 1020, works as expected.

## Q. ***How would you make this work? Please explain***

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

_Answer_and_Explain_and_Code:
```javascript
const add = (first, second) => {
  if (!second) {
    // if the second value is not provided, return a function that takes the second value
    // that function will be called when the second value is provided
    return (newSecond) => add(first, newSecond);
  }
  return first + second;
};
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What value is returned from the following statement? Please explain***

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

_Answer_and_Explain: goh angasal a m'i, works as expected.

## Q. ***What is the value of `window.foo`? Please explain***

```javascript
window.foo || (window.foo = "bar");
```

_Answer_and_Explain: bar, the logical OR (||) operator returns the right-hand side operand if the left operand is any falsy value (window.foo is undefined).

## Q. ***What is the outcome of the two alerts below? Please explain***

```javascript
var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

_Answer_and_Explain: Hello World, ReferenceError: bar is not defined, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of `foo.length`? Please explain***

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

_Answer_and_Explain: 2, works as expected.

## Q. ***What is the value of `foo.x`? Please explain***

```javascript
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```

_Answer_and_Explain: undefined, this question is horrible. https://stackoverflow.com/questions/32342809/javascript-code-trick-whats-the-value-of-foo-x

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the following code print? Please explain***

```javascript
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
```

_Answer_and_Explain: one three two, event loop, works as expected.

## Q. ***What would be the result of 1+2+'3'? Please explain***

_Answer_and_Explain: 33, 1 + 2 = 3, 3 + '3' = 33

## Q. ***Write a script that returns the number of occurrences of character given a string as input? Please explain***

```javascript
function countCharacters(str) {
  // split the string into an array of characters
  // then count the number of times the character appears in the array using reduce
  // acc is the object that holds the count of each character
  return str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What value is returned from the following statement? Please explain***

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

_Answer_and_Explain: goh angasal a m'i, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the following code print? Please explain***

```javascript
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
```

_Answer_and_Explain: one three two, as explained above.

## Q. ***For which value of x the results of the following statements are not the same? Please explain***

```javascript
if( x <= 100 ) {...}
if( !(x > 100) ) {...}
```

_Answer_and_Explain: any value that is NaN when converted to a number. NaN <= 100 is false and NaN > 100 is also false.

## Q. ***What is g value? Please explain***

```javascript
f = g = 0;
(function () {
  try {
    f =
      function () {
        return f();
      } && f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() {
    g += 5;
    return 0;
  }
})();
```

_Answer_and_Explain: g = 6, explain? no i don't think will, i don't even bother reading it.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output? Please explain***

```javascript
function b(b) {
  return this.b && b(b);
}
b(b.bind(b));
```

_Answer_and_Explain: nothing.

## Q. ***What will be the output? Please explain***

```javascript
c = (c) => {
  return this.c && c(c);
};
c(c.bind(c));
```

_Answer_and_Explain: nothing.

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var g = 0;
g = 1 && g++;
console.log(g);
```

_Answer_and_Explain: 0, g = 1 && g++ => g = 1 && 0 => g = 0;

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
!function(){}() // true, define then run the function, !undefined = true
function(){}() // undefined, the function returns nothing
true && function(){}() // true && undefined => undefined
(function(){})() // undefined, the function returns nothing
function(){} // function
!function(){} // false, function is truthy => !function(){} = false
```

## Q. ***What will expression return? Please explain***

```javascript
var a = (b = true),
  c = (a) => a;
(function a(a = (c(b).a = c = () => a)) {
  return a();
})();
```

_Answer_and_Explain: [Function: c], no

## Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = true;
(a = function () {
  return a;
})();
```

_Answer_and_Explain: [Function: a], return a, a refers to the local function a

## Q. ***What will be the output? Please explain***

```javascript
var v = 0;
try {
  throw (v = (function (c) {
    throw (v = function (a) {
      return v;
    });
  })());
} catch (e) {
  console.log(e()());
}
```

_Answer_and_Explain: [Function: v], return v, v refers to the local function v (v = function (a))

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will the following code output? Please explain***

```javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
```

_Answer_and_Explain: after about 3000ms: Index: 4, element: undefined <br/>
Index: 4, element: undefined <br/>
Index: 4, element: undefined <br/>
Index: 4, element: undefined <br/>
event loop, works as expected.

## Q. ***What will be the output of the following code? Please explain***

```javascript
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output);
```

_Answer_and_Explain: 0, delete operator removes a property from an object, x is a local variable, so delete does nothing.

## Q. ***What will be the output of the following code? Please explain***

```javascript
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```

_Answer_and_Explain: xyz, delete only has an effect on own properties. emp1.hasOwnProperty('company') => false, but it has emp1.\_\_proto\_\_company

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Make this work:

```javascript
const duplicate = (array) => {
  return [...array, ...array];
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Fix the bug using ES5 only? Please explain***

```javascript
var arr = [10, 32, 65, 2];
for (let i = 0; i < arr.length; i++) { // change var i to let i (var i makes i become a global variable)
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
// eval() function evaluates JavaScript code represented as a string and returns its completion value. 
console.log(eval("10 + 10")); // => 10 + 10 = 20

console.log(eval("5 + 5" + 10)); // "5 + 5" + 10 gets parsed as "5 + 510" => 515

console.log(eval("5 + 5 + 5" + 10)); // "5 + 5 + 5" + 10 gets parsed as "5 + 5 + 510" => 520

console.log(eval(10 + "5 + 5")); // 10 + "5 + 5" gets parsed as "105 + 5" => 110

console.log(eval(10 + "5 + 5 + 5")); // 10 + "5 + 5 + 5" gets parsed as "105 + 5 + 5" => 115
```

## Q. ***What will be the output of the following code? Please explain***

```javascript
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 30") + "<br>";

let result = a + b + c;
console.log(result); // 200<br>4<br>40<br>, works as expected.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will be the output of the following code? Please explain***

```javascript
// Example 01:
var prices = [12, 20, 18];
var newPriceArray = [...prices];
console.log(newPriceArray); // [12, 20, 18]

// Example 02:
var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets); // ["A", "B", "C", "D", "E"]

// Example 03:
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // 20

// Example 04:
var max = Math.max(..."43210");
console.log(max); // 4

// Example 05:
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// Example 06:
const country = "USA";
console.log([...country]); // ["U", "S", "A"]
// everything works as expected.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Given and object and property path. Get value from property path***

```javascript
function getPropertyValue(TEMP_OBJECT, path = '') {
  return path.split('.').reduce((acc, curr) => acc[curr], TEMP_OBJECT);
}

const srcObject = {
  'system': {
  'database': {
      '0': {
        'host': '54.232.122',
        'port': 3306
      },
      '1': {
        'host': '54.232.123',
        'port': 3307,
      },
      '2': {
        'host': '54.232.123',
      }
    }
  }
};
const path = "system.database.1.port";

console.log(getPropertyValue(srcObject, path));
//Output: 3307
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to filter object from Arrays of Objects***
use filter method

## Q. ***How to replace all the occurrences of string***
use replace, replaceAll method i guess...

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a script that returns the number of occurrences of character given a string as input***

```javascript
function countCharacters(str) {
  return str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***write a script that return the number of occurrences of a character in paragraph***

```javascript
function charCount(str, searchChar) {
  return str.split('').reduce((acc, curr) => {
    if (curr === searchChar) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(charCount("the brown fox jumps over the lazy dog", "o"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Recursive and non-recursive Factorial function***

```javascript
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Memoization fibonnaci-sequence***

```javascript
// 1, 1, 2, 3, 5, 8, 13, 21, 34
// Memoization fibonnaci

function fibonnaci(num, memo = {}) {
  if (memo[num]) {
    return memo[num];
  }
  if (num < 2) {
    return num;
  }
  return memo[num] = fibonnaci(num - 1, memo) + fibonnaci(num - 2, memo);
}

console.log(fibonnaci(5)); // 8
```

## Q. ***Random Number between min and max***

```javascript
function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Reverse the number***

```javascript
function reverse(num) {
  return Number(num.toString().split('').reverse().join(''));
}

console.log(reverse(12345));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Remove Duplicate elements from Array***

```javascript
var arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function removeDuplicates() {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr)); // ["1", "2", "3", "5", "9", "8"] // O(n)

// Es6
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Deep copy of object or clone of object with and without a function***

```javascript
function deepExtend(out = {}) {
  out = out || {};
  for (let i = 1; i < arguments.length; i++) {
    const obj = arguments[i];
    if (!obj) {
      continue;
    } 
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          out[key] = deepExtend(out[key], obj[key]);
        }
        else {
          out[key] = obj[key];
        }
      }
    }
  }
  return out;
}

//Alternative if there are no function

console.log(deepExtend({}, { a: 1, b: { c: 2, d: 3 } }, { e: 4, b: { f: 1 } }));
//output : { a: 1, b: {c: 2, d: 3, f: 1}, e: 4 }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Sort ticket based on flying order.***
Not enough clues to solve this question.
```javascript
"use strict";

function SortTickets(tickets) {
  
}

SortTickets.prototype.getStartingPoint = function () {
  return null;
};

new SortTickets({
  Athens: "Rio",
  Barcelona: "Athens",
  London: "NYC",
  ND: "Lahore",
  NYC: "Barcelona",
  Rio: "ND",
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Concurrent execute function based on input number***
????????????
```javascript
function concurrent(num) {
  
}

concurrent.prototype.enqueue = function (value) {
  
};

concurrent.prototype.start = function () {
  
};

let callback = (done) => {
  
};

let c = new concurrent(2);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.start();
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Reversing an array***

```javascript
let a = [1, 2, 3, 4, 5];

//Approach 1:
const reverseArray1 = (arr = []) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//Approach 2:
const reverseArray2 = (arr = []) => {
  return arr.reverse();
}

console.log(
  reverseArray1(a),
  reverseArray2(a)
);
```

## Q. ***Rotate 2D array***

```javascript
const transpose = (matrix) => matrix[0].map((col, i) => matrix.map(row => row[i]));

console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
```

## Q. ***Get Column from 2D Array***

```javascript
const getColumn = (matrix, column) => matrix.map(row => row[column]);

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(getColumn(twoDimensionalArray, 1)); //Result = [2,5,8]
```

## Q. ***Get top N from array***

```javascript
function topN(arr, num) {
  return arr.sort((a, b) => b - a).slice(0, num);
}

console.log(topN([1, 8, 3, 4, 5], 2)); // [5,8]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Get query params (SQL) from Object***

```javascript
function getQueryParams(obj) {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}="${value}"`;
  }).join(' AND ');
}

console.log(
  getQueryParams({
    name: "Umesh",
    tel: "48289",
    add: "3333 emearld st",
  })
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Consecutive 1's in binary***

```javascript
function consecutiveOne(num) {
  const binary = num.toString(2);
  const consecutiveOnes = binary.match(/1+/g);
  return Math.max(...consecutiveOnes.map(x => x.length));
}
//13 = 1101 = 2
//5 = 101 = 1
console.log(consecutiveOne(5)); //1
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Spiral travesal of matrix***

```javascript
var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var spiralTraversal = function (matriks) {
  var result = [];
  var row = 0;
  var col = 0;
  var maxRow = matrix.length - 1;
  var maxCol = matrix[0].length - 1;
  var direction = 0;
  while (row <= maxRow && col <= maxCol) {
    if (direction === 0) {
      for (var i = col; i <= maxCol; i++) {
        result.push(matrix[row][i]);
      }
      row++;
      direction = 1;
    } else if (direction === 1) {
      for (var i = row; i <= maxRow; i++) {
        result.push(matrix[i][maxCol]);
      }
      maxCol--;
      direction = 2;
    } else if (direction === 2) {
      for (var i = maxCol; i >= col; i--) {
        result.push(matrix[maxRow][i]);
      }
      maxRow--;
      direction = 3;
    } else if (direction === 3) {
      for (var i = maxRow; i >= row; i--) {
        result.push(matrix[i][col]);
      }
      col++;
      direction = 0;
    }
  }
  return result;
};
console.log(spiralTraversal(input)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Merge Sorted array and sort it.***

```javascript
function mergeSortedArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
}

console.log(mergeSortedArray([1, 2, 3, 4, 5, 6], [0, 3, 4, 7])); // [0, 1, 2, 3, 4, 5, 6, 7]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Anagram of words***

```javascript
const alphabetize = (word) => word.split("").sort().join("");

function groupAnagram(wordsArr) {
  const anagrams = {};
  wordsArr.forEach((word) => {
    const sortedWord = alphabetize(word);
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  });
  return anagrams;
}

console.log(
  groupAnagram(["map", "art", "how", "rat", "tar", "who", "pam", "shoop"])
);
// result : {
//  amp: ["map", "pam"],
//  art: ["art", "rat", "tar"],
//  hoops: ["shoop"],
//  how: ["how", "who"]
// }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Print the largest (maximum) hourglass sum found in 2d array.***

```javascript
// if arr 6 X 6 then iterate it till 4 X 4  [reduce by two]
// if arr 8 X 8 then iterate it till 6 X 6  [reduce by two]
function main(arr) {
  let maxScore = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      if (sum > maxScore) {
        maxScore = sum;
      }
    }
  }
  console.log(maxScore);
}

const array = [
  [1, 2, 3, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 1, 4, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0]
];

main(array)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Transform array of object to array***

```javascript
let data = [
  { vid: "aaa", san: 12 },
  { vid: "aaa", san: 18 },
  { vid: "aaa", san: 2 },
  { vid: "bbb", san: 33 },
  { vid: "bbb", san: 44 },
  { vid: "aaa", san: 100 },
];

let newData = data.reduce((acc, item) => {
  if (!acc[item.vid]) {
    acc[item.vid] = {
      san: [],
      vid: item.vid
    };
  }
  acc[item.vid].san.push(item.san);
  return acc;
}, {});

console.log(Object.keys(newData).map((key) => newData[key]));

// Result
// [[object Object] {
//   san: [12, 18, 2, 100],
//   vid: "aaa"
// }, [object Object] {
//   san: [33, 44],
//   vid: "bbb"
// }]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Create a private variable or private method in object***

```javascript
let obj = (function () {
  const p = 0;
  return {
    getPrivateValue: () => {
      console.log('You are accessing private variable');
      return p;
    },
    callPrivateFunction: () => console.log('this is private function')
  }
})();

obj.getPrivateValue(); // You are accessing private variable
console.log("p" in obj); // false
obj.callPrivateFunction(); // this is private function
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Flatten only Array not objects***

```javascript
function flatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flatten(input)); // [1, { a: [2, [3]]}, 4, 5, 6, 7, "hi", 8, 9, 10]

function flattenIterative(out) {
  return out.flat(Infinity); // whatever
}
var list1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flattenIterative(input));
var list2 = [0, [1, [2, [3, [4, [5]]]]]];
console.log(flattenIterative(list2)); // [0, 1, 2, 3, 4, 5]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Find max difference between two number in Array***

```javascript
function maxDifference(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1] - sortedArray[0];
}

console.log(maxDifference([1, 2, 4])); // [1 - 4 ] = 3
```

## Q. ***swap two number in ES6 [destructing]***

```javascript
let a = 10,
  b = 5;
[a, b] = [b, a]; // cool
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Panagram ? it means all the 26 letters of alphabet are there***

```javascript
function panagram(input) {
  return [...new Set(
    input.split('')
      .map(
        (word) => word.toLowerCase()
      )
      .filter(
        (word) => word.match(/[a-z]/g)
      )
  )].length === 26
    ? 'pangram'
    : 'not pangram';
}
function processData(pannagram) {
    console.log(panagram(pannagram));
}

processData("We promptly judged antique ivory buckles for the next prize"); // pangram
processData("We promptly judged antique ivory buckles for the prize"); // Not Pangram
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Convert a number into a Roman Numeral***

```javascript
function romanize(num) {
  let roman = '';
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (const romanNum in romanNums) {
    while (num >= romanNums[romanNum]) {
      roman += romanNum;
      num -= romanNums[romanNum];
    }
  }
  return roman;
}

console.log(romanize(3)); // III
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***check if parenthesis is malformed or not***

```javascript
function matchParenthesis(str) {
  const openParenthesis = ['(', '{', '['];
  const closeParenthesis = [')', '}', ']'];

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (openParenthesis.includes(current)) {
      stack.push(current);
    } else if (closeParenthesis.includes(current)) {
      const last = stack.pop();
      if (last !== openParenthesis[closeParenthesis.indexOf(current)]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(matchParenthesis("}{{}}"), matchParenthesis("{{[]}}")); // false - true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Create Custom Event Emitter class***

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName]
      ? [...this.events[eventName], callback]
      : [callback];
  }

  emit(eventName, ...args) {
    this.events[eventName].forEach(callback => callback(...args));
  }
}

const testEvent = new EventEmitter();
testEvent.on("callme", function (args) {
  console.log(`you called me ${args}`);
});
testEvent.on("callme", function (args) {
  console.log(`testing`);
});

testEvent.emit("callme", ["a", "b"], { firstName: "umesh", lastName: "gohil" });
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Max value from an array***

```javascript
const arr = [-2, -3, 4, 3, 2, 1];
// Do the Fastest Way
function doTheFastestWay(arr) {
  return Math.max(...arr);
}

// Do the Slower Way
function doTheSlowerWay(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***search function called after 500 ms***

```javascript
<input type="text" class="search" />;

let timer = null;
  function searchOptions(value) {
    console.log('search', value);
  }

  const search = document.querySelector(".search");
  search.addEventListener("keyup", function (event) {
    const value = event.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => searchOptions(value), 500);
  });
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Move all zero's to end***

```javascript
const moveZeroToEnd = (arr) => {
  const nonZero = arr.filter(num => num !== 0);
  const zero = arr.filter(num => num === 0);
  return [...nonZero, ...zero];
};

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0])); // [1, 8, 2, 3, 4, 5, 0, 0, 0, 0, 0]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Decode message in matrix [diagional down right, diagional up right]***

```javascript
const decodeMessage = (mat) => {
  let diagionalDownRight = '';
  let diagionalUpRight = '';
  
  // [0, 0], [1, 1], [2, 2], [3, 3]
  for (let i = 0; i < mat.length; i++) {
    const char = mat[i][i];
    if (!char) {
      break;
    }
    diagionalDownRight += char;
  }
  
  // [2, 4], [1, 5], [0, 6]
  for (let i = mat.length - 2; i >= 0; i--) {
    const char = mat[i][(mat.length - 1) * 2 - i];
    if (!char) {
      break;
    }
    diagionalUpRight += char;
  }

  return diagionalDownRight + diagionalUpRight;
};

let mat = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decodeMessage(mat)); //IROELEA
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***find a pair in array, whose sum is equal to given number.***

```javascript
const hasPairSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(hasPairSum([1, 2, 4, 5], 8)); // null
console.log(hasPairSum([1, 2, 4, 4], 8)); // [2,3]

// NOTE: if array is not sorted then subtract the value with sum and store in difference
// then see if that value exist in difference then return true.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Binary Search [Array should be sorted]***

```javascript
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 22));
console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 27));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Pascal triangle.***

```javascript
function pascalTriangle(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(row);
  }
  return result;
}

console.log(pascalTriangle(2));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the code below. How many times the createVal function is called?***

```javascript
function createVal() {
  return Math.random();
}

function fun(val = createVal()) {
  console.log(val);
}

fun();
fun(5);
```

_Answer_and_Explain: the createVal function is called once (when fun() is called without a val value).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

_Answer_and_Explain: D, var is hoisted, let is also hoisted but is not initalized with a default value.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

_Answer_and_Explain: C, the first for loop run first, var i is a global variable, all the setTimeout functions start counting and then the callbacks get put in the queue, then all the setTimeout function in the second for loop do the same thing, after 1ms, if the stack is empty, all of the callback functions get called (first in, first out).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

_Answer_and_Explain: B. in arrow functions, this retains the value of the enclosing lexical context's this.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

_Answer_and_Explain: A. +true is converted to a number (1), "Lydia" is truthy => !"Lydia" = false

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which one is true? Please explain***

```javascript
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid

_Answer_and_Explain: D. mouse[bird.size] = mouse["small"], mouse[bird["size"]] = mouse["small"]

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

_Answer_and_Explain: A. a and b have the same value, but b is a Number object.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

_Answer_and_Explain: D. static methods can be called on instances of the class.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What happens when we do this? Please explain***

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `"Woof"` gets logged.
- D: `ReferenceError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah); // the function Person returns nothing => undefined
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the three phases of event propagation? Please explain***

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<img src="https://i.imgur.com/N18oRgd.png" width="200">

_Answer_and_Explain: D

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***All object have prototypes.***

- A: true
- B: false

_Answer_and_Explain: A.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

_Answer_and_Explain: B. tagged function, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

_Answer_and_Explain: C. { age: 18 } (data) and { age: 18 } are 2 different objects, so they are not equal.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

_Answer_and_Explain: B. rest parameters, args is an array, array is an object.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

_Answer_and_Explain: C. cannot declare a global variable with "use strict", works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is value of `sum`? Please explain***

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How long is cool_secret accessible? Please explain***

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.

_Answer_and_Explain: B (C and D are correct too).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.***

- A: true
- B: false
- C: it depends

_Answer_and_Explain: A.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // => a['[object Object]'] = 123;
a[c] = 456; // => a['[object Object]'] = 456;

console.log(a[b]); // => 456
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

_Answer_and_Explain: B. event loop, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the event.target when clicking the button? Please explain***

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When you click the paragraph, What is the logged output? Please explain***

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

_Answer_and_Explain: A. event propagation, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

_Answer_and_Explain: D. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which of these values are falsy? Please explain***

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

_Answer_and_Explain: A. works as expected. false, null, undefined, 0, -0, 0n, NaN, "" are falsy.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

_Answer_and_Explain: B. typeof 1 => "number", typeof "number" => string

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2); // x = 1 refers to the local variable x (x in catch (x))
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Everything in JavaScript is either a...***

- A: primitive or object
- B: function or object
- C: trick question! only objects
- D: number or object

_Answer_and_Explain: A.
JavaScript only has primitive types and objects.
Primitive types are boolean, null, undefined, bigint, number, string, and symbol.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
!!null; // null is falsy => false
!!""; // "" is falsy => false
!!1; // 1 is truthy => true
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the `setInterval` method return in the browser? Please explain***

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

_Answer_and_Explain: A. a unique id to remove the interval later.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this return? Please explain***

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

_Answer_and_Explain: A. spread syntax, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 and 10, 20`

_Answer_and_Explain: C. generator function, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this return? Please explain***

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

_Answer_and_Explain: B. The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise => secondPromise finishes first.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

_Answer_and_Explain: D. works as expected, wrapping the object in [] creates a shallow copy of the object and returns an array.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of `num`? Please explain***

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

_Answer_and_Explain: C. If parseInt encounters a character that is not a numeral in the specified radix (10 => decimal number), it ignores it and all succeeding characters and returns the integer value parsed up to that point.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output`? Please explain***

```javascript
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

_Answer_and_Explain: A. works as expected, member.name points to the same property name of the person object.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

_Answer_and_Explain: D. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

_Answer_and_Explain: A. y is a global variable.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

_Answer_and_Explain: D. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

_Answer_and_Explain: C. The static import declaration is used to import read-only live bindings which are exported by another module.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia";
age = 21; // add age to the global object

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

_Answer_and_Explain: A. Any property declared with let or const cannot be deleted from the scope within which they were defined.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

_Answer_and_Explain: C. destructuring array, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

_Answer_and_Explain: B. spreading object, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

_Answer_and_Explain: B. enumerable is default to false => age doesn't show up during enumeration.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++; // inscrease but return the value before incrementing (10)

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1); // num1 = 10

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: `20`, `40`, `80`, `160`
- B: `20`, `40`, `20`, `40`
- C: `20`, `20`, `20`, `40`
- D: `NaN`, `NaN`, `20`, `40`

_Answer_and_Explain: C. spreading an object create a shallow copy of that object, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

_Answer_and_Explain: C. the callback function returns nothing, works as expected.

</p>
</details>  
---

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***With which constructor can we successfully extend the `Dog` class? Please explain***

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
```

- A: 1
- B: 2
- C: 3
- D: 4

_Answer_and_Explain: B. it's how it works.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// index.js
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

_Answer_and_Explain: B. With the import keyword, all imported modules are pre-parsed. This means that the imported modules get run first, the code in the file which imports the module gets executed after.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

_Answer_and_Explain: A. Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia Hallie";
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

_Answer_and_Explain: C. padStart(targetLength, padString) without padString adds whitespace to the start of a string until the resulting string reaches the given length (13). 2 is less than the length of "Lydia Hallie" (12), so the string is returns as-is.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can we log the values that are commented out after the console.log statement? Please explain***

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

_Answer_and_Explain: C.
Every line is executed, until it finds the first yield keyword. There is a yield keyword on the first line within the function: the execution stops with the first yield! This means that the variable answer is not defined yet!

When we call game.next("Yes").value, the previous yield is replaced with the value of the parameters passed to the next() function, "Yes" in this case. The value of the variable answer is now equal to "Yes". The condition of the if-statement returns false, and JavaScript loves you back ❤️ gets logged.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

_Answer_and_Explain: C. String.raw is used to get the raw string form of template literals, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

_Answer_and_Explain: C. data is a promise function, works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

_Answer_and_Explain: B. push method returns the new length of the array.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

- A: `{ x: 100, y: 20 }`
- B: `{ x: 10, y: 20 }`
- C: `{ x: 100 }`
- D: `ReferenceError`

_Answer_and_Explain: B. Object.freeze freezes the object, so it can't be modified.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

_Answer_and_Explain: D. destruring object and renaming the variable (name to myName) => name is not defined.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is this a pure function? Please explain***

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

_Answer_and_Explain: A. Yes, pure functions are functions that always return the same output for the same input.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add(); // => addFunction = (num) => { ... }
console.log(addFunction(10)); // result = 20, cache['10'] = 20, Calculated! 20
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

_Answer_and_Explain: A. works as expected. The for...in statement iterates over all enumerable properties of an object that are keyed by strings.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there, `
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); // refers to the global object
}, 0);
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

_Answer_and_Explain: B. works as expected. 
In functions, the this keyword refers to the the object that the function belongs to. We declared the setTimeout function on the global object, so within the setTimeout function, the this keyword refers to the global object.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

let city = person.city;
city = "Amsterdam";

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."; // local to the code block
  } else {
    const message = "Yay! You're old enough!"; // same
  }

  return message;
}

console.log(checkAge(21));
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

_Answer_and_Explain: C. message is not defined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What kind of information would get logged? Please explain***

```javascript
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

- A: The result of the `fetch` method.
- B: The result of the second invocation of the `fetch` method.
- C: The result of the callback in the previous `.then()`.
- D: It would always be undefined.

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument? Please explain***

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

_Answer_and_Explain: A. !! convert a value to a boolean (based on the falsyness and truthyness of the value).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log("I want pizza"[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

_Answer_and_Explain: B. works as expected. You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// module.js
export default () => "Hello world";
export const name = "Lydia";

// index.js
import * as data from "./module";

console.log(data);
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

_Answer_and_Explain: C. works as expected.

```javascript
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

_Answer_and_Explain: D. newList is a number.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function giveLydiaPizza() {
  return "Here is pizza!";
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

_Answer_and_Explain: D. works as expected. Arrow functions do not have a prototype property.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `["name", "age"]` and `undefined`
- D: `Error`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

_Answer_and_Explain: D. Only the last parameter in a function definition can be a rest parameter.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function nums(a, b) {
  if (a > b) console.log("a is bigger");
  else console.log("b is bigger");
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

_Answer_and_Explain: B. The function returns nothing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Person {
  constructor() {
    this.name = "Lydia";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name);
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const info = {
  [Symbol("a")]: "b",
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

_Answer_and_Explain: D. The Object.keys() method returns an array of a given object's own enumerable property names, Symbols are not enumerable.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => ({ name: user.name, age: user.age }) // fixed it for you

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `undefined`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia";

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

_Answer_and_Explain: C. name is not a function.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && "Im"}possible!
You should${"" && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

_Answer_and_Explain: B. [] is truthy, "" is falsy.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

_Answer_and_Explain: C. 
+ one = false || {} => {} || null => {} ({} is truthy.
+ all null, false and "" are falsy, so the last one is returned.
+ [] is truthy.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res)); // 2
  console.log("second"); // 1
}

async function secondFunction() {
  console.log(await myPromise()); // 3
  console.log("second"); // 4
}

firstFunction();
secondFunction();
```

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

_Answer_and_Explain: D. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const set = new Set();

set.add(1);
set.add("Lydia");
set.add({ name: "Lydia" });

for (let item of set) {
  console.log(item + 2);
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[Object object]2`
- D: `"12"`, `Lydia2`, `[Object object]2`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<resolved>: 5}`
- D: `Error`

_Answer_and_Explain: A. The Promise.resolve() method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; **otherwise** the returned promise will be fulfilled with the value.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "Lydia" };

compareMembers(person);
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

console.log(colorConfig.colors[1]);
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

_Answer_and_Explain: D. works as expected, colors is undefined.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
console.log("❤️" === "❤️");
```

- A: `true`
- B: `false`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which of these methods modifies the original array? Please explain***

```javascript
const emojis = ["✨", "🥑", "😍"];

emojis.map((x) => x + "✨");
emojis.filter((x) => x !== "🥑");
emojis.find((x) => x !== "🥑");
emojis.reduce((acc, cur) => acc + "✨");
emojis.slice(1, 2, "✨");
emojis.splice(1, 2, "✨");
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

_Answer_and_Explain: D. works as expected. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this method do? Please explain***

```javascript
JSON.parse();
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

_Answer_and_Explain: D. it is what it is.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let name = "Lydia";

function getName() {
  console.log(name);
  let name = "Sarah";
}

getName();
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

_Answer_and_Explain: D. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function* generatorOne() {
  yield ["a", "b", "c"];
}

function* generatorTwo() {
  yield* ["a", "b", "c"];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

_Answer_and_Explain: C. works as expected.
In generatorTwo, we use the yield* keyword. This means that the first yielded value of two, is equal to the first yielded value in the iterator. The iterator is the array ['a', 'b', 'c']. The first yielded value is a, so the first time we call two.next().value, a is returned.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(`${((x) => x)("I love")} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

_Answer_and_Explain: A. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will happen? Please explain***

```javascript
let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

_Answer_and_Explain: C. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which method(s) will return the value `'Hello world!'`? Please explain***

```javascript
const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

_Answer_and_Explain: B. works as expected.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

_Answer_and_Explain: C. works as expected, spreading an object creates a shallow copy of that object.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output***

```js
if(2 == true) // returns false

if(2 == false) // returns false
```

_Answer_and_Explain: okayyyyyy?????

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time? Please explain***

```js
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // find the sum of the input array
  // then subtract that sum from the sum of the range
  let sum = 0;

  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sum += arrayOfIntegers[i];
  }

  let rangeSum = 0;

  for (let i = upperBound; i >= lowerBound; i--) {
    rangeSum += i;
  }

  return rangeSum - sum;
}

// Output
// 8 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How will you remove duplicates from an array in JavaScript? Please explain***

**a.) Using set()**  
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const namesWithoutDuplicate = new Set(names);
```
**b.) Using filter()**   
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const namesWithoutDuplicate = names.filter((name, index, array) => {
  return array.indexOf(name) === index;
});
```
**c.) Using forEach()**  
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const namesWithoutDuplicate = [];
names.forEach((name) => {
  if (!namesWithoutDuplicate.includes(name)) {
    namesWithoutDuplicate.push(name);
  }
});
```

**d.) Using set()** 

```js
// ES6 Implementation
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const arrayWithoutDuplicate = [...new Set(array)];

```

**e.) Using Hashmap** 
```js
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const namesWithoutDuplicate = new Map();
names.forEach((name) => {
  if (!namesWithoutDuplicate.has(name)) {
    namesWithoutDuplicate.set(name, name);
  }
});
```

```js
// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  const newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
  return newArray;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Given a string, reverse each word in the sentence***

```js
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW

var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Implement enqueue and dequeue using only two stacks***

Enqueue means to add an element, dequeue to remove an element.

```js
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  stackOutput.push(stackInput.pop());
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How would you use a closure to create a private counter? Please explain***

```js
function counter() {
  let counter = 0;
  return {
    add: (num) => {
      counter += num;
    },
    retrieve: () => counter
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to divide an array in multiple equal parts in JS? Please explain***

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lenth = 3;

function split(len) {
  
}
split(lenth);

// Output
(3) [1, 2, 3]
(3) [4, 5, 6]
(3) [7, 8, 9]
(1) [10]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a random integers function to print integers with in a range? Please explain***

```js
/**
 * function to return a random number 
 * between min and max range
 * 
 * */
function randomInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
}
randomInteger(1, 100); // returns a random integer from 1 to 100
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to convert Decimal to Binary in JavaScript? Please explain***

**Solution 01:**

```js
function DecimalToBinary(number) {
  return number.toString(2);  
}

DecimalToBinary(10);
```

**Solution 02:**

```js
let val = 10;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you make first letter of the string in an uppercase? Please explain***

```js
function capitalizeFirstLetter(string) {
  return string.split(' ').map(([firstLetter, ...rest]) => {
    return firstLetter.toUpperCase() + rest.join('');
  }).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // Hello World
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a function which will test string as a literal and as an object? Please explain***

```js
function check(str) {
  return typeof str;
}

var ltrlStr = "Hi I am string literal";
var objStr = new String("Hi I am string object");

console.log(check(ltrlStr)); // It is a string literal
console.log(check(objStr)); // It is an object of string
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you find min and max value in an array? Please explain***

```js
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min(...arr);
}
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMin(marks));
console.log(findMax(marks));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you find min and max values without Math functions? Please explain***

```js
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr = []) {
  return arr.reduce((min, current) => {
    if (current < min) {
      return current;
    }
    return min;
  }, arr[0])
}

function findMax(arr) {
  return arr.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, arr[0])
}

console.log(findMin(marks));
console.log(findMax(marks));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write code for merge two JavaScript Object dynamically? Please explain***

Let say you have two objects

```js
const person = {
  name: "Tanvi",
  age: 28
};

const address = {
  addressLine1: "Some Location x",
  addressLine2: "Some Location y",
  city: "Bangalore"
};
```

Write merge function which will take two object and add all the own property of second object into first object.

```js
const merge = (firstObject, secondObject) => {
  for (const key in secondObject) {
    firstObject[key] = secondObject[key];
  }
  return firstObject;
}

merge(person , address); 
 
/* Now person should have 5 properties 
name , age , addressLine1 , addressLine2 , city */
```

**Method 1: Using ES6:**

```js
const merge = (firstObject, secondObject) => {
  return Object.assign(firstObject, secondObject);
}

console.log(merge(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

**Method 2: Without using built-in function:**

```js
function mergeObject(toObj, fromObj) {
  return {
    ...toObj,
    ...fromObj
  }
}

console.log(mergeObject(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>