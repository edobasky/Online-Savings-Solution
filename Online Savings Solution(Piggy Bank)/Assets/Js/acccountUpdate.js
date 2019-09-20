
// ACCOUNT EDIT / UPDATE ****************************************************************************


// EDIT
$(document).ready(function(){
    
    // var $firstname = $("#firstname")
    
     $("#editacc").on("click", function(e){
         var id =$("#btn-edit").val();
         e.preventDefault()
    
         $.ajax({
             type:"GET",
             url: "http://localhost:3000/customers/"+id,
             success: function(data){
             $("#firstname").val(data.firstName);
             $("#lastname").val(data.lastName);
             $("#number").val(data.phoneNumber) ;
             $("#email").val( data.email);
             $("#password").val( data.password);
             $("#acctbal").val(data.accountbalance)
             console.log(data)
             
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })
 
 // UPDATE*****
 
 $(document).ready(function(){
     
     var $firstname = $("#firstname")
     var $lastname = $("#lastname")
     var $number = $("#number")
     var $email = $("#email")
     var $password = $("#password")
     var $accountbalance = $("#acctbal")
 
     $("#acc-update").on("click", function(){
         var id =$("#btn-edit").val()
        // e.preventDefault()
         var customer = {
             firstName: $firstname.val(),
             lastName: $lastname.val(),
             phoneNumber: $number.val(),
             email: $email.val(),
             password:$password.val(),
             accountbalance:$accountbalance.val() 
         };
         $.ajax({
             type:"PUT",
             url: "http://localhost:3000/customers/"+id,
             data: customer,
             success: function(){
                 alert("successful")
                 window.location="Dashboard.html"
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
    // location.reload();
 })
 
 
 
 //ACCOUNT EDIT AND UPDATE ENDS HERE***********************************************