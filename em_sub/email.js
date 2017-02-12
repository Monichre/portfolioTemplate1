var use_cookie = false;
var cookie_signedup = "You have signed up for an e-mail alert with";

em_pic1= new Image(16,16); 
em_pic1.src="em_sub/loading.gif"; 
em_pic2= new Image(16,16); 
em_pic2.src="em_sub/x.png"; 
em_pic3= new Image(16,16); 
em_pic3.src="em_sub/valid.png"; 

onload = function(){
	if(use_cookie){
		em_cookie = getcookie("em_email");
		if (em_cookie){
			document.getElementById('em_sub').innerHTML = cookie_signedup+" "+em_cookie.split(",");
		}
	}
}

function getcookie(c_name){
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1)
		{
		c_start=c_start + c_name.length+1;
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1) c_end=document.cookie.length;
		return unescape(document.cookie.substring(c_start,c_end));
		}
	  }
	return "";
}

function checkemail(obj, event){
	if(!event) event = window.event;

	img = document.getElementById('em_gb');
	but = document.getElementById('em_subbut');
	
	email = obj.value;
	emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
	if(emailfilter.test(email)){
		img.src="em_sub/valid.png";
		but.style.display = "inline-block";
		if(event.keyCode == 13){
			but.click();
		}
	}
	else{
		if(event.keyCode == 13){
			alert("please enter a valid e-mail address");
		}
		img.src="em_sub/x.png";
		but.style.display = "none";
	}
}
function createXMLHttpRequest() 
{

   try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
   try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
   try { return new XMLHttpRequest(); } catch(e) {}
   alert("XMLHttpRequest not supported");
   return null;
   
 }

function sub_email(){
	var ajReq;
	email = document.getElementById('em_txt').value;
	email = use_cookie ? email+"&c=1" : email+"&c=0";
	
	res_area = document.getElementById('em_sub');
	ajReq = createXMLHttpRequest();
	ajReq.open( "GET", "em_sub/write.php?e="+email, true );
	ajReq.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	res_area.innerHTML = '<img src="em_sub/loading.gif">';
	ajReq.onreadystatechange = function(){
		if ( ajReq.readyState != 4 ) return;
		res_area.innerHTML = ajReq.responseText;
	}
	ajReq.send( null );
}