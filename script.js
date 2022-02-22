let btop = document.getElementById('btop');

function up () {
    if (window.pageYOffset > 30) {
        btop.style.opacity = '0.5';
    } else {
        btop.style.opacity = '0';
    }
}
btop.onclick = function () {
    window.scrollTo(0, 0);
};

window.onscroll = up;