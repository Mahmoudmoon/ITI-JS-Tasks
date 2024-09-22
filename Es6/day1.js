// Object containing laptop data
const products = [
  {
      name: "Laptop A",
      price: 1000,
      description: "High performance laptop with 16GB RAM."
  },
  {
      name: "Laptop B",
      price: 750,
      description: "Affordable laptop with 8GB RAM and SSD storage."
  },
  {
      name: "Laptop C",
      price: 1200,
      description: "Gaming laptop with 32GB RAM and powerful graphics."
  }
];

// Function to display all laptops in the table
function displayProducts(productsToShow) {
  const tableBody = document.getElementById('productsTable');
  tableBody.innerHTML = ''; // Clear the table

  productsToShow.forEach(product => {
      const row = `<tr>
                      <td>${product.name}</td>
                      <td>$${product.price}</td>
                      <td>${product.description}</td>
                   </tr>`;
      tableBody.innerHTML += row;
  });
}

// Display all products initially
displayProducts(products);

// Search function
function searchLaptop() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(product => {
      return product.description.toLowerCase().includes(searchText) || 
             product.price.toString().includes(searchText);
  });

  displayProducts(filteredProducts);
}