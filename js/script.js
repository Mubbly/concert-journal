(function($) {
    $(document).ready(function() {
        const MELISSA_HURTS_CLASS = '.melissahurts';
        const JOHANNA_A7X_CLASS = '.johannaa7x';
        const GUIDE_POST_PICS_CLASS = '.postpics';
        const TOGGLE_LINK_ID = "#toggle";

        $(MELISSA_HURTS_CLASS).click(function() {
            var myWindow = window.open("melissahurts.html", "", "width=900, height=650, scrollbars=yes");

        });
        $(JOHANNA_A7X_CLASS).click(function() {
            var myWindow = window.open("johannaa7x.html", "", "width=900, height=650, scrollbars=yes");

        });

        // for Guide page only
        $(GUIDE_POST_PICS_CLASS).hide();

        $(TOGGLE_LINK_ID).click(function() {
            $(GUIDE_POST_PICS_CLASS).slideToggle("slow");
        });
    });
})(jQuery);