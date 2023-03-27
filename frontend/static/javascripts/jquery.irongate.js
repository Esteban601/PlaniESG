function showProject(container){
	$this = container;
	$this.addClass('active');

	$this.siblings('.projects-details').fadeIn(400);
	
};

function hideProject(container){
	$this = container;
  	$this.removeClass('active');

	$this.siblings('.projects-details').fadeOut(400);
};

function locationProject(project){
	$(location).attr('href', "/"+project);
};

function scrollNext(container){

    var scrollNext = container;

    jump(scrollNext, {
      offset: -130,
      duration: 750
    });
};

$(document).ready(function(){

	$('.nav-menu').on('click', function(e) {
		e.stopPropagation();
		$('body').toggleClass('mobile-active');
	});

	$('.js-section').on('click', function(e) {
		e.preventDefault();
		var container = $(this).attr('href');
		scrollNext(container);
	});

	// Store the window width
    var windowWidth = $(window).width();

    // Resize Event
    $(window).resize(function(){

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {

            // Update the window width for next time
            windowWidth = $(window).width();

            // Do stuff here
            location.reload();

        }

        // Otherwise do nothing

    });

});