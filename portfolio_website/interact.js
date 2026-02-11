const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");

function opentab(tabname, trigger) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    if (trigger) {
        trigger.classList.add("active-link");
    }

    const selectedTab = document.getElementById(tabname);
    if (selectedTab) {
        selectedTab.classList.add("active-tab");
    }
}

function openmenu() {
    if (sidemenu) {
        sidemenu.style.right = "0";
    }
}

function closemenu() {
    if (sidemenu) {
        sidemenu.style.right = "-260px";
    }
}
