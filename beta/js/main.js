
function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function createBar(elem, primarycolor, secondarycolor, text)
{
	var bar = new ProgressBar.Line(elem, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1400,
		color: primarycolor,
		trailColor: 'secondarycolor',
		trailWidth: 2,
		strokeWidth: 2,
		svgStyle: {width: '100%', height: '100%'},
		text: {
			style: {
		      // Text color.
		      // Default: same as stroke color (options.color)
		      color: 'black',
		      position: 'relative',
		      padding: 0,
		      margin: 0,
		      transform: null
		  },
		  autoStyleContainer: false
		},
		from: {color: primarycolor},
		to: {color: secondarycolor},
		step: (state, bar) => {
			bar.setText(text + Math.round(bar.value() * 100) + "%</span>");
		}
	});

	bar.text.style.fontFamily = "Roboto";
	bar.text.style.fontWeight = 600;
	bar.text.style.fontSize = '1.1rem';

	return bar;
}

document.addEventListener("DOMContentLoaded", function(){

	var typyViewcnt = 0;
	var qualsViewcnt = 0;
	var progressViewsnt = 0;

	var bar1 = createBar(document.getElementById('progressbar1'), "#C62828", "#ED6A5A", 'Analog Electronics<span style="float: right;font-weight: 300">');
	var bar2 = createBar(document.getElementById('progressbar2'), "#1B5E20", "#ED6A5A", 'Digital Electronics<span style="float: right;font-weight: 300">');
	var bar3 = createBar(document.getElementById('progressbar3'), "#FF6D00", "#ED6A5A", 'PCB design (KiCad)<span style="float: right;font-weight: 300">');
	var bar4 = createBar(document.getElementById('progressbar4'), "#2196F3", "#ED6A5A", 'Embedded Systems (AVR/STM32)<span style="float: right;font-weight: 300">');
	var bar5 = createBar(document.getElementById('progressbar5'), "#283593", "#ED6A5A", 'CAD (Autodesk Inventor)<span style="float: right;font-weight: 300">');

	var bar6 = createBar(document.getElementById('progressbar6'), "#C62828", "#ED6A5A", 'Embedded C/C++<span style="float: right;font-weight: 300">');
	var bar7 = createBar(document.getElementById('progressbar7'), "#1B5E20", "#ED6A5A", 'Python<span style="float: right;font-weight: 300">');
	var bar8 = createBar(document.getElementById('progressbar8'), "#FF6D00", "#ED6A5A", 'ROS<span style="float: right;font-weight: 300">');
	var bar9 = createBar(document.getElementById('progressbar9'), "#2196F3", "#ED6A5A", 'Web development (Front End)<span style="float: right;font-weight: 300">');
	var bar10 = createBar(document.getElementById('progressbar10'), "#283593", "#ED6A5A", 'Web development (Back End)<span style="float: right;font-weight: 300">');

	document.addEventListener('scroll', function(e) {
		typy = document.getElementById('typy');
		quals = document.getElementsByClassName('quals')[0];
		progress = document.getElementById('progress');

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

		if(isScrolledIntoView(progress) && (progressViewsnt == 0))
		{
			bar1.animate(0.5);
			bar2.animate(0.7);
			bar3.animate(0.85);
			bar4.animate(0.85);
			bar5.animate(0.5);
			bar6.animate(0.85);
			bar7.animate(0.75);
			bar8.animate(0.4);
			bar9.animate(0.6);
			bar10.animate(0.3);

			progressViewsnt++;
		}

	});
});