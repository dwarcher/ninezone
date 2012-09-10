function nineZoneify(elemIdStr, imgStr, imgWidth, imgHeight, cornerWidth, cornerHeight)
{
	// corner off = fullwidth - cornerwidth
	// scaled corner = cornerwidth * scale
	// inside with = full container width - 2x corner

	var ninezoneElem = $(elemIdStr);

	ninezoneElem.each( function() {
		elem = $(this);
		
		var eWidth =  elem.width();
		var eHeight =  elem.height();

		var sclX = (eWidth-(2*cornerWidth)) / (imgWidth - (2*cornerWidth));
		var sclY = (eHeight-(2*cornerHeight)) / (imgHeight - (2*cornerHeight));

		var tmplData = { imgName: imgStr,
						insideWidth: eWidth - (2 * cornerWidth), 
						insideHeight: eHeight - (2 * cornerHeight), 
						cornerWidth: cornerWidth, 
						cornerHeight: cornerHeight, 
						fullWidth: imgWidth, 
						fullHeight: imgHeight, 
						rightCornOff: imgWidth - cornerWidth, 
						botCornOff: imgHeight - cornerHeight, 
						scalePctX: sclX * imgWidth, 
						scalePctY: sclY * imgHeight, 
						scaledCornerWidth: cornerWidth * sclX, 
						scaledCornerHeight: cornerHeight * sclY,
						bodyContent: elem.html() };

		elem.empty();
		$("#NinezoneTemplate").tmpl( tmplData ).appendTo(elem);

		$(".body-content", elem).prepend(tmplData.bodyContent);


	});

}
