chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked.");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        console.log("Executing script in tab...");
        const video = document.querySelector('video');
        if (video) {
          console.log("Video element found");
          if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
          } else {
            video.requestPictureInPicture().catch(console.error);
          }
        } else {
          console.log("No video element found.");
          alert("No video found on this page!");
        }
      }
    }).catch((err) => {
      console.error("Script injection failed:", err);
    });
  });
  