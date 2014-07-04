
(function($) {
 
    function maskInPlace(obj, mask, deep) {
        $.each(obj, function(key, value) {
            if(typeof mask[key] !== 'undefined') {
                if(deep && obj[key] != null && typeof obj[key] === 'object') {
                    maskInPlace(obj[key], mask[key], deep);
                }
            } else {
                delete obj[key];
            }
        });
        return obj;
    }
 
    $.fn.copyInPlace = function(src, dest, deep) {
        maskInPlace(dest, src, !!deep);
		$.extend(!!deep, dst, src);
    };
 
}(jQuery));
