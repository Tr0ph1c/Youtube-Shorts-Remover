chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
        if (changeInfo.url) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabId, {message: "NEW"});
              });
        }
    }
  );