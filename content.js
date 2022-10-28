chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.message === "NEW") {
        if (location.href.includes("shorts")) location.href += "&t=0";
      }
    }
  );