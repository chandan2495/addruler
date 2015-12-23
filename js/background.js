var showRuler=true;
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {    	
        chrome.tabs.sendMessage(tabs[0].id, {showRuler : showRuler}, function(response) {
            console.log(response.showRuler);
            showRuler=response.showRuler;            
        });
    });
});
