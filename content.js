chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg === "url-updated" || msg === "page-refreshed") {
        const newIssueButton = document.querySelector('a.btn[href$="/issues/new"]')
        // TODO: onUpdated 이벤트가 페이지가 이동하기 전에 발생하여 생기는 TypeError 임시 방어 처리
        if (!newIssueButton) {
            return;
        }

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