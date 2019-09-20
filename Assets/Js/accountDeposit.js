
//ACCOUNT DEPOSIT ******************************************************************

//first get balance

$(document).ready(function(){
    
    // var $firstname = $("#firstname")
    
     $("#btn-deposit").on("click", function(){
         var id =$("#id-dep").val();
         var depositAmt=$("#amt").val();
         
/*
         e.preventDefault()
         var customer = {
             firstName: $firstname.val(),
             lastName: $lastname.val(),
             phoneNumber: $number.val(),
             email: $email.val(),
             password:$password.val()
         }; */
         $.ajax({
             type:"GET",
             url: "http://localhost:3000/customers/"+id,
             success: function(data){
            // $("#firstname").val(data.firstName);
            var firstName = data.firstName;
            var lastName = data.lastName;
            var phoneNumber = data.phoneNumber;
            var email = data.email;
            var password = data.password;
           

            var newBalance = parseInt(data.accountbalance) + parseInt(depositAmt);    
            console.log(newBalance);
            var accountbalance = newBalance;
         //   alert("success")
            //     var data={
            //         data.firstName = firstName,
            //         data.lastName = lastName,
            //         data.phoneNumber = phoneNumber,
            //         data.email = email,
            //         data.password = password,
            //         data.accountBalance = newBalance  
            //     }
            //  ;
             postBalance(firstName,lastName,phoneNumber,email,password,accountbalance,id);
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })

 function postBalance (firstName,lastName,phoneNumber,email,password,accountbalance,id) {
    

    $.ajax({
        type:"PUT",
        url: "http://localhost:3000/customers/"+id,
        data:{firstName,lastName,phoneNumber,email,password,accountbalance,id} ,
        success: function(){
            alert("Deposit Successful")
            window.location="Dashboard.html"
        },
    })
}

// ACCOUNT DEPOSIT ENDS HERE*****************************