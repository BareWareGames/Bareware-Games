$(function() {
	smoothScroll(300);
	headerStuff();
	projectsBelt();
	projectsLoad();
	staffStuff();
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function projectsBelt() {
  
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    $('.projects-belt').addClass("slided");
    $('.projects-container').show();
  });
  
  $('.projects-return').click(function() {
    $('.projects-belt').removeClass("slided");
    $('.projects-container').hide(800);
  });

}


function  projectsLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'projects/'+ newfolder;
      
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
  
}




function staffStuff() {
  
  $('.staff-unit').first().addClass('active-staff');
  $('.staff-logo').first().addClass('active-staff');
  $('.staff-mobile-nav span').first().addClass('active-staff');
  
  
  $('.staff-logo, .staff-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
        
    $('.staff-unit').removeClass('active-staff').eq(position).addClass('active-staff');
    $siblings.removeClass('active-staff');
    $this.addClass('active-staff');
  });
  
  
  $('.staff-control-next, .staff-control-prev').click(function() {
  
    var $this = $(this),
        curActivestaff = $('.staff-belt').find('.active-staff'),
        position = $('.staff-belt').children().index(curActivestaff),
        staffNum = $('.staff-unit').length;
        
      if($this.hasClass('staff-control-next')) {
        
        if(position < staffNum -1){
          $('.active-staff').removeClass('active-staff').next().addClass('active-staff');
        } else {
          $('.staff-unit').removeClass('active-staff').first().addClass('active-staff');
          $('.staff-logo').removeClass('active-staff').first().addClass('active-staff');
        }
        
      } else {
        
        if (position === 0) {
          $('.staff-unit').removeClass('active-staff').last().addClass('active-staff');
          $('.staff-logo').removeClass('active-staff').last().addClass('active-staff');
        } else {
          $('.active-staff').removeClass('active-staff').prev().addClass('active-staff');  
        }

      }
        
  
  });
  
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

function headerStuff() {
  
  $('.header-unit').first().addClass('active-header');
  $('.header-logo').first().addClass('active-header');
  $('.header-mobile-nav span').first().addClass('active-header');
  
  
  $('.header-logo, .header-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
        
    $('.header-unit').removeClass('active-header').eq(position).addClass('active-header');
    $siblings.removeClass('active-header');
    $this.addClass('active-header');
  });
  
  
  $('.header-control-next, .header-control-prev').click(function() {
  
    var $this = $(this),
        curActivestaff = $('.header-belt').find('.active-header'),
        position = $('.header-belt').children().index(curActivestaff),
        headerNum = $('.header-unit').length;
        
      if($this.hasClass('header-control-next')) {
        
        if(position < headerNum -1){
          $('.active-header').removeClass('active-header').next().addClass('active-header');
        } else {
          $('.header-unit').removeClass('active-header').first().addClass('active-header');
          $('.header-logo').removeClass('active-header').first().addClass('active-header');
        }
        
      } else {
        
        if (position === 0) {
          $('.header-unit').removeClass('active-header').last().addClass('active-header');
          $('.header-logo').removeClass('active-header').last().addClass('active-header');
        } else {
          $('.active-header').removeClass('active-header').prev().addClass('active-header');  
        }

      }
        
  
  });
  
}



