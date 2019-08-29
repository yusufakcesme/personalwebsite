
function dropdown() {
	
	var hamburger = document.getElementById('hamburger');
	var menu = document.getElementById('menu');

	//scrolls the menu from up to down 100%
	if (menu.style.transform === "translateY(0%)") {
		menu.style.transform = "translateY(-100%)";
	} else {
		menu.style.transform = "translateY(0%)";
	}

}

//--------------------------------------------


var btn = document.querySelectorAll('.btn');
var images = document.querySelectorAll('.port-img');

function selectItem() {

	removeActive();
	this.classList.add('active');

	var name = this.innerText;

	if (name == "BRAND") {
		document.getElementById('pic-2').style.display = "none";
	} else {
		document.getElementById('pic-2').style.display = "block";
	}

	if (name == "DESIGN") {
		document.getElementById('pic-4').style.display = "none";
		document.getElementById('pic-6').style.display = "none";
	} else {
		document.getElementById('pic-4').style.display = "block";
		document.getElementById('pic-6').style.display = "block";
	}

	if (name == "GRAPHIC") {
		document.getElementById('pic-1').style.display = "none";
		document.getElementById('pic-3').style.display = "none";
	} else {
		document.getElementById('pic-1').style.display = "block";
		document.getElementById('pic-3').style.display = "block";
	}

}
function removeActive() {

	btn.forEach(item => item.classList.remove("active"));

}
btn.forEach(item => item.addEventListener('click', selectItem));

