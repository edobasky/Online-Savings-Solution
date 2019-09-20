
//ACCOUNT DEPOSIT ******************************************************************

//first get balance

$(document).ready(function(){
    
    // var $firstname = $("#firstname")
    
     $("#btn-deposit").on("click", function(){
         var id =$("#id-dep").val();
         var depositAmt=$("#amt").val();
         
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
            $("#custTranxct").append("<li>Credit Alert of N" + parseInt(depositAmt)+" .Your current Balance is N" + newBalance + "</li>");
            
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
        success: function(details){
            alert("Deposit Successful")
          //  $("#custTranxct").append("<li>Credit Alert of N" + newBalance+" Your current Balance is N" + details.accountbalance + "</li>");

            // window.location="Dashboard.html"
        },
    })
}

// ACCOUNT DEPOSIT ENDS HERE*****************************