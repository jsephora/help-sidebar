/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function(){

    // Initialise accordian
    $('.collapse').collapse();

    // Close instructions box
    $('.close-btn').on('click', function(){
        $('.overlay').addClass('off');
        $('.test-instructions').addClass('off');
    });
    
    // Next and previous buttons
    $('.prev').on('click', function(){
        window.history.back()
    });
    $('.next').on('click', function(){
        window.history.back()
    });
});

// Fix for bootstrap collapse functionality
// http://stackoverflow.com/questions/13665800/bootstrap-collapse-data-parent-not-working 
$(document).on('click', '.accordion-toggle', function(event) {
        event.stopPropagation();
        var $this = $(this);

        var parent = $this.data('parent');
        var actives = parent && $(parent).find('.collapse.in');

        // From bootstrap itself
        if (actives && actives.length) {
            hasData = actives.data('collapse');
            actives.collapse('hide');
        }
});