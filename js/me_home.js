// me_home.js

function me_home(){           
            
    // .aboutBox
            var acc = $('.aboutBox')
  				acc_btn = acc.find('dl');

  				acc_btn.on('click', function(){
  					var $this = $(this);
  						acc.find('dd').removeClass('widthView');
  						$this.find('dd').addClass('widthView');
  					
  				});
            
    // 스크롤
            
    $("#headBox").find("a")
                .on("click", function(e){e.preventDefault();
    
    
    $("html, body").animate({scrollTop:$(this.hash).offset().top},1000);
                                    
        });
            
            
// top버튼__________________________________________________
         
	$('.topBtn').on('click', function(){
		//$(window).scrollTop(0);
		$('html,body').animate({'scrollTop':0},500);
	});
     
// 상단 위치에서 top버튼 숨기기__________________________         
         
    
	$(window).on('scroll', function(){

	var sc = $(this).scrollTop();
	
	
	if(sc > '#header'){
		$('button').hide;
	
	}else{
		$('button').fadeIn(1000);
	}

	});

		};