function getFormvalue(){
 fname = document.getElementById("fname").value;
 lname = document.getElementById("lname").value;

    console.log(fname);
    console.log(lname);
    
    document.getElementById("name").value = fname;
    
    alert(fname+ " "+lname );
    
}