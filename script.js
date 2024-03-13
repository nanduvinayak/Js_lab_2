// Define the ToyCar class with properties
class ToyCar {
    constructor(Name, brand, color, material, scale, price, availability, ageGroup, dimensions, weight, sku, category, description, rating, reviews) {
      this.Name = Name;
      this.Brand = brand;
      this.Color = color;
      this.Material = material;
      this.Scale = scale;
      this.Price = price;
      this.Availability = availability;
      this.Age_Group = ageGroup;
      this.Dimensions = dimensions;
      this.Weight = weight;
      this.Sku = sku;
      this.Category = category;
      this.Description = description;
      this.Rating = rating;
      this.Reviews = reviews;
    }
}

// Create an instance of ToyCar
let speedyRacer = new ToyCar("Speedy Racer", "ToySpeed", "Red", "Metal", "1:18", "$25.99", "In Stock", "3+ years", "5 x 2 x 1.5 inches", "0.5 pounds", "TSR001", "Racing Cars", "A beautifully crafted metal racing car toy", "4.5", "1500");

// Function to display product details
function displayProductDetails() {
    let list = document.getElementById('productList');
    for (let key in speedyRacer) {
      let listItem = document.createElement('li');
      listItem.textContent = `${key}: ${speedyRacer[key]}`;
      list.appendChild(listItem);
    }
}

// Function to update a property of the toy car
function updateProperty() {
    let property = document.getElementById('property').value;
    let newValue = document.getElementById('newValue').value;
    if (property in speedyRacer) {
      speedyRacer[property] = newValue;
      document.getElementById('productList').innerHTML = ''; // Clear the list before re-displaying updated details
      displayProductDetails();
    } else {
      alert('Invalid property name');
    }
}

// Ensure the product details are displayed as soon as the page loads
window.onload = displayProductDetails;
