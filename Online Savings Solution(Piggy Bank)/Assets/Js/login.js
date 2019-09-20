$(document).ready(function(){
    $("#btn-login").on("click", function(){
        let $pswd = $("#password").val();
        let $mail = $("#email").val();


        $.ajax({
            type: "GET",
            url:"http://localhost:3000/customers/",
            success:  function(data){
                console.log(data);
               // alert("success");
                for(let i = 0; i<data.length; i++){
                    if($pswd == data[i].password && $mail == data[i].email){
                      console.log("user logged in")
                      return
                    }
                }
                alert("wrong email or password, please provide correct details");
            }
        })
    })
})