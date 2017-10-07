import "../css/main.css";
import "../css/input-element.css";
import {secBtn, secPara} from "./dom-loader";

var showSecret = false;

secBtn.addEventListener("click", toggleSection);
updatePara();

function toggleSection(){
	showSecret = !showSecret;
	updatePara();
	updateButton();
}


function updateButton(){
	if(showSecret){
		secBtn.textContent = "Hide the secret";
		secBtn.style.backgroundColor = "#b9eab9";
	}else{
		secBtn.textContent = "Show the secret";
		secBtn.style.backgroundColor = "white";
	}
}


function updatePara(){
	if(showSecret){
		secPara.style.display = "block";	
	}else{
		secPara.style.display = "none";
	}
}