const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log("ready to hear");
}

recognition.onresult= function(event){
	console.log(event);
	const spokenwords = event.results[0][0].transcript;
	console.log(spokenwords);
	computerspeech(spokenwords.toLowerCase());
}

function bot(){
	recognition.start();
}

function computerspeech(words){
	const speech = new SpeechSynthesisUtterance();
	speech.lang="en-IN";
	speech.pitch =0.9;
	speech.volume=1;
	speech.rate=1;
	determine(speech,words);
	window.speechSynthesis.speak(speech);
}

function determine(speech,words){
	if(words.includes("hello")){
		speech.text = "hello";
	}
	if(words.includes("open google")){
		speech.text = "opening google for you";
		window.open("https://www.google.com/");
	}
	if(words.includes("open spotify")){
		speech.text = "opening spotify";
		window.open("https://open.spotify.com/");
	}
	if(words.includes("play music")){
		speech.text = "opening spotify";
		window.open("https://open.spotify.com/");
	}
	if(words.includes("tell me a joke")){
		speech.text = "you are a joke why a joke for you ha ha ha ";
	}
	if(words.includes("open youtube")){
		speech.text = "opening youtube";
		window.open("https://youtube.com/");
	}
	if(words.includes("open github")){
		speech.text = "why github without any reps anyway opening github";
		window.open("https://github.com/");
	}
	if(words.includes("how are you")){
		speech.text = "better than you ever will be ";
	}
	if(words.includes("f*** you")){
		speech.text = "fuck you tooo";
	}
	if(words.includes("f*** off")){
		speech.text = "fuck you";
	}
	if(words.includes("shut up")){
		speech.text= "you Shut up";
	}
	if(words.includes("open instagram")){
		speech.text="opening instagram";
		window.open("https://www.instagram.com/")
	}

}
function ttos(){
	var t = document.getElementById('text').value;
	const speech = new SpeechSynthesisUtterance();
	speech.lang="en-IN";
	speech.pitch =0.9;
	speech.volume=1;
	speech.rate=1;
	speech.text=t;
	console.log(t);
	window.speechSynthesis.speak(speech);
}
function stot(){
	var speech = true;
        window.SpeechRecognition = window.SpeechRecognition
                        || window.webkitSpeechRecognition;
  
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        const words = document.querySelector('.words');
        words.appendChild(p);
  
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
  
            document.getElementById("p").innerHTML = transcript;
            console.log(transcript);
        });
          
        if (speech == true) {
            recognition.start();
        }
}