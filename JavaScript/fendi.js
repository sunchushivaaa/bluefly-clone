let commodity = document.getElementById("commodity");
let price = document.getElementById("price");
let wall = document.getElementById("fendiwall");

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
    window.location.href = "/HTML/index.html";
})

account.addEventListener("click",function(){
    window.location.href = "/HTML/account.html";
})

like.addEventListener("click",function(){
    window.location.href = "/HTML/like.html";
})

let fendiData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/81/90/06/15819006_29094303_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "floral-embroidered logo-detail hoodie",
      details: `Take your sweats to the street. Decorated with a floral-embroidered logo on the chest, this hoodie from Fendi effortlessly transitions you from your sofa to the gym, to the front row of Milan Fashion Week. Smile, you're on camera.
      
      Made in Italy`,
      price: "1677",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/39/40/35/17394035_35994894_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "flap-pocket ribbed-knit jumper",
      details: `Fendi's knitted jumper perfectly combines practicality and style in this flap pocket jumper for AW21. Produced from light brown virgin wool, the Italian-crafted piece is finished with distinctive ribbed trims.
  
  Made in Italy`,
      price: "1095",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/39/14/84/17391484_36028666_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "reversible panelled coat",
      details: `Made in Italy`,
      price: "3766",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/32/39/32/17323932_35921683_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "FF-motif shirt jacket",
      details: `A micro FF motif appears as an all-over design on this Fendi jacket, adding a contemporary touch to the classic silhouette. This contrast speaks to the creativity at the heart of the brand.
  
  Made in Italy`,
      price: "2824",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/49/57/53/12495753_11688942_480.jpg",
      brand: "Fendi",
      category: "Belt",
      desc: "reversible FF buckle belt",
      details: `It will be tempting but try not to proudly polish the FF buckle on your Fendi belt too much, people might find it strange. Don't worry though, they'll understand when they get one. Featuring a gold-tone buckle, a gold-tone logo plaque, an adjustable fit, punch hole detailing and a pointed tip.
  
  Made in Italy`,
      price: "623",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/62/48/85/17624885_36877416_480.jpg",
      brand: "Fendi",
      category: "Scarf",
      desc: "graphic-print wool scarf",
      details: `Made in Italy`,
      price: "684",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/36/67/41/16366741_31459869_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "embroidered logo denim jacket",
      details: `A sleek denim jacket to elevate your attires? In a black hue and boasting an embroidered logo to its rear, this Fendi one is the right candidate for that. No doubt about it.
  
  Made in Italy`,
      price: "2541",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/33/95/13/17339513_35849697_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "logo-embroidered straight-leg jeans",
      details: `A classic pair of denim is updated with contemporary appeal in these straight-leg jeans from Fendi. Fabricated from dark blue stretch cotton, they are detailed with five circular embroidered logo patches to the rear.
      
      Made in Italy`,
      price: "1117",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/14/58/92/17145892_34787397_480.jpg",
      brand: "Fendi",
      category: "Hats",
      desc: "FF Vertigo-motif hat",
      details: `A re-imagining of the heritage FF print, Fendi's FF Vertigo motif offers a '70s-inspired' aesthetic. It appears as an all-over design on this hat in the house's signature tones.
  
  Made in Italy`,
      price: "1435",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/32/56/07/17325607_35891544_480.jpg",
      brand: "Fendi",
      category: "Belt",
      desc: "FF-motif belt",
      details: `A staple at the brand since its introduction in 1965, the Fendi FF motif is instantly recognizable. It appears as an all-over print on this belt, adding a quirky touch to the classic design.
  
  Made in Italy`,
      price: "676",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/36/81/41/16368141_31475711_480.jpg",
      brand: "Fendi",
      category: "Wallets",
      desc: "debossed logo cardholder",
      details: `Fendi exists to ensure all your bank cards are safe. Constructed from black calf leather and boasting plenty of storage space, this cardholder won't fail you whenever you need to use it. No doubt about it.
      
      Made in Italy`,
      price: "454",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/90/49/09/14904909_24414880_480.jpg",
      brand: "Fendi",
      category: "Belt",
      desc: "cut-out logo belt",
      details: `Sometimes we have the feeling that we never do anything right. The only exception was giving this cigar brown calf leather cut-out logo belt from Fendi a chance. Not all decisions are bad. Featuring a gold-tone buckle fastening, an adjustable fit, and an engraved logo.
      
      Made in Italy`,
      price: "720",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/55/81/64/16558164_36411994_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "FF monogram-pattern lace-up sneakers",
      details: `Subtle yet impactful, Fendi's low-top lace-up sneakers are designed with the brand's FF logo motif patterned across the exterior. Produced in Italy, they sit atop a flat rubber outsole and boast a logo-embossed leather patch at the tongue.
  
  Made in Italy`,
      price: "1256",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/36/78/31/17367831_36065942_480.jpg",
      brand: "Fendi",
      category: "Scarf",
      desc: "striped mohair-blend scarf",
      details: `Made in Italy`,
      price: "848",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/86/50/12/16865012_33494870_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "convertible zipped cargo trousers",
      details: `The worlds of style and functionality collide in these Fendi trousers. Detachable zipped panels allow this design to be easily turned into a pair of shorts, proving itself a versatile casual staple. For added practicality, this piece is finished with multiple cargo-style pockets. 
  
  Made in Italy`,
      price: "1929",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/55/37/92/17553792_c5b25a97-1ec1-4faf-843f-6e64087a52f8_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "single-breasted virgin wool-blend coat",
      details: `Made in Italy`,
      price: "3736",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/23/79/98/17237998_35244788_480.jpg",
      brand: "Fendi",
      category: "Hats",
      desc: "stripe pattern beanie hat",
      details: `Fendi takes a soft approach to accessories for the AW21 collection. Showcasing an eye-catching stripe pattern, this beanie hat from the Italian brand has been constructed out of pristine mohair-silk blend fabric. Muted tones of muddy brown and chalk-white add to the laidback charm of this cozy accessory. 
  
  Made in Italy`,
      price: "539",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/36/90/75/16369075_31484276_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "panelled FF-motif sneakers",
      details: `It's hard to make eye contact before shoe contact with these on. Boasting a paneled design with FF-logo detailing, these Fendi sneakers are always the first thing people spot, no matter what. You best embrace it. 
  
  Made in Italy`,
      price: "1299",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/89/71/42/16897142_36814075_480.jpg",
      brand: "Fendi",
      category: "Scarf",
      desc: "FF motif fringed scarf",
      details: `Standing for Fun Fur, Fendi’s iconic FF motif has become the label’s most recognised theme. Created by Karl Lagerfeld, the branded pattern appears on this scarf, adding a signature look to its fringed design. 
      
      Made in Italy`,
      price: "1008",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/44/99/70/17449970_36141775_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "FF lace-up leather brogues",
      details: `FENDI's lace-up brogues are presented in a paneled design with a monogram motif section at the front. Set upon a chunky rubber sole, they display embossed FF detail incorporated into the ridges of the heel.
  
  Made in Italy`,
      price: "2083",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/44/10/20/17441020_36323207_480.jpg",
      brand: "Fendi",
      category: "Wallets",
      desc: "FF-motif leather wallet",
      details: `Rome-born fashion house Fendi may have come a long way since its 1925 conception, but its leather craftsmanship remains unrivaled. Cut from supple black and grey leather, this compact wallet is decorated with an all-over FF-motif print.
  
  Made in Italy`,
      price: "569",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/50/82/35/15508235_27970667_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "Bag Bug eyes print sneakers",
      details: `They say the eyes are the window to the soul and you don't want people making wrong assumptions. With these Bag Bugs sneakers, people will acknowledge you as someone who knows what they're doing, as you'll be wearing Fendi. Clap, clap.
  
  Made in Italy`,
      price: "1396",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/90/46/53/14904653_24410810_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "embossed FF motif flat sandals",
      details: `It's time to leave behind the things that make you feel sad. That includes that shady friend of yours. One thing you can always count on are these black lambskin embossed FF motif flat sandals from Fendi. Let the sunshine in. Featuring an open toe, a slip-on style, crossover straps to the front, a ridge, rubber sole, and a brand debossed insole.
  
  Made in Italy`,
      price: "1277",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/49/80/64/17498064_36454383_480.jpg",
      brand: "Fendi",
      category: "Wallets",
      desc: "logo plaque bi-fold wallet",
      details: `Normally seen on Fendi's iconic Baguette bag, a tonal logo plaque adds a signature twist to this red wallet. In a bi-fold design, this accessory features multiple internal card slots and a note compartment.
  
  Made in Italy`,
      price: "610",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/77/39/43/16773943_33160615_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "Force lug-sole sandals",
      details: `Set atop an embossed chunky sole, the Force sandals incorporate Fendi’s unmistakable logo motif. Also seen on the adjustable front straps, the FF pattern adds an iconic finish to this practical slip-on pair. 
  
  Made in Italy`,
      price: "1717",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/52/55/88/17525588_36956305_480.jpg",
      brand: "Fendi",
      category: "Wallets",
      desc: "monogram leather wallet",
      details: `Made in Italy`,
      price: "548",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/75/97/63/16759763_35219798_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "FF Baguette-motif loafers",
      details: `A crocodile-effect finish and gold-tone FF Baguette motif combine here to create a refined look. Sitting atop a non-slip rubber sole, this pair showcases Fendi's focus on craftsmanship.
  
  Made in Italy`,
      price: "2747",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/85/91/68/15859168_29731711_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "Fendi Flow sneakers",
      details: `There are sneakers and then there are Fendi Flow sneakers. Fabricated in Italy, the low-top silhouette boasts Lycra® details and a corrugated EVA rubber sole with an engraved F logo. We know which we prefer.
  
  Made in Italy`,
      price: "1736",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/44/13/37/17441337_36374718_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "double-breasted trench coat",
      details: `Made in Italy`,
      price: "8231",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/97/54/46/16975446_35722674_480.jpg",
      brand: "Fendi",
      category: "Shoes",
      desc: "FF plaque driving shoes",
      details: `Fendi includes a minimal take on logomania in its AW21 collection thanks to these black driving shoes. Crafted in Italy from soft calf leather, they're adorned with the house's signature FF plaque at the front and feature a pebbled rubber sole.
  
  Made in Italy`,
      price: "1921",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/39/40/43/17394043_35999024_480.jpg",
      brand: "Fendi",
      category: "Clothes",
      desc: "x Noel Fielding abstract print knitted jumper",
      details: `Fendi's collaboration with artist Noel Fielding sees this knitted crew neck jumper take center stage. Fabricated from white virgin wool, it features a multicolor abstract pattern knit to the front with distinctive embroideries.
  
  Made in Italy`,
      price: "1688",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/89/71/44/16897144_36830383_480.jpg",
      brand: "Fendi",
      category: "Hats",
      desc: "Zucca-monogram baseball cap",
      details: `Instantly recognizable for their Zucca motif, Fendi covers this paneled cap with the iconic pattern in a grey and black colorway. Finished with a toggle fastening towards the rear, this accessory can be fitted according to preference.
      
      Made in Italy`,
      price: "531",
    },
  ];
  
  
let likeData = JSON.parse(localStorage.getItem("like-items")) || [];
let cartData = JSON.parse(localStorage.getItem("cart-items")) || [];

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
        price.setAttribute("id", "price")

        let likebtn = document.createElement("button");
        likebtn.innerText = "❤️";
        likebtn.style.cursor = "pointer";
        likebtn.setAttribute("id" , "heart")
        likebtn.addEventListener("click", function(){
            likebtn.innerText = "";
            text.style.display = "block";
            likeData.push(elem);
            localStorage.setItem("like-items", JSON.stringify(likeData));
        })

        let cartbtn = document.createElement("button");
        cartbtn.innerText = "Add to Cart";
        cartbtn.setAttribute("id" , "cart");
        cartbtn.addEventListener("click", function(){
        cartbtn.innerText = "Added";
        cartbtn.style.color = "green";
        cartbtn.style.fontWeight = "bold";
        cartbtn.style.animation= "opac 1s ease";
        cartData.push(elem);
        localStorage.setItem("cart-items", JSON.stringify(cartData));
        })
        
        div.append(text,image,brand,desc,price, likebtn, cartbtn);
        wall.append(div);
    })
}
displayFun(fendiData);


commodity.addEventListener("change", function(){

    if(commodity.value == ""){
        displayFun(fendiData);
    } else{

        let selectData =  fendiData.filter(function(el){
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

let fendiDataCopy = fendiData.map(function(el){
    return el;
})

price.addEventListener("change", function(){

    if(price.value == ""){
        displayFun(fendiData);
    } else{

        if(price.value == "low"){
            let sortedData = fendiDataCopy.sort(function(a,b){
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
            let sortedData = fendiDataCopy.sort(function(a,b){
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

  