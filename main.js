$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	outerShell.append(innerShell);
	$('.container').append(outerShell);

	var leftAM = $('<p class="left-AM">AM</p>');
	var leftPM = $('<p class="left-PM">PM</p>');
	var leftAuto = $('<p class="left-Auto">Auto</p>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var bttmAMlabel = $('<p class="bttm-am">AM 53 60 70 80 100 130 170 10kHz</p>');
	var bttmFMlabel = $('<p class="bttm-fm">FM 88 92 96 100 104 108 MHz</p>');
	innerShell.append(leftAM).append(leftPM).append(leftAuto).append(clockScreen).append(bttmAMlabel).append(bttmFMlabel);

	var indicator = $('<div class="indicator"></div>');
	var clkText = $('<p class="clk-text">12:17</p>');
	clockScreen.append(indicator).append(clkText);


































  
});