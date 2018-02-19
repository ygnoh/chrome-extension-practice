chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action === "getSource") {
        document.body.innerText = request.source;
    }
});

function onWindowLoad() {
    // 페이지에 스크립트를 주입하여 실행한다.
    chrome.tabs.executeScript(null, {
        file: "getSource.js"
    }, function() {
        if (chrome.extension.lastError) {
            document.body.innerText = "There was an error injecting script: \n" +
                chrome.extension.lastError.message;
        }
    });
}

window.onload = onWindowLoad;