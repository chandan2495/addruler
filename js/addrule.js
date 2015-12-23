chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('received');
    var horizontalimg = chrome.extension.getURL("img/horizontal.jpg");
    var verticalimg = chrome.extension.getURL("img/vertical.jpg");
    var verticalrule = '<div class="rulers" style="width:100px;height:600px;opacity:0.9;position:absolute;z-index:99999;"><img src=' + verticalimg + ' style="max-width:100%;min-width:100%"></img></div>';
    var horizontalrule = '<div class="rulers" style="width:572px;height:100px;opacity:0.9;position:absolute;z-index:99999;"><img src=' + horizontalimg + ' style="max-width:100%;min-width:100%"></img></div>';
    if ($('.rulers')) {
        $('body').prepend(horizontalrule);
        $('body').prepend(verticalrule);
        $('.rulers').draggable();
    }
});
