window.onload = function () {
    // const primaryNav = document.querySelector(".primary-navigation");
    // const navToggle = document.querySelector(".mobile-nav-toggle");
    
    // if (navToggle) {
    //     navToggle.addEventListener('click', () => {
    //         const visibility = primaryNav.getAttribute("data-visible");

    //         if (visibility === "false") {
    //             console.log(visibility);
    //             primaryNav.setAttribute("data-visible", true);
    //             navToggle.setAttribute('aria-expanded', true);
    //         } else if (visibility === "true") {
    //             console.log(visibility);
    //             primaryNav.setAttribute("data-visible", false);
    //             navToggle.setAttribute('aria-expanded', false);
    //         }
    //     })
    // };

    // document.getElementById('dmbutton').addEventListener('click', function () {
    //     const css = document.getElementById('cssfile');
    //     const dmb = document.getElementById('dmbutton');

    //     if (dmb.innerHTML == 'Dark Mode') {
    //         css.setAttribute('href', 'styles/darkmode.css');
    //         dmb.innerHTML = "Light Mode";
    //     } else {
    //         css.setAttribute('href', 'styles/lightmode.css');
    //         dmb.innerHTML = 'Dark Mode';
    //     }
    // });


    // var toc = "";
    // var level = 0;

    // document.getElementById("content").innerHTML =
    //     document.getElementById("content").innerHTML.replace(
    //         /<h([\d])>([^<]+)<\/h([\d])>/gi,
    //         function (str, openLevel, titleText, closeLevel) {
    //             if (openLevel != closeLevel) {
    //                 return str;
    //             }

    //             if (openLevel > level) {
    //                 toc += (new Array(openLevel - level + 1)).join("<ul>");
    //             } else if (openLevel < level) {
    //                 toc += (new Array(level - openLevel + 1)).join("</ul>");
    //             }

    //             level = parseInt(openLevel);

    //             var anchor = titleText.replace(/ /g, "_");
    //             toc += "<li><a href=\"#" + anchor + "\">" + titleText
    //                 + "</a></li>";

    //             return "<h" + openLevel + "><a name=\"" + anchor + "\">"
    //                 + titleText + "</a></h" + closeLevel + ">";
    //         }
    //     );

    // if (level) {
    //     toc += (new Array(level + 1)).join("</ul>");
    // }

    // document.getElementById("toc").innerHTML += toc;

    document.getElementById("toc_sidebar").addEventListener("click", function(){ 
        element = document.getElementById("toc")
        const basis = element.style.flexBasis
        console.log(basis)
        if (basis == "25%")
        {
            element.style.flexBasis = "5%"
            document.querySelectorAll("details").forEach(elem => elem.style.display = "none")
        }
        else
        {
            element.style.flexBasis = "25%";
            document.querySelectorAll("details").forEach(elem => elem.style.display = "block")
            // element.children[0].details.style.display = "block";
            // console.log(children)
            // element.style.display = "block"
        }
        // document.getElementById("toc").style.flexBasis = "5%"; 
    })
}

// .toc { flex-basis: 5%; }
//     .toc details {display: none;}
