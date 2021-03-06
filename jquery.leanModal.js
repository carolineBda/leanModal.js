(function($){

    $.fn.extend({

        leanModal: function(options) {

            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };

            var overlayId = 'lean_overlay_' + (this[0].id || '');
            var overlayIdSelector = '#' + overlayId;

            var overlay = $("<div id='" + overlayId + "' class='lean_overlay' ></div>");

            $("body").append(overlay);

            options =  $.extend(defaults, options);

            return this.each(function() {

                var o = options;

                $(this).click(function(e) {

                    var modal_id = $(this).attr("href");

                    $(overlayIdSelector).click(function() {
                        close_modal(modal_id);
                    });

                    $(o.closeButton).click(function() {
                        close_modal(modal_id);
                    });

                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();

                    $(overlayIdSelector).css({ display : 'block', opacity : 0 });

                    $(overlayIdSelector).fadeTo(200,o.overlay);

                    $(modal_id).css({

                        'display' : 'block',
                        'position' : 'fixed',
                        'opacity' : 0,
                        'z-index': 11000,
                        'left' : 50 + '%',
                        'margin-left' : -(modal_width/2) + "px",
                        'top' : o.top + "px"

                    });

                    $(modal_id).fadeTo(200,1);

                    e.preventDefault();

                });

            });

            function close_modal(modal_id){

                $(overlayIdSelector).fadeOut(200);

                $(modal_id).css({ display : 'none' });

            }

        }
    });

})(jQuery);