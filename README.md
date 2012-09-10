ninezone
========

My attempt to duplicate something like Flash's 9-zone sprites in javascript/html/css.

Note: This isn't the awesomest code, merely a proof of concept. It currently depends on jQuery-tmpl and requires the NinezoneTemplate to be included in the page, but it should be re-written to have the template embedded in ninezone.js (and not use any external templating engines).

Usage:
======

	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.tmpl.min.js" type="text/javascript"></script>
	<script src="js/ninezone.js" type="text/javascript"></script>
	<link href="css/ninezone.css" rel="stylesheet" type="text/css" />

	...

	be sure to include NinezoneTemplate <script> tag.

	....

	<div class="square1" style="width: 100px; height:200px;"></div>

	<script>
	$(function() {
		nineZoneify(".square1", "square.png", 64, 64, 22, 22);
	}
	</script>