chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg === "url-updated" || msg === "page-refreshed") {
        const issueButton = document.querySelector('a.btn[href$="/issues/new"]')
        issueButton.href = "#";
        const dropdown = `
            <div id="myDropdown" class="dropdown-content">
                <a href="${location.pathname}/new?template=bug.md&labels=bug">Bug</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        `;
        issueButton.innerHTML = dropdown;
        issueButton.addEventListener("click", (e) => {
            toggleDropdown();
        });

        function toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("is-active");
        }
    }
});