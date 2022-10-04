let commodity = document.getElementById("commodity");
let price = document.getElementById("price");
let wall = document.getElementById("sunglasseswall");

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

let sunglassesData = [
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/52/15/57/14521557_22348431_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "CatStyleDior2 rectangular-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these CatStyleDior2 rectangular-frame sunglasses from Dior Eyewear. Take notes.

Made in Italy`,
    price: "310",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/74/92/79/14749279_23465963_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "Stellaire1 square-frame sunglasses",
    details: `They say big sunglasses hide all sins. Crafted from metal, these Havana brown and gold-tone square sunglasses from Dior Eyewear won't let anyone notice you've been doing everything but sleeping at night. Featuring oversized frames, tortoiseshell detailing, green tinted lenses, nose pads, a logo decal on the lens, a logo at the temple, and straight arms with curved tips. This item comes with a protective case.

Made in Italy`,
    price: "645",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/51/26/84/14512684_21812245_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "CatStyleDior2 rectangular-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these powder pink CatStyleDior2 rectangular-frame sunglasses from Dior Eyewear. Take notes. Featuring mirrored lenses, 100% UV protection, a brand logo on the external arm, and straight arms with curved tips. This item comes with a protective case.

Made in Italy`,
    price: "310",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/61/41/65/17614165_36698095_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "Solar oversized-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Solar oversized-frame sunglasses from Dior Eyewear. Take notes.

Made in Italy`,
    price: "772",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/34/15/21/17341521_36139842_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "EverDior RU round-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these EverDior RU round-frame sunglasses from Dior Eyewear. Take notes.

Made in Italy`,
    price: "772",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/51/27/17/14512717_22049538_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "Stella oversized sunglasses",
    details: `Rose gold titanium Stella oversized sunglasses from Dior Eyewear featuring oversized frames, a tonal gradient effect, straight arms with angled tips, and 100% UVA and UVB protection.

Made in Italy`,
    price: "875",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/69/14/07/15691407_28640635_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "square-frame oversized sunglasses",
    details: `Feeling a little shady? Pop on these square-frame oversized sunglasses from Dior Eyewear to radiate don't-speak-to-me coolness. Once those headphones are in, you're ready to go.

Made in Italy`,
    price: "797",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/60/05/70/14600570_22477112_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "oversized gradient sunglasses",
    details: `Shield your eyes from the skies with these black oversized gradient sunglasses from Dior Eyewear. Because squinting doesn't suit you. Featuring oversized frames, gradient lenses, and a brand logo on the external arm.

Made in Italy`,
    price: "616",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/30/62/03/17306203_35907991_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "ArchiDior square-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these ArchiDior square-frame sunglasses from Dior Eyewear. Take notes.

Made in Italy`,
    price: "688",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/51/27/17/14512717_22049538_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "Stella oversized sunglasses",
    details: `Rose gold titanium Stella oversized sunglasses from Dior Eyewear featuring oversized frames, a tonal gradient effect, straight arms with angled tips and 100% UVA and UVB protection.

Made in Italy`,
    price: "875",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/62/08/10/14620810_22514800_480.jpg",
    brand: "Dior Eyewear",
    category: "Eyewear",
    desc: "CatStyleDior1 cat-eye frame sunglasses",
    details: `If you're going to be the most dazzling version of yourself, you're going to need the right accessories. Designed with a cat-eye frame, these grey CatStyleDior1 sunglasses from Dior Eyewear are decorated with all-over crystal embellishments for an extra sparkly touch. Shine on! Featuring tinted lenses, 100% UV protection, crystal embellishments, a brand logo on the external arm, and straight arms with curved tips. This item comes with a protective case.

Made in Italy`,
    price: "2162",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/52/15/57/14521557_22348431_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "Admirable rectangle-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Admirable rectangle-frame sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1044",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/17/56/10/18175610_40710431_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "Admirable square tinted sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Admirable square-tinted sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1169",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/17/56/08/18175608_40701869_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "round tinted sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these round tinted sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1046",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/84/77/30/18847730_40951663_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "Fixe II frameless sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Fixe II frameless sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1266",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/73/63/81/16736381_32988969_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "Officier square-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Officier square-frame sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1243",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/19/01/33/50/19013350_41494272_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "Wonder Boy oversized sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these Wonder Boy oversized sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1883",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/72/48/16007248_30165295_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "x Akoni chain-arm sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these x Akoni chain-arm sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "997",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/18/31/25/18183125_40712162_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "B-VI square tinted sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these B-VI square tinted sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "1169",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/82/51/83/16825183_33487747_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "LA Royale oversize-frame sunglasses",
    details: `If the eyes are the mirror to the soul, then sunglasses are the mirror to your fashion sense. Get 10s across the board with these LA Royale oversize-frame sunglasses from Balmain Eyewear. Take notes.

Made in Italy`,
    price: "564",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/17/15/48/16171548_31796925_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "tortoiseshell square-frame sunglasses",
    details: `Sometimes it's beneficial to look at things from a different perspective. And now you'll see the world through these Balmain Eyewear sunglasses. Everything seems much better, right?

Made in Italy`,
    price: "867",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/44/77/77/15447777_28120499_480.jpg",
    brand: "Balmain Eyewear",
    category: "Eyewear",
    desc: "1914 pilot-frame sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these 1914 pilot-frame sunglasses from Balmain Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "1524",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/44/77/77/15447777_28120499_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "cat-eye logo-engraved sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these cat-eye logo-engraved sunglasses from Givenchy Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "476",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/90/70/16009070_29818267_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV pierced sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these GV-pierced sunglasses from Givenchy Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "528",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/90/70/16009070_29818267_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV pierced sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these GV-pierced sunglasses from Givenchy Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "528",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/79/08/65/16790865_33513071_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "logo-embossed cat-eye sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these logo-embossed cat-eye sunglasses from Givenchy Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "476",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/05/51/48/15055148_25328569_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "tortoiseshell cat eye sunglasses",
    details: `Havana red and brown tortoiseshell cat eye sunglasses from Givenchy Eyewear featuring gold-tone hardware, tinted lenses and straight arms with curved tips. This item comes with a protective case.

Made in Italy`,
    price: "731",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/47/24/76/14472476_21382003_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV7137S61284 black sunglasses",
    details: `Black GV7137S61284 sunglasses from Givenchy Eyewear featuring logo to the front, tinted lenses, a double nose bridge, and silver-tone arms. Made in Italy. This item comes with a protective case.

Made in Italy`,
    price: "731",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/05/51/58/15055158_25328609_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "oversized square frame sunglasses",
    details: `Gold-tone and pink oversized square frame sunglasses from Givenchy Eyewear featuring tortoiseshell detailing, tinted lenses and straight arms with curved tips. This item comes with a protective case.

Made in Italy`,
    price: "528",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/90/68/16009068_29818262_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV Vision pilot-frame sunglasses",
    details: `Trying to hide yesterday's late night at work? Go ahead and cover up your eyes with these GV Vision pilot-frame sunglasses from Givenchy Eyewear that are bold enough to make your boss simply think you're pulling off a glamorous look. It'll be our stylish little secret.

Made in Italy`,
    price: "561",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/51/01/17595101_37349142_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Catalina square-frame sunglasses",
    details: `Taking its name from Santa Catalina Island in California, these Off-White sunglasses are perfect for sun-filled days. They are designed with large square frames and detailed with the signature Arrows motif on the arm.

Made in Italy`,
    price: "392",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/53/71/09/18537109_41053267_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Francisco square-frame sunglasses",
    details: `A pair of stripes accentuate the square frame of the Francisco sunglasses by OFF-WHITE with signature branded prints at the arm completing the look.

Made in Italy`,
    price: "482",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/38/07/17593807_38085035_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Nassau marble-print rectangle frame sunglasses",
    details: `Off-White imbues their eyewear line with a signature contemporary look, as is showcased with the Nassau sunglasses. The pair boasts a chunky rectangular frame and appears here in a black marble pattern.

Made in Italy`,
    price: "330",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/38/05/17593805_37551850_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Virgil square-frame sunglasses",
    details: `A white Arrows motif plaque adorns the arm of Off-White's Virgil sunglasses, adding a branded finish to the rectangular design.

Made in Italy`,
    price: "385",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/25/50/81/18255081_38962330_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Virgil square-frame sunglasses",
    details: `Named after designer Virgil Abloh, these Virgil sunglasses are one of Off-White's most iconic eyewear styles. Adorned with perforated detailing throughout, the pair also carries the recognizable Arrows motif towards the side

Made in Italy`,
    price: "512",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/53/68/42/18536842_41053189_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Pablo square-frame sunglasses",
    details: `Exude confidence in the Pablo sunglasses by OFF-WHITE featuring a striking block color frame with contrasting horn-effect arms.

Made in Italy`,
    price: "330",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/51/08/17595108_38295554_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Atlantic cut-out detail square-frame sunglasses",
    details: `Cut-out detailing is one of Off-White's preferred accents, which can be seen applied to the Atlantic sunglasses. The contemporary pair boasts an oversized square frame and is embellished with an Arrows-logo plaque on the arm.

Made in Italy`,
    price: "467",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/53/57/19/18535719_41053263_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Gustav tinted sunglasses",
    details: `Off-White brings their industrial design approach to their sunglasses collections, evident in the formation of these Gustav sunglasses. Crafted in a classic black tone, the pair reimagines the traditional cat eye frame, flattening the brow line for a sharp and confident finish.

Made in Italy`,
    price: "330",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/40/60/12/18406012_39498741_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Washington tinted sunglasses",
    details: `Off-White's penchant for a graphic aesthetic is captured in the angular frame of these Washington sunglasses. Crafted in a vibrant red hue, the brand's famed Arrows motif adorns the arms making the pair instantly identifiable.

Made in Italy`,
    price: "484",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/34/36/13/18343613_39972170_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "heart-pendants square frame sunglasses",
    details: `Gucci references the 70s with these oversized sunglasses, defined by their bold square frame and colorfully tinted lenses. Detachable heart-shaped pendants add a playful look, adorned with the brand's iconic Interlocking G logo for a branded finish.

Made in Italy`,
    price: "789",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/34/42/20/18344220_40569137_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "Visor oversized sunglasses",
    details: `Visor oversized sunglasses from GUCCI EYEWEAR featuring grey tinted lenses, square frame, logo plaque at the arm, straight arms and curved tips. These glasses come with a protective case.

Made in Italy`,
    price: "1469",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/35/67/40/18356740_40606046_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "oversized square sunglasses",
    details: `oversized square sunglasses from GUCCI EYEWEAR featuring black, the signature Interlocking G logo, gradient lenses, grey tinted lenses, oversize frame, square frame, and curved arms. These glasses come with a protective case.

Made in Italy`,
    price: "589",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/34/42/17/18344217_40002573_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "oversized square-frame sunglasses",
    details: `These Gucci sunglasses' oversized frame encapsulates the house's fascination with silhouettes from past eras. The Havana-brown pair has light coloured lenses, framed by a refined gold-toned trim.

Made in Italy`,
    price: "724",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/49/74/40/18497440_39972946_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "oversized-logo rectangle frame sunglasses",
    details: `Gucci's retro influences are evident in the house's eyewear collection, as is encapsulated by these rectangular sunglasses. Contrasting a pearlescent ecru frame with brown lenses, the pair's oversized arms are adorned with GG logo motifs for a bold branded look.

Made in Italy`,
    price: "367",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/87/53/87/17875387_39749177_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "square-frame sunglasses",
    details: `Gucci Eyewear's sunglasses will add a touch of subtle color to any outfit. Designed with a square frame, this grey pair is fitted with contrasting brown lenses.

Made in Italy`,
    price: "558",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/34/36/07/18343607_40159711_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "round-frame gradient sunglasses",
    details: `Gucci Eyewear offers a timeless design with these sunglasses. Delicate gold-tone frames are accentuated by gradient lenses, creating an effortless and refined finish for the pair.

Made in Italy`,
    price: "558",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/92/27/55/14922755_26141624_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "round-frame gold-tone sunglasses",
    details: `Take a step into the 70s with these sunglasses from Gucci Who doesn't love a throwback? Elton John called, he wants them back. Featuring a round frame and tinted lenses.

Made in Italy`,
    price: "688",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/67/56/18/16675618_36009725_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "Web detail navigator-frame sunglasses",
    details: `Transparent metal Web detail navigator-frame sunglasses from GUCCI EYEWEAR.

Made in Italy`,
    price: "408",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/54/38/08/18543808_40293700_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "rectangle-frame branded sunglasses",
    details: `rectangle-frame branded sunglasses from GUCCI EYEWEAR featuring yellow, brown, acetate, rectangle frame, tinted lenses, UV-protective lenses, straight arms, and straight tips. These glasses come with a protective case.

Made in Italy`,
    price: "640",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/90/25/85/17902585_40161101_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "clear square-frame sunglasses",
    details: `Italy-made and adorned with discreet gold-tone lettering at the sides, these light blue sunglasses from Gucci Eyewear's AW22 collection boast a timeless square frame and are given a contemporary twist thanks to their transparent design.

Made in Italy`,
    price: "578",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/78/17/36/16781736_33167526_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "tinted square-frame sunglasses",
    details: `Whenever in doubt, slip these Gucci Eyewear square-frame sunglasses on and it’s all good. With tinted lenses, they have logo-printed arms and a breath-taking style.

Made in Italy`,
    price: "445",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/73/52/29/16735229_35858032_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "square-frame tinted sunglasses",
    details: `Square up to your new favorite sunglasses. Your accessory selection will be in good shape with the addition of this Gucci design. You'll be seen from all the right angles.

Made in Italy`,
    price: "311",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/13/32/18/11/13321811_14942930_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "Square-frame metal sunglasses",
    details: `Glasses arrive in a velvet hard case, available in a range of six jewel-toned colors and paired with a coordinating satin lining. The case color selection will be individually selected for each pair of glasses and comes with a matching satin flannel pouch and ivory microfiber cloth.`,
    price: "531",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/21/07/64/18210764_39202693_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "pilot-frame tinted sunglasses",
    details: `Transparent metal pilot-frame tinted sunglasses from GUCCI EYEWEAR.

Made in Italy`,
    price: "689",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/40/13/95/18401395_39536340_480.jpg",
    brand: "Gucci Eyewear",
    category: "Eyewear",
    desc: "long rectangular-frame sunglasses",
    details: `Transparent metal long rectangular-frame sunglasses from GUCCI EYEWEAR.

Made in Italy`,
    price: "307",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/53/67/88/18536788_41053246_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Leonardo square-frame sunglasses",
    details: `Transparent metal Leonardo square-frame sunglasses from Off-White EYEWEAR.

Made in Italy`,
    price: "555",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/30/68/42/18306842_39281215_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Virgil square-frame sunglasses",
    details: `Adorned with the house's signature Arrows motif at the sides, this iteration of Off-White's Virgil sunglasses boasts a contemporary square frame and bold mirrored lenses that complement their white design.

Made in Italy`,
    price: "673",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/18/53/68/32/18536832_41123719_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "square-frame tinted sunglasses",
    details: `Off-White's minimalist approach to streetwear style is showcased through the use of instantly recognisable details on this pair of tinted sunglasses. Featuring the Hands Off logo printed at the arms, the accessory has a creative and contemporary edge.

Made in Italy`,
    price: "428",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/38/21/17593821_38084485_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Zurich mirrored square-frame sunglasses (15cm)",
    details: `Presented with a bold red frame, the Zurich sunglasses by Off-White are finished with mirrored yellow lenses that complement its vibrant look. The brand's logo is printed on the arm.

Made in Italy`,
    price: "330",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/52/83/30/16528330_39879077_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Tropez square-frame sunglasses",
    details: `Embrace sunny days with these Tropez sunglasses from Off-White. They are cut with large square frames for blocking out rays while the iconic Arrows plaque sits at the side of the arms.

Made in Italy`,
    price: "928",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/59/38/19/17593819_37602804_480.jpg",
    brand: "Off-White Eyewear",
    category: "Eyewear",
    desc: "Nassau rectangular-frame sunglasses (15cm)",
    details: `These sunglasses from Off-White are crafted with a dramatic rectangular-frame silhouette. The design is finished with tinted UV-blocking lenses for added protection.

Made in Italy`,
    price: "330",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/06/50/16000650_29819330_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV pilot sunglasses",
    details: `Transparent metal GV pilot sunglasses from Givenchy EYEWEAR.

Made in Italy`,
    price: "528",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/14/31/66/22/14316622_20516995_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "pilot-frame sunglasses",
    details: `Transparent metal pilot-frame sunglasses from Givenchy EYEWEAR.

Made in Italy`,
    price: "528",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/75/34/04/16753404_33512390_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "logo-plaque square-frame sunglasses",
    details: `Transparent metal logo-plaque square-frame sunglasses from Givenchy EYEWEAR.

Made in Italy`,
    price: "561",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/44/99/38/15449938_27400191_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "tinted oversized sunglasses",
    details: `Transparent metal tinted oversized sunglasses from Givenchy EYEWEAR.

Made in Italy`,
    price: "731",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/00/06/50/16000650_29819330_480.jpg",
    brand: "Givenchy Eyewear",
    category: "Eyewear",
    desc: "GV pilot sunglasses",
    details: `Transparent metal GV pilot sunglasses from Givenchy EYEWEAR.

Made in Italy`,
    price: "528",
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
          let descrpt = read.filter(function(el){
            return elem.brand == el.brand && elem!=el && elem.category == el.category;
          });

          localStorage.setItem("descrpt" , JSON.stringify(descrpt));
          localStorage.setItem("prod", JSON.stringify(prod));
          localStorage.setItem("dataArr", JSON.stringify(sunglassesData));
          window.location.href = "/HTML/description.html";
        });
        
        div.append(text,image,brand,desc,price, likebtn, cartbtn);
        wall.append(div);
    })
}
displayFun(sunglassesData);


commodity.addEventListener("change", function(){

    if(commodity.value == ""){
        displayFun(sunglassesData);
    } else{

        let selectData =  sunglassesData.filter(function(el){
            return commodity.value == el.brand;
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

let sunglassesDataCopy = sunglassesData.map(function(el){
    return el;
})

price.addEventListener("change", function(){

    if(price.value == ""){
        displayFun(sunglassesData);
    } else{

        if(price.value == "low"){
            let sortedData = sunglassesDataCopy.sort(function(a,b){
                return a.price - b.price;
            });
            displayFun(sortedData);

            commodity.addEventListener("change", function(){
                if(commodity.value == ""){
                    displayFun(sortedData);
                } else{

                    let selectData = sortedData.filter(function(el){
                        return commodity.value == el.brand;
                    });

                    displayFun(selectData);
                }
            })
        } else{
            let sortedData = sunglassesDataCopy.sort(function(a,b){
                return b.price - a.price;
            });
            displayFun(sortedData);

            commodity.addEventListener("change", function(){
                if(commodity.value == ""){
                    displayFun(sortedData);
                } else{

                    let selectData = sortedData.filter(function(el){
                        return commodity.value == el.brand;
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