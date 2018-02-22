chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg === "url-updated" || msg === "page-refreshed") {
        const newIssueButton = document.querySelector('a.btn[href$="/issues/new"]')
        // TODO: onUpdated 이벤트가 페이지가 이동하기 전에 발생하여 생기는 TypeError 임시 방어 처리
        if (!newIssueButton) {
            return;
        }

        const href = newIssueButton.getAttribute("href");
        const subnav = newIssueButton.parentNode;

        subnav.removeChild(newIssueButton);

        const advancedIssueButton = getAdvancedIssueButton(href);
        subnav.innerHTML += advancedIssueButton;
    }
});

// TODO: 리팩토링 해야함
function getAdvancedIssueButton(href = "#") {
    return `
        <div class="select-menu d-inline-block js-menu-container js-select-menu float-right">
            <div class="BtnGroup">
            <a href="${href}" class="btn btn-primary BtnGroup-item">
                New issue
            </a>
        
            <button class="btn btn-primary select-menu-button BtnGroup-item js-menu-target" aria-expanded="false"></button>
            </div>
        
            <div class="select-menu-modal-holder">
            <div class="select-menu-modal">
                <div class="select-menu-list js-navigation-container js-active-navigation-container">

                <div class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                    <span class="select-menu-item-heading">Create a merge commit</span>
                    </div>
                </div>

                <div class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                    <span class="select-menu-item-heading">Create a merge commit</span>
                    </div>
                </div>

                <div class="select-menu-item js-navigation-item">
                    <div class="select-menu-item-text">
                    <span class="select-menu-item-heading">Create a merge commit</span>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>
    `;
}