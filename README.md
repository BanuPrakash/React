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

============

Life cycle methods, how to avoid re-rendering of components,
functional components and hooks

=======================================================

Recap of Day 1:
* Why nodejs?
* use of build tools like webpack
* babel --> transcompiler or transpiler [Higher version of JS to lower version JS]
* @babel/preset-env: syntax transforms and polyfills
* @babel/preset-react: to handle JSX [ convert JSX to JS object]
* React.createElement() and render() methods
* create-react-app: to create a scaffolding /boilerplate code  for react applications, built on top of webpack
--> public/index.html
--> src/index.js
--> src/App.js
--> src/App.css

* Different ways we create react elements
1) React.createElement()
2) functional components: return JSX
3) class component: can have state and behaviour
render() returns JSX
4) event handling
onXXX() like onClick(), onChange(), onMouseOver(), ....

================================================================

Task: Recipe application

========================================

Day 2:

Developer 1 develops FriendRow.jsx
Developer 2 develops FriendList.jsx

Assume delete doesn't work.

Testing is a must
* Unit testing
* Integration testing
* E2E testing


Unit testing in JS, different libraries are available:
1) Jasmine << preffered by Angular developers>>
2) Mocha << generally for Server side applications>>
3) Jest <<prefered by React>>

RTL: React testing library provided for Unit testing is built on top of JEST

Testing is all about AAA: Assemble Action Assert
Unit test files are of pattern *.test.js

```
RTL Types of Queries:
for Single element fetching
* getBy...
* queryBy...
* findBy...

for Collection:
* getAllBy...
* queryAllBy...
* findAllBy...


getByRole
getByLabelText
getByPlaceholderText
getByText

```
 <h1>Friends Application</h1>
 let h1Eleme = screen.getByText(/Friends Application/);

<input type="text" placeholder="search by name" onChange={evt => props.filterEvt(evt.target.value)}/>
screen.getByPlaceholderText('search by name');
```

Code Coverage: How much of your code has been tested --> configured in package.json
npm test -- --coverage --watchAll

----

For Unit testing: dependencies has to be mocked

```
<FriendRow
                    key={friend.id}
                    person={friend}
                    delEvent={this.deleteFriend} />

person and delEvent are dependecies; we need to mock them

```

Component Life Cycle methods of React:

Mounting:
constructor() -> render() -> componentDidMount()
Initialize data --> render() --> Make API call to server, update state --> leads to Phase 2 --> Updating Phase

Never make API calls in constructor() --> Leads to FCP web vitals
First Contentful Paint

Updating Phase: whenever state or props from parent changes

shouldComponentUpdate() --> true --> render() --> componentDidUpdate()
any dependent API call should be done in componentDidUpdate()

shouldComponentUpdate() --> false --> render() is not called 

Unmounting Phase: when component is getting destroyed --> componentWillUnmount();
any subscriptions we need to unsubscribe 
Example: components gets notification from Firebase, 
Display Dialog box before deleting component

=====
Importance of shouldComponentUpdate() after the break


codepen.io

Pen Settings:
1) JS Preprocessor --> Babel
JS libraries:
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

2) Behaviour
disable auto save and auto preview

Child Components are unneccessarily re-rendered --> Issue
```
class ParentComponent extends React.Component {
  state = {
    name: 'Roger',
    age: 18
  }
  
  updateAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  updateName() {
    this.setState( {
      name: this.state.name +"**"
    })
  }
  
  render() {
    console.log("Parent renders...")
    return <div>
        <NameComponent name={this.state.name} /> <br />
        <AgeComponent age={this.state.age} /> <br />
      <button type="button" onClick={() => this.updateAge()}>Change Age </button>
      <button type="button" onClick={() => this.updateName()}>Change Name </button>
     </div>
  }
}

class AgeComponent extends React.Component {
  render() {
    console.log("AgeComponent renders");
    return <div>
        Age: {this.props.age}
      </div>
  }
}

class NameComponent extends React.Component {
  render() {
    console.log("NameComponent renders");
    return <div>
        Age: {this.props.name}
      </div>
  }
}
       
ReactDOM.render(<ParentComponent />, document.getElementById("root"));
```    

Solution: shouldComponentUpdate() life cycle method
https://codepen.io/banuprakash/pen/JjQymvM?editors=1011
```
class AgeComponent extends React.Component {
  shouldComponentUpdate(prevProps,prevState) {
    if(prevProps.age === this.props.age) {
      return false;
    }
    return true;
  }
  render() {
    console.log("AgeComponent renders");
    return <div>
        Age: {this.props.age}
      </div>
  }
}

class NameComponent extends React.Component {
  
  shouldComponentUpdate(prevProps,prevState) {
    if(prevProps.name === this.props.name) {
      return false;
    }
    return true;
  }
  render() {
    console.log("NameComponent renders");
    return <div>
        Age: {this.props.name}
      </div>
  }
}
```

For Functional components to avoid re-rendering use Memoization pattern

```
class ParentComponent extends React.Component {
  state = {
    name: 'Roger',
    age: 18
  }
  
  updateAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  updateName() {
    this.setState( {
      name: this.state.name +"**"
    })
  }
  
  render() {
    console.log("Parent renders...")
    return <div>
        <MemoName name={this.state.name} /> <br />
        <MemoAge age={this.state.age} /> <br />
      <button type="button" onClick={() => this.updateAge()}>Change Age </button>
      <button type="button" onClick={() => this.updateName()}>Change Name </button>
     </div>
  }
}

function AgeComponent(props) {
  console.log("AgeComponent renders");
  return <div>
      Age: {props.age}
    </div>
}

function NameComponent(props) {
  console.log("NameComponent renders");
  return <div>
      Age: {props.name}
    </div>
}

let MemoName = React.memo(NameComponent);
let MemoAge = React.memo(AgeComponent);
ReactDOM.render(<ParentComponent />, document.getElementById("root"));
```

==============================
Currently we are in React 18 version

React Context: to avoid props drill was introduced in React 16.8 version
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

https://codepen.io/banuprakash/pen/YzoaZRb?editors=1010

```
let UserContext = React.createContext(); // central placholder for storing data --> Heap
class ParentComponent extends React.Component {
  state = {
    name: 'Roger',
    age: 18
  }
  
  updateAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  render() {
    return <div>
      <UserContext.Provider value={{name: this.state.name, age: this.state.age}}>
          <First/>
          <button type="button" onClick={() => this.updateAge()}>Change Age </button>
      </UserContext.Provider>
     </div>
  }
}


function First() {
  return <Second />
}

function Second() {
  return <Third />
}

function Third() {
  return <UserContext.Consumer>
      {
      value => {
        return <div>
            Name: {value.name} <br />
            Age : {value.age}
          </div>
      }
    }
    </UserContext.Consumer>
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"));

```
React Hooks:
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Class Components: state and life cycle methods
Drawback: extends Component --> inherited --> too many things are inherited, we may need only few base class features.
That makes class components heavy

npx create-react-app hooksdemo

React Hooks:
1) useState --> to add state in functional component
2) useEffect --> simulate life cycle methods in functional component
```
componentDidMount
useEffect(() => {
    // gets called once first time when component is loaded
},[])

componentDidUpdate
useEffect(() => {
    // gets  called every time when state or props change
})


componentDidUpdate
useEffect(() => {
    // gets  called name changes
}, [name])

```

3) useContext --> hook to simply Context Consumer
Old Code:
```

function Third() {
  return <UserContext.Consumer>
      {
      value => {
        return <div>
            Name: {value.name} <br />
            Age : {value.age}
          </div>
      }
    }
    </UserContext.Consumer>
}
```
New Code:
```
function Third() {
  let {name, age} = React.useContext(UserContext);
       return <div>
            Name: {name} <br />
            Age : {age}
          </div>
}
```

4) useReducer() is a hook which should be used instead of useState() if
a) state mutation depends on previous state
b) conditionally mutate the state
```
State:
{
    cartItems: [...],
    total: 2441
    quantity: 2
}

Different Actions:
ADD_TO_CART, newItem
REMOVE_FROM_CART, id
CLEAR_CART
```

Action object contains type and payload?:
Example:
```
{
    type: 'ADD_TO_CART',
    payload: {id:1, name: 'A", price: 3434}
}

{
    type: 'REMOVE_FROM_CART',
    payload: 3
}

{
    type: 'CLEAR_CART'
}
```

Reducer functions --> (state, action) => return state

Counter with INCREMENT, DECREMENT, RESET options

==============

SOLID Design Princple

S --> Single Responsibility 

Cyclomatic Complexity

==================================================

Single Page Application --> Shopping Application
* Context
* Hooks
* react-router-dom
* bootstrap
* react-bootstrap
* font-awesome

react-router-dom: different URLs will display different components
```
http://localhost:3000/products --> <ProductList />
http://localhost:3000/cart --> <CartComponent />
http://localhost:3000/details/3 --> <Details />
http://localhost:3000/new_product --> <ProductForm />
http://localhost:3000/dsfds --> <Default />

```
1) NavbarComponent
2) ProductList
3) ProductCard
4) CartComponent
5) CartList
6) ProductForm
7) Default
8) Details


steps:
1) npx create-react-app shopapp
2) Add Extenstion
ES7+ React/Redux/React-Native snippets --> dsznajder
3) 
shopapp> npm i bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 

Server Side routing
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
use  href="/users"

Client Side Routing
Different URL --> DifferentComponent is rendered 
use Link

=======

Thinking in React:

Atoms --> Molecules --> Organisms --> Templates --> Pages

Atoms:
Basic buidling blocks of matter, such as Button, input, label, image. These are not useful on their own

Molecules:
Grouping atoms together: Example --> Card, Navbar, Panel

Organisms:
Combining molecules together: --> List of Cards...

=============

99% of the time we don't build atoms, we pick it from different resusable component providers like:
1) react-bootstrap
2) Adobe web components
3) MUI
4) PrimeReact
5) KendoUI

45 -50% of time molecules are available

===

A single bundle.js file is created which contains all the components [generally it will be 50+ components in an medium sized application]

A Network call goes to server to download bundle.js; until bundle.js is not downloaded --> Blank Screen ---> FCP --> First Contentful Paint Web Vitals isses [ should be less than 1.8 sec]

Solution: Lazy load components which are not required initially; only required things load eagerly

=============================

Recap of Day 2:
* Context --> place holder for data to avoid props-drill; Provider places data into the context; Consumer can access data present in context; useContext() is a hook which can be used in functional components for Consumer
* shouldComponentUpdate() can be used to avoid unneccesary re-rendering of components; for functional components use memo()
* componentDidMount(): is called after first rendering; place where API calls should be made and not in constructor --> FCP
* componentDidUpdate(): will be called whenever state or props changes; place where dependent API calls should be made
* React Hooks: --> only for functional components; start with "use"
1) useState() to add state members to functional components
2) useReducer() also adds state to functional components; use it only in scenario where mutation depends on previous state, conditionally update the state
3) useContext()
4) useEffect(): for life cycle methods like componentDidMount(), componentDidUpdate(), componentWillUnmount()

* react-router-dom: client side routing; lazy loading of bundles with Suspense.

======================

Day 3:
useFetch() custom hooks

Check the code,
implement Remove item from Cart

checkout() --> place order << write order to server>>, clear cart, redirect to products page

==========

json-server : Fake RESTApis

data.json --> provides Endpoints, can perform CRUD operations

shopapp> npx json-server --watch data.json --port 1234

shopapp> npm i axios

Link is for client side routing
href is for server side routing

ProductCard.jsx and Details.jsx

===========

* Controlled Components
In React, the Controlled Component pattern involves managing the DOM / component's state through React's state system
Example:
```
export default function ProductForm() {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);

    function submit() {
        ..
    }
  return (
    <div>
        Title : <input type="text" onChange={(evt) => setTitle(evt.target.value)} /> <br />
        Price : <input type="number" onChange={evt => setPrice(evt.target.value) } /> <br />
        <button type="button" onClick={submit}>Add Product </button>
    </div>
  )
}

```
* Uncontrolled Components
Uncontrolled Component pattern involves letting the DOM handle the component’s state.
Example:
```
export default function ProductForm() {
    let titleRef = useRef();
    let priceRef = useRef();
    function submit() {
       let product = {
        title: titleRef.current.value,
        price: priceRef.current.value
       }
    }
  return (
    <div>
        Title : <input type="text" ref={titleRef} /> <br />
        Price : <input type="number"  ref={priceRef}/> <br />
        <button type="button" onClick={submit}>Add Product </button>
    </div>
  )
}

```
Search Params:
```
http://server.com:8080?page=3&limit=10

import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  function getData() {
    let page = searchParams("page");
    let limit = serachParams("limit");

  }
}
```

React Hooks:
1) useState()
2) useEffect()
3) useReducer()
4) useContext()
5) useParams()
6) useSearchParams()
7) useNavigate()
8) custom hook useFetch()
9) useRef()

---------

React 18 vs previous version of React

Older versions of React used Stack architecture
REact 18 uses Fiber Architecture and supports concurreny

https://claudiopro.github.io/react-fiber-vs-stack-demo/

let [count, setCount] = useState();
<div>
    <h1>
        Count : {count}
    </h1>
    <span>
        <button onClick={() => setCount(count + 1)}> + </button>
    </span>
</div>

Fiber nodes

Preempt

High Priorirty task can execute

node_modules/react-dom/cjs/react-dom.development.js

```
function App() {
 const [count, setCount] = useState(0);
  return (
   <div>
      <h1> React 18 Example</h1>
      <span>Count : {count}</span>
      <button type="button" onClick={() => setCount(count+1)}>+</button>
   </div>
  );
}

export default App;

```
performUnitOfWork: 26586
beginWork: 21555
completeWork: 22103
commitRootImpl: 26730

React 18: considers user events as high priority over DOM updates

React 18 : Automatic Batching

======
Performance:
Step 1:
Lazy load MyComponent

useCallback ==> memoize a function reference

useMemo() is used to memoize the return value of a function


Redux: Predictable State Managenent

===========

Day 4

Recap of Day 3:
```
 * Completed the application with
 1) Context, reducers
 2) useParams()
 3) Controlled and Unctrolled components
 4) json-server to FAKE RESTApis
 5) axios --> Http client library to perform CRUD operation [instead of fetch]

* React 18 vs older versions
1) React 18 is completly based on Fiber Architecture instead of older Stack Architecture
Fiber node --> Perform Unit if Work [thread]

Fiber node ---> High Priority Thread can execute <<User event threads>> --->Fiber Node

2) Automatic Batching
useEffect(() => {
  api call
  setThat();
  setThis();
  setSomeThing();
})

3) useMemo() is different from memo()

memo() is to memoize a Component Props to avoid re-rendering ==> shouldComponentUpdate()

useMemo() is to memoize the result of function call;
  Assume Parent passes "no" to the component
  if parent has passed 34 previouly, next time also it passes 34
  let result = useMemo(() => fibanocci(no), [no]);

useCallback() check:
https://codepen.io/banuprakash/pen/JjQymvM?editors=1011
```

Predictable State Managenment:
1) Context was never intended for state management
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

2) Flux
3) Redux
4) Mobx
5) ObservableRx
6) Recoil
7) zustand

Why do we need 3rd party state management libraries?
1) Predictable
2) Time travel debugging
3) Context is not good for big application; lots of state exists in bigger application like
profile, products, cart, messages, notifications,...
4) Developers working on state managemnet need not know anything about UI. State manageent library once built can be integrated with any UI libraries like :Angular, Vue, Svelte, React, simple JS, jQuery or can be used even in server side code
5) Good for Micro-frontend. Micro frontends are a front-end web development pattern that breaks down applications into smaller, independent modules

=================================================

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => dispatch({type:'ADD_TO_CART', payload: item}),
    increment: id => dispatch({type:'INCREMENT', payload: id}),
    clear: () => dispatch({type:'CLEAR_CART'})
  }
}


props.addToCart(...)

https://immutable-js.com/
https://immerjs.github.io/immer/

===========

 npx create-react-app contactmanager

contactmanager> npm i redux react-redux
```
state = {
  contacts: [],
  profile: {
      "avatar": "banu.png", 
      "user": "Banu Prakash"
  }
}
``

Old Code:
```

function App(props) {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  function submit() {
    let contact = {
      email,
      name
    }
    props.addContact(contact);
  }
  return (
    <div className="App">
      <h1> Hello {props.profilepic} </h1>
      <button type="button" onClick={props.clearContacts}>Clear Contacts</button>
      <form>
        Email <input type='email' onChange={evt => setEmail(evt.target.value)} /> <br />
        Name <input type='text' onChange={evt => setName(evt.target.value)} /> <br />
        <button type='button' onClick={submit}>Add Contact</button>
      </form>
      {
        props.contactlist.map(contact => <ContactView
          key={contact.email} contact={contact} delEvt={props.removeContact} />)
      }
    </div>
  );
}
```

Where Redux should not be used?
1) result of API call ==> Context is good enough , avoid this also --> Pagination

caniuse.com

Where to use?
1) client has to manage the data until it pushes to the server
like: shopping cart, multipage form submission, profile update, custom settings

=====================

Redux Toolkit
https://redux-toolkit.js.org/ ==> simplify Redux and advance features

* Simplified with less boilerplate code
* Opinionated: Many things are configured out of box like REDUX_DEVTOOLS_EXTENSION is included 
* built-in immutable update logic
* lots of additional features included, not just plain state management

Convert "shopapp" to use RTK instead of Context
1) download shopapp-rtk.zip
2) shopapp-rtk> npm i @reduxjs/toolkit react-redux
3) remove references to Context
* delete context and reducers folder
* index.js remove CartContextProvider
* NavbarComponent.jsx
* ProductCard.jsx
* CartList.jsx
* CartComponent.jsx

shopapp-rtk % npx json-server --watch data.json --port 1234
shopapp-rtk % npm start

==========

createStore() ===> configureStore()

createSlice() ==> configure actions and reducers

```
const slice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state) => state - 1,
    reset: (state) => 0
  }
})

actions

slice.actions.increment(2)
slice.actions.decrement()
```

No need for connect(mapStateToProps, mapDispatchToProps)(App);

Hooks:
useSelector() The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

useDispatch() The selector is approximately equivalent to the mapDispatchToProps argument to connect conceptually.

==================
Redux is synchronous: --> dispatch action ==> state updates --> update state passed to component to rerender

Redux Async logic
https://redux.js.org/tutorials/fundamentals/part-6-async-logic

Async logic redux needs middleware like:
* Thunk
* Saga


RTK Query: advance data fetching and caching tool instead of createSlice and createAsyncThunk

RTK Polling

```
const {data} = useCustomerQuery(id, {
  pollingInterval : 3000
});

return  <div>
  {data...}
</div>

```

https://theodorusclarence.com/blog/nextjs-fetch-method#code-example

https://remix.run/docs/en/main

https://medium.com/@future_fanatic/next-js-vs-remix-choosing-the-right-framework-for-your-project-54a9753fcae9