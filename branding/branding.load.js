/**
 * Repos Web branding (c) 2009-2010 Simonsoft
 * To be checked out in repos-plugins.
 */

// Customize title, alternative to changing in html templates and xsl files
document.title = document.title.replace('repos:', 'Logos CMS |');

// Dynamically replace logo src, alternative to rewrite rules
// Commandbar logo where present
$(document).ready(function() {
	$('#commandbar #logo')
		.attr('src', '/repos-plugins/branding/Logos.png')
		.attr('alt', 'Logos CMS')
		.attr('title', 'Powered by SimonsoftCMS')
		.css({cursor: 'pointer'}).click(function() { window.location.href = '/'; });
});
// Welcome page
Repos.service('home/', function() {
	$('#intro h1').empty()
		// Startpage logo
		.append('<img alt="Logos CMS - Powered by SimonsoftCMS" height="40" border="0" align="baseline" src="/repos-plugins/branding/LogosCMS.png"/>')
		// Startpage header text, for logos without CSM
		//.append('&nbsp;CMS')
		// Startpage header style
		.css({fontSize:'54px', lineHeight:'54px',fontWeight:'bold',letterSpacing:'.15em',color:'#e0e0e0'});
});
