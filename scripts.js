document.addEventListener('DOMContentLoaded', function() {

const home_link = document.getElementById("home");
const resume_link = document.getElementById("resume");
const projects_link = document.getElementById("projects");
const about_link = document.getElementById("about");
const home_content = document.getElementById("home-content");
const resume_content = document.getElementById("resume-content");
const projects_content = document.getElementById("projects-content");
const about_content = document.getElementById("about-content");



function contentReset() {
	home_content.style.display = "none";
	resume_content.style.display = "none";
	about_content.style.display = "none";
	projects_content.style.display = "none";
	
}

function onClick(clicked_content, clicked_link) {
	contentReset();
	var currentlyActive = document.querySelectorAll(".active");
	[].forEach.call(currentlyActive, function(el) {
		el.classList.remove("active");
	});
	clicked_link.classList.add('active');
	clicked_content.style.display = "block";

}

function main() {
	home_link.addEventListener('click', function() {
		onClick(home_content, home_link);
	})
	
	resume_link.addEventListener('click', function() {
		onClick(resume_content, resume_link);
	})
	
	about_link.addEventListener('click', function() {
		onClick(about_content, about_link);
	})
	
	projects_link.addEventListener('click', function() {
		onClick(projects_content, projects_link);
	})
	
	
}


main(); 

}, false);
