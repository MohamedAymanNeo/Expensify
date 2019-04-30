// Object Destructuring

const book = {
    title: 'Mastring JavaScript',
    author: 'John Doe',
    publisher: {
        name: 'Mohamed Ayman',
        age: 25
    }
}

const {title, author} = book;

console.log(`This book which name ${title} is a great book cuz ${author} who written it`);

const {name: publisherName = 'Anonymous', age} = book.publisher;
console.log(`This book was published by ${publisherName} when he was ${age} years old`)




// Array Destructuring

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, ,mediumPrice] = item;

console.log(`a medium ${itemName} is cost ${mediumPrice}`)

