$(function() {
    var $divs = $('div.module');
    console.log($divs);
    //
    var $li = $('#myList li:nth-child(3)');
    var $li2 = $('#myList > li');

    

    console.log($li2.eq(2));

    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));
    //
    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');
    console.log($label);
    //selecionar ocultos
    var $hidden = $(':hidden');
    $hidden.each(function(idx, elem) {
        $(elem).show();
    });

    //
    var $imgs = $('img');
    $imgs.each(function(idx, elem) {
        console.log(elem.alt);
    });
    //

    $input.closest('form').addClass('form');
    $input.closest('form').removeClass('form');
    //taggle si tienes nada y si no lo pones
    $input.closest('form').toggleClass('form');
    //

    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');
    //
    var$submit=$('#special select').closest('ul').find('input[type="submit"]');
    //
    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    //manipular dom
    var list=[];
    for (var i = 0; i<4; i++) {
    	list.push('<li>Element'+i+'</li');
   }
   $ul.find('li:odd').remove();
    $ul.append(list.join(''));
    $li=$('<li/>',{
    	class:'current',
    	text:'Node list',
    	id:'myli'
    });
    $ul.append($li);
     $li.append($ul);
    //
    

    //eventos
    $ul.on('click','li',function(e){
    	console.log(e);
    	console.log(this);

    });


});
