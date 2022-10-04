let price = document.getElementById("price");
let wall = document.getElementById("cartwall");
let show = document.getElementById("show");
let total = document.getElementById("total");
let checkout = document.getElementById("checkout");

let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");

let emailbtn = document.querySelectorAll(".emailbtn");
let email1 = document.querySelector(".email1");
let email2 = document.querySelector(".email2");
let subData = JSON.parse(localStorage.getItem("sub-items")) || [];

for (let a = 0; a < emailbtn.length; a++) {
  if (a == 0) {
    emailbtn[a].addEventListener("click", function () {
      let x = email1.value;
      if (x.value != "") {
        let out;
        for (let z = 0; z < subData.length; z++) {
          if (subData[z].email == x) {
            out = true;
            break;
          }
        }
        if (out == true) {
          alert("You are already our registered customer");
        } else {
          alert("Thank you for your trust. Email has been sent!");
        }

        let dataObj = { email: x };
        subData.push(dataObj);
        localStorage.setItem("sub-items", JSON.stringify(subData));
        email1.value = "";
      } else {
        alert("Please enter your email");
        email1.value = "";
      }
    });
  } else if (a == 1) {
    emailbtn[a].addEventListener("click", function () {
      let x = email2.value;
      if (x.value != "") {
        let out;
        for (let z = 0; z < subData.length; z++) {
          if (subData[z].email == x) {
            out = true;
            break;
          }
        }
        if (out == true) {
          alert("You are already our registered customer");
        } else {
          alert("Thank you for your trust. Email has been sent!");
        }

        let dataObj = { email: x };
        subData.push(dataObj);
        localStorage.setItem("sub-items", JSON.stringify(subData));
        email2.value = "";
      } else {
        alert("Please enter your email");
        email2.value = "";
      }
    });
  }
}

cart.addEventListener("click", function () {
  window.location.href = "/HTML/cart.html";
});

logo.addEventListener("click", function () {
  window.location.href = "../index.html";
});

account.addEventListener("click", function () {
  window.location.href = "/HTML/account.html";
});

like.addEventListener("click", function () {
  window.location.href = "/HTML/like.html";
});

let cartData = JSON.parse(localStorage.getItem("cart-items")) || [];
let loginArr = JSON.parse(localStorage.getItem("login-details")) || [];

if(loginArr.length!=0){
    account.setAttribute("src" , "/Images/icons8-user-50.png");
}

let cost = 0;
function displayFun(read) {
  wall.innerHTML = "";
  read.forEach(function (elem, i) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    let brand = document.createElement("h1");
    brand.innerText = elem.brand;

    let desc = document.createElement("p");
    desc.innerText = elem.desc;

    let price = document.createElement("p");
    price.innerText = `$${elem.price}`;
    price.setAttribute("id", "price");
    cost += (Number(elem.price) * Number(elem.quantity));
    let count = 0;
    price.addEventListener("click", function () {
      if (count % 2 == 0) {
        let res = elem.price * 80;
        price.innerText = "";
        price.innerText = `₹${res}`;
        count++;
      } else {
        price.innerText = `$${elem.price}`;
        count++;
      }
    });

    let quantity = document.createElement("div");
    quantity.setAttribute("id", "count");
    let minus = document.createElement("div");;
    minus.innerText = "-";
    minus.setAttribute("id", "minus");

    minus.addEventListener("click", function(){
      if(elem.quantity!=1){
        elem.quantity--;
        localStorage.setItem("cart-items" , JSON.stringify(read));
        window.location.reload();
      } else{
        read = read.filter(function (el) {
          return elem != el;
        });
        cost -= Number(elem.price);
        localStorage.setItem("cart-items", JSON.stringify(read));
        window.location.reload();
      }
    });

    let display = document.createElement("div");;
    display.innerText = elem.quantity;
    display.setAttribute("id" ,"display");

    let plus = document.createElement("div");
    plus.innerText = "+";
    plus.setAttribute("id", "plus");

    plus.addEventListener("click", function(){
        if(elem.quantity<10){
          elem.quantity++;
          localStorage.setItem("cart-items" , JSON.stringify(read));
          window.location.reload();
        } else{
          alert("Limit exceeded")
        }
    })

    quantity.append(minus,display,plus);


    let likebtn = document.createElement("button");
    likebtn.innerText = "remove";
    likebtn.style.cursor = "pointer";
    likebtn.setAttribute("id", "heart");
    likebtn.addEventListener("click", function () {
      likebtn.innerText = "removed";
      likebtn.style.color = "red";
      read = read.filter(function (el) {
        return elem != el;
      });
      cost -= Number(elem.price);
      localStorage.setItem("cart-items", JSON.stringify(read));
      window.location.reload();
    });

    image.addEventListener("click", function () {
      let prod = [elem];
      let descrpt = read.filter(function (el) {
        return elem.brand == el.brand && elem.category == el.category;
      });

      localStorage.setItem("descrpt", JSON.stringify(descrpt));
      localStorage.setItem("prod", JSON.stringify(prod));
      localStorage.setItem("dataArr", JSON.stringify(descrpt));
      window.location.href = "/HTML/description.html";
    });

    div.append(image, brand, desc, price, quantity, likebtn);
    wall.append(div);
  });
  total.append(cost);
}
displayFun(cartData);

if (cartData.length == 0) {
  let div = document.createElement("div");

  let text = document.createElement("h1");
  text.innerText = "NO PRODUCTS HERE";
  wall.style.display = "block";
  text.style.textAlign = "center";
  text.style.fontFamily = "'Quicksand', sans-serif";
  text.style.color = "rgb(155, 155, 155)";
  text.style.animation = "opac 1s";

  div.append(text);
  div.style.border = "none";
  div.style.marginTop = "0%";
  div.style.padding = "0%";
  show.style.display = "none";
  wall.append(div);
  wall.style.marginTop = "0%";
}

total.style.cursor = "pointer";

let count = 0;
total.addEventListener("click", function () {
  if (count % 2 == 0) {
    let res = cost * 80;
    total.innerText = "";
    total.innerText = `₹${res}`;
    count++;
  } else {
    total.innerText = `$${cost}`;
    count++;
  }
});

checkout.addEventListener("click", function(){

    localStorage.setItem("total" , total.innerText);
    window.location.href = "/HTML/payment.html";

    localStorage.setItem("amount" , cost)
})

let one1 = document.getElementById("one1");
let one = document.getElementById("one");
let nav = document.querySelector("nav");

one.addEventListener("mouseover", function(){
    one1.style.display = "grid";
    nav.style.paddingBottom = "3%";
})
one.addEventListener("mouseout", function(){
  one1.style.display = "none";
  nav.style.paddingBottom = "0%";
})

let two2 = document.getElementById("two2");
let two = document.getElementById("two");

two.addEventListener("mouseover", function(){
  two2.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
two.addEventListener("mouseout", function(){
two2.style.display = "none";
nav.style.paddingBottom = "0%";
})

let three3 = document.getElementById("three3");
let three = document.getElementById("three");

three.addEventListener("mouseover", function(){
  three3.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
three.addEventListener("mouseout", function(){
three3.style.display = "none";
nav.style.paddingBottom = "0%";
})

let five5 = document.getElementById("five5");
let five = document.getElementById("five");

five.addEventListener("mouseover", function(){
  five5.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
five.addEventListener("mouseout", function(){
five5.style.display = "none";
nav.style.paddingBottom = "0%";
})

let six6 = document.getElementById("six6");
let six = document.getElementById("six");

six.addEventListener("mouseover", function(){
  six6.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
six.addEventListener("mouseout", function(){
six6.style.display = "none";
nav.style.paddingBottom = "0%";
})

let eight8 = document.getElementById("eight8");
let eight = document.getElementById("eight");

eight.addEventListener("mouseover", function(){
  eight8.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
eight.addEventListener("mouseout", function(){
eight8.style.display = "none";
nav.style.paddingBottom = "0%";
})

let nine9 = document.getElementById("nine9");
let nine = document.getElementById("nine");

nine.addEventListener("mouseover", function(){
  nine9.style.display = "grid";
  nav.style.paddingBottom = "3%";
})
nine.addEventListener("mouseout", function(){
nine9.style.display = "none";
nav.style.paddingBottom = "0%";
})