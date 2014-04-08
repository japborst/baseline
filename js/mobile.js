if(!window.devicePixelRatio){
    var pixelRatio = 1;
}
if( (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0) && window.devicePixelRatio >= 2){
    pixelRatio = 1;
}
else{
    var pixelRatio = window.devicePixelRatio;
}
var bigscreen = Math.max(screen.width,screen.height) / pixelRatio;

function loadScript(src,minwidth){
	if(bigscreen >= minwidth){
		s = document.createElement('script');
		s.src= "/js/" + src + ".min.js";
		document.body.appendChild(s);
	}
}