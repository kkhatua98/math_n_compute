window.onload = function () {
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
        }
    })
}

// .toc { flex-basis: 5%; }
//     .toc details {display: none;}
