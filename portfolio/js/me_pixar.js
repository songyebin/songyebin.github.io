// me_home.js

function pixarYebin(){           
            


  				
    // 스크롤
            
    $("#headBox").find("a")
                .on("click", function(e){e.preventDefault();
    
    
    $("html, body").animate({scrollTop:$(this.hash).offset().top},1000);
                                    
        });

        

// 사이드버튼 

         topAdd( $('#topAdd') );

         $('#menu_ctn').find('button').on('click', function(){
         $('#movie_btn').toggleClass('inbox');
         });

         }; //picarYebin

// 팝업창!!!!!!!!

	function topAdd(topAdd){
		topAdd.find('button').on('click', function(){
			topAdd.slideUp();
		})
	};              


//  배너박스

function slideBanner(banner){
		var b_box = banner,
			b_box_ul = b_box.find('ul'),
			b_box_li = b_box_ul.find('li'),
			b_box_li_width = b_box.find('li').width(),
			l_btn = $('.btn_left'),
			r_btn = $('.btn_right');

	//	$('.banner_box').find('li').last().prependTo('.banner_box>ul');
		b_box_li.last().prependTo(b_box_ul);

		l_btn.on('click', function(){
			var b_li = b_box.find('li');
			b_li.first().animate({'margin-left': b_box_li_width }, 700, function(){
				b_li.css({'margin-left':0})
					.last().prependTo(b_box_ul);
			});
				
		});

		r_btn.on('click', function(){
			var b_li = b_box.find('li');
			b_li.first().animate({'margin-left': -b_box_li_width }, 700, function(){
				b_li.css({'margin-left':0})
					.first().appendTo(b_box_ul);
			});
		});
}// banner