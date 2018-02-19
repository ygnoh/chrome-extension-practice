const labels = document.createElement("li");
labels.innerText = "HI";
labels.style.display = "none";

function getSource(target) {
    target.appendChild(labels);
    target.addEventListener("click", function (e) {
        e.preventDefault();
        toggleLabels();
    });
    return "well-done";
}

function toggleLabels() {
    if (labels.style.display === "none") {
        labels.style.display = "block";
    } else {
        labels.style.display = "none";
    }
}

chrome.extension.sendMessage({
    action: "getSource",
    source: getSource(document.querySelector(".btn-primary"))
});