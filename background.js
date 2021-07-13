chrome.browserAction.onClicked.addListener(function() {
		
	var w = 250;
	var h = 700;
	var left = (screen.width/2) - (w/2);
	var top = (screen.height/2) - (h/2);
	var firstPopupId = -1;
	var secondPopupId = -1;
	var thirdPopupId = -1;
	var fourthPopupId = -1;

	// create the first popup window
	var win = chrome.windows.create({'url': 'popup1.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top}, function(newWindow) {
		// once create, store the id of the window
		// so that it can be removed later
		firstPopupId = newWindow.id;
	});
	
	// add a listener for any message from the content or other scritps
	chrome.runtime.onMessage.addListener((request, sender, response) => {
	  if (request.message === 'close-first') {
		// close the first popup window
		chrome.windows.remove(firstPopupId);
		secondPopupId = request.popupId;
	  }
	  else if (request.message === 'close-second') {
		// close the second popup window
		chrome.windows.remove(secondPopupId);
		thirdPopupId = request.popupId;
	  }
	  else if (request.message === 'close-third') {
		// close the third popup window
		chrome.windows.remove(thirdPopupId);
		fourthPopupId = request.popupId;
	  }
	  else if (request.message === 'close-fourth') {
		// close the fourth popup window
		chrome.windows.remove(fourthPopupId);
	  }
	});
});


const { google }  = require('googleapis');
const CLIENT_ID = '677218184591-gg3orq3b5osngqqdjv2a72eh2puj02c1.apps.googleusercontent.com';
const CLIENT_SECRET= 'gHmIDVVtpHmWvvKUxNG9AEjF';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const fs = require('fs');

const REFRESH_TOKEN='1//04AzrUiDwDRA6CgYIARAAGAQSNwF-L9Irs7S4ERNqshN-sr41-Xsl26_bXbrnPjsu5WsNZE2ghqf9g4_5nfnmKrEYYJSqvPk0sHM';
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials( {refresh_token:REFRESH_TOKEN} )

const drive = google.drive({
    version:'v3',
    auth: oauth2Client
})
async function retrieveComments() {
    fileId = '1wOYLJrb2fA0J-qwaTY5uWS1h75IIAsZHYgStTlYoDkU';
    fields='*';
    const result = await drive.comments.list({
        fileId: fileId,  
        fields:fields  })
   console.log(result.data);
   let data = JSON.stringify(result, null, 2);

   fs.writeFileSync('fata.txt', data);

}
retrieveComments()
const { google }  = require('googleapis');
const CLIENT_ID = '1005053630240-85sl7nt7evg532srgdm6vcfg6bfin9b0.apps.googleusercontent.com';
const CLIENT_SECRET= 'ryObwbACJGHgZuuHurYciSyp';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const fs = require('fs');

const REFRESH_TOKEN='1//04SaYACUVeopsCgYIARAAGAQSNwF-L9Ir_BZ7xD9aTzJedzxF4_IiRoY_jCrAwas7o_wRFxq9PRh6kwisEB4sd9kwUjYFEJgvSR4';
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials( {refresh_token:REFRESH_TOKEN} )

const drive = google.drive({
    version:'v3',
    auth: oauth2Client
})
async function addComments(){
    fileId = '1URilBwO3_IzXRgJ52GvPn5peqZjyKsW7WStCO15sbGI';
    fields='*';
    commentId='AAAAL4noA0c';
    var body = {'content': 'Kuku',
                'htmlContent':'Kuku'
                };
    const result = await drive.replies.create({
    'fileId': fileId,
    'commentId': commentId ,
    'resource': body,
    'fields':fields 
  });

}
addComments()

