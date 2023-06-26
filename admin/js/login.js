let checkuser = JSON.parse(localStorage.getItem("checkuserlogin"));

if (checkuser) {
  window.location.href = "dashboard.html";
}
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
const save = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;
  let alluser = JSON.parse(localStorage.getItem("register"));

  let ans = alluser.filter((val) => {
    if (val.email == email) {
      return val;
    }
  });
  if (ans.length != 0) {
    if (ans[0].password == password) {
        if (ans[0].role == role) {
            localStorage.setItem("checkuserlogin", JSON.stringify(ans[0]));
            window.location.href = "dashboard.html";
            
        }else{
            alert("role is not valid");
        }
    } else {
      alert("Password is not valid");
    }
  } else {
    alert("Email is not found");
  }
};

const forgotpassword = () => {
  window.location.href = "forgot.html";
};

const forgot = () => {
  let useremail = document.getElementById("useremail").value;
  let alluser = JSON.parse(localStorage.getItem("register"));

  let ans = alluser.filter((val) => {
    return val.email == useremail;
  });

  if (ans.length != 0) {
    let otp = Math.floor(Math.random() * 10000);
    let obj = {
      userotp: otp,
      email: ans[0].email,
    };
    localStorage.setItem("userotp", JSON.stringify(obj));
    alert("You OPT :-" + otp);
    window.location.href = "otp.html";
  } else {
    alert("Email is not valid");
  }
};

const OTP = () => {
  let otp = document.getElementById("otp").value;
  let checkOtp = JSON.parse(localStorage.getItem("userotp"));

  if (checkOtp.userotp == otp) {
    window.location.href = "newpassword.html";
  } else {
    alert("Otp is wrong");
  }
};

const newpassword = () => {
  let newpass = document.getElementById("newpass").value;
  let cpass = document.getElementById("cpass").value;

  if (newpass == cpass) {
    let alluser = JSON.parse(localStorage.getItem("register"));
    let userotp = JSON.parse(localStorage.getItem("userotp"));

    let ans = alluser.filter((val) => {
      if (val.email == userotp.email) {
        val.password = newpass;
      }
      return val;
    });
    localStorage.setItem("register", JSON.stringify(ans));
    window.location.href = "index.html";
  } else {
    alert("new password and confirm password not same");
  }
};
