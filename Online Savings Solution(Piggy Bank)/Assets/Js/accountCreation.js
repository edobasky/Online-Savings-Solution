//CREATING A NEW ACCOUNT

$(document).ready(function(){
    
    var $firstname = $("#firstname")
    var $lastname = $("#lastname")
    var $number = $("#number")
    var $email = $("#email")
    var $password = $("#password")
    var $balance = $("#bal")

    $("#btn-signUp").on("click", function(e){
        $balance.val(0);
        e.preventDefault()

        var customer = {
            firstName: $firstname.val(),
            lastName: $lastname.val(),
            phoneNumber: $number.val(),
            email: $email.val(),
            password:$password.val(),
            accountbalance: $balance.val()
        };
        

        $.ajax({
            type:"POST",
            url: "http://localhost:3000/customers",
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
})