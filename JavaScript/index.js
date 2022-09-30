let logo = document.getElementById("logo");
let account = document.getElementById("account");
let like = document.getElementById("like");
let cart = document.getElementById("cart");


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

let slidePosition = 0;
let slides = document.querySelectorAll(".items");
let toatlSlides = slides.length;


document.getElementById("next").addEventListener("click", function(){
    if(slidePosition===toatlSlides-1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    updateSlide();
})


document.getElementById("prev").addEventListener("click", function(){
    if(slidePosition===0){
        slidePosition = toatlSlides-1;
    } else{
        slidePosition--; 
    }
    updateSlide();
})


function updateSlide(){
    for(let slide of slides){
        slide.classList.remove("visible");
        slide.classList.add("hidden");
    }
    slides[slidePosition].classList.add("visible");
}



let gucciBtn = document.getElementById("gucci-btn");
let pradaBtn = document.getElementById("prada-btn");
let fendiBtn = document.getElementById("fendi-btn");
let sunglassesBtn = document.getElementById("sunglasses-btn");


gucciBtn.addEventListener("click", function(){
    window.location.href = "/HTML/gucci.html";
})

pradaBtn.addEventListener("click", function(){
    window.location.href = "/HTML/prada.html";
})

fendiBtn.addEventListener("click", function(){
    window.location.href = "/HTML/fendi.html";
})

sunglassesBtn.addEventListener("click", function(){
    window.location.href = "/HTML/sunglasses.html";
})

let clothes = document.getElementById("clothes");
let sneakers = document.getElementById("sneakers");
let denim = document.getElementById("denim");
let handbag = document.getElementById("handbag");
let jewel = document.getElementById("jewel");
let sunglass = document.getElementById("sunglass");


let clothesData = [];
let sneakersData = [];
let denimData = [];
let handbagData = [];
let jewelData = [];
let sunglassData = JSON.parse(localStorage.getItem("sunglass-items")) || [];




let categoryData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/93/02/53/17930253_37815985_480.jpg",
      brand: "Saint Laurent",
      category: "Accessories",
      desc: "curb-chain necklace",
      details: `Saint Laurent's necklace riffs on traditional curb-chain bracelets. Comprising polished curb chain links, it features a push-clasp engraved with the brand's signature.
      
  Made in Italy`,
      price: "1290",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/82/51/83/16825183_33487747_480.jpg",
      brand: "Balmain Eyewear",
      category: "Women",
      desc: "LA Royale oversize-frame sunglasses",
      details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these LA Royale oversize-frame sunglasses from Balmain Eyewear. Take notes.
  
  Made in Italy`,
      price: "564",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/17/15/48/16171548_31796925_480.jpg",
      brand: "Balmain Eyewear",
      category: "Women",
      desc: "tortoiseshell square-frame sunglasses",
      details: `Sometimes it's beneficial to look at things from a different perspective. And now you'll see the world through these Balmain Eyewear sunglasses. Everything seems much better, right?
  
  Made in Italy`,
      price: "867",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/44/77/77/15447777_28120499_480.jpg",
      brand: "Balmain Eyewear",
      category: "Women",
      desc: "1914 pilot-frame sunglasses",
      details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these 1914 pilot-frame sunglasses from Balmain Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.
  
  Made in Italy`,
      price: "1524",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/59/38/07/17593807_38085035_480.jpg",
      brand: "Off-White Eyewear",
      category: "Women",
      desc: "Nassau marble-print rectangle frame sunglasses",
      details: `Off-White imbues their eyewear line with a signature contemporary look, as is showcased with the Nassau sunglasses. The pair boasts a chunky rectangular frame and appears here in a black marble pattern.
  
  Made in Italy`,
      price: "330",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/25/50/81/18255081_38962330_480.jpg",
      brand: "Off-White Eyewear",
      category: "Women",
      desc: "Virgil square-frame sunglasses",
      details: `Named after designer Virgil Abloh, these Virgil sunglasses are one of Off-White's most iconic eyewear styles. Adorned with perforated detailing throughout, the pair also carries the recognizable Arrows motif towards the side
  
  Made in Italy`,
      price: "512",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/74/92/79/14749279_23465963_480.jpg",
      brand: "Dior Eyewear",
      category: "Women",
      desc: "Stellaire1 square-frame sunglasses",
      details: `They say big sunglasses hide all sins. Crafted from metal, these Havana brown and gold-tone square sunglasses from Dior Eyewear won't let anyone notice you've been doing everything but sleeping at night. Featuring oversized frames, tortoiseshell detailing, green tinted lenses, nose pads, a logo decal on the lens, a logo at the temple, and straight arms with curved tips. This item comes with a protective case.
  
  Made in Italy`,
      price: "645",
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
        "https://cdn-images.farfetch-contents.com/16/94/98/61/16949861_36355155_480.jpg",
      brand: "Saint Laurent",
      category: "Accessories",
      desc: "triple-link drop earrings",
      details: `These drop earrings from Saint Laurent are characterized by three interlaced curb links. The Maison's impeccable attention to detail is evidenced by the lower loop that comes in a subtle rose-tone hue.
      
  Made in Italy`,
      price: "395",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/14/37/70/18143770_38748760_480.jpg",
      brand: "Valentino Garavani",
      category: "Accessories",
      desc: "Roman stud ring",
      details: `Debuted as part of the AW21 collection, the Roman Studs are a larger iteration of Valentino’s classic Rockstuds. Presented here in a gold hue, this theme adds an unmistakable look to this pinky finger ring.
      
  Made in Italy`,
      price: "408",
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
        "https://cdn-images.farfetch-contents.com/17/21/80/12/17218012_37158738_480.jpg",
      brand: "Swarovski",
      category: "Accessories",
      desc: "Chroma hoop earrings",
      details: `Made in Italy`,
      price: "300",
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
        "https://cdn-images.farfetch-contents.com/18/56/79/23/18567923_41308164_480.jpg",
      brand: "Good American",
      category: "Denim",
      desc: "ripped-detail denim jeans",
      details: `Los Angeles-based brand Good American showcases their modern design style in this pair of denim jeans from the AW22 collection, which features ripped detailing. In a classic blue colourway, this contemporary finish stands out even more.
      
  Made in Italy`,
      price: "275",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/72/80/77/14728077_24492423_480.jpg",
      brand: "Kenneth Jay Lane",
      category: "Accessories",
      desc: "Doorknocker gold-tone clip earrings",
      details: `Kenneth Jay Lane's earrings aren't for wallflowers. This sleek pair comprises two polished gold-tone hoops - one gilded, one smooth - that elegantly interlink. Now you just need an excuse to wear them. These earrings come in a pair.
      
  Made in Italy`,
      price: "115",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/87/60/94/18876094_41014702_480.jpg",
      brand: "Diesel",
      category: "Denim",
      desc: "1999 straight-leg distressed jeans",
      details: `Made in Italy`,
      price: "423",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/98/48/64/15984864_30052343_480.jpg",
      brand: "Kenneth Jay Lane",
      category: "Accessories",
      desc: "two-tone rope-link necklace",
      details: `More is more and less is a bore. Constructed from brass, this two-tone rope-link necklace from Kenneth Jay Lane is the only accessory your look needs to be elevated. Chain it up.
      
  Made in Italy`,
      price: "368",
    },
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
        "https://cdn-images.farfetch-contents.com/17/39/09/37/17390937_36353590_480.jpg",
      brand: "Alexander Wang",
      category: "Denim",
      desc: "strap-detail straight-leg jeans",
      details: `Detailed with diamante logo-embellished straps, these jeans have a layered look. The pair has a straight-leg fit and an acid-wash aesthetic.
      
  Made in Italy`,
      price: "450",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/56/79/30/18567930_41169233_480.jpg",
      brand: "Good American",
      category: "Denim",
      desc: "The Weekender straight-leg jeans",
      details: `From Good American, these jeans are detailed with a distressed finish. This creates a worn-in look for the pair for effortless appeal.
      
  Made in Italy`,
      price: "281",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/28/65/39/17286539_35632026_480.jpg",
      brand: "Jacquemus",
      category: "Accessories",
      desc: "Le Chiquito bracelet",
      details: `The Le Chiquito bracelet pays homage to Jacquemus' iconic mini-bag, featuring a miniature charm version of the bag with the brand's logo engraved on the front. Its small size is complemented by the chunky curb-chain links wristband. 
      
  Made in Italy`,
      price: "171",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/56/88/74/18568874_40374194_480.jpg",
      brand: "Good American",
      category: "Denim",
      desc: "high-waisted denim jeans",
      details: `Los Angeles-based brand Good American showcases their refined, modern design style in this pair of denim jeans from the AW22 collection, which feature a high-waisted silhouette and a tonal colorway.
      
  Made in Italy`,
      price: "232",
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
        "https://cdn-images.farfetch-contents.com/18/83/37/38/18833738_40908009_480.jpg",
      brand: "Blumarine",
      category: "Denim",
      desc: "low-rise flared jeans",
      details: `Designed by Italian brand Blumarine, these low-rise jeans channel the brand's boldness through a paneled design and flared silhouette.
      
  Made in Italy`,
      price: "1126",
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
        "https://cdn-images.farfetch-contents.com/18/85/72/30/18857230_41034478_480.jpg",
      brand: "Eytys",
      category: "Denim",
      desc: "bleached-effect straight-leg jeans",
      details: `Made in Italy`,
      price: "454",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/77/16/29/12771629_12923572_480.jpg",
      brand: "Versace",
      category: "Accessories",
      desc: "Medusa motif ring",
      details: `Medusa? I barely knew 'er! Well, maybe it was time you were introduced. This gold-tone brass Medusa motif ring from Versace is glad to make your acquaintance. What do you think? Featuring a Medusa head logo embellishment and Greek Key detailing. 
      
  Made in Italy`,
      price: "176",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/86/04/54/18860454_41070966_480.jpg",
      brand: "Agolde",
      category: "Denim",
      desc: "mid-rise straight-leg jeans",
      details: `Agolde offers effortless day-to-day style with these jeans. Crafted from organic cotton to a straight-leg silhouette, they are finished in a timeless black hue.
      
  Made in Italy`,
      price: "422",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/56/79/33/18567933_40509370_480.jpg",
      brand: "Good American",
      category: "Denim",
      desc: "Core skinny jeans",
      details: `Core skinny jeans from Good American featuring blue, organic cotton blend, high-waisted, skinny cut, distressed finish, front button and zip fastening, belt loops, and classic five pockets.
      
  Made in Italy`,
      price: "178",
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
        "https://cdn-images.farfetch-contents.com/17/64/00/38/17640038_37877927_480.jpg",
      brand: "Chloé",
      category: "Accessories",
      desc: "Darcey pearl drop earrings",
      details: `Channeling Chloé's refined spirit, these Darcey pearl earrings feature freshwater baroque pearls enhanced with gold brass hardware.
      
  Made in Italy`,
      price: "376",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/54/38/08/18543808_40293700_480.jpg",
      brand: "Gucci Eyewear",
      category: "Men",
      desc: "rectangle-frame branded sunglasses",
      details: `rectangle-frame branded sunglasses from GUCCI EYEWEAR featuring yellow, brown, acetate, rectangle frame, tinted lenses, UV-protective lenses, straight arms, and straight tips. These glasses come with a protective case.
  
  Made in Italy`,
      price: "640",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/90/25/85/17902585_40161101_480.jpg",
      brand: "Gucci Eyewear",
      category: "Men",
      desc: "clear square-frame sunglasses",
      details: `Italy-made and adorned with discreet gold-tone lettering at the sides, these light blue sunglasses from Gucci Eyewear's AW22 collection boast a timeless square frame and are given a contemporary twist thanks to their transparent design.
  
  Made in Italy`,
      price: "578",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/73/52/29/16735229_35858032_480.jpg",
      brand: "Gucci Eyewear",
      category: "Men",
      desc: "square-frame tinted sunglasses",
      details: `Square up to your new favorite sunglasses. Your accessory selection will be in good shape with the addition of this Gucci design. You'll be seen from all the right angles.
  
  Made in Italy`,
      price: "311",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/16/00/06/50/16000650_29819330_480.jpg",
      brand: "Givenchy Eyewear",
      category: "Men",
      desc: "GV pilot sunglasses",
      details: `Transparent metal GV pilot sunglasses from Givenchy EYEWEAR.
  
  Made in Italy`,
      price: "528",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/74/92/79/14749279_23465963_480.jpg",
      brand: "Dior Eyewear",
      category: "Women",
      desc: "Stellaire1 square-frame sunglasses",
      details: `They say big sunglasses hide all sins. Crafted from metal, these Havana brown and gold-tone square sunglasses from Dior Eyewear won't let anyone notice you've been doing everything but sleeping at night. Featuring oversized frames, tortoiseshell detailing, green tinted lenses, nose pads, a logo decal on the lens, a logo at the temple, and straight arms with curved tips. This item comes with a protective case.
  
  Made in Italy`,
      price: "645",
    },
  
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/20/38/96/18203896_40674737_480.jpg",
      brand: "Diesel",
      category: "Denim",
      desc: "logo-jacquard slim-fit jeans",
      details: `logo-jacquard slim-fit jeans from DIESEL featuring blue, cotton, jacquard logo motif, logo patch to the rear, front button and zip fastening, classic five pockets, slim cut and straight leg. Conscious: This item contains cotton from a brand that is committed to improving farming practices globally through the Better Cotton Initiative (BCI).
      
  Made in Italy`,
      price: "462",
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
        "https://cdn-images.farfetch-contents.com/17/76/32/46/17763246_37424888_480.jpg",
      brand: "Alexander Wang",
      category: "Denim",
      desc: "logo-waistband straight-leg jeans",
      details: `Alexander Wang's signature effortless style is reflected in the design of these jeans. A logo waistband is paired with a bleach-blue colorway for a relaxed off-duty look.
      
  Made in Italy`,
      price: "450",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/26/20/95/17262095_35321401_480.jpg",
      brand: "Tory Burch",
      category: "Accessories",
      desc: "Kira enamel slider bracelet",
      details: `Made in Italy`,
      price: "151",
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
        "https://cdn-images.farfetch-contents.com/14/14/37/09/14143709_20740196_480.jpg",
      brand: "Frame",
      category: "Denim",
      desc: "Le High skinny jeans",
      details: `Blue cotton blend Le High skinny jeans from FRAME featuring a high rise, belt loops, a button and zip fly, a five pocket design, a skinny fit, and a regular length.
      
  Made in Italy`,
      price: "407",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/49/00/60/15490060_28955124_480.jpg",
      brand: "Frame",
      category: "Denim",
      desc: "flared jeans",
      details: `Made in Italy`,
      price: "393",
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
        "https://cdn-images.farfetch-contents.com/15/99/36/28/15993628_29890063_480.jpg",
      brand: "Mother",
      category: "Denim",
      desc: "The Weekender mid-rise flare jeans",
      details: `Made in Italy`,
      price: "342",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/20/68/58/17206858_35011132_480.jpg",
      brand: "Valentino Garavani",
      category: "Accessories",
      desc: "VLogo Signature buckle bracelet",
      details: `Made in Italy`,
      price: "211",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/99/36/77/17993677_39810167_480.jpg",
      brand: "Alighieri",
      category: "Accessories",
      desc: "Starry Night earrings set",
      details: `British brand Alighieri finds inspiration in Dante's Divine Comedy to design contemporary jewelry. Handcrafted from recycled silver, these Starry Night earrings each have their own individual design.
      
  Made in Italy`,
      price: "476",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/45/55/68/13455568_15727667_480.jpg",
      brand: "Saint Laurent",
      category: "Accessories",
      desc: "Loulou chain tassel earrings",
      details: `Looking to distract from a bad hair day? These earrings from Saint Laurent are clearly the way forward - in a YSL monogram stud design with a dropped tassel detail, this pair is sure to bring all the attention to your ears....and away from your bird's nest barnet. Distract, divert, overcome. Featuring a butterfly fastening, a monogram stud design, and a dropped tassel detail. These earrings come in a pair.
      
  Made in Italy`,
      price: "450",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/20/68/58/17206858_35011132_480.jpg",
      brand: "Valentino Garavani",
      category: "Accessories",
      desc: "VLogo Signature buckle bracelet",
      details: `Made in Italy`,
      price: "211",
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
        "https://cdn-images.farfetch-contents.com/16/33/87/45/16338745_31517679_480.jpg",
      brand: "Valentino Garavani",
      category: "Accessories",
      desc: "VLOGO Signature metal ring",
      details: `The next time someone asks you where your jewelry collection is from, just show this gold-tone ring. The 'V' says it all: it's a Valentino Garavani.
      
  Made in Italy`,
      price: "337",
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
        "https://cdn-images.farfetch-contents.com/17/70/12/14/17701214_37522295_480.jpg",
      brand: "Swarovski",
      category: "Accessories",
      desc: "Una crystal-heart stud earrings",
      details: `Made in Italy`,
      price: "185",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/36/40/27/18364027_39715313_480.jpg",
      brand: "Valentino Garavani",
      category: "Accessories",
      desc: "VLOGO crystal stud earrings",
      details: `Valentino Garavani's earrings spotlight the brand's VLOGO Signature. Here, a polished gold-tone iteration pops against the clear crystal background.
      
  Made in Italy`,
      price: "337",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/27/09/17/17270917_39338132_480.jpg",
      brand: "Amina Muaddi",
      category: "Accessories",
      desc: "Tina crystal-embellished earrings",
      details: `Amina Muaddi's unique take on accessories is present in the brand's SS22 collection thanks to pieces like the Tina earrings, covered in glistening crystals for a refined look.
      
  Made in Italy`,
      price: "1134",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/17/50/29/18175029_38893389_480.jpg",
      brand: "Balenciaga",
      category: "Accessories",
      desc: "Typo Valentine necklace",
      details: `Made in Italy`,
      price: "630",
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
        "https://cdn-images.farfetch-contents.com/16/05/01/06/16050106_30367414_480.jpg",
      brand: "Off-White",
      category: "Accessories",
      desc: "Arrows-motif brass ring",
      details: `If you like it then you should've put a ring on it. Ok, those might not be the exact lyrics to your fave Beyoncé song, but they apply to your new fave accessory. This Arrows ring from OFF-WHITE is music to your ears.
      
  Made in Italy`,
      price: "381",
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
        "https://cdn-images.farfetch-contents.com/14/51/26/84/14512684_21812245_480.jpg",
      brand: "Dior Eyewear",
      category: "Women",
      desc: "CatStyleDior2 rectangular-frame sunglasses",
      details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these powder pink CatStyleDior2 rectangular-frame sunglasses from Dior Eyewear. Take notes. Featuring mirrored lenses, 100% UV protection, a brand logo on the external arm, and straight arms with curved tips. This item comes with a protective case.
  
  Made in Italy`,
      price: "310",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/61/41/65/17614165_36698095_480.jpg",
      brand: "Dior Eyewear",
      category: "Women",
      desc: "Solar oversized-frame sunglasses",
      details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Solar oversized-frame sunglasses from Dior Eyewear. Take notes.
  
  Made in Italy`,
      price: "772",
    },
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
        "https://cdn-images.farfetch-contents.com/14/64/55/26/14645526_22772611_480.jpg",
      brand: "Gucci",
      category: "Handbags",
      desc: "Gucci 1955 Horsebit shoulder bag",
      details: `Skydiving, horseriding, and a Gucci handbag - you have all three on your bucket list. Go ahead and cross out the latter as soon as you get your hands on this white leather Gucci 1955 Horsebit shoulder bag. A blast from the past. Featuring an adjustable shoulder strap, a horsebit detail, gold-tone hardware, a drawstring fastening, an internal slip pocket, and a removable lining that can be pulled outward.
  
  Made in Italy`,
      price: "3109",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/14/64/54/75/14645475_22740459_480.jpg",
      brand: "Gucci",
      category: "Handbags",
      desc: "Gucci 1955 Horsebit shoulder bag",
      details: `Gucci has taken a tumble through its archives and come out cradling this Gucci 1955 Horsebit shoulder bag. Printed with the brand's Supreme pattern to its canvas construction, smooth leather trims, and a gold-tone horse bit detail add a distinctly "Gucci" touch. And to think: we used to hate history at school! Featuring a foldover top, a shoulder strap, Gucci Supreme logo pattern, leather trimming, a horsebit detail, gold-tone hardware, and internal pockets.
  
  Made in Italy`,
      price: "2870",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/13/43/38/63/13433863_21902676_480.jpg",
      brand: "Gucci",
      category: "Handbags",
      desc: "GG Marmont mini bag",
      details: `Red alert! Gucci's mini bag is as glamorous as it gets, so what are you waiting for? Part of the brand's beloved Marmont family, it's punctuated with a sleek GG plaque. Can't beat a classic.
  
  Made in Italy`,
      price: "2250",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/02/15/79/18021579_38146774_480.jpg",
      brand: "Gucci",
      category: "Handbags",
      desc: "logo-print leather shoulder bag",
      details: `Gucci combines subtle branding with a minimalist aesthetic. As showcased by this bag, boasting a classic moon-silhouette and crafted from pure leather, it's defined by the logo print to the front confirming house recognition.
  
  Made in Italy`,
      price: "3005",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/68/85/68/17688568_37133148_480.jpg",
      brand: "Philip Karto",
      category: "Handbags",
      desc: "Speedy 35 tote bag",
      details: `Made in the United States`,
      price: "6795",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/12/22/80/97/12228097_10540221_480.jpg",
      brand: "Dolce & Gabbana",
      category: "Handbags",
      desc: "small Sicily bag",
      details: `Your new best friend. Easy to use by the shoulder or even by the hand, this green leather small Sicily bag from Dolce & Gabbana will carry all your essentials in style. Level up! Featuring a round top handle, gold-tone hardware, a foldover top with magnetic closure, a leopard print lining and a shoulder strap.
  
  Made in Italy`,
      price: "1645",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/15/13/71/32/15137132_30693619_480.jpg",
      brand: "Balenciaga",
      category: "Handbags",
      desc: "Everyday camera bag",
      details: `Practicality is key but a little style never hurt anyone. Crafted from leather, this black and white Everyday camera bag from Balenciaga is decorated with a printed logo on the front. The perfect go-to for whenever you need to go fashionably hands-free. Featuring an adjustable shoulder strap, a top zip fastening, a main internal compartment, an internal slip pocket, an embossed internal logo stamp, a back slip pocket, and silver-tone hardware.`,
      price: "1370",
    },
  ];


clothes.addEventListener("click", function(){
    clothesData = categoryData.filter(function(el){
        return el.category == "Clothes";
    });
    localStorage.setItem("items" , JSON.stringify(clothesData));
    window.location.href = "/HTML/shop.html";
});

sneakers.addEventListener("click", function(){
    sneakersData = categoryData.filter(function(el){
        return el.category == "Shoes";
    });

    localStorage.setItem("items" , JSON.stringify(sneakersData));
    window.location.href = "/HTML/shop.html";
})

denim.addEventListener("click", function(){
    denimData = categoryData.filter(function(el){
        return el.category == "Denim";
    });

    localStorage.setItem("items" , JSON.stringify(denimData));
    window.location.href = "/HTML/shop.html";
})

handbag.addEventListener("click", function(){
    handbagData = categoryData.filter(function(el){
        return el.category == "Handbags";
    });

    localStorage.setItem("items" , JSON.stringify(handbagData));
    window.location.href = "/HTML/shop.html";
})

jewel.addEventListener("click", function(){
    jewelData = categoryData.filter(function(el){
        return el.category == "Accessories";
    });

    localStorage.setItem("items" , JSON.stringify(jewelData));
    window.location.href = "/HTML/shop.html";
})

sunglass.addEventListener("click", function(){
    sunglassData = categoryData.filter(function(el){
        return el.brand == "Dior Eyewear" || el.brand == "Balmain Eyewear" || el.brand == "Off-White Eyewear" || el.brand == "Givenchy Eyewear" || el.brand == "Gucci Eyewear";
    });

    localStorage.setItem("items" , JSON.stringify(sunglassData));
    window.location.href = "/HTML/shop.html";
});


let discountData = [
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/66/82/82/16668282_33333310_480.jpg",
    brand: "Philipp Plein",
    category: "Jumpsuit",
    desc: "New Baroque ski jumpsuit",
    details: `Made in Italy`,
    price: "3038",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/71/90/31/17719031_38518674_480.jpg",
    brand: "BOGNER",
    category: "Jumpsuit",
    desc: "side stripe performance jumpsuit",
    details: `Made in Italy`,
    price: "2182",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/42/30/10/15423010_28735286_480.jpg",
    brand: "Natasha Zinko",
    category: "Jumpsuit",
    desc: "uniform jumpsuit",
    details: `Grey uniform jumpsuit from Natasha Zinko featuring long sleeves, flap pockets and a relaxed fit.
    
Made in Italy`,
    price: "237",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/30/79/26/14307926_20549331_480.jpg",
    brand: "Emporio Armani",
    category: "Jumpsuit",
    desc: "off-shoulder jumpsuit",
    details: `Emporio Armani is Giorgio Armani’s second line. A diffusion line committed to luxury essentials, it delivers contemporary collections designed with everyday luxe wear in mind, evidenced black off-shoulder jumpsuit. Featuring a sweetheart neckline, a sleeveless design, a fitted waist, a cut-out detail, a slim fit, and a rear zip fastening.
    
Made in Italy`,
    price: "841",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/93/02/53/17930253_37815985_480.jpg",
    brand: "Saint Laurent",
    category: "Accessories",
    desc: "curb-chain necklace",
    details: `Saint Laurent's necklace riffs on traditional curb-chain bracelets. Comprising polished curb chain links, it features a push-clasp engraved with the brand's signature.
    
Made in Italy`,
    price: "1290",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/94/98/61/16949861_36355155_480.jpg",
    brand: "Saint Laurent",
    category: "Accessories",
    desc: "triple-link drop earrings",
    details: `These drop earrings from Saint Laurent are characterized by three interlaced curb links. The Maison's impeccable attention to detail is evidenced by the lower loop that comes in a subtle rose-tone hue.
    
Made in Italy`,
    price: "395",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/68/27/23/14682723_26447737_480.jpg",
    brand: "3.1 Phillip Lim",
    category: "Jumpsuit",
    desc: "long-sleeved jumpsuit",
    details: `Solving the issue of matching your top-half to your trousers, jumpsuits are a girl's best friend. This wide-leg, 3.1 Phillip Lim piece goes a step further. It guarantees that you'll be the best dressed in any room you enter. Featuring a collar style, a front button fastening, long sleeves, a belted waist, a wide leg, and a long length.
    
Made in Italy`,
    price: "795",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/14/37/70/18143770_38748760_480.jpg",
    brand: "Valentino Garavani",
    category: "Accessories",
    desc: "Roman stud ring",
    details: `Debuted as part of the AW21 collection, the Roman Studs are a larger iteration of Valentino’s classic Rockstuds. Presented here in a gold hue, this theme adds an unmistakable look to this pinky finger ring.
    
Made in Italy`,
    price: "408",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/24/39/93/17243993_35417296_480.jpg",
    brand: "Sea",
    category: "Jumpsuit",
    desc: "floral jumpsuit",
    details: `Made in Italy`,
    price: "935",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/13/01/85/08/13018508_13786788_480.jpg",
    brand: "Olympiah",
    category: "Jumpsuit",
    desc: "Fiora jumpsuit",
    details: `Off-white linen blend Fiora jumpsuit from Olympiah featuring a v-neck, spaghetti straps, a striped print, and a straight fit.
    
Made in Italy`,
    price: "283",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/34/25/81/16342581_31514699_480.jpg",
    brand: "Loulou",
    category: "Jumpsuit",
    desc: "sequinned ruffled jumpsuit",
    details: `Made in Italy`,
    price: "2764",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/56/24/07/16562407_33043369_480.jpg",
    brand: "Camilla",
    category: "Jumpsuit",
    desc: "embroidered silk jumpsuit",
    details: `Made in Italy`,
    price: "959",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/13/61/28/90/13612890_16529054_480.jpg",
    brand: "Galvan",
    category: "Jumpsuit",
    desc: "corset jumpsuit",
    details: `Midnight blue corset jumpsuit from Galvan featuring a sleeveless design, a split neck, a fitted silhouette, a side invisible zip fastening, and a flared leg. POSITIVELY CONSCIOUS: Galvan scores 3 out of 5 by the independent ethical brand rating agency Good On You. It has a high animal rating and it does not use fur, leather, exotic animal skin, or angora.
    
Made in Italy`,
    price: "1614",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/24/56/14/17245614_35417349_480.jpg",
    brand: "Jonathan Simkhai",
    category: "Jumpsuit",
    desc: "sleeveless jumpsuit",
    details: `Made in Italy`,
    price: "1012",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/21/80/12/17218012_37158738_480.jpg",
    brand: "Swarovski",
    category: "Accessories",
    desc: "Chroma hoop earrings",
    details: `Made in Italy`,
    price: "300",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/87/47/24/15874724_30092759_480.jpg",
    brand: "Perfect Moment",
    category: "Jumpsuit",
    desc: "Qanaq fitted jumpsuit",
    details: `Made in Italy`,
    price: "1527",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/27/05/85/18270585_39189096_480.jpg",
    brand: "Juun.J",
    category: "Jumpsuit",
    desc: "drawstring cargo jumpsuit",
    details: `One for renewing classic styles with new perspectives, Juun.J presents its utilitarian-inspired take on the jumpsuit with this piece, characterized by its practical drawstring waist and side cargo pockets.
    
Made in Italy`,
    price: "1071",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/56/79/23/18567923_41308164_480.jpg",
    brand: "Good American",
    category: "Denim",
    desc: "ripped-detail denim jeans",
    details: `Los Angeles-based brand Good American showcases their modern design style in this pair of denim jeans from the AW22 collection, which features ripped detailing. In a classic blue colourway, this contemporary finish stands out even more.
    
Made in Italy`,
    price: "275",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/72/80/77/14728077_24492423_480.jpg",
    brand: "Kenneth Jay Lane",
    category: "Accessories",
    desc: "Doorknocker gold-tone clip earrings",
    details: `Kenneth Jay Lane's earrings aren't for wallflowers. This sleek pair comprises two polished gold-tone hoops - one gilded, one smooth - that elegantly interlink. Now you just need an excuse to wear them. These earrings come in a pair.
    
Made in Italy`,
    price: "115",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/87/60/94/18876094_41014702_480.jpg",
    brand: "Diesel",
    category: "Denim",
    desc: "1999 straight-leg distressed jeans",
    details: `Made in Italy`,
    price: "423",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/98/48/64/15984864_30052343_480.jpg",
    brand: "Kenneth Jay Lane",
    category: "Accessories",
    desc: "two-tone rope-link necklace",
    details: `More is more and less is a bore. Constructed from brass, this two-tone rope-link necklace from Kenneth Jay Lane is the only accessory your look needs to be elevated. Chain it up.
    
Made in Italy`,
    price: "368",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/39/09/37/17390937_36353590_480.jpg",
    brand: "Alexander Wang",
    category: "Denim",
    desc: "strap-detail straight-leg jeans",
    details: `Detailed with diamante logo-embellished straps, these jeans have a layered look. The pair has a straight-leg fit and an acid-wash aesthetic.
    
Made in Italy`,
    price: "450",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/56/79/30/18567930_41169233_480.jpg",
    brand: "Good American",
    category: "Denim",
    desc: "The Weekender straight-leg jeans",
    details: `From Good American, these jeans are detailed with a distressed finish. This creates a worn-in look for the pair for effortless appeal.
    
Made in Italy`,
    price: "281",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/28/65/39/17286539_35632026_480.jpg",
    brand: "Jacquemus",
    category: "Accessories",
    desc: "Le Chiquito bracelet",
    details: `The Le Chiquito bracelet pays homage to Jacquemus' iconic mini-bag, featuring a miniature charm version of the bag with the brand's logo engraved on the front. Its small size is complemented by the chunky curb-chain links wristband. 
    
Made in Italy`,
    price: "171",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/56/88/74/18568874_40374194_480.jpg",
    brand: "Good American",
    category: "Denim",
    desc: "high-waisted denim jeans",
    details: `Los Angeles-based brand Good American showcases their refined, modern design style in this pair of denim jeans from the AW22 collection, which feature a high-waisted silhouette and a tonal colorway.
    
Made in Italy`,
    price: "232",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/83/37/38/18833738_40908009_480.jpg",
    brand: "Blumarine",
    category: "Denim",
    desc: "low-rise flared jeans",
    details: `Designed by Italian brand Blumarine, these low-rise jeans channel the brand's boldness through a paneled design and flared silhouette.
    
Made in Italy`,
    price: "1126",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/85/72/30/18857230_41034478_480.jpg",
    brand: "Eytys",
    category: "Denim",
    desc: "bleached-effect straight-leg jeans",
    details: `Made in Italy`,
    price: "454",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/12/77/16/29/12771629_12923572_480.jpg",
    brand: "Versace",
    category: "Accessories",
    desc: "Medusa motif ring",
    details: `Medusa? I barely knew 'er! Well, maybe it was time you were introduced. This gold-tone brass Medusa motif ring from Versace is glad to make your acquaintance. What do you think? Featuring a Medusa head logo embellishment and Greek Key detailing. 
    
Made in Italy`,
    price: "176",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/86/04/54/18860454_41070966_480.jpg",
    brand: "AGOLDE",
    category: "Denim",
    desc: "mid-rise straight-leg jeans",
    details: `Agolde offers effortless day-to-day style with these jeans. Crafted from organic cotton to a straight-leg silhouette, they are finished in a timeless black hue.
    
Made in Italy`,
    price: "422",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/56/79/33/18567933_40509370_480.jpg",
    brand: "Good American",
    category: "Denim",
    desc: "Core skinny jeans",
    details: `Core skinny jeans from Good American featuring blue, organic cotton blend, high-waisted, skinny cut, distressed finish, front button and zip fastening, belt loops, and classic five pockets.
    
Made in Italy`,
    price: "178",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/64/00/38/17640038_37877927_480.jpg",
    brand: "Chloé",
    category: "Accessories",
    desc: "Darcey pearl drop earrings",
    details: `Channeling Chloé's refined spirit, these Darcey pearl earrings feature freshwater baroque pearls enhanced with gold brass hardware.
    
Made in Italy`,
    price: "376",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/20/38/96/18203896_40674737_480.jpg",
    brand: "Diesel",
    category: "Denim",
    desc: "logo-jacquard slim-fit jeans",
    details: `logo-jacquard slim-fit jeans from DIESEL featuring blue, cotton, jacquard logo motif, logo patch to the rear, front button and zip fastening, classic five pockets, slim cut and straight leg. Conscious: This item contains cotton from a brand that is committed to improving farming practices globally through the Better Cotton Initiative (BCI).
    
Made in Italy`,
    price: "462",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/76/32/46/17763246_37424888_480.jpg",
    brand: "Alexander Wang",
    category: "Denim",
    desc: "logo-waistband straight-leg jeans",
    details: `Alexander Wang's signature effortless style is reflected in the design of these jeans. A logo waistband is paired with a bleach-blue colorway for a relaxed off-duty look.
    
Made in Italy`,
    price: "450",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/26/20/95/17262095_35321401_480.jpg",
    brand: "Tory Burch",
    category: "Accessories",
    desc: "Kira enamel slider bracelet",
    details: `Made in Italy`,
    price: "151",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/14/37/09/14143709_20740196_480.jpg",
    brand: "FRAME",
    category: "Denim",
    desc: "Le High skinny jeans",
    details: `Blue cotton blend Le High skinny jeans from FRAME featuring a high rise, belt loops, a button and zip fly, a five pocket design, a skinny fit, and a regular length.
    
Made in Italy`,
    price: "407",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/49/00/60/15490060_28955124_480.jpg",
    brand: "FRAME",
    category: "Denim",
    desc: "flared jeans",
    details: `Made in Italy`,
    price: "393",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/99/36/28/15993628_29890063_480.jpg",
    brand: "MOTHER",
    category: "Denim",
    desc: "The Weekender mid-rise flare jeans",
    details: `Made in Italy`,
    price: "342",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/20/68/58/17206858_35011132_480.jpg",
    brand: "Valentino Garavani",
    category: "Accessories",
    desc: "VLogo Signature buckle bracelet",
    details: `Made in Italy`,
    price: "211",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/99/36/77/17993677_39810167_480.jpg",
    brand: "Alighieri",
    category: "Accessories",
    desc: "Starry Night earrings set",
    details: `British brand Alighieri finds inspiration in Dante's Divine Comedy to design contemporary jewelry. Handcrafted from recycled silver, these Starry Night earrings each have their own individual design.
    
Made in Italy`,
    price: "476",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/13/45/55/68/13455568_15727667_480.jpg",
    brand: "Saint Laurent",
    category: "Accessories",
    desc: "Loulou chain tassel earrings",
    details: `Looking to distract from a bad hair day? These earrings from Saint Laurent are clearly the way forward - in a YSL monogram stud design with a dropped tassel detail, this pair is sure to bring all the attention to your ears....and away from your bird's nest barnet. Distract, divert, overcome. Featuring a butterfly fastening, a monogram stud design, and a dropped tassel detail. These earrings come in a pair.
    
Made in Italy`,
    price: "450",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/20/68/58/17206858_35011132_480.jpg",
    brand: "Valentino Garavani",
    category: "Accessories",
    desc: "VLogo Signature buckle bracelet",
    details: `Made in Italy`,
    price: "211",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/33/87/45/16338745_31517679_480.jpg",
    brand: "Valentino Garavani",
    category: "Accessories",
    desc: "VLOGO Signature metal ring",
    details: `The next time someone asks you where your jewelry collection is from, just show this gold-tone ring. The 'V' says it all: it's a Valentino Garavani.
    
Made in Italy`,
    price: "337",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/70/12/14/17701214_37522295_480.jpg",
    brand: "Swarovski",
    category: "Accessories",
    desc: "Una crystal-heart stud earrings",
    details: `Made in Italy`,
    price: "185",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/36/40/27/18364027_39715313_480.jpg",
    brand: "Valentino Garavani",
    category: "Accessories",
    desc: "VLOGO crystal stud earrings",
    details: `Valentino Garavani's earrings spotlight the brand's VLOGO Signature. Here, a polished gold-tone iteration pops against the clear crystal background.
    
Made in Italy`,
    price: "337",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/27/09/17/17270917_39338132_480.jpg",
    brand: "Amina Muaddi",
    category: "Accessories",
    desc: "Tina crystal-embellished earrings",
    details: `Amina Muaddi's unique take on accessories is present in the brand's SS22 collection thanks to pieces like the Tina earrings, covered in glistening crystals for a refined look.
    
Made in Italy`,
    price: "1134",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/17/50/29/18175029_38893389_480.jpg",
    brand: "Balenciaga",
    category: "Accessories",
    desc: "Typo Valentine necklace",
    details: `Made in Italy`,
    price: "630",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/05/01/06/16050106_30367414_480.jpg",
    brand: "Off-White",
    category: "Accessories",
    desc: "Arrows-motif brass ring",
    details: `If you like it then you should've put a ring on it. Ok, those might not be the exact lyrics to your fave Beyoncé song, but they apply to your new fave accessory. This Arrows ring from OFF-WHITE is music to your ears.
    
Made in Italy`,
    price: "381",
  },


];


let jeans = document.getElementById("jeans");
let jumpsuit = document.getElementById("jumpsuit");
let accessories = document.getElementById("accessories");


let jeansData = [];
let jumpsuitData = [];
let accessoriesData = [];


jeans.addEventListener("click", function(){
  jeansData = discountData.filter(function(elem){
    return elem.category == "Denim";
  })

  localStorage.setItem("discount-items" , JSON.stringify(jeansData));
  window.location.href = "/HTML/discount.html";
});

jumpsuit.addEventListener("click", function(){
  jumpsuitData = discountData.filter(function(elem){
    return elem.category == "Jumpsuit";
  })

  localStorage.setItem("discount-items" , JSON.stringify(jumpsuitData));
  window.location.href = "/HTML/discount.html";
});

accessories.addEventListener("click", function(){
  accessoriesData = discountData.filter(function(elem){
    return elem.category == "Accessories";
  })

  localStorage.setItem("discount-items" , JSON.stringify(accessoriesData));
  window.location.href = "/HTML/discount.html";
});

  