chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg === "url-update") {
        const issueButton = document.querySelector(".btn-primary");
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