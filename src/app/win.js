import $ from 'jquery';

/* 窗口大小拖动调整 */
$(window).resize(() => {
	let w_width = $(window).width();

	let l_width = $('.main-left-content').width(),
		r_width = $('.main-info').width();

	if(l_width + r_width - w_width > 0){
		$('.main-left-content').width(w_width - r_width);
	}
});