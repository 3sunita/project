(function(b){var a={init:function(){a.setOverlayVC()},setOverlayVC:function(){b("[data-overlay-image]").each(function(){var c=b(this);setTimeout(function(){var f=c.data("overlay-image");var e=c.data("overlay-opacity");var d='<div class="overlay-bg-vc" style="background-image: url('+f+") ;background-repeat:repeat; opacity:"+e+'"></div>';c.prepend(d)},100)});b("[data-overlay-color]").each(function(){var c=b(this);setTimeout(function(){var e=c.data("overlay-color");var d='<div class="overlay-bg-vc" style="background-color: '+e+'"></div>';c.prepend(d)},100)})}};b(document).ready(a.init)})(jQuery);