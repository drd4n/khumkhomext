var div = document.createElement('div');
var img = document.createElement('img');
img.src = 'https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.15752-9/106025141_292481108612782_718686642885017837_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeGU27FglFPrpg5BMb7CvKN0Ij_l3Q8JGUYiP-XdDwkZRuSLQDbYSmua0GwyHBqsiw6GJZsjQI4jVb0icoQelrML&_nc_ohc=2ddVOW-TCJQAX9Qq48K&_nc_ht=scontent.fkkc3-1.fna&oh=be3485c2f31d4e07530d39e5e9ffdae7&oe=5F1D2E57';
var bg = document.createElement('div');
var idlediv = document.createElement('div');

idlediv.setAttribute('id', 'idle');
idlediv.appendChild(div);
idlediv.appendChild(bg);
div.innerHTML = '<div class="outertext"><div class="innertext">เสี่ยวๆๆๆๆ</div></div>';
    bg.className = 'bg';
    bg.appendChild(img);
    img.className='backy';

    document.body.appendChild(idlediv);
    
    

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


        