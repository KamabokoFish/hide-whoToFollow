//SPA対応としてonUpdatedをリッスンして都度content.jsをinject
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url?.includes("https://x.com")) {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["./content.js"],
      })
      // .then(() => console.log("script injected"));
  }
});
