import add, {subtract, multiply} from './lib'
import './styles.css'

let a = 40;
let b = 15;
console.log("Hello !!!");

console.log("Add ", add( a, b));
console.log("Sub ", subtract(a, b));
console.log("Multiply ", multiply(a,b));

let product = {"id": 1, "title": "iPhone 15", "price": 89000.00};

let React = {
    createElement: (tag, props, ...children) => {
        var element = {tag, props : {...props, children}};
        console.log(element);
        return element
    }
}

// XML and JavaScript for Interpolation
let ProductCard = <div className="card" style={{"width": "50px"}}>
    <h1 className="card-header">
        {product.title}
    </h1>
    <div>
        Price : {product.price}
    </div>
</div>

console.log(ProductCard);


