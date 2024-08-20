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

