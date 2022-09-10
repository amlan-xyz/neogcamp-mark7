const input=document.querySelector('.input');
const output=document.querySelector('.output');
const translate_btn=document.querySelector('.translate-btn');


var translationUrl="https://api.funtranslations.com/translate/pirate.json"

function getTranslation(inputText){
	return translationUrl+"?" + "text="+inputText ;
}

function handleError(err){
	console.log("errors",err);
	alert("Something's wrong with the server")
}

function translateText(){
	let text=input.value;
	fetch(getTranslation(text))
		.then(response=>response.json())
		.then(json=>{
			let outputText=json.contents.translated;
			output.innerText=outputText;
		})
		.catch(handleError)
	};

translate_btn.addEventListener('click',translateText);