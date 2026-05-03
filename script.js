// total
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let title = document.getElementById("titleInput");
let category = document.getElementById("category");
let count = document.getElementById("count");
let mood = "submit";
let glob;

let gettotal = () => {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#02a00f";
  } else {
    total.innerHTML = "total";
    total.style.background = "#a00d02";
  }
};

//create
let productarr;
if (localStorage.product != null) {
  productarr = JSON.parse(localStorage.product);
} else {
  productarr = [];
}

let submit = document.getElementById("submit");

submit.onclick = () => {
  let newproduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    discount: discount.value,
    ads: ads.value,
    total: total.innerHTML,
    category: category.value,
    count: count.value,
  };

  if (mood === "submit") {
    if (newproduct.count > 1) {
      for (let index = 0; index < newproduct.count; index++) {
        productarr.push(newproduct);
      }
    } else {
      productarr.push(newproduct);
    }
  } else {
    productarr[glob] = newproduct;
    mood = "submit";
    submit.innerHTML = "submit";
    count.style.display = "block";
  }

  localStorage.setItem("product", JSON.stringify(productarr));
  cleardata();
  readdata();
  gettotal();
};

//clear inputs
function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  discount.value = "";
  ads.value = "";
  category.value = "";
  total.innerHTML = "total";
  total.style.background = "#a00d02";
}

//read data
function readdata() {
  let table = "";
  for (let i = 0; i < productarr.length; i++) {
    table += `
    <tr>
      <td>${i}</td>
      <td>${productarr[i].title}</td>
      <td>${productarr[i].price}</td>
      <td>${productarr[i].taxes}</td>
      <td>${productarr[i].ads}</td>
      <td>${productarr[i].discount}</td>
      <td>${productarr[i].total}</td>
      <td>${productarr[i].category}</td>
      <td><button onclick="updateproduct(${i})" id="update">update</button></td>
      <td><button onclick="deleteproduct(${i})" id="delete">delete</button></td>
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  let delall = document.getElementById("delall");
  if (productarr.length > 0) {
    delall.innerHTML = `<button onclick="deleallproducts()">delete all products (${productarr.length})</button>`;
  } else {
    delall.innerHTML = "";
  }
}
readdata();

//delete one product
function deleteproduct(i) {
  productarr.splice(i, 1);
  localStorage.product = JSON.stringify(productarr);
  readdata();
}

//delete all products
function deleallproducts() {
  localStorage.clear();
  productarr.splice(0);
  readdata();
}

//update product
function updateproduct(i) {
  title.value = productarr[i].title;
  price.value = productarr[i].price;
  taxes.value = productarr[i].taxes;
  discount.value = productarr[i].discount;
  ads.value = productarr[i].ads;
  category.value = productarr[i].category;
  gettotal();
  count.style.display = "none";
  submit.innerHTML = "update data";
  mood = "update";
  glob = i;
  scroll({ top: 0, behavior: "smooth" });
}

//search logic
let searchmood = "title";
function getsearchmood(id) {
  let search = document.getElementById("ser");
  if (id == "searchTitle") {
    searchmood = "title";
  } else {
    searchmood = "category";
  }
  search.placeholder = "search by " + searchmood;
  search.focus();
  search.value = "";
  readdata();
}

function searchData(value) {
  let table = "";
  for (let i = 0; i < productarr.length; i++) {
    if (searchmood == "title") {
      if (productarr[i].title.toLowerCase().includes(value.toLowerCase())) {
        table += `
          <tr>
            <td>${i}</td>
            <td>${productarr[i].title}</td>
            <td>${productarr[i].price}</td>
            <td>${productarr[i].taxes}</td>
            <td>${productarr[i].ads}</td>
            <td>${productarr[i].discount}</td>
            <td>${productarr[i].total}</td>
            <td>${productarr[i].category}</td>
            <td><button onclick="updateproduct(${i})" id="update">update</button></td>
            <td><button onclick="deleteproduct(${i})" id="delete">delete</button></td>
          </tr>`;
      }
    } else {
      if (productarr[i].category.toLowerCase().includes(value.toLowerCase())) {
        table += `
          <tr>
            <td>${i}</td>
            <td>${productarr[i].title}</td>
            <td>${productarr[i].price}</td>
            <td>${productarr[i].taxes}</td>
            <td>${productarr[i].ads}</td>
            <td>${productarr[i].discount}</td>
            <td>${productarr[i].total}</td>
            <td>${productarr[i].category}</td>
            <td><button onclick="updateproduct(${i})" id="update">update</button></td>
            <td><button onclick="deleteproduct(${i})" id="delete">delete</button></td>
          </tr>`;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
