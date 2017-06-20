
function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

document.addEventListener("DOMContentLoaded", function(){

	var typyViewcnt = 0;
	var qualsViewcnt = 0;
	document.addEventListener('scroll', function(e) {
		typy = document.getElementById('typy');
		quals = document.getElementsByClassName('quals')[0];

		if(isScrolledIntoView(typy) && (typyViewcnt == 0))
		{
			Typed.new(".element0", {
				strings:["I love"],
				typespeed: 0,
				loop: false,
				callback: function(){
					document.getElementsByClassName('typed-cursor')[0].style.display = 'none';

					Typed.new(".element1", {
						strings: ["^1000 electronics.", "^1000 computers.", "^1000 embedded ^200 systems.", "^1000 microcontrollers.",
						"^1000 PCB ^200 design.", "^1000 robotics.", "^1000 computer ^200 vision.", "^1000 C/C++."],
						typeSpeed: 0,
						loop: true,
						loopCount: null,
						backspace: function(curString, curStrPos){
							self.stopNum = 6;
						},
					});
				}
			});

			typyViewcnt++;
		}

		if(isScrolledIntoView(quals) && (qualsViewcnt == 0))
		{
			var numAnim1 = new CountUp(document.getElementById('no1'), 0, 24);
			numAnim1.start();

			var numAnim2 = new CountUp(document.getElementById('no2'), 0, 133);
			numAnim2.start();

			var numAnim3 = new CountUp(document.getElementById('no3'), 0, 19);
			numAnim3.start();

			qualsViewcnt++
		}

	});
});