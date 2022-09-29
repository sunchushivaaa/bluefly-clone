let commodity = document.getElementById("commodity");
let price = document.getElementById("price");
let wall = document.getElementById("pradawall");

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

let pradaData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/19/00/50/91/19005091_41386924_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "abstract-print short-sleeve shirt",
      details: `Made in Italy`,
      price: "2650",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/07/53/01/17075301_34599518_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "logo-intarsia short-sleeve knitted top",
      details: `This Prada knitted T-shirt is an ode to the brand's minimalist aesthetic. Made from navy cashmere, this piece comes with a relaxed cut and is detailed with the brand's intarsia-knit logo on the front.
  
  Made in Italy`,
      price: "2240",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/58/96/60/18589660_40695283_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "Re-Nylon hooded jacket",
      details: `ECONYL® is a regenerated-nylon yarn that can be recycled an indefinite number of times without affecting the quality of the material. The partnership between Prada and textile yarn producer Aquafil has resulted in technical pieces such as this Re-Nylon hooded jacket - a lightweight design realized in a bright red hue and detailed with logo lettering at the chest.
  
  Made in Italy`,
      price: "2650",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/83/32/29/18833229_40946327_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "double-breasted wool jacket",
      details: `Prada updates a classic silhouette with this tailored design for AW22. Offered in a versatile black colourway, this blazer is elevated by faux-fur detailing to the sleeves for a striking finish that exhibits the brand's ability to combine tradition with a playful aesthetic.
  
  Made in Italy`,
      price: "6560",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/31/81/79/18318179_39167905_480.jpg",
      brand: "Prada",
      category: "Belt",
      desc: "triangle-logo leather belt",
      details: `Prada showcases a minimalist design with this belt. Crafted from leather in a refined black hue, it is detailed with the brand's iconic triangle logo with complementary silver-tone detailing.
  
  Made in Italy`,
      price: "720",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/43/20/78/16432078_31755998_480.jpg",
      brand: "Prada",
      category: "Scarf",
      desc: "jacquard fringed scarf",
      details: `Cold weather calls for one thing. A soft cashmere scarf to keep you warm in style. You'll never want to take this jacquard Prada piece off.
  
  Made in Italy`,
      price: "1900",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/84/59/47/18845947_41161712_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "tailored wool trousers",
      details: `Prada takes classic silhouettes and updates them with refreshing details. A fine example, these trousers are defined by their traditional design and are accented with slant pockets and back welt pockets that add modern flair.
  
  Made in Italy`,
      price: "1670",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/39/51/11/18395111_39426716_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "abstract-jacquard polo shirt",
      details: `Made in Italy`,
      price: "1980",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/24/84/87/18248487_38918793_480.jpg",
      brand: "Prada",
      category: "Hats",
      desc: "Re-Nylon baseball cap",
      details: `This brown baseball cap is crafted from Prada's Re-Nylon. It's made in Italy with a paneled crown and curved peak then adorned with the iconic enamel triangle logo plaque.
  
  Made in Italy`,
      price: "720",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/30/36/31/15303631_26853692_480.jpg",
      brand: "Prada",
      category: "Belt",
      desc: "reversible belt",
      details: `If you're a black belt in shopping, this one is for you. This reversible belt from Prada is detailed with an engraved logo to the polished steel buckle fastening and it's the perfect accessory to complement your looks with an ultra-sophisticated touch. Also, who doesn't love a two for one deal? Featuring an engraved logo and a polished steel buckle.
  
  Made in Italy`,
      price: "910",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/61/01/22/17610122_36887313_480.jpg",
      brand: "Prada",
      category: "Wallets",
      desc: "triangle-logo leather cardholder",
      details: `Made in Italy`,
      price: "480",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/34/94/63/18349463_39414168_480.jpg",
      brand: "Prada",
      category: "Belt",
      desc: "buckle-fastening leather belt",
      details: `Made in Italy`,
      price: "910",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/48/24/14/16482414_32036198_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Macro brushed sneakers",
      details: `When was the last time that you gave a treat to your feet? Show your soles some love with Prada's Macro brushed sneakers that will provide plenty of pep into your step thanks to its platform sole. This is one gift that keeps on giving.
  
  Made in Italy`,
      price: "1170",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/74/12/49/15741249_28683400_480.jpg",
      brand: "Prada",
      category: "Scarf",
      desc: "zipped pocket knitted scarf",
      details: `Black is a powerful color, but what about a black knitted scarf from Prada? Long live Prada. Featuring a ribbed knit, a straight hem, a signature triangular plaque on the front, and a front zipped pocket.
  
  Made in Italy`,
      price: "1090",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/68/38/02/16683802_32788923_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "Re-Nylon cargo pants",
      details: `Who says your casual look has to be plain and boring? Prada makes a strong case for looking stylish off-duty with these Re-Nylon cargo pants. It's time to try something new.
  
  Made in Italy`,
      price: "2290",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/54/32/76/15543276_27832985_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "logo-plaque single-breasted blazer",
      details: `Looking to add a contemporary touch to your look? Then you'll want to check out this nylon blazer from Prada. Refuse to color outerwear be an afterthought.
  
  Made in Italy`,
      price: "3320",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/45/24/08/17452408_36242111_480.jpg",
      brand: "Prada",
      category: "Hats",
      desc: "Re-Nylon abstract-print bucket hat",
      details: `Constructed from recycled materials and finished with a distinct abstract print, this Prada bucket hat speaks to the label's sustainable concerns, simultaneously aligning with the brand's penchant for futuristic, bold designs.
  
  Made in Italy`,
      price: "1090",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/73/74/79/17737479_37218580_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Monolith brushed leather loafers",
      details: `Prada footwear is forever in favour of chunky tread soles, military-inspired durability and timeless silhouettes. Ticking all three of the boxes, these loafers are crafted from brushed black leather and feature a slip-on style, while the enamel triangle logo on the front offers instant recognition. 
  
  Made in Italy`,
      price: "1440",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/24/13/00/15241300_26457090_480.jpg",
      brand: "Prada",
      category: "Belt",
      desc: "saffiano reversible belt",
      details: `If it isn't broken, don't try and fix it, like this black and baltic blue calf leather reversible Saffiano belt from Prada. A classic that will never fade. Featuring an embossed buckle closure.
  
  Made in Italy`,
      price: "910",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/82/49/34/16824934_33421571_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Cloudbust Thunder high-top sneakers",
      details: `A chunky silhouette and 3D paneling combine here to create a contemporary feel. A Prada mainstay, these Cloudbust Thunder sneakers are created with Re-Nylon detailing for a conscious approach.
  
  Made in Italy`,
      price: "1550",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/40/78/86/16407886_31727081_480.jpg",
      brand: "Prada",
      category: "Wallets",
      desc: "triangle logo cardholder",
      details: `Combining practicality and sleek style, this Prada piece offers a compact construction with multiple card slots. The brand's subtle take on branding can be seen in the signature triangle logo at the front.
  
  Made in Italy`,
      price: "570",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/21/18/07/18211807_38753380_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "triangle-logo pool slides",
      details: `Minimal in design, these yellow pool slides are part of Prada's SS22 collection. The brand's emblematic triangle logo can be seen decorating the upper strap.
  
  Made in Italy`,
      price: "600",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/91/69/34/16916934_33818755_480.jpg",
      brand: "Prada",
      category: "Wallets",
      desc: "logo-plaque zip-fastening pouch wallet",
      details: `Prada's original wordmark design, first used in 1919 is showcased in the centre of a contemporary geometric triangle plaque. Placed at the front of this multi-panel wallet, it balances the brand's history with a modern twist. 
  
  Made in Italy`,
      price: "480",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/23/80/65/14238065_20192350_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "lug-sole brogues",
      details: `Defining luxury since 1913, Italian fashion house Prada is renowned for their uncompromised quality and timeless design vision, as seen in these black calf leather lug-sole brogues. Featuring a lace-up front fastening, a rubber sole, an internal logo, a round toe and an embossed logo to one side.
  
  Made in Italy`,
      price: "1230",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/32/32/53/13323253_15195252_480.jpg",
      brand: "Prada",
      category: "Wallets",
      desc: "bifold wallet",
      details: `With a long built reputation for impeccable handcrafted leather work, Prada is the epitome of leather accessories, specialised in classics as much as ground-breaking novelties. Crafted in Italy, this black leather bifold wallet from Prada features a front logo plaque, multiple interior card slots, a note compartment and a coin pocket.
  
  Made in Italy`,
      price: "780",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/75/02/89/18750289_40841385_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "District mirrored-effect sneakers",
      details: `Inspired by classic basketball silhouettes, Prada's District sneakers are reimagined for SS22 in a white and silver iteration. Adorned with mirrored panels throughout for a futuristic look, they're adorned with signature house motifs like a printed logo at the tongue and a triangle plaque at the side.
  
  Made in Italy`,
      price: "1440",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/55/09/60/17550960_36497164_480.jpg",
      brand: "Prada",
      category: "Wallets",
      desc: "triangle-motif logo-plaque flap wallet",
      details: `Made in Italy`,
      price: "720",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/48/24/12/16482412_32036192_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Macro brushed sneakers",
      details: `When was the last time that you gave a treat to your feet? Show your soles some love with Prada's Macro brushed sneakers that will provided plenty of pep into your step thanks to its platform sole. This is one gift that keeps on giving.
  
  Made in Italy`,
      price: "1170",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/21/18/11/18211811_38769380_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Re-Nylon PRAX 1 sneakers",
      details: `Designed with panelled construction and a leather trim, these low top trainers are crafted in Prada's sustainable Re-Nylon fabric - a material made out of recycled waste found in the ocean. The brand's iconic enamel Triangle logo accents the side for a refined finish.
  
  Made in Italy`,
      price: "1210",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/83/21/22/18832122_40946037_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "triangle-logo plaque jumper",
      details: `With the objective of blending sportswear elements with luxury silhouettes, this Prada jumper is a true hybrid of utility and style. Forming part of the AW22 collection, this virgin wool jumper is detailed with contrasting panels and the brand's iconic triangular logo low-top the chest.
  
  Made in Italy`,
      price: "3160",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/82/49/34/16824934_33421571_480.jpg",
      brand: "Prada",
      category: "Shoes",
      desc: "Cloudbust Thunder high-top sneakers",
      details: `A chunky silhouette and 3D panelling combine here to create a contemporary feel. A Prada mainstay, these Cloudbust Thunder sneakers are created with Re-Nylon detailing for a conscious approach.
  
  Made in Italy`,
      price: "1550",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/92/72/79/17927279_37801803_480.jpg",
      brand: "Prada",
      category: "Clothes",
      desc: "Re-Nylon biker jacket",
      details: `Prada updates the classic biker jacket with sustainable construction, crafting it in a signature Re-Nylon material - a fabric made from recycled plastic found in the ocean. The structured style is accented with tonal stitching and finished with zipped pockets, complemented with the iconic enamel triangle logo.
  
  Made in Italy`,
      price: "3970",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/04/97/91/17049791_34231786_480.jpg",
      brand: "Prada",
      category: "Hats",
      desc: "logo-plaque baseball cap",
      details: `Made in Italy`,
      price: "1025",
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
displayFun(pradaData);


commodity.addEventListener("change", function(){

    if(commodity.value == ""){
        displayFun(pradaData);
    } else{

        let selectData =  pradaData.filter(function(el){
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

let pradaDataCopy = pradaData.map(function(el){
    return el;
})

price.addEventListener("change", function(){

    if(price.value == ""){
        displayFun(pradaData);
    } else{

        if(price.value == "low"){
            let sortedData = pradaDataCopy.sort(function(a,b){
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
            let sortedData = pradaDataCopy.sort(function(a,b){
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

  