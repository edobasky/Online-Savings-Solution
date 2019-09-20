 
//ACCOUNT WITHDRAWAL

//first get balance

$(document).ready(function(){
    
    // var $firstname = $("#firstname")
    
     $("#btn-withdraw").on("click", function(){
         var id =$("#id-with").val();
         var withAmt=$("#with-amt").val();
         
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


            var newBalance = parseInt(data.accountbalance) - parseInt(withAmt)
            console.log(newBalance);
            var accountbalance = newBalance;

            alert("success")
             ;

             postWithdrawBalance(firstName,lastName,phoneNumber,email,password,accountbalance,id);
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })


 
 function postWithdrawBalance (firstName,lastName,phoneNumber,email,password,accountBalance,id) {
    

    $.ajax({
        type:"PUT",
        url: "http://localhost:3000/customers/"+id,
        data:{firstName,lastName,phoneNumber,email,password,accountBalance,id} ,
        success: function(){
            alert("successful")
            window.location="Dashboard.html"
        },
    })
}


// WITHDRAWAL ENDS HERE  ***********************************************************