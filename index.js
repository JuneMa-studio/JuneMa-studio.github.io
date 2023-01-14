// index
window.onload = function (){
	var homep = document.querySelector('#home_page');
	homep.className = 'roll_item_page_active';
}
function rollmenuact(e){
	var home = document.querySelector("#home").style;
	var note = document.querySelector("#note").style;
	var project = document.querySelector("#project").style;
	var other = document.querySelector("#other").style;
	var homep = document.querySelector('#home_page');
	var notep = document.querySelector('#note_page');
	var projectp = document.querySelector('#project_page');
	var otherp = document.querySelector('#other_page');
	switch(e.id){
		case 'home' : home.width = '40vw';home.fontWeight = '600';homep.className = 'roll_item_page_active';
			note.width = '20vw';note.fontWeight = '300';notep.className = 'roll_item_page';
			project.width = '20vw';project.fontWeight = '300';projectp.className = 'roll_item_page';
			other.width = '20vw';other.fontWeight = '300';otherp.className = 'roll_item_page';
			break;
		case 'note' : note.width = '40vw';note.fontWeight = '600';notep.className = 'roll_item_page_active';
			home.width = '20vw';home.fontWeight = '300';homep.className = 'roll_item_page';
			project.width = '20vw';project.fontWeight = '300';projectp.className = 'roll_item_page';
			other.width = '20vw';other.fontWeight = '300';otherp.className = 'roll_item_page';
			break;
		case 'project' : project.width = '40vw';project.fontWeight = '600';projectp.className = 'roll_item_page_active';
			home.width = '20vw';home.fontWeight = '300';homep.className = 'roll_item_page';
			note.width = '20vw';note.fontWeight = '300';notep.className = 'roll_item_page';
			other.width = '20vw';other.fontWeight = '300';otherp.className = 'roll_item_page';
			break;
		case 'other' : other.width = '40vw';other.fontWeight = '600';otherp.className = 'roll_item_page_active';
			home.width = '20vw';home.fontWeight = '300';homep.className = 'roll_item_page';
			note.width = '20vw';note.fontWeight = '300';notep.className = 'roll_item_page';
			project.width = '20vw';project.fontWeight = '300';projectp.className = 'roll_item_page';
			break;
		default : console.log('error');
	}
}

