"use strict";

window.onload = function(){

    let menulinks = document
        .getElementById("js-autolocate")
        .getElementsByTagName("a");

    let filename = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    );

    for (let link of menulinks) {
        if (link.getAttribute("href") === filename) {
            link.classList.add("active");
            break;
        }
    }
}
