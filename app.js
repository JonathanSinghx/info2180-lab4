window.onload = function(){
var search = document.getElementById("search");
search.addEventListener("click",function(e){
	e.preventDefault();
	var input = document.getElementById("input").value;
	var xml = new XMLHttpRequest();
	
	xml.onreadystatechange = function(){
		if (this.readyState == XMLHttpRequest.DONE || this.status == 200){
			document.getElementById("Result").innerHTML= xml.responseText;
		}

	}

	xml.open("GET","http://localhost:8080/superheroes.php?q="+input, true);
	xml.send();
	
});
};