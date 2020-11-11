window.onload = function(){
var search = document.getElementById("search");
search.addEventListener("click",function(e){
	console.log("reach");
	e.preventDefault();
	var input = document.getElementById("input").value;
	var xml = new XMLHttpRequest();
	xml.open("GET","http://localhost:8080/superheroes.php", true);
	xml.onreadystatechange = function(){
		if (this.readyState == XMLHttpRequest.DONE || this.status == 200){
			alert(this.responseText);
		}

	}
	xml.send();
	
});
};