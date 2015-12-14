jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn-1').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-1').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-1').on('click', function(event){
		if( $(event.target).is('.cd-panel-1') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-1').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-2').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-2').on('click', function(event){
		if( $(event.target).is('.cd-panel-2') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-2').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-3').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-3').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-3').on('click', function(event){
		if( $(event.target).is('.cd-panel-3') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-3').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-4').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-4').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-4').on('click', function(event){
		if( $(event.target).is('.cd-panel-4') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-4').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-5').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-5').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-5').on('click', function(event){
		if( $(event.target).is('.cd-panel-5') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-5').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-6').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-6').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-6').on('click', function(event){
		if( $(event.target).is('.cd-panel-6') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-6').removeClass('is-visible');
			event.preventDefault();
		}
	});
  //open the lateral panel
	$('.cd-btn-7').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-7').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-7').on('click', function(event){
		if( $(event.target).is('.cd-panel-7') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-7').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-8').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-8').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-8').on('click', function(event){
		if( $(event.target).is('.cd-panel-8') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-8').removeClass('is-visible');
			event.preventDefault();
		}
	});
});