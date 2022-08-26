/*
				/----------\
				| lol haha |
			  O\----------/
	 \_|_/ o
	/		\  _____	____	 ___
  @| 0 0 |@   |	|	 \	/   \ |	  |
	| \_+/|	  |	|___| |   | |	  |
	\_____/	  |	| -\  \___/ |___ |___ .JS
	
	Copyright (C) 2022 by @a25yeht. All rights reserved.
	
	Copy below and pase into your address bar (Remove the two slashes at the start AFTER you paste). Or, save it as a bookmarklet and remove the first two slashes.
	
	Enjoy! >:D XDDDDDDD
	
	-------------------------------- Below Here ----------------------------------*/

//javascript:
try {
	(function() {
		const ael = addEventListener;

		function ce(x) {
			let elem = document.createElement(x);
			if(x == "button" || x == "input") {
				elem.style.backgroundColor = "white";
				elem.style.color = "black";
			}

			return elem;
		}
		
		async function wait(ms) {
			await new Promise(function(resolve) {
				setTimeout(resolve, ms);
			});
		}
		var keysDown = {
			"ControlLeft": false,
			"ControlRight": false,
			"AltLeft": false,
			"AltRight": false,
			"ShiftLeft": false,
			"ShiftRight": false,
			"KeyT": false,
			"KeyR": false
		};
		
		var mouse = {
			x: 0,
			y: 0
		};
		
		ael("mousemove", function({ clientX, clientY }) {
			mouse.x = clientX;
			mouse.y = clientY;
		});

		var kc1 = "ControlLeft";

		ael('keydown',function({code}){if(code==kc1){keysDown[kc1]=true;}});
		ael('keyup',function({code}){if(code==kc1){keysDown[kc1]=false;}});

		var kc2='ControlRight';

		ael('keydown',function({code}){if(code==kc2){keysDown[kc2]=true;}});
		ael('keyup',function({code}){if(code==kc2){keysDown[kc2]=false;}});

		var kc3='ControlRight';

		ael('keydown',function({code}){if(code==kc3){keysDown[kc3]=true;}});
		ael('keyup',function({code}){if(code==kc3){keysDown[kc3]=false;}});

		var kc4='AltLeft';

		ael('keydown',function({code}){if(code==kc4){keysDown[kc4]=true;}});
		ael('keyup',function({code}){if(code==kc4){keysDown[kc4]=false;}});

		var kc5='AltRight';

		ael('keydown',function({code}){if(code==kc5){keysDown[kc5]=true;}});
		ael('keyup',function({code}){if(code==kc5){keysDown[kc5]=false;}});

		var kc6='ShiftLeft';

		ael('keydown',function({code}){if(code==kc6){keysDown[kc6]=true;}});
		ael('keyup',function({code}){if(code==kc6){keysDown[kc6]=false;}});

		var kc7='ShiftRight';

		ael('keydown',function({code}){if(code==kc7){keysDown[kc7]=true;}});
		ael('keyup',function({code}){if(code==kc7){keysDown[kc7]=false;}});

		var kc8='KeyT';

		ael('keydown',function({code}){if(code==kc8){keysDown[kc8]=true;}});
		ael('keyup',function({code}){if(code==kc8){keysDown[kc8]=false;}});
		
		var kc9='KeyR';

		ael('keydown',function({code}){if(code==kc9){keysDown[kc9]=true;}});
		ael('keyup',function({code}){if(code==kc9){keysDown[kc9]=false;}});

		var kd = keysDown;

		function inject() {
			window["data:text/html;utf8,below hereXD toll free"] = true;
			alert("Script succesfully injected! Press OK or [ENTER/RETURN].\nTo open/close the troll window, press CTRL+ALT+SHIFT+T.\nHave fun trollers!\n\nDeveloped by @a25yeht on replit or\n@DifficultEagle on Roblox");
			
			var controlPanel = {
				isOpen: true,
				body: ce("div"),
				topBarDragging: false
			};

			var cb = controlPanel.body;
			
			cb.style.boxShadow = "0 0 5px black";
			cb.style.backgroundColor = "black";
			cb.style.width = "700px";
			cb.style.height = "500px";
			cb.style.border = "none";
			cb.style.position = "fixed";
			cb.style.color = "white";
			cb.style.textAlign = "center";
			cb.style.fontFamily = "monospace, sans-serif";
			cb.style.zIndex = "9999";
			cb.style.left = "25px";
			cb.style.top = "25px";
			cb.style.overflow = "hidden";
			cb.style.userSelect = "none";
			cb.style.webkitUserSelect = "none";
			
			document.body.appendChild(cb);
			
			var topBar = ce("div");
			topBar.style.width = "100%";
			topBar.style.height = "25px";
			topBar.style.backgroundColor = "gray";
			topBar.style.margin = "none";
			topBar.style.cursor = "grab";
			topBar.style.paddingTop = "4px";
			
			topBar.textContent = "TROLL.js Control Panel";
			
			topBar.addEventListener("mousedown", function() {
				controlPanel.topBarDragging = !controlPanel.topBarDragging;
			});
			
			topBar.addEventListener("mouseup", function() {
				controlPanel.topBarDragging = false;
			});
			
			cb.appendChild(topBar);
			
			var contentDiv = ce("div");
			contentDiv.style.padding = "12px";
			contentDiv.style.width = "100%";
			contentDiv.style.height = "100%";
			contentDiv.style.margin = "0px";
			contentDiv.style.overflow = "scroll";
			
			cb.appendChild(contentDiv);
			
			var welcomeH1 = ce("h1");
			welcomeH1.textContent = "Welcome!";
			welcomeH1.style.fontSize = "24px";
			
			contentDiv.appendChild(welcomeH1);
			
			var introP = ce("p");
			introP.textContent = "Welcome to TROLL.js! Look around and have fun!";
			introP.style.fontSize = "15px";
			
			contentDiv.appendChild(introP);

			var shortcutsP = ce("p");
			shortcutsP.innerHTML = "<h2 style='font-size: 18px;'>Open/close control panel</h2>CTRL+ALT/OPTION+SHIFT+T<br><h2 style='font-size: 18px;'>Reset control panel position on screen</h2>CTRL+ALT/OPTION+SHIFT+R";

			contentDiv.appendChild(shortcutsP);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));
			
			var changeTitleDiv = ce("div");
			var changeTitleH2 = ce("h2");
			var changeTitleInput = ce("input");
			var changeTitleButton = ce("button");
			
			changeTitleH2.textContent = "Page title changer";
			changeTitleH2.style.fontSize = "18px";
			changeTitleDiv.appendChild(changeTitleH2);
			
			changeTitleInput.type = "text";
			changeTitleInput.placeholder = "Enter a title...";
			changeTitleDiv.appendChild(changeTitleInput);
			
			changeTitleButton.textContent = "Change title";
			changeTitleDiv.appendChild(changeTitleButton);
			
			changeTitleButton.addEventListener("click", function() {
				document.title = changeTitleInput.value;
			});
			
			contentDiv.appendChild(changeTitleDiv);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));
			
			var reverseTitleButton = ce("button");
			reverseTitleButton.textContent = "Reverse title";
			reverseTitleButton.addEventListener("click", function() {
				document.title = Array.from(document.title).reverse().join("");
			});
			
			contentDiv.appendChild(reverseTitleButton);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));
			
			var faviconChangerDiv = ce("div");
			var faviconChangerH2 = ce("h2");
			var faviconChangerInput = ce("input");
			var faviconChangerButton = ce("button");
			
			faviconChangerH2.textContent = "Tab icon changer";
			faviconChangerH2.style.fontSize = "18px";
			faviconChangerDiv.appendChild(faviconChangerH2);
			
			faviconChangerInput.placeholder = "Favicon URL...";
			faviconChangerDiv.appendChild(faviconChangerInput);
			
			faviconChangerButton.textContent = "Change tab icon";
			
			faviconChangerDiv.appendChild(faviconChangerButton);
			faviconChangerButton.addEventListener("click", function() {
				var link = document.querySelector("link[rel*='icon']") || document.querySelector("link[rel*='shortcut icon']") || ce("link");
				link.remove();
				link.rel = "shortcut icon";
				document.head.appendChild(link);
				link.href = faviconChangerInput.value;
			});
			
			contentDiv.appendChild(faviconChangerDiv);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));

			var isFlashing = false;
			var flashyColorsButton = ce("button");
			flashyColorsButton.textContent = "Flashy colors!!!!! (Disco screen)";
			
			var flashyColorsButtonFlashInterval = setInterval(function() {
				flashyColorsButton.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
			}, 1000/15);

			var flashingInterval;

			flashyColorsButton.addEventListener("click", function() {
				isFlashing = !isFlashing;
				if(isFlashing) {
					flashyColorsButton.textContent = "Stop flashing";
					flashingInterval = setInterval(function() {
						for(let i = 0; i in document.querySelectorAll("*"); i++) {
							document.querySelectorAll("*")[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
						}
					}, 1000/15);
				} else {
					flashyColorsButton.textContent = "Flashy colors!!!!! (Disco screen)";
					clearInterval(flashingInterval);
				}
			});

			contentDiv.appendChild(flashyColorsButton);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));

			var isSwitchingWords = false;
			var flashyWordsButton = ce("button");
			flashyWordsButton.textContent = "Random (flashing) words all over the screen!!!!!!!";

			var flashingWordsInterval;
			const acceptElems = "li, p, h1, h2, h3, h4, h5, h6, button, title, a, option";
			const words = ["haaa", "NO ESCAPE", "KELKDJLFJDLS89e", "ur an idiot", "bye", "hello", "oooooo", "roar"];

			flashyWordsButton.addEventListener("click", function() {
				isSwitchingWords = !isSwitchingWords;
				if(isSwitchingWords) {
					flashyWordsButton.textContent = "Stop flashing";
					flashingWordsInterval = setInterval(function() {
						for(let i = 0; i in document.querySelectorAll(acceptElems); i++) {
							document.querySelectorAll(acceptElems)[i].textContent = words[Math.floor(Math.random() * words.length)]
						}
					}, 1000/15);
				} else {
					flashyWordsButton.textContent = "Random (flashing) words all over the screen!!!!!!!";
					clearInterval(flashingWordsInterval);
				}
			});

			contentDiv.appendChild(flashyWordsButton);
			contentDiv.appendChild(ce("br"));contentDiv.appendChild(ce("br"));
			var bottomP = ce("p");
			bottomP.textContent = "Bye!";
			contentDiv.appendChild(bottomP);
			
			addEventListener("keydown", function() {
				wait(25);
				if((kd.ControlLeft || kd.ControlRight) && (kd.AltLeft || kd.AltRight) && (kd.ShiftLeft || kd.ShiftRight) && kd.KeyT) {
					controlPanel.isOpen = !controlPanel.isOpen;
				}
				if((kd.ControlLeft || kd.ControlRight) && (kd.AltLeft || kd.AltRight) && (kd.ShiftLeft || kd.ShiftRight) && kd.KeyR) {
					cb.style.left = "25px";
					cb.style.top = "25px";
				}
			});
			
			function controlPanelTick() {
				cb.style.display = controlPanel.isOpen ? "inline-block" : "none";
				if(controlPanel.isOpen && controlPanel.topBarDragging) {
					cb.style.left = (mouse.x - 350) + "px";
					cb.style.top = (mouse.y - 12) + "px";
				}
				if(controlPanel.topBarDragging) {
					topBar.style.cursor = "grabbing";
				} else {
					topBar.style.cursor = "grab";
				}
				requestAnimationFrame(controlPanelTick);
			}
			controlPanelTick();
		}

		if(window["data:text/html;utf8,below hereXD toll free"]) {
			if(confirm("The script has already been injected. Would you like to inject it again?")) {
				inject();
			}
		} else {
			inject();
		}
	})();
} catch(err) {
	alert("Script error! " + err);
}
