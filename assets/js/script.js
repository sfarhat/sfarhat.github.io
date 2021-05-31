function setTargetToBlank() {
    document.querySelectorAll("a").forEach(function(a){
        a.setAttribute('target', '_blank');
    });
}

window.onload = setTargetToBlank;