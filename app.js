import data from './product.json';
console.log(data);


fetch('./product.json')
.then((response) => response.json(""))
.then((json) => console.log(json));