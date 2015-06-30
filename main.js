$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	outerShell.append(innerShell);
	$('.container').append(outerShell);

	var leftAMPM = $('<p class="left-AMPM">AM/PM</p>');
	var leftAuto = $('<p class="left-Auto">Auto</p>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var bttmAMlabel = $('<div class="bttm-AM-lbl"></div>');
	var bttmFMlabel = $('<div class="bttm-FM-lbl"></div>');
	innerShell.append(leftAMPM).append(leftAuto).append(clockScreen).append(bttmAMlabel).append(bttmFMlabel);

	var indicator = $('<div class="indicator"></div>');
	var clkText = $('<div class="clk-text"></div>');
	clockScreen.append(indicator).append(clkText);


































  
});