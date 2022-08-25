const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready come get it');
        } else {
            reject(Error('oh no! There was a problem with your order'));
        }
    }, 3000);
})
console.log(breakfastPromise);
breakfastPromise
    .then(val => console.log(val))
    .catch(err => console.log(err));