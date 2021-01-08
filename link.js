 function registration()

{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z ]+$/;
		var filter =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var uname_expression=/^[1-4][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]/;
		if(name=='')
		{
			alert('PLEASE ENTER YOUR NAME');
		}
		else if(!letters.test(name))
		{
			alert('Oops Robots are not allowed,Please enter human name');
		}
		else if(email=='')
		{
			alert('PLEASE ENTER YOUR EMAIL-ID');
		}
		else if (!filter.test(email))
		{
			alert('INVALID EMAIL');
		}
		else if(uname=='')
		{
			alert('*PLEASE ENTER THE USN *');
		}
		 else if(!uname_expression.test(uname))
		{
			alert('INVALID USN');
		}
		else if(pwd=='')
		{
			alert('PLEASE SET PASSWORD');
		}
    else if(document.getElementById("t4").value.length < 6)
		{
			alert ('PASSWORD minimum length is 6');
		}
		else if(document.getElementById("t4").value.length > 12)
		{
			alert ('PASSWORD maximum length is 12');
		}
		else if(cpwd=='')
		{
			alert('PLEASE CONFIRM YOUR PASSWORD');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('PLEASE INCLUDE Upper case, Lower case, Special character and Numeric letter  in your PASSWORD');
		}
		else if(pwd != cpwd)
		{
			alert ('PASSWORDS ARE NOT MATCHING');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('PASSWORD minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('PASSWORD maximum length is 12');
		}
		else
		{				                            
            
            // alert('Thank You for Login & You are Redirecting to Mce Cse Textbook Website');
			   // Redirecting to other page or webste code. 
			   window.location = "page3.html"; 
		}
	}
function login()
{
    window.location="index.html";
}
