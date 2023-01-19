(function ($) {
    "use strict";

    $(".top-bar-right .toggle-setting").toggle(function(){
    	$(this).parent().find('.setting-language').css('display','block');
    },function(){
    	$(this).parent().find('.setting-language').css('display','none');
    });


 })(jQuery);