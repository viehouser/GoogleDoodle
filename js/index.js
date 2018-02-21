//youtube Traversy Media
$(function(){
  $('#animateBtn').click(function(){
    animate('#anim-coin', 'fadeOutUp' );
    
    
    return false;
  })
  
  //animate
  function animate(element, animation){
    $(element).addClass('animated'+animation);
    var wait = setTimeout(function(){
      $(element).removeClass('animated'+animation);
    }, 1000);
  }
})

//@adobewordpress
$("<audio></audio>").attr({ 
			'src':'http://adobewordpress.com/tasarim/include/gold-sound.mp3', 
			'autoplay':'autoplay'
		})
//