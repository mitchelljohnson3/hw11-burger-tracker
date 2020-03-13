const bg = require('./models/burger.js');
const burger = new bg();

function test() {
    burger.getAll()
    .then((data) => {
        console.log(data);
    });
}

test();