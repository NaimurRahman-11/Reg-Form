class signUp{

    constructor(firstName,lastName,email,password,gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;

    }

    showInfo(){
        // console.log(this.firstName, this.lastName, this.email, this.password, this.gender);
         var m=this.firstName +"\n"+ this.lastName+"\n"+this.email+"\n"+this.password+"\n"+this.gender
        alert(m)
    }


}

function getElementFromFrontEnd(){
    FirstName = document.getElementById("firstname").value,
    LastName = document.getElementById("lastname").value,
    Email = document.getElementById("email").value,
    Password = document.getElementById("password").value
  
    if(document.getElementById('male').checked){
       gender=document.getElementById('male').value;
    }
    else{
        gender=document.getElementById('female').value;
    }
}

function printData(){
    getElementFromFrontEnd();
    var s = new signUp(FirstName, LastName,Email,Password,gender);
    s.showInfo();
}