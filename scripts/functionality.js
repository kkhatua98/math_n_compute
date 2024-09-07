window.onload = function () {
    // document.getElementById("toc_sidebar").addEventListener("click", function(){ 
    //     element = document.getElementById("toc")
    //     const basis = element.style.flexBasis
    //     console.log(basis)
    //     if (basis == "25%")
    //     {
    //         element.style.flexBasis = "5%"
    //         document.querySelectorAll("details").forEach(elem => elem.style.display = "none")
    //     }
    //     else
    //     {
    //         element.style.flexBasis = "25%";
    //         document.querySelectorAll("details").forEach(elem => elem.style.display = "block")
    //     }
    // })

    var button = document.getElementById('mini_toc_button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('toc');
    console.log(div.style.display);
    console.log(window.getComputedStyle(document.getElementById('toc')).display);
    var display = window.getComputedStyle(document.getElementById('toc')).display;
    if (display != 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.width = '25%';
        div.style.display = 'flex';
        var nodes = div.childNodes;
        // for(var i=0; i<nodes.length; i++) {
        //     console.log(nodes[i].style.display);
        // }
        // div.child.style.display = 'none';
    }
};
}

// .toc { flex-basis: 5%; }
//     .toc details {display: none;}
