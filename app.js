const sidebarControlBtn = document.getElementById("sidebar-button");
const sidebarElement = document.getElementById("actual-sidebar");
let sidebarStatus;

getSidebarStatus = () => {
    sidebarStatus = sidebarElement.getAttribute('data-sidebar');
    console.log(sidebarStatus)
}

moveSideBarLoaction = () => {
    console.log("Clicked")
    sidebarStatus = sidebarElement.getAttribute('data-sidebar');

    switch (sidebarStatus) {
        case 'open':
            sidebarElement.style.right = "-420px"
            sidebarElement.setAttribute('data-sidebar', 'closed');
            break;
        case 'closed':
            sidebarElement.style.right = "0"
            sidebarElement.setAttribute('data-sidebar', 'open');
            break;
    }
}

getSidebarStatus();
