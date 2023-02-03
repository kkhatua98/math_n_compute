window.onload = function() {
const primaryNav = document.querySelector(".primary-navigation");
// const primaryNav = document.getElementsByClassName("primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle");
// const navToggle = document.getElementsByClassName("mobile-nav-toggle");
console.log(navToggle);
console.log(primaryNav);

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        console.log(visibility);
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true"){
        console.log(visibility);
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// const hider = document.querySelector(".primary-navigation");
// const math_area = document.querySelector(".abcd")
// hider.addEventListener('click', () => {
//     const visibility = math_area.getAttribute("data-visible");
    
// })

document.getElementById('dmbutton').addEventListener('click', function(){
    const css = document.getElementById('cssfile');
    const dmb = document.getElementById('dmbutton');

    if (dmb.innerHTML == 'Dark Mode'){
        css.setAttribute('href', 'styles/darkmode.css');
        dmb.innerHTML = "Light Mode";
    } else{
        css.setAttribute('href', 'styles/lightmode.css');
        dmb.innerHTML = 'Dark Mode';
    }
});

const title = document.getElementById('title');
const menu_title = document.getElementById('menu_title');
menu_title.innerHTML = title.innerHTML;

var toc = "";
    var level = 0;

    document.getElementById("container").innerHTML =
        document.getElementById("container").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                if (openLevel != closeLevel) {
                    return str;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }

                level = parseInt(openLevel);

                var anchor = titleText.replace(/ /g, "_");
                toc += "<li><a href=\"#" + anchor + "\">" + titleText
                    + "</a></li>";

                return "<h" + openLevel + "><a name=\"" + anchor + "\">"
                    + titleText + "</a></h" + closeLevel + ">";
            }
        );

    if (level) {
        toc += (new Array(level + 1)).join("</ul>");
    }

    document.getElementById("toc").innerHTML += toc;
};


