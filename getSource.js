function getSource(documentBody) {
    return documentBody.innerText;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: getSource(document.body)
});