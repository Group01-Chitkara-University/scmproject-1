function login(){
  var username= document.getElementById('username').value;
  var password= document.getElementById('password').value;

  validate(username,password);
}
function validate(uname, pass){
  const xhr = new XMLHttpRequest();
  xhr.open('GET',"login.json",true)
  xhr.onprogress= function(){
      console.log("On Progress");
  }
  xhr.onload = function(){
      if(this.status === 200){
          let obj1 = JSON.parse(this.responseText);
          // console.log(obj1);

          var user = (obj1.users[0]);
          if(uname==user.username && pass==user.password){
              console.log("Login Suceessful")
              document.getElementById('output').innerHTML="Login Sucessful"
          }else{
              console.log("Invalid Credentials")
              document.getElementById('output').innerHTML="Invalid Credentials"
          }
      }else{
          console.log("login successful")
      }
  }
 
  xhr.send();
}


