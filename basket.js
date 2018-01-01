//Create an class that represents a shopping basket. It should have a property, items, that keeps track of the items in the basket. It should have an add method to add items to the basket. It should have a total method that returns the value of all the items' prices. It should have a list method that returns an array of item names.
//items property (keep track of items in basket, .add method (adds items to basket), .total method (returns value of all item prices, .list method (cretes an array of item names)

class Basket {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    total() {
        return this.items.reduce((total, obj) => {
            // ideally, this would just be return total + obj.price but numbers are weird in JS
            return ((total * 1e12) + (obj.getPrice() * 1e12)) / 1e12;
        }, 0);
    }

    list() {
        return this.items.map(obj => obj.getName());
    }
}

class BasketItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

// test code
let basket = new Basket();

let item1 = new BasketItem("coffee", 3.50);
let item2 = new BasketItem("tea", 2.50);

basket.add(item1);
basket.add(item2);

basket.total(); // 6

basket.list(); // ["coffee", "tea"]
