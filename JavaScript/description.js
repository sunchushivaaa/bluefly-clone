let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");

cart.addEventListener("click", function () {
  window.location.href = "/HTML/cart.html";
});

logo.addEventListener("click", function () {
  window.location.href = "/HTML/index.html";
});

account.addEventListener("click", function () {
  window.location.href = "/HTML/account.html";
});

like.addEventListener("click", function () {
  window.location.href = "/HTML/like.html";
});

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

let dataArr1 = JSON.parse(localStorage.getItem("dataArr"));

let dataArr = JSON.parse(localStorage.getItem("descrpt"));
let prod = JSON.parse(localStorage.getItem("prod"));

let prodwall = document.getElementById("prodwall");
let descriptionwall = document.getElementById("descriptionwall");

let likeData = JSON.parse(localStorage.getItem("like-items")) || [];
let cartData = JSON.parse(localStorage.getItem("cart-items")) || [];

prod.forEach(function (elem) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  let text = document.createElement("p");
  text.innerText = "Liked";
  text.setAttribute("id", "text1");
  text.style.display = "none";

  let image = document.createElement("img");
  image.setAttribute("src", elem.image_url);

  let brand = document.createElement("h1");
  brand.innerText = elem.brand;

  let desc = document.createElement("p");
  desc.innerText = elem.desc;

  let price = document.createElement("p");
  price.innerText = `$${elem.price}`;
  price.setAttribute("id", "price1");
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

  let likebtn = document.createElement("button");
  likebtn.innerText = "❤️";
  likebtn.style.cursor = "pointer";
  likebtn.setAttribute("id", "heart1");
  likebtn.addEventListener("click", function () {
    let res = likeData.filter(function(el){
      return elem.image_url == el.image_url;
    });
    if(res.length>0){
      alert("You are adding it again!");
      window.location.href = "/HTML/like.html";
    } else{
      likebtn.innerText = "";
      text.style.display = "block";
      likeData.push(elem);
      localStorage.setItem("like-items", JSON.stringify(likeData));
    }
  });

  let cartbtn = document.createElement("button");
  cartbtn.innerText = "Add to Cart";
  cartbtn.setAttribute("class", "cart");
  cartbtn.addEventListener("click", function () {
    cartbtn.innerText = "Added";
    cartbtn.style.color = "green";
    cartbtn.style.fontWeight = "bold";
    cartbtn.style.animation = "opac 1s ease";
    let res = cartData.filter(function(el){
      return elem.image_url == el.image_url;
    });
    if(res.length>0){
      res[0]["quantity"]+=1;
      cartData.push(res);
      cartData.pop(res);
      localStorage.setItem("cart-items", JSON.stringify(cartData));

    } else{
      elem["quantity"] = 1;
      cartData.push(elem);
      localStorage.setItem("cart-items", JSON.stringify(cartData));
    }
  });

  let detail = document.createElement("p");
  detail.innerText = elem.details;

  div1.append(text,image, brand, desc, likebtn);
  div2.append(detail, price, cartbtn,)
  prodwall.append(div1,div2);
});

dataArr.forEach(function(elem){

  let div = document.createElement("div");

  let text = document.createElement("p");
  text.innerText = "Liked";
  text.setAttribute("id","text2");
  text.style.display = "none";

  let image = document.createElement("img");
  image.setAttribute("src" , elem.image_url);

  let brand = document.createElement("h1");
  brand.innerText = elem.brand;

  let desc = document.createElement("p");
  desc.innerText = elem.desc;

  let price = document.createElement("p");
  price.innerText = `$${elem.price}`;
  price.setAttribute("id", "price2");
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

  let likebtn = document.createElement("button");
  likebtn.innerText = "❤️";
  likebtn.style.cursor = "pointer";
  likebtn.setAttribute("id" , "heart2")
  likebtn.addEventListener("click", function(){
    let res = likeData.filter(function(el){
      return elem.image_url == el.image_url;
    });
    if(res.length>0){
      alert("You are adding it again!");
      window.location.href = "/HTML/like.html";
    } else{
      likebtn.innerText = "";
      text.style.display = "block";
      likeData.push(elem);
      localStorage.setItem("like-items", JSON.stringify(likeData));
    }
  })

  let cartbtn = document.createElement("button");
  cartbtn.innerText = "Add to Cart";
  cartbtn.setAttribute("id" , "cart");
  cartbtn.addEventListener("click", function(){
  cartbtn.innerText = "Added";
  cartbtn.style.color = "green";
  cartbtn.style.fontWeight = "bold";
  cartbtn.style.animation= "opac 1s ease";
  let res = cartData.filter(function(el){
    return elem.image_url == el.image_url;
  });
  if(res.length>0){
    res[0]["quantity"]+=1;
    cartData.push(res);
    cartData.pop(res);
    localStorage.setItem("cart-items", JSON.stringify(cartData));

  } else{
    elem["quantity"] = 1;
    cartData.push(elem);
    localStorage.setItem("cart-items", JSON.stringify(cartData));
  }
  })

  image.addEventListener("click", function(){

    let prod = [elem];
    let descrpt = dataArr1.filter(function(el){
      return elem.brand == el.brand && elem.desc!=el.desc && elem.category == el.category;
    });

    localStorage.setItem("descrpt" , JSON.stringify(descrpt));
    localStorage.setItem("prod", JSON.stringify(prod));
    window.location.href = "/HTML/description.html";
  });
  
  div.append(text,image,brand,desc,price, likebtn, cartbtn);
  descriptionwall.append(div);
});

