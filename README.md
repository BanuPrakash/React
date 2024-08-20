# REACT

Banuprakash C

Full Stack Architect,

Co-founder & CTO, Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:

1) NodeJS Latest LTS 

2) Chrome Web Browser

3) Visual Studio Code

=====================

Topics:
Introduction to Rendering
1) NodeJS & webpack
2) React demystify without using react libraries
3) small application using create-react-app, testing
4) class component and life-cycle methods
5) functional components and hooks
6) React Context
7) Build one application using react-router-dom, context, hooks, SPA with RWD, react-bootstrap...
8) Predictable state managment with Redux and RTK
9) Optionally Mobx [compare with REDUX]

====================================

Rendering: data ---> Presentation

* Server Side Rendering
Pros:
--> thin client [no need for any application running on client]
--> SEO 
Cons:
--> heavy payload
--> can't have hetergenous clients [ need browers on client] {TV<<OTT>> , mobile , Desktop}

* Client Side Rendering
Pros:
--> can have hetergenous clients like Desktop <<Proton>>, Web browsers, TV , Mobile
--> light payload

Cons:
--> Client machine needs an application running and it is heavy.
--> not optimized for SEO

---
A good option is have a blend of CSR and SSR

==================================================
Client Side Rendering: Restricted to Browser now.

1) DOM - document object model for Dynamic pages
document.createElemement("div")
docuemnt.addEventListener()
document.appendChild()... 

2) jQuery library simplified the way we handle DOM

$("<div/>") same as document.createElemement("div")

$("#btn).on("click", fn);
same as
document.getElementById("btn").addEventListener("click", fn);

3) Templates
* underscore
* jquery
* Handlebars
* Mustache
* Pug
* Jade
* Knockout
...


```
Template:

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>

```

Payload from Server:
```
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}
```

Output:
```
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>
```
With DOM:
```

var ul = document.createElement("ul");
ul.addAddtribute("class", "people_list");

people.forEach(p => {
    var li = document.createElement("li");
    var txt = document.createTextNode(p);
    li.appendChild(txt);
    ul.appendChild(li);
});
..
```


4) MVC Architecture was popular for UI
Model View Controller
Model --> data
View --> Presentation
Controller --> handling of events

4.1) Backbone library provided Model and Controller support, we could use any of the above templates for View
4.2) AngularJS --> Framework --> Google
4.3) React story with Facebook
* 2010 --> XHP --> XML and PHP --> Marcel Laverdt
* FaxJS--> Jord Walkie
* React --> 2012, 2013 --> Open Source
Khan Academy --> Sophie Alpert
Netflix / Airbnb

Note: React is view library

4.4) Angular --> new version of AngularJS [ complete revamp]
4.5) Vue
4.6) Svelte

=========================================

NodeJS:
* Platform which provides JS engine <<V8>> and libuv C/C++ async library and few ready to use libraries

JS engines: JS needs JS engines for execution
* V8 --> google --> Chrome & NodeJS
* SpiderMonkey --> Firefox
* Rhino --> Mozilla
* Nashorn --> Oracle
* Continnum --> Edge 
* Chakra --> IE

WebApi's are provided by browser for executing async code like setInterval, setTimeout, event listener, fetch aPI

Libuv provides above functionalistes in NodeJS

Why NodeJS for web application development?
1) We can build applications using different languages / versions 
1.1) Latest version of JS
1.2) TypeScript 
1.3) DART
1.4) CoffeeScript
1.5) LiveScript

Target Browser doesn't understand them

a) 
Target Browser assume has JS engine which is compatable with JS version 5 / ES5 version / ECMAScript 5

I write code in ES2020 [ JS 7 ] or ES2015 [JS 6]

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.


b) we can code using TypeScript --> Statically typed

var name:string = "Rajesh";

var age:number = 25;

tsc 

2) Testing
3) Linting --> Static Code analysis
4) Minify / Uglify and Bundle the code

=============================

Build tools:
* Grunt
* Gulp
* Webpack
* vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.


============================================

1) Initialize a Node Project
npm init --y

this creates package.json file; file where all scrips, dependencies , development dependencies are configured


2) Install development depenedencies

npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env html-webpack-plugin webpack-dev-server

* babel-loader loads the imported file using ESM ==> ES 6 Module System
Product.js
.....

other.js
import Product from './Product'

nodeJS by default understands CommonJS module System:
```
    lib.js
    function add() {

    }

    funciton sub() {

    }
i
    // private
    function doTask() {

    }
    module.exports = {
        add, sub
    }

    Other.js
    let {add, sub} = require('./lib');
```

ESM:
```
lib.js
    export function add() {

    }

    export funciton sub() {

    }
i
    // private
    function doTask() {

    }

Other.js

import {add, sub} from './lib'
```

@babel/core ==> babel-transpiller ==> transcompiler
to convert latest JS into older version

@babel/preset-env ==> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) 

syntax transforms Example:
```
    let add = (x,y) => x + y;

    transformed into:

    function add(x,y) {
        return x + y;
    }
```
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

```
Promise.resolve("done"); 

converts into 
import 'core-js/actual/Promise';

Promise.resolve("done"); 

```

==========

all dependencies are installed into "node_modules" folder

 "dev": "webpack --mode development"

 npm run dev

 ```
 
asset bundle.js 4.5 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 331 bytes
  ./src/index.js 186 bytes [built] [code generated]
  ./src/lib.js 145 bytes [built] [code generated]
webpack 5.93.0 compiled successfully in 232 ms
``

npm run prod

```
asset bundle.js 120 bytes [emitted] [minimized] (name: main)
orphan modules 145 bytes [orphan] 1 module
./src/index.js + 1 modules 331 bytes [built] [code generated]

```

webpack-react> npm install


  The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 

  Why hashing in bundle file?
  Browser caches the files

   "start": "webpack serve --mode development",

=====

npm i css-loader style-loader 

Source mapping

=================
@babel/preset-env --> Syntax transform and pollyfill to make code compatable with lower version of JavaScript provided by browsers

npm i @babel/preset-react

@babel/preset-react --> to handle JSX [JavaScript and XML]


JSX => @babel/preset-react ==> looks out for an Object "React" and method "createElement"


https://github.com/chentsulin/awesome-react-renderer

npm i bootstrap

==========================

react and react-dom librarires and using create-react-app tool

create-react-app creates a scaffolding code, Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app

npx create-react-app friendsapp

==========

React elements can be created using:
1) React.createElement()
2) functional component ==> returns JSX
3) Class Component -> state and behaviour
render() returns JSX

=====
delEvent={(id) => this.deleteFriend(id)}/>

Why bind is required?

```
let product = {
    "id": 123,
    "name" : "iPhone 15",
    "updateName" : function(n) {
        this.name = n
    }
}

product.updateName("OnePlus");

let ref = product.updateName; 

ref("Oppo");
product doesn't update name, because context is lost

Solution:
let ref2 = product.updateName.bind(product); // this means product
ref2("Oppo");
```

VDOM --> Virtual DOM
Any changes done to state, it updates VDOM by taking a copy of VDOM,
then it computes diff algorithm between VDOM and VDOM copy.
it updates the actual DOM

https://legacy.reactjs.org/docs/reconciliation.html
Reconcillation: 
whenever state changes, react uses VDOM for updating the UI DOM

