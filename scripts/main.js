window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
        document.body.style.background = randColor();
    });
};