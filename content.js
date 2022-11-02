chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.message === "NEW") {
        if (location.href.includes("youtube.com/shorts")) location.href += "&t=0";
      }
    }
  );