// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  //console.log(price)
  const quantity = product.querySelector(".quantity input").value;
  //console.log(quantity)
    
  const subtotalPrice = price*quantity;
  //console.log(subtotalPrice)

  let subtotal = product.querySelector(".subtotal span");
  //console.log(subtotal)
  subtotal.innerText = subtotalPrice;
  //console.log(subtotal)
  return subtotalPrice;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelectorAll('.product');
  // console.log(singleProduct[0])
  // updateSubtotal(singleProduct[0]);

  // end of test

  // ITERATION 2 & // ITERATION 3
  //... your code goes here
  const productList = document.getElementsByClassName('product');
 
  let sum = 0;
  for (let product of productList) {
     console.log(product)
    //updateSubtotal(product);
    
    sum += updateSubtotal(product);

  }
  

  
  //... your code goes here

  document.querySelector('#total-value span').innerText = sum;


}

// ITERATION 4 - Bonus

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // const parentNode = document.querySelector('#cart tbody');
  // console.log(parentNode)
  // const childNode = document.querySelector('#cart tbody tr');
  // console.log(childNode)  
  // parentNode.removeChild(childNode)

  //console.log(event.target.parentNode.parentNode)
  event.target.parentNode.parentNode.remove();

  calculateAll();

  
}

// ITERATION 5 - Bonus
const productStructure = document.querySelector('.product').cloneNode('true');

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in create is:', target);
  // target the name and unit price input DOM nodes, extract their values
  const nameNewProduct = document.querySelector('#createName').value;

  const priceNewProduct = document.querySelector('#createPrice').value;
  console.log(nameNewProduct, priceNewProduct)

  console.log(productStructure)  

  const parentNode = document.querySelector('#cart tbody');
  console.log(parentNode)


  
  
  
  productStructure.querySelector('.name span').innerText = nameNewProduct;
  
  productStructure.querySelector('.price span').innerText = priceNewProduct;

  productStructure.querySelector('.btn-remove').addEventListener('click', removeProduct);

  parentNode.appendChild(productStructure)

  document.querySelector('#createName').value = "";
  document.querySelector('#createPrice').value = 0;
  
 //------- 

//alternative:
  
  // // target the name and unit price input DOM nodes, extract their values
  // const nameNewProduct = document.querySelector('#createName').value;
  // const priceNewProduct = document.querySelector('#createPrice').value;
  //  console.log(nameNewProduct, priceNewProduct)
  //     const productStructure = document.createElement("tr");
  //         productStructure.classList.add("product");
  //         productStructure.innerHTML =
  //           `<td class="name">
  //             <span>${nameNewProduct}</span>
  //           </td>
  //           <td class="price">$<span>${priceNewProduct}</span></td>
  //           <td class="quantity">
  //             <input class = "input" type="number" value="0" min="0" placeholder="Quantity" />
  //           </td>
  //           <td class="subtotal">$<span>0</span></td>
  //           <td class="action">
  //             <button class="btn btn-remove">Remove</button>
  //           </td>
  //           </tr>`;
  // console.log(productStructure)  

  // const parentNode = document.querySelector('#cart tbody');
  // console.log(parentNode)
  // productStructure.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // parentNode.appendChild(productStructure)
    
 
  calculateAll()
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const buttons = document.querySelectorAll('.btn-remove');

  for (let button of buttons) {
    button.addEventListener('click',removeProduct )
  }

  const createButton = document.querySelector('#create');

    createButton.addEventListener('click', createProduct )

});

