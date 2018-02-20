const rxGithubIssuesOrPulls = /^https?:\/\/(www\.)?github\.com\/.*?\/(?:issues|pulls)\/?$/;
let currentUrl;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    currentUrl = changeInfo.url || currentUrl;
    if (changeInfo.status === "complete" && rxGithubIssuesOrPulls.test(currentUrl)) {
        chrome.tabs.sendMessage(tabId, "url-update");
    }
});