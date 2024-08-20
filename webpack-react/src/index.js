import add, { subtract, multiply } from './lib'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

let a = 40;
let b = 15;
console.log("Hello !!!");

console.log("Add ", add(a, b));
console.log("Sub ", subtract(a, b));
console.log("Multiply ", multiply(a, b));

let product = { "id": 1, "title": "iPhone 15", "price": 89000.00 };

let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } };
        console.log(element);
        return element
    }
}

// XML and JavaScript for Interpolation
let ProductCard = <div className="card" style={{ "width": "50px" }}>
    <h1 className="card-header">
        {product.title}
    </h1>
    <span>
        Price : {product.price}
    </span>
</div>

console.log(ProductCard);

function render(element, container) {
    let domElement = document.createElement(element.tag);
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    if (element.props) {
        Object.keys(element.props).filter(prop => prop !== 'children').forEach(p => {
            domElement[p] = element.props[p];
        })
    }
    if (element.props.children) { //h1, span are children to div
        element.props.children.forEach(child => render(child, domElement))
    }
    container.appendChild(domElement);
    console.log(container);
}



render(ProductCard, document.getElementById("root"));
