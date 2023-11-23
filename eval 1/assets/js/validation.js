$(document).ready(function(){
    $('.anim--1').waypoint(function (direction) {
          $(this).addClass('animated zoomIn 200s');
        },
        {
          offset: '50%', // Adjust this offset as needed
        }
    );
    $('.anim--2').waypoint(function (direction) {
          $(this).addClass('animated zoomIn 200');
        },
        {
          offset: '50%', // Adjust this offset as needed
        }
    );
});


$(document).ready(function(){

$('#name_err').hide();
$('#email_err').hide();
$('#pass_err').hide();
$('#cpass_err').hide();

let n_err=true;
let e_err=true;
let p_err=true;
let cp_err=true;

$('#name').keyup(function(){
    namechk()
});
$('#pass').keyup(function(){
    passchk()
});
$('#cpass').keyup(function(){
    cpasschk()
});


function namechk(){
var uname=$('#name').val();
if(uname.length=='' || uname.length<2){
    $('#name_err').show();
    $('#name_err').html("please enter at least 2 characters");
    $('#name_err').focus();
    $('#name_err').css("color","red");
    n_err=false;
    
}else{
    $('#name_err').hide();
}
}

function passchk(){
var pchk=$('#pass').val();
var sp=/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/; 
var cap=/[A-Z]/;
if(pchk.length<8 || !sp.test(pchk) || !cap.test(pchk)){
    $('#pass_err').show();
    $('#pass_err').html("please enter at least 8 characters with 1 special and 1 capital letter");
    $('#pass_err').focus();
    $('#pass_err').css("color","red");
    e_err=false;
    
}else{
    $('#pass_err').hide();
}
}

function cpasschk(){
    var cpchk=$('#cpass').val();
    var pchk=$('#pass').val();
    if(cpchk!=pchk){
        $('#cpass_err').show();
        $('#cpass_err').html("pass do not match");
        $('#cpass_err').focus();
        $('#cpass_err').css("color","red");
    cp_err=false;
    
    }else{
        $('#cpass_err').hide();
    } 
    
}
$('#btn_sub').click(function(){
 n_err=true;
 e_err=true;
 p_err=true;
 cp_err=true;

 namechk();
 passchk();
 cpasschk();
 if((n_err==true && e_err==true && cp_err==true)){
    return true;
 }
 else{
    return false;
 }

});


});

$(document).ready(function() {
    $("a.l11").on("click", function(event) {
        
        if (this.hash !== "") {
            
            event.preventDefault();

            
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function() {
                   
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});








