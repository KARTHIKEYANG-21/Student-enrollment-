var name;
var file,phone,mail,intrest,intrest1,intrest2;

function testbutton(){
    console.log("button clicked..");
    //var name
    name = document.getElementById('name').value;
    console.log(name);
    
    phone = document.getElementById('phone').value;
    console.log(phone); 
    
   
   

    mail = document.getElementById('mail').value;
    console.log(mail); 

    var x = document.getElementsByName("gender");
    for (i = 0; i < x.length; i++) {
        if (x[i].checked) {
            document.getElementById("gender").innerHTML = x[i].value;
            document.getElementsByClassName('name_display4')[0].textContent=x[i].value; 
            
        }
    }

   var y = document.getElementsByName("skills");
    for (i = 0; i < y.length; i++) {
        if (y[i].checked) {
            document.getElementById("skills").innerHTML = y[i].value;
            document.getElementsByClassName('name_display5')[0].textContent=y[0].value; 
            document.getElementsByClassName('name_display6')[0].textContent=y[i].value; 
        }
    } 
    
    file = document.createElement("img");
  file.setAttribute("src", "img/micheal.jpg");
  file.setAttribute("width", "100");
  file.setAttribute("height", "50");
  file.setAttribute("alt", "google");
  //document.body.appendChild(file);
  document.getElementsByClassName('name_display2')[0].append(file); 

 
    

    

    document.getElementsByClassName('name_display')[0].textContent=name;
    document.getElementsByClassName('name_display1')[0].textContent=phone;
  // document.getElementsByClassName('name_display2')[0].textContent=file;
   document.getElementsByClassName('name_display3')[0].textContent=mail; 
   
 
}