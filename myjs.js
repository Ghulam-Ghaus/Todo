// for Validation of data


function check() { 
      if (document.getElementById("title").value.length === 0) {
         alert("Please enter your Subject"); 
         document.getElementById("title").focus(); 
         return false; 
      } 
      else if (document.getElementById("disc").value.length === 0) {
        alert("Please enter your Discription"); 
        document.getElementById("disc").focus(); 
        return false; 
     }
     else if (document.getElementById("loc").value.length === 0) {
        alert("Please enter your Location"); 
        document.getElementById("loc").focus(); 
        return false; 
     }
     else if (document.getElementById("date").value.length === 0) {
        alert("Please select your Date"); 
        document.getElementById("date").focus(); 
        return false; 
     }

     var t = document.getElementById("title").value;
     var d = document.getElementById("disc").value;
     var l = document.getElementById("loc").value;
     var dt = document.getElementById("date").value;

    var obj = {   
        "title" : t,
        "location" : l,
        "discription" : d,
        "date" : dt
    };

    var users = [];

    user.push('t');
    user.push('l');
    user.push('d');
    user.push('dt');

    localStorage.setItem("title" , obj.title);
    localStorage.setItem("discription" , obj.discription);
    localStorage.setItem("location" , obj.location);
    localStorage.setItem("date" , obj.date);


    // var jsonuser = JSON.stringify(users);

    // localStorage.setItem("users" , obj.title);
    // localStorage.setItem("users" , obj.discription);
    // localStorage.setItem("users" , obj.location);
    // localStorage.setItem("users" , obj.date);

    // consol.log(JSON.parse(localStorage['users']));


 }// end of check


 function retrive(){

    var tt = localStorage.getItem("title");
    var dd = localStorage.getItem("discription");
    var ll = localStorage.getItem("location");
    var dtt = localStorage.getItem("date");

    document.getElementById("t").innerText = tt ;
    document.getElementById("d").innerText = dd ;
    document.getElementById("l").innerText = ll ;
    document.getElementById("dt").innerText = dtt ;
 }