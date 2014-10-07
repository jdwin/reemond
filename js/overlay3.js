function assign(target) {
	this.target = target;
	$('videoReel{0}'.format(this.target)).bind('mouseenter', function() {
		$('#videoReel{0} img'.format(this.target)).animate({'opacity':0.1});
		$('#videoReel{0} .overlay'.format(this.target)).animate({'opacity':1});
		$('.overlay').width($('#videoReel{0} img'.format(this.target)).width());
		$('.overlay').height($('#videoReel{0} img'.format(this.target)).height());
	});

	$('videoReel{0}'.format(this.target)).bind('mouseleave', function() {
		$('videoReel{0} img'.format(this.target)).animate({'opacity':1});
		$('videoReel{0} .overlay'.format(this.target)).animate({'opacity':0});
	});
}


document.ready(function() {assign("1");});
