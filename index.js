// index
function rollmenuact(e){
	var home = document.querySelector("#home").style;
	var note = document.querySelector("#note").style;
	var project = document.querySelector("#project").style;
	var other = document.querySelector("#other").style;
	var estyle = e.style;
	switch(e.id){
		case 'home' : estyle.width = '40vw';estyle.fontWeight = '600';
			note.width = '20vw';note.fontWeight = '300';
			project.width = '20vw';project.fontWeight = '300';
			other.width = '20vw';other.fontWeight = '300';break;
		case 'note' : estyle.width = '40vw';estyle.fontWeight = '600';
			home.width = '20vw';home.fontWeight = '300';
			project.width = '20vw';project.fontWeight = '300';
			other.width = '20vw';other.fontWeight = '300';break;
		case 'project' : estyle.width = '40vw';estyle.fontWeight = '600';
			home.width = '20vw';home.fontWeight = '300';
			note.width = '20vw';note.fontWeight = '300';
			other.width = '20vw';other.fontWeight = '300';break;
		case 'other' : estyle.width = '40vw';estyle.fontWeight = '600';
			home.width = '20vw';home.fontWeight = '300';
			note.width = '20vw';note.fontWeight = '300';
			project.width = '20vw';project.fontWeight = '300';break;
		default : console.log('error');
	}
}