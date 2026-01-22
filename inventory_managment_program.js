/**
 * In this lab, you will build an inventory management program that 
 * will allow you to add, update, find and remove products from the inventory.
 * You will use an array of objects to represent your inventory, 
 * where each object will have name and quantity as the keys.
 */

let inventory = [
    {
    name: "laptop",
    quantity: 20
  }
];

function findProductIndex(productName) {
  let productIndex = -1;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      productIndex = i;
      break;
    }
  }

  return productIndex;
}

function addProduct(product) {
  const productIndex = findProductIndex(product.name);

  if (productIndex !== -1) {
    inventory[productIndex].quantity += product.quantity;
    console.log(`${inventory[productIndex].name} quantity updated`);
  }
  else {
    product.name = product.name.toLowerCase();
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(productName, quantityToSubstract) {
  const productIndex = findProductIndex(productName);

  if (productIndex === -1) {
    console.log(`${productName.toLowerCase()} not found`);
  }
  else if (inventory[productIndex].quantity - quantityToSubstract === 0) {
    inventory.splice(productIndex, 1);
  }
  else if (inventory[productIndex].quantity - quantityToSubstract < 0) {
    console.log(`Not enough ${inventory[productIndex].name} available, remaining pieces: ${inventory[productIndex].quantity}`);
  }
  else {
    inventory[productIndex].quantity -= quantityToSubstract;
    console.log(`Remaining ${inventory[productIndex].name} pieces: ${inventory[productIndex].quantity}`);
  }
}
