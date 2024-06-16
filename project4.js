 const passwordbox = document.getElementById("Password");
 const lengt = 12;
 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowercase = "abcdefghijklmnopqrstuvwxyz";
 const number = "0123456789";
 const symbols = "@#$%^&*()_={}[]|\?/!~";

const allchars = uppercase + lowercase + symbols + number;
 function createpassword(){
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password +=  lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
while(lengt > password.length){
    password += allchars[Math.floor(Math.random() * allchars.length)];
}
passwordbox.value = password;
 }

 function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
 }
