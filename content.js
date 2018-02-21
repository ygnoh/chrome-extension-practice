chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg === "url-updated" || msg === "page-refreshed") {
        const newIssueButton = document.querySelector('a.btn[href$="/issues/new"]')

        const plusButton = document.createElement("button");
        plusButton.classList.add("btn", "btn-primary", "select-menu-button", "float-right");
        plusButton.addEventListener("click", toggleDropdown);

        const dropdown = `
            <div id="myDropdown" class="dropdown-content">
                <a href="${location.pathname}/new?template=bug.md&labels=bug">Bug</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        `;

        plusButton.innerHTML = dropdown;

        newIssueButton.parentNode.insertBefore(plusButton, null);
    }
});

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("is-active");
}