chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('received');
    var rule = '<div class="rulers" style="width:100px;height:600px;background:cadetblue;opacity:0.5;position:absolute;z-index:99999;">';
    $('body').prepend(rule);
    $('.rulers').draggable();
});
