let data = [{
    userid: 1,
    name: 'krish',
    email: 'krish144@gmail.com',
    password: '111',
    role: 'admin'
}];

const passshow = () => {
    let p = document.getElementById('password');
    if (p.type === "password") {
        p.type = "text";
        document.getElementById('icon-hide').style.display = "none";
        document.getElementById('icon-show').style.display = "block";
    } else {
        p.type = "password";
        document.getElementById('icon-hide').style.display = "block";
        document.getElementById('icon-show').style.display = "none";
    }
}
passshow();
const cpassshow = () =>{
    let cp = document.getElementById('cpassword');
    if (cp.type === "password") {
        cp.type = "text";
        document.getElementById('icon-hide1').style.display = "none";
        document.getElementById('icon-show1').style.display = "block";
    } else {
        cp.type = "password";
        document.getElementById('icon-hide1').style.display = "block";
        document.getElementById('icon-show1').style.display = "none";
    }
}
cpassshow();


const save = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let con = document.getElementById('cpassword').value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    // let reemail = JSON.parse(localStorage.getItem('register'));

    if (!name && !email && !password && !con) {
        alert("Feel All Data");
        return false;
    } else if (!name) {
        alert("Enter You Name");
        return false;
    } else if (!email) {
        alert("Enter You Email");
        return false;
    } else if (!email.match(mailformat)) {
        alert("Please Enter of Valid email");
        return false;
    }
    // else if (reemail ) {
    //     reemail.filter((v)=>{
    //         return v.email === email
    //     })
    //     alert("user already exists.");
    //     return false;
    // } 

    else if (con == password) {
        let obj = {
            userid: Math.floor(Math.random() * 10000),
            name: name,
            email: email,
            password: password,
            role: 'user',
        };
        if (localStorage.getItem('register') === null || localStorage.getItem('register') === undefined) {
            data.push(obj);
            localStorage.setItem("register", JSON.stringify(data));
        } else {
            let val = JSON.parse(localStorage.getItem("register"));
            val.push(obj);
            localStorage.setItem("register", JSON.stringify(val));
        }
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('cpassword').value = "";
        window.location.href = "index.html";

    } else {
        alert("password and confirm password not match");
    }
}
