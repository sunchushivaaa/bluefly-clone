let commodity = document.getElementById("commodity");
let price = document.getElementById("price");
let wall = document.getElementById("gucciwall");

let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");

let emailbtn = document.querySelectorAll(".emailbtn");
let email1 = document.querySelector(".email1");
let email2 = document.querySelector(".email2");
let subData = JSON.parse(localStorage.getItem("sub-items")) || [];


for(let a=0; a<emailbtn.length; a++){
    if(a==0){
        emailbtn[a].addEventListener("click", function(){
            let x = email1.value;
            if(x.value != ""){

                let out;
                for(let z=0; z<subData.length; z++){
                    if(subData[z].email==x){
                        out = true;
                        break;
                    }
                }
                if(out==true){
                    alert("You are already our registered customer");
                }else{
                    alert("Thank you for your trust. Email has been sent!");
                }
            
                let dataObj = {"email": x,};
                subData.push(dataObj);
                localStorage.setItem("sub-items", JSON.stringify(subData));
                email1.value = "";
            } else{
                alert("Please enter your email");
                email1.value = "";
            }
        })
    } else if(a==1){
        emailbtn[a].addEventListener("click", function(){
            let x = email2.value;
            if(x.value != ""){

                let out;
                for(let z=0; z<subData.length; z++){
                    if(subData[z].email==x){
                        out = true;
                        break;
                    }
                }
                if(out==true){
                    alert("You are already our registered customer");
                }else{
                    alert("Thank you for your trust. Email has been sent!");
                }
            
                let dataObj = {"email": x,};
                subData.push(dataObj);
                localStorage.setItem("sub-items", JSON.stringify(subData));
                email2.value = "";
            } else{
                alert("Please enter your email");
                email2.value = "";
            }
        })
    }
}

cart.addEventListener("click",function(){
    window.location.href = "/HTML/cart.html";
})

logo.addEventListener("click",function(){
    window.location.href = "../index.html";
})

account.addEventListener("click",function(){
    window.location.href = "/HTML/account.html";
})

like.addEventListener("click",function(){
    window.location.href = "/HTML/like.html";
})

let gucciData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/56/27/14/12562714_11933138_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "logo print hoodie",
      details: `Get ready to hit the streets in style with this Gucci'sblack cotton logo print hoodie. Simple, practical, and super cool! Undoubtedly, a statement piece. Featuring a drawstring hood, a printed logo on the front, long sleeves, and a relaxed fit.
  
  Made in Italy`,
      price: "1065",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/40/84/37/15408437_27249800_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "lambskin leather bomber jacket",
      details: `We know you love to make a statement. So let your clothes do the talking with this lambskin leather bomber jacket from Gucci. We're sure it's got plenty to say...
  
  Made in Italy`,
      price: "5612",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/16/36/40/12163640_10322345_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "dragon embroidered jacket",
      details: `True to Alessandro Michele's daring, eccentric vision, this elegant and edgy brown dragon embroidered jacket from Gucci's AW17 collection, make a dynamic choice for day or night. Crafted from camel leather and a wool blend, this jacket features a front zip fastening, two front pockets, long sleeves, a ribbed hem and cuffs, a straight hem, a silk lining, a buttoned stand-up collar, and multicolored embroidered dragons at the front.
  
  Made in Italy`,
      price: "4086",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/95/39/57/12953957_13476845_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "Gucci Logo print denim jacket with floral appliqués",
      details: `Gucci update a classic denim jacket this Spring Summer 2018 for a bold edge on off-duty days. Crafted from luxury Italian blue cotton, this denim jacket features a classic collar, a front button placket, long sleeves, button cuffs, two flaps buttoned chest pocket, side slit pockets, stitching details, and is decorated with ivory lambskin floral appliqués with multicolored gemstone trimming to the shoulders and the iconic Vintage Gucci logo print to the back for a touch of branding.
  
  Made in Italy`,
      price: "5852",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/13/24/45/12132445_10021375_480.jpg",
      brand: "Gucci",
      category: "Belt",
      desc: "signature leather belt",
      details: `Style, it's all about the details. Classy, versatile, and with a super comfortable adjustable fit, this black leather signature leather belt from Gucci is an instant style upgrade. Level up! Featuring an adjustable fit, a silver-tone logo, and a rounded tip.
  
  Made in Italy`,
      price: "525",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/89/87/03/13898703_17753422_480.jpg",
      brand: "Gucci",
      category: "Scarf",
      desc: "Scarf with Stirrups and Web print",
      details: `Vintage inspiration continues to shape the Gucci narrative. Deeply rooted in the House's equestrian history, the Stirrups and Web print is a combination of two archival codes. Crafted from silk twill, the hybrid motif is presented on this scarf.
  
  Made in Italy`,
      price: "576",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/65/82/53/18658253_40617885_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "GG jacquard track pants",
      details: `GG jacquard track pants from GUCCI featuring white/multicolor, side stripe detailing, piped-trim detailing, elasticated waistband, two side slash pockets, and elasticated ankles.
  
  Made in Italy`,
      price: "1050",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/98/89/94/15988994_29774960_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "stripe-detail jumper",
      details: `The cold weather is closing in...and your wardrobe isn't ready. But fear not. This stripe-detail Gucci jumper is here to save the day in style.
  
  Made in Italy`,
      price: "1070",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/59/83/16/12598316_12014738_480.jpg",
      brand: "Gucci",
      category: "Hats",
      desc: "Original GG canvas baseball cap",
      details: `Boasting Gucci's iconic GG Supreme canvas and a green and red Web detail at the edges, this baseball hat is part of the house's SS22 collection and is crafted from a breathable blend of cotton. Finished with a curved peak, this statement accessory can be adjusted with a buckle strap at the back.
  
  Made in Italy`,
      price: "400",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/13/24/22/12132422_10241135_480.jpg",
      brand: "Gucci",
      category: "Belt",
      desc: "GG Supreme belt with G buckle",
      details: `Paying homage to Gucci's rich history, this belt is crafted from leather and finished with GG Supreme canvas and a silver-tone Interlocking G buckle.
  
  Made in Italy`,
      price: "455",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/14/71/18/12147118_10105937_480.jpg",
      brand: "Gucci",
      category: "Wallets",
      desc: "GG Supreme Web wallet",
      details: `A combination of two of Gucci's most recognizable icons: the GG motif and the Web. This bi-fold wallet is made in GG Supreme canvas with House Web stripe. Black/grey GG Supreme canvas, a material with low environmental impact. Blue and red Web. Eight card slots and two bill compartments. Open: W21cm x H9cm. Closed: W11cm x H9cm
  
  Made in Italy`,
      price: "405",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/02/11/13/14021113_18172796_480.jpg",
      brand: "Gucci",
      category: "Belt",
      desc: "GG-logo Kingsnake print belt",
      details: `A recurring house motif, Gucci's Kingsnake is printed on this leather belt. Its vibrant colorway is highlighted by the grey GG Supreme background it is set against.
  
  Made in Italy`,
      price: "400",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/43/01/16/15430116_27239376_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "GG Supreme print slides",
      details: `Why not slip into something a little more ... stylish? Whether you're chilling at the pool or just taking the bins out in the rain, these slides from Gucci will make sure you look good doing it. Bin day never looked so good.
  
  Made in Italy`,
      price: "515",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/03/01/40/13030140_13781398_480.jpg",
      brand: "Gucci",
      category: "Scarf",
      desc: "Gucci jacquard wool silk scarf",
      details: `This wool scarf features the Gucci logo on one side and is solid on the reverse side. Blue and beige wool silk with Gucci jacquard. W35cm x L180cm. 95% wool and 5% silk.
  
  Made in Italy`,
      price: "593",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/59/98/77/14599877_22435135_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "GG jacquard shorts",
      details: `First used in the '70s, Gucci's GG logo was an evolution of the original Gucci rhombi design from the 1930s. Since then, it has become an established symbol of the Italian label. In a jacquard construction, it decorates these track shorts.
  
  Made in Italy`,
      price: "935",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/09/89/33/14098933_18814736_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "satin lapel tuxedo jacket",
      details: `Sartorial excellence and an eclectic vision combine for an exclusive assortment of tailored pieces presented for the recent Gucci collection. Crafted from Italian twill, this single-breasted jacket is defined by a wool blend construction, ensuring an ideal fit and drape. The front of the jacket finished with luxuriously smooth silk shawl lapels for a formal contrast to the classic tuxedo silhouette.
  
  Made in Italy`,
      price: "5122",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/06/92/05/14069205_18349102_480.jpg",
      brand: "Gucci",
      category: "Hats",
      desc: "GG canvas fedora",
      details: `Crafted from monogram canvas, this fedora hat is completed by tonal leather trim. Enhanced by the historic Double G detail on the side, both the archival references and the shape speak to the House's design narrative.
  
  Made in Italy`,
      price: "480",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/47/72/87/18477287_39634194_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Rhyton GG Supreme sneakers",
      details: `Gucci infuses this all-black iteration of the Rhyton sneakers with heritage and craftsmanship. Embellished with a recognizable GG Supreme print, they sit atop a chunky rubber sole for a sportswear-inspired silhouette.
  
  Made in Italy`,
      price: "900",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/16/50/27/15165027_25879596_480.jpg",
      brand: "Gucci",
      category: "Belt",
      desc: "GG Marmont belt",
      details: `There's nothing that a Gucci belt can't fix. Crafted from supple leather, this GG Marmont style will instantly add some polish to your outfit. What's not to like?
  
  Made in Italy`,
      price: "500",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/61/09/58/17610958_36610595_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Gucci Basket white high-top sneakers",
      details: `Gucci's Basket sneakers draw inspiration from classic high-top silhouettes as seen in the 90s. Constructed with eco-friendly materials, this pair boasts a crisp white colorway with a mesh-paneling logo motif.
  
  Made in Italy`,
      price: "990",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/96/46/75/12964675_13555294_480.jpg",
      brand: "Gucci",
      category: "Wallets",
      desc: "Kingsnake print GG Supreme wallet",
      details: `The Kingsnake, in vibrant colors, continues to emerge as one of the signature details of the House's eclectic narrative. Here, it is printed across a wallet made in GG Supreme canvas, a material with low environmental impact. Black/grey GG Supreme canvas with Kingsnake print. Black leather trim. Black palladium-toned hardware.
  
  Made in Italy`,
      price: "430",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/45/21/95/18452195_39546968_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Interlocking G slides",
      details: `Gucci’s iconic Interlocking G logo appears on the vamp of these slides for a recognizable look. The pair is completed with a sleek slip-on profile that suits the accessories’ black shade.
  
  Made in Italy`,
      price: "515",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/37/37/39/17373739_37101199_480.jpg",
      brand: "Gucci",
      category: "Wallets",
      desc: "Interlocking G rose-print cardholder",
      details: `An ode to the house's history, this cardholder uses the label's environmentally friendly GG Supreme canvas as a base and is adorned with an Interlocking G logo plaque. The rose print alludes to the label's fondness for botanical motifs.
  
  Made in Italy`,
      price: "455",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/02/10/32/14021032_18178504_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "GG Supreme tigers slide sandal",
      details: `The classic slide sandal is reimagined for Pre-Fall 2019 in the season's newest iteration of the GG pattern. Leaping tigers are scattered across a GG Supreme base, contrasting against the black and grey combination of the emblematic House motif. Set on a molded rubber sole that features the Gucci trademark along the sides.
  
  Made in Italy`,
      price: "425",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/97/30/73/12973073_13583604_480.jpg",
      brand: "Gucci",
      category: "Wallets",
      desc: "Animalier leather wallet",
      details: `Part of the Animalier collection, the leather wallet features the distinctive metal bee detail. The bee is an archival code first introduced in Gucci ready-to-wear in the 1970s. Black leather. Antique gold-toned hardware. Metal bee. Gucci logo. Eight card slots and two bill compartments.
  
  Made in Italy`,
      price: "540",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/18/77/12/18187712_38632288_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Rhyton star-print sneakers",
      details: `This iteration of Gucci's Rhyton sneakers is presented in an all-white leather construction with a playful star print combined with the house's iconic Interlocking G logo, giving a contemporary twist to a classic motif.
  
  Made in Italy`,
      price: "990",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/01/01/77/12010177_9281837_480.jpg",
      brand: "Gucci",
      category: "Wallets",
      desc: "Gucci Signature Web wallet",
      details: `The Kingsnake, in vibrant colors, continues to emerge as one of the signature details of the House's eclectic narrative. Here, it is printed across a wallet made in GG Supreme canvas, a material with low environmental impact. Black/grey GG Supreme canvas with Kingsnake print. Black leather trim. Black palladium-toned hardware.
  
  Made in Italy`,
      price: "525",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/97/47/45/12974745_21360126_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Gucci stripe leather boots",
      details: `Originally influenced by tape logos running down the sides of 80s tracksuits, for Pre-Fall 2018 the Gucci jacquard stripe is revitalized and introduced in unexpected ways throughout ready-to-wear and accessories. Here, it contrasts a black leather base, enhancing the sides of a sleek ankle boot. Black leather. Red and black Gucci jacquard stripe. Side zipper. Leather sole. 1" height.
  
  Made in Italy`,
      price: "1605",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/38/85/25/15388525_27096507_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "Ace GG Supreme sneakers",
      details: `Sold your 'sole' to style? So did these sneakers from Gucci - and with their tonal GG Supreme pattern, this pair might have done a deal with the Devil but they'd rather be in your wardrobe than the underworld. Though we've heard that Hades has a pair too.
  
  Made in Italy`,
      price: "675",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/80/05/72/15800572_28860376_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "Fake/Not print GG nylon jacket",
      details: `Gucci puts an end to the debate once and for all with this Fake/Not print GG nylon jacket. Designed with the signature GG Supreme canvas and the green and red Web, this hooded piece is the only legitimacy you'll need.
  
  Made in Italy`,
      price: "1850",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/82/82/80/18828280_40936154_480.jpg",
      brand: "Gucci",
      category: "Shoes",
      desc: "logo-plaque chunky-sole loafers",
      details: `Referencing Gucci's founder, Guccio Gucci, this pair of loafers feature an Interlocking-G logo plaque at the front of the design. Constructed from gold-tone hardware, this detail adds an opulent edge to the shoes.
  
  Made in Italy`,
      price: "970",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/93/12/01/18931201_41131900_480.jpg",
      brand: "Gucci",
      category: "Clothes",
      desc: "Jumbo GG canvas jacket",
      details: `The distinguishing feature of this jacket is seen in the Jumbo GG canvas pattern. With a varsity-inspired silhouette, this jacket comes to life with a maximalist version of the iconic monogram pattern.
  
  Made in Italy`,
      price: "2070",
    },
  ];  
  
let likeData = JSON.parse(localStorage.getItem("like-items")) || [];
let cartData = JSON.parse(localStorage.getItem("cart-items")) || [];
let loginArr = JSON.parse(localStorage.getItem("login-details")) || [];

if(loginArr.length!=0){
    account.setAttribute("src" , "/Images/icons8-user-50.png");
}

function displayFun(read){

    wall.innerHTML = "";

    read.forEach(function(elem,i){

        let div = document.createElement("div");

        let text = document.createElement("p");
        text.innerText = "Liked";
        text.setAttribute("id","text");
        text.style.display = "none";

        let image = document.createElement("img");
        image.setAttribute("src" , elem.image_url);

        let brand = document.createElement("h1");
        brand.innerText = elem.brand;

        let desc = document.createElement("p");
        desc.innerText = elem.desc;

        let price = document.createElement("p");
        price.innerText = `$${elem.price}`;
        price.setAttribute("id", "price");
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
        likebtn.setAttribute("id" , "heart")
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
        });

        image.addEventListener("click", function(){

          let prod = [elem];
          let descrpt = read.filter(function(el){
            return elem.brand == el.brand && elem.category == el.category;
          });
      
          localStorage.setItem("descrpt" , JSON.stringify(descrpt));
          localStorage.setItem("prod", JSON.stringify(prod));
          localStorage.setItem("dataArr" , JSON.stringify(descrpt));
          window.location.href = "/HTML/description.html";
        });
        
        div.append(text,image,brand,desc,price, likebtn, cartbtn);
        wall.append(div);
    })
}
displayFun(gucciData);


commodity.addEventListener("change", function(){

    if(commodity.value == ""){
        displayFun(gucciData);
    } else{

        let selectData =  gucciData.filter(function(el){
            return commodity.value == el.category;
        });
        displayFun(selectData);

        let selectDataCopy = selectData.map(function(el){
            return el;
        })

        price.addEventListener("change" , function(){

            if(price.value == ""){
                displayFun(selectData);
            } else{

                if(price.value == "low"){
                    let sortedData = selectDataCopy.sort(function(a,b){
                        return a.price - b.price;
                    });
                    displayFun(sortedData);
                } else{
                    let sortedData = selectDataCopy.sort(function(a,b){
                        return b.price - a.price;
                    });
                    displayFun(sortedData);
                }
            }
        })
    }
})

let gucciDataCopy = gucciData.map(function(el){
    return el;
})

price.addEventListener("change", function(){

    if(price.value == ""){
        displayFun(gucciData);
    } else{

        if(price.value == "low"){
            let sortedData = gucciDataCopy.sort(function(a,b){
                return a.price - b.price;
            });
            displayFun(sortedData);

            commodity.addEventListener("change", function(){
                if(commodity.value == ""){
                    displayFun(sortedData);
                } else{

                    let selectData = sortedData.filter(function(el){
                        return commodity.value == el.category;
                    });

                    displayFun(selectData);
                }
            })
        } else{
            let sortedData = gucciDataCopy.sort(function(a,b){
                return b.price - a.price;
            });
            displayFun(sortedData);

            commodity.addEventListener("change", function(){
                if(commodity.value == ""){
                    displayFun(sortedData);
                } else{

                    let selectData = sortedData.filter(function(el){
                        return commodity.value == el.category;
                    });

                    displayFun(selectData);
                }
            })
        }
    }
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