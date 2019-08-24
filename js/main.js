
function dropdown() {
	
	var hamburger = document.getElementById('hamburger');
	var menu = document.getElementById('menu');

	//scrolls the menu from up to down 100%
	if (menu.style.transform === "translateY(-100%)") {
		menu.style.transform = "translateY(0%)";
	} else {
		menu.style.transform = "translateY(-100%)";
	}

}

//--------------------------------------------

var btn = document.queryselectorAll('.btn');
var image = document.queryselectorAll('.port-img');


function selectItem() {

	removeActive();


}

function removeActive() {
	btn.forEach(item => item.classList.remove('active'));
}



btn.forEach(item => item.addEventListener('click' selectItem));	






