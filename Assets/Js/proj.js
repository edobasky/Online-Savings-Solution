//CREATING A NEW ACCOUNT

$(document).ready(function(){
    
    var $firstname = $("#firstname")
    var $lastname = $("#lastname")
    var $number = $("#number")
    var $email = $("#email")
    var $password = $("#password")
    var $balance = $("#bal")

    $("#btn-signUp").on("click", function(e){
        e.preventDefault()
        var customer = {
            firstName: $firstname.val(),
            lastName: $lastname.val(),
            phoneNumber: $number.val(),
            email: $email.val(),
            password:$password.val(),
            accountBalance: $balance.val()
        };

        $.ajax({
            type:"POST",
            url: "http://localhost:3000/customers",
            data: customer,
            success: function(){
                alert("successful")
            },
            error: function(){
                alert("error loading orders");
            }
        })
    })
})

/*
$(document).ready(function (){
    var $custTranxct =$("#custTranxct")

    $.ajax({
        type:"GET",
        url:"http://localhost:3000/customers",
        success: function(data) {
            $.each(data, function(i,item){
                $custTranxct.append("<li>firstname:"+item.firstName+"</li>")
            })
        },
        error: function(){
            alert("error loading orders");
        }
    });
})
*/

// ACCOUNT EDIT / UPDATE ****************************************************************************


// EDIT
$(document).ready(function(){
    
   // var $firstname = $("#firstname")
   
    $("#editacc").on("click", function(e){
        var id =$("#btn-edit").val();
        e.preventDefault()
   /*     var customer = {
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
            $("#firstname").val(data.firstName);
            $("#lastname").val(data.lastName);
            $("#number").val(data.phoneNumber) ;
            $("#email").val( data.email);
            $("#password").val( data.password);
            $("#acctbal").val(data.accountBalance)
            
            },
            error: function(){
                alert("error loading orders");
            }
        })
    })
})

// $("#acctbal").hide();

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
            },
            error: function(){
                alert("error loading orders");
            }
        })
    })
   // location.reload();
})



//ACCOUNT EDIT AND UPDATE ENDS HERE***********************************************



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
           

            var newBalance = parseInt(data.accountBalance) + parseInt(depositAmt);    
            console.log(newBalance);
            var accountBalance = newBalance;
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
             postBalance(firstName,lastName,phoneNumber,email,password,accountBalance,id);
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })

 function postBalance (firstName,lastName,phoneNumber,email,password,accountBalance,id) {
    

    $.ajax({
        type:"PUT",
        url: "http://localhost:3000/customers/"+id,
        data:{firstName,lastName,phoneNumber,email,password,accountBalance,id} ,
        success: function(){
            alert("Deposit Successful")
        },
    })
}

// ACCOUNT DEPOSIT ENDS HERE*****************************



 
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


            var newBalance = parseInt(data.accountBalance) - parseInt(withAmt)
            console.log(newBalance);
            var accountBalance = newBalance;

            alert("success")
             ;

             postWithdrawBalance(firstName,lastName,phoneNumber,email,password,accountBalance,id);
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
        },
    })
}


// WITHDRAWAL ENDS HERE  ***********************************************************
 




