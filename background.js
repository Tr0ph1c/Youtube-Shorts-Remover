chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabId, {message: "CHANGESHORT"});
    });
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabId, {message: "CHANGESHORT"});
    });
});