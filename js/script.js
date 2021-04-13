function init(){

	var alertbutton = document.getElementById('entrybutton');
	var input = document.getElementById('entryinput');
	var output = document.getElementById('textoutput');

  alertbutton.addEventListener('click', function(){
	var alertText = "Shuaiqi Zheng: " + input.value;
	alert(alertText);
	output.innerHTML = input.value;
	});
}

window.addEventListener('load', init);
