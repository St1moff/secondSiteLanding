var header = document.querySelector('.header')
menu.onclick = function  myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
	if (header.style.height === '340px') {
		header.style.height = '120px'
	}	else {
		header.style.height = '340px';
	};
};






