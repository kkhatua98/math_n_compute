window.onload = function () {

    var width = window.innerWidth;
    var div = document.getElementById('toc');
    var button = document.getElementById('mini_toc_button'); // Assumes element with id='button'

    button.onclick = function () {
        var div = document.getElementById('toc');
        console.log(div.style.display);
        console.log(window.getComputedStyle(document.getElementById('toc')).display);
        var display = window.getComputedStyle(document.getElementById('toc')).display;
        console.log(window.screen.width);
        console.log(window.innerWidth);
        if (div.className == 'toc') {
            div.className = "toc_copy";
            // div.style.width = "50%";
        }
        else {
            div.className = "toc";
        }
    };
}
