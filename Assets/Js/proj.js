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

// ACCOUNT EDIT

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
            },
            error: function(){
                alert("error loading orders");
            }
        })
    })
})



$(document).ready(function(){
    
    var $firstname = $("#firstname")
    var $lastname = $("#lastname")
    var $number = $("#number")
    var $email = $("#email")
    var $password = $("#password")

    $("#acc-update").on("click", function(){
        var id =$("#btn-edit").val()
       // e.preventDefault()
        var customer = {
            firstName: $firstname.val(),
            lastName: $lastname.val(),
            phoneNumber: $number.val(),
            email: $email.val(),
            password:$password.val()
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
})


//ACCOUNT DEPOSIT

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
            var newBalance = parseInt(data.accountBalance) + parseInt(depositAmt)    
            console.log(newBalance);
            alert("success")
             ;
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })



 
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
            var newBalance = parseInt(data.accountBalance) + parseInt(withAmt)
            console.log(newBalance);
            alert("success")
             ;
             },
             error: function(){
                 alert("error loading orders");
             }
         })
     })
 })
 




