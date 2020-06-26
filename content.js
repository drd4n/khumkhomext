var div = document.createElement('div');
document.body.appendChild(div);
        div.innerHTML = '<div id="idle"><div class="bg"><div class="outertext"><div class="innertext">เสี่ยวๆๆๆๆ</div></div></div></div>';
var mousetimeout;
var screensaver_active = false;
var idletime = 5;

function show_screensaver(){
    $('#idle').fadeIn();
        screensaver_active = true;
}

function stop_screensaver(){
    $('#idle').fadeOut();
    screensaver_active = false;
}

$(document).mousemove(function(){
    clearTimeout(mousetimeout);
	
    if (screensaver_active) {
        stop_screensaver();
    }

    mousetimeout = setTimeout(function(){
        show_screensaver();
    }, 1000 * idletime); // 5 secs			
});


        