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


let signin = document.getElementById("signin");
let login = document.getElementById("login");
let body = document.querySelector("#push");

let signupArr = JSON.parse(localStorage.getItem("signup-details")) || [];
let loginArr = JSON.parse(localStorage.getItem("login-details")) || [];

signin.addEventListener("click", function(){
    signin.style.backgroundColor = "rgb(248, 248, 248)";
    login.style.backgroundColor = "transparent";
    body.innerHTML = "";
    
    let div = document.createElement("div");
    div.setAttribute("id" ,"card");

    let h2 = document.createElement("h2");
    h2.innerHTML = "Enter your Details";

    let signup = document.createElement("form");
    signup.setAttribute("id", "signup2");

    let inp1 = document.createElement("input");
    inp1.setAttribute("id","name");
    inp1.type = "text";
    inp1.placeholder = "Name";

    let inp2 = document.createElement("input");
    inp2.setAttribute("id","number");
    inp2.type = "number";
    inp2.placeholder = "Phone number"

    let inp3 = document.createElement("input");
    inp3.setAttribute("id","email");
    inp3.type = "email";
    inp3.placeholder = "Email address";

    let inp4 = document.createElement("input");
    inp4.setAttribute("id","password");
    inp4.type = "password";
    inp4.placeholder = "Password";

    let btn = document.createElement("input");
    btn.type = "submit";
    btn.setAttribute("id","submit2");
    btn.value = "Sign up"
    btn.addEventListener("click", function(){
        event.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("number").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let output;
        for(let k=0; k<signupArr.length; k++){
            if(name == signupArr[k].name && phone == signupArr[k].phone && email == signupArr[k].email){
                output = true;
            };
        }

        if(output == true){
            alert("You have Signed up already");
            window.location.reload();
        } else{
            let signupObj = {
                name,phone,email,password
            }

            signupArr.push(signupObj);
            localStorage.setItem("signup-details", JSON.stringify(signupArr));
            alert("Sign up Successful");
            window.location.reload();
        }
    })

    signup.append(h2,inp1,inp2,inp3,inp4,btn);
    div.append(signup);
    body.append(div);
    body.style.display = "block";
});

login.addEventListener("click", function(){
    login.style.backgroundColor = "rgb(248, 248, 248)";
    signin.style.backgroundColor = "transparent";
    if(loginArr.length != 0){

        body.innerHTML = "";

        let div = document.createElement("div");
        div.setAttribute("id" ,"card");

        let h2 = document.createElement("h2");
        h2.innerHTML = "You are already Logged in";

        let btnLogin = document.createElement("button");
        btnLogin.setAttribute("id", "login");
        btnLogin.innerText = "Log out";
        btnLogin.addEventListener("click", function(){
            let temp = [];
            localStorage.setItem("login-details", JSON.stringify(temp));
            window.location.reload();
        })

        div.append(h2,btnLogin);
        body.append(div);
        body.style.display = "block";

    } else{
        body.innerHTML = "";

        let div = document.createElement("div");
        div.setAttribute("id" ,"card");

        let h2 = document.createElement("h2");
        h2.innerHTML = "Enter Credentials";

        let signup = document.createElement("form");
        signup.setAttribute("id", "signup")

        let inp1 = document.createElement("input");
        inp1.setAttribute("id","email");
        inp1.type = "email";
        inp1.placeholder = "Email address";

        let inp2 = document.createElement("input");
        inp2.setAttribute("id","password");
        inp2.type = "password";
        inp2.placeholder = "Password";

        let btn = document.createElement("input");
        btn.type = "submit";
        btn.setAttribute("id","submit");
        btn.value = "Login";
        btn.addEventListener("click", function(){
            event.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let getArr = JSON.parse(localStorage.getItem("signup-details"));

            let res;
            let set;
            for(let a=0; a<getArr.length; a++){
                if(getArr[a].email==email && getArr[a].password==password){
                    res = true;
                    set = getArr[a];
                    break;
                }
            }

            if(res==true){
                alert("Login Successful");
                localStorage.setItem("login-details" , JSON.stringify(set));
                window.location.href = "/HTML/index.html";

            } else{
                alert("Incorrect credentials");
            }
            
        })

        signup.append(h2,inp1,inp2,btn);
        div.append(signup);
        body.append(div);
        body.style.display = "block";
    }

});

