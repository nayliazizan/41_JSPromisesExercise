const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['cleanser', 1], ['moisturizer', 2]],
  giftcardBalance: 200.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
