// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function newColor() {
    document.getElementById('hello_world').style.color = 'blue';
};

function oldColor() {
    document.getElementById('hello_world').style.color = 'darkolivegreen';
};

var time = null;
function moveVideo() {
    var video = document.getElementById('video');
    var pos = 0
    clearInterval(time);
    time = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(time);
        } else {
            pos++;
            video.style.top = pos + 'px';
            video.style.left = pos + 'px';
        }
    }
}