var Goup = {

	setStatusBoxPosition: function($el) {
		var newTop = $(document).scrollTop();
		var rCorner = $(document).scrollLeft() + $(window).width() - ($.browser.opera ? 14 : 8);
		var newLeft = Math.max(0, rCorner - $el.width());
		$el.css({ top: newTop, left: newLeft });
	},
};

$(document).ready(function(){if ("ontouchstart" in document.documentElement){document.getElementById("scrollTop").style.width = ("0px");document.getElementById("scrollTop").style.opacity = ("0")};}) //touch_detector

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(1($){$(1(){4 e=$(".2");4 a=5;e.9(1(){$("b:6(:7)"+(!$.c.d?",f:6(:7)":"")).g({2:0},5);h i});1 3(){($(8).2()>j)?e.k(l):e.m()}$(8).n(1(){3()});3()})})(o)',25,25,'|function|scrollTop|show_scrollTop|var|0|not|animated|window|click||html|browser|opera||body|animate|return|false|700|fadeIn|700|fadeOut|scroll|jQuery'.split('|'),0,{})) //scroll