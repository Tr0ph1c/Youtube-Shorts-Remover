chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.message === "CHANGESHORT") {
          let HREF = location.href;
          if (HREF.includes("youtube.com/shorts")) {
              HREF = HREF.replace("shorts/", "watch?v=");
              console.log("HREF IS " + HREF);
              location.href = HREF;
          }
      }
    }
);