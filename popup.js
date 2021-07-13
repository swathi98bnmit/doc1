i = import(data.json.id)
document.addEventListener('DOMContentLoaded', function() {
	
	// since we are using the same popup.js in all the 
	// html files, we are not sure which button is available.
	// so check for availability of the appropriate button
	// and event handlers for them.
	
	// add event handler for btnPopup1 available in popup1.html
	var btn1 = document.getElementById("btnPopup1");
	if (btn1 !== null) {
		btn1.addEventListener("click", showSecondPopup);
	}
	
	// add event handler for btnPopup2 available in popup2.html
	var btn2 = document.getElementById("btnPopup2");
	if (btn2 !== null) {
		btn2.addEventListener("click", showThirdPopup);
	}

	// add event handler for btnPopup3 available in popup3.html
	var btn3 = document.getElementById("btnPopup3");
	if (btn3 !== null) {
		btn3.addEventListener("click", showFourthPopup);
	}

	// add event handler for btnPopup4 available in popup4.html
	var btn4 = document.getElementById("btnPopup4");
	if (btn4 !== null) {
		btn4.addEventListener("click", closeFourthPopup);
	}
});
var w= 250;
var h = 250;
var left = (screen.windows.width/2) - w/i;
var top = (screen.windows.height/2) - h/i;

// function showSecondPopup()
// {
// 	var w = 250;
// 	var h = 230;
// 	var left = (screen.width/2) - (w/2);
// 	var top = (screen.height/2) - (h/2);
// 	// var left = 100;
// 	// var top = 100;
    
// 	chrome.windows.create({'url': 'popup2.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(newWindow) {
// 		// second popup is now open, request the background(.js) to close the first popup and to store
// 		// id of the second popup.
// 		chrome.runtime.sendMessage({ message: 'close-first', popupId: newWindow.id });		
// 	});
// }

// function showThirdPopup()
// {
// 	var w = 250;
// 	var h = 230;
// 	var left = (screen.width/2)-(w/2);
// 	var top = 1000;
// 	// var left = 200;
// 	// var top = 200;

// 	var win = chrome.windows.create({'url': 'popup3.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top}, function(newWindow) {
// 		// third popup is now open, request the background(.js) to close the second popup and to store
// 		// id of the third popup.
// 		chrome.runtime.sendMessage({ message: 'close-second', popupId: newWindow.id });		
// 	});
// }

// function showFourthPopup()
// {
// 	var w = 250;
// 	var h = 230;
// 	var left = (screen.width/2)-(w/2);
// 	var top = 4000;

// 	var win = chrome.windows.create({'url': 'popup4.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top}, function(newWindow) {
// 		// third popup is now open, request the background(.js) to close the third popup and to store
// 		// id of the fourth popup.
// 		chrome.runtime.sendMessage({ message: 'close-third', popupId: newWindow.id });		
// 	});
// }

// function closeFourthPopup()
// {
// 	// request the background(.js) to close the fourth popup
// 	chrome.runtime.sendMessage({ message: 'close-fourth' });		
// }



var html =' <p>Comment:</p>';
html +='<p>data[i]</p>';
html +='<p>By:Suraksha Tasgaonkar</p>'
html +='<label for="input comment">Input comment:'
html +='<textarea rows="4" cols="20"></textarea>'
html +='<button id="btnPopup2" type="button">Submit</button>'
var win = chrome.windows.create({'url': 'html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top}, function(newWindow) {
	// third popup is now open, request the background(.js) to close the third popup and to store
	// id of the fourth popup.
	chrome.runtime.sendMessage({ message: 'close-third', popupId: newWindow.id });		
});