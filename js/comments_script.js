if(!((function(){var e;try{if((ready in GU_comment_box) && GU_comment_box.ready)return true;}catch(e){};return false;})())){
var GU_comment_box__server_delay = 0;
var GU_comment_box = {
	p_PFX	: 'GU-',
	search_key :	'GU-COMMENT-API',
	root_url :	'http://'+GU_comment_box_server+'/init.php',
	root_dat :	'http://'+GU_comment_box_server+'/i-db-jsd/',
	ready:true,
	last_load :	0,
	f_xs	: function(s){var e;try{s = decodeURIComponent(s);return s;}catch(e){};try{s = unescape(s);return s;}catch(e){};return s;},
	f_js	: function (jn,ix) {var e;try{var o=document.getElementById(ix);o.parentNode.removeChild(o)}catch(e){};try{var js = document.createElement('script');js.setAttribute('type', 'text/javascript');js.src = jn+'?t='+new Date().valueOf();js.setAttribute('id', ix);document.getElementsByTagName('head')[0].appendChild(js);}catch(e){}},
	f_date	: function(tm){var t = new Date(tm*1000+GU_comment_box__server_delay);var r = 'HH:mm d/m/Y';var e;try{r = ((t.getHours() < 10 ? '0' : '') + t.getHours())+':'+((t.getMinutes() < 10 ? '0' : '') + t.getMinutes())+':'+((t.getSeconds() < 10 ? '0' : '') + t.getSeconds())+' '+(t.getDate() < 10 ? '0' : '')+''+t.getDate()+'.'+((t.getMonth() < 9 ? '0' : '') + '' +new String(t.getMonth()+1))+'.'+t.getFullYear();}catch(e){};return r;},
	f_hs	: function(s){if(!s) return '';var e;try{return unescape(s.replace(/([0-9A-Fa-f]{2})/gi,'%$1'));}catch(e){return '';}},
	f_bbico : function(s,c,str){
		var i ={
		':s':':s',
		':b':':b',
		':((':'smiley_cry',
		':|':'smiley_fat',
		';o':'',
		':d':':D',
		':))':'&#9787;',
		':)':'&#9786;',
		':)))':':)))',
		':o':':o',
		':p':':p',
		':(':'&#9785;',
		';)':';)',
		'(h)':'&#9825;',
		'(.)':'(.)',
		'%)':'%)',
		':*':'&#9829;',
		'8(':'&#9760;',
		'8)':'8)',
		':?':'&#9072;',
		'(*)':'&#10025;'}
		if(c) c = c.toLowerCase();
		if(c in i){	return i[c];	} else {
		if(c.substr(0,6) == '(flag:') return "&#9873; <u>"+c.replace(/^[^\:]+\:/,'').replace(/([a-z]{2})[\w\W]+/,'$1')+".png\"</u> "; 
		return s};
		},
	f_bbcod	: function(a){function b(d,c){a=a.replace(d,c)};
		b(/\>/gi,"&gt;");b(/\</gi,"&lt;");b(/\n/gi,"<br>");
		b(/\[(b|u|i|sup|sub|big|strong|cite)\]([\W\w]+?)\[\1\]/gi,'<$1>$2</$1>');
		b(/\[(quote)\]([\W\w]+?)\[\1\]/gi,'<blockquote>$2</blockquote>');
		var e;try{
		b(/^(http\:\/\/)(www\.|)(youtube.com\/)([a-z0-9]*)(\?v\=|v\/)([^\&\s\n]+)([^\s\n\r]*)/gi,'<br><a href=\"$1$2$3$4$5$6$7\" target=\"_blank\">$1$2$3$4$5$6$7</a><br><embed src="http://www.youtube.com/v/$6&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="240" height="180" wmode="opaque" ></embed><br>');
		b(/^([^\"\<\>])(http\:\/\/)(www\.|)(youtube.com\/)(.*?)(\&v=|\?v\=|v\/)([^\&\s\n]+)([^\s\n\r]*)/gi,'$1<br><a href=\"$2$3$4$5$6$7$8\" target=\"_blank\">$2$3$4$5$6$8</a><br><embed src="http://www.youtube.com/v/$7&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="240" height="180"></embed><br>');
		}catch(e){}
		b(/^(http|https|ftp)(\:\/\/)([^\n\s\,\<\>\"\]\[]+)/gi,'<a href=\"$1$2$3\" target=\"_blank\">$1$2$3</a>')
		b(/(\n|\r)(http|https|ftp)(\:\/\/)([^\n\s\,\<\>\"\]\[]+)/gi,'$1<a href=\"$2$3$4\" target=\"_blank\">$2$3$4</a>')
		b(/([^\>\<\"])(http|https|ftp)(\:\/\/)([^\n\s\,\<\>\"\]\[]+)/gi,'$1<a href=\"$2$3$4\" target=\"_blank\">$2$3$4</a>')
		a = a.replace(/\s(\:s|\:b|\:\(\(|\:\||\;o|\:\)\)\)|\:\)\)|\:d|\:\)|\:o|8\)|8\(|\:p|\:\(|\;\)|\(h\)|\(\.\)|\:\?|\%\)|\:\*|\(flag\:[a-z]{2}[\s\n]*\))(?=(\W|))/gi,' <b>$1</b>');
		return a;},
	f_submi	: function(g,p,idx){
	var fn = GU_comment_box.p_PFX+'main-form';
	var i,k,f = document.forms[fn];if(!f){
		k = document.createElement('form');
		k.method = 'post';
		k.charset="UTF-8";
		k.action = GU_comment_box.root_url;
		k.name = fn;
		document.body.appendChild(k);
	};try{var f = document.forms[fn];f.innerHTML='';}catch(k){};
	f.target = GU_comment_box.p_PFX+'comment_win_'+idx;
	for(i in p){if(!f[i]){
		k = document.createElement('input');
		k.type="hidden";
		k.name=i;
		k.value=p[i];
		f.appendChild(k);
		} else {
		f[i].value = p[i];
		}};
	var v = [];for(i in g)v[v.length]=''+i+'='+encodeURIComponent(g[i]);
	v[v.length] = 't='+new Date().valueOf();
	f.action = GU_comment_box.root_url+'?'+v.join('&');
	f.submit();
	},
	icons	: decodeURIComponent('%E2%98%B9%E2%98%BA%E2%98%BB%E2%98%BC%E2%98%BD%E2%98%BE%E2%99%80%E2%99%81%E2%99%91%E2%99%90%E2%99%8F%E2%99%8E%E2%99%8D%E2%99%8C%E2%99%8B%E2%99%8A%E2%99%89%E2%99%88%E2%99%87%E2%99%86%E2%99%85%E2%99%84%E2%99%83%E2%99%82%E2%99%92%E2%99%93%E2%99%94%E2%99%95%E2%99%96%E2%99%97%E2%99%98%E2%99%99%E2%99%9A%E2%99%9B%E2%99%9C%E2%99%9D%E2%99%9E%E2%99%9F%E2%99%A0%E2%99%A1%E2%99%A2%E2%99%A3%E2%99%A4%E2%99%A5%E2%99%A6%E2%99%A7%E2%99%A8%E2%99%A9%E2%99%AA%E2%99%AB%E2%99%AC%E2%99%B0%E2%99%B1%E2%99%B2%E2%99%BB%E2%99%BF%E2%9A%86%E2%9A%87%E2%9A%88%E2%9A%89%E2%9A%9C%E2%9A%9D%E2%9A%9B%E2%9A%9A%E2%9A%99%E2%9A%98%E2%9A%97%E2%9A%96%E2%9A%95%E2%9A%94%E2%9A%93%E2%9A%92%E2%9A%9D%E2%9A%A0%E2%9A%A1%E2%9A%A2%E2%9A%A3%E2%9A%A4%E2%9A%A5%E2%9A%A6%E2%9A%A7%E2%9A%A8%E2%9A%A9%E2%9A%AA%E2%9A%AB%E2%9A%AC%E2%9A%AD%E2%9A%AE%E2%9A%AF%E2%9A%B1%E2%9A%B2%E2%9A%B3%E2%9A%B4%E2%9A%B5%E2%9A%B6%E2%9A%B7%E2%9A%B8%E2%9A%B9%E2%9A%BA%E2%9A%BB%E2%9A%BC%E2%9B%80%E2%9B%81%E2%9B%82%E2%9B%83%E2%98%94%E2%98%95%E2%98%96%E2%98%97%E2%98%98%E2%98%99%E2%98%9A%E2%98%9B%E2%98%9C%E2%98%9D%E2%98%9E%E2%98%9F%E2%98%A0%E2%98%A1%E2%98%A2%E2%98%A3%E2%98%A4%E2%98%A5%E2%98%A6%E2%98%A7%E2%98%A8%E2%98%A9%E2%98%AA%E2%98%AB%E2%98%AC%E2%98%AD%E2%98%AE%E2%98%AF%E2%98%82%E2%98%83%E2%98%84%E2%98%85%E2%98%86%E2%98%8E%E2%98%8F%E2%98%92%E2%98%93%E2%98%98%E2%98%9A%E2%98%9B%E2%98%9D%E2%98%9C%E2%98%9E%E2%98%9F%E2%98%A0%E2%9C%96%E2%9C%97%E2%9C%98%E2%9C%99%E2%9C%9A%E2%9C%9B%E2%9C%9C%E2%9C%9D%E2%9C%9E%E2%9C%9F%E2%9C%A0%E2%9C%A1%E2%9C%A2%E2%9C%A3%E2%9C%A4%E2%9C%A5%E2%9C%A6%E2%9C%A7%E2%9C%A9%E2%9C%AA%E2%9C%AB%E2%9C%AC%E2%9C%AD%E2%9C%AE%E2%9C%AF%E2%9C%B0%E2%9C%B1%E2%9C%B2%E2%9C%B3%E2%9C%B4%E2%9C%B5%E2%9C%B6%E2%9C%B7%E2%9C%B8%E2%9C%B9%E2%9C%BA%E2%9C%BB%E2%9C%BC%E2%9C%BD%E2%9C%BE%E2%9C%BF%E2%9D%80%E2%9D%81%E2%9D%82%E2%9D%83%E2%9D%84%E2%9D%85%E2%9D%86%E2%9D%87%E2%9D%88%E2%9D%89%E2%9D%8A%E2%9D%8B').split(''),
	get_icon: function(size,icon,code){
	icon = icon.split('');var e,i,j=0;for(i=0;i<icon.length;i++)try{j+=icon[i].charCodeAt();}catch(e){};icon = GU_comment_box.icons[j % GU_comment_box.icons.length];
	return ('<span @ class="'+GU_comment_box.p_PFX+'comment-icon" style="display:block;width:#px;height:#px;vertical-align:middle;text-align:center;font-size:#px;line-height:#px;font-weight:normal;">~</span>').replace(/\#/gi,size).split('~').join(icon).split('@').join(code);},
	format	: ((function(){var i = decodeURIComponent('%3Cspan%20class%3D%22%7BPFX%7Dcomment-space%20%7BTHEME-STYLE%7D%22%20lang%3D%220%22%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-iframe%22%3E%3Ciframe%20id%3D%22%7BPFX%7Dcomment_win_%7BSYS-G%7D%22%20name%3D%22%7BPFX%7Dcomment_win_%7BSYS-G%7D%22%20src%3D%22%7BSYS-URL%7D%22%3E%3C%2Fiframe%3E%3C%2Fspan%3E`%3Cspan%20class%3D%22%7BPFX%7Dcomment-form%22%3E%3Cform%20onsubmit%3D%22GU_comment_box.send(this);return false;%22%20action%3D%22%7BSYS-URL%7D%3Fcpche%22%20method%3D%22post%22%20charset%3D%22UTF-8%22%20target%3D%22%7BPFX%7Dcomment_win_%7BSYS-G%7D%22%3E%7BHEAD%7D%3Cinput%20type%3D%22hidden%22%20name%3D%22g%22 value%3D%22%7BSYS-G%7D%22%3E%3Cinput%20type%3D%22text%22%20placeholder%3D%22%7BSYS-NICK-HOLD%7D%22%20name%3D%22nick%22value%3D%22%7BSYS-NICK%7D%22%3E%3Cinput%20type%3D%22text%22%20placeholder%3D%22%7BSYS-EML-HOLD%7D%22%20name%3D%22nick_eml%22value%3D%22%7BSYS-EML%7D%22%3E%3Cinput%20type%3D%22text%22%20placeholder%3D%22%7BSYS-WEB-HOLD%7D%22%20name%3D%22nick_web%22value%3D%22%7BSYS-WEB%7D%22%3E%3Ctextarea%20name%3D%22msg%22%20placeholder%3D%22%7BSYS-TEXT-HOLD%7D%22%20%3E%3C%2Ftextarea%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-form-capcha%22%3E%7BCAPCHA%7D%3C%2Fspan%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-form-submit%22%3E%7BSUBMIT%7D%3C%2Fspan%3E%3Cinput%20type%3D%22text%22%20name%3D%22paro%22value%3D%22%7BSYS-PARO%7D%22%3E%3C%2Fform%3E%3C%2Fspan%3E`%3Cspan%20class%3D%22%7BPFX%7Dcomment-list%22%3E`%3Cspan%20class%3D%22%7BPFX%7Dcomment-box%20country-%7BFLAG%7D%22%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-head%22%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-nick%22%3E%3Cspan%20%7BNICK-ATT%7D%3C(mailto%3A%20email%40mail.com)%3E%20%3E%7BNICK-NAME%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-date%22%3E%7BDATE%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-body%22%3E%7BMESSAGE%7D%3C%2Fspan%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-foot%22%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-web%22%3E%3Ca%20href%3D%22%7BWEB-URL%7D%3C(website)%3E%22%3E%7BWEB-NAME%7D%3C%2Fa%3E%3C%2Fspan%3E%3Cspan%20class%3D%22%7BPFX%7Dcomment-box-ads%22%3E%7BADS-CODE%7D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E`%3C%2Fspan%3E`%3C%2Fspan%3E').replace(/\<\(.*?\)\>/gi,'').split('`'); return {box: i[3], p_form: i[1], p_list:i[2]+i[4], p_start: i[0], p_end:i[5]};})()),
	get_g	: function(g){
		return document.getElementById(GU_comment_box.search_key+' '+g);
	},
	check	: function(){
		// if detect Comment-box .. del Class and Add content
		var i;var c = document.getElementsByTagName('div');
		for(i=0;i<c.length;i++)if(c[i] && c[i].className)if(c[i].className == GU_comment_box.search_key){
		c[i].className = '';if(GU_comment_box.build(c[i])){
			c[i].id=GU_comment_box.search_key+' '+c[i].lang;
			GU_comment_box.load_t(c[i].lang);
			}
		}
	},
	build	: function(x){
		if(!x.lang) return false;
		var g_p = x.lang.split(' ');x.lang = g_p[0];g_p[0]='';
		var p={g:x.lang},i,s,r;
		r = {};for(i=0;i<g_p.length;i++)if(g_p[i])r[g_p[i]]=1;g_p = r;
		if(x.lang != x.lang.replace(/[^a-zA-Z0-9\-\_]/gi,'')) return false;
		p.u = GU_comment_box.root_url;p.u = p.u + '?cpche&capcha=1&capchar=1&t=';
		if('bottom' in g_p){
		s=GU_comment_box.format.p_start+GU_comment_box.format.p_list+GU_comment_box.format.p_form+GU_comment_box.format.p_end;
		} else {
		s=GU_comment_box.format.p_start+GU_comment_box.format.p_form+GU_comment_box.format.p_list+GU_comment_box.format.p_end;
		};
		r = {PFX:GU_comment_box.p_PFX,'SYS-G':p.g,'SYS-URL':GU_comment_box.root_url,'SYS-PARO':'','SYS-NICK':'','SYS-NICK-HOLD':'Имя','SYS-TEXT-HOLD':'Комментарий','SYS-WEB':'','SYS-WEB-HOLD':'www.example.com','SYS-EML':'','SYS-EML-HOLD':'your@email.com','CAPCHA':'<img src="'+p.u+''+(new Date().valueOf())+'" lang="'+p.u+'"> <input type="text" name="cpchk" value="" autocomplete = "off" placeholder="Код с картинки">','SUBMIT':'<button type="submit">Отправить</button>','HEAD':'<span class="msg" lang="Leave a comment">Оставить комментарий</span>'};
		for(i in r) s=s.split('{'+i+'}').join(r[i]);
		x.innerHTML = s;
		GU_comment_box.vars[p.g] = {
			t_msg	: false,
			root	: GU_comment_box.get_g(p.g),
			root_msg: false,
			f	: x.getElementsByTagName('form')[0],
			data_s	: GU_comment_box.root_dat+p.g+'.tmp.txt'
		};
		if('inline' in g_p){
			var i = GU_comment_box.vars[p.g].f.parentNode;
			i.className = i.className + ' ' + i.className+'-inactive';
			i.onclick = function(){	this.className = this.className.split(' ')[0];	}
		}
		try{if(user_info.nick)GU_comment_box.vars[p.g].f.nick.value = user_info.nick;}catch(i){};
		try{if(user_info.nick_eml)GU_comment_box.vars[p.g].f.nick_eml.value = user_info.nick_eml;}catch(i){};
		try{if(user_info.nick_web)GU_comment_box.vars[p.g].f.nick_web.value = user_info.nick_web;}catch(i){};
		s = x.getElementsByTagName('span');
		for(i=0;i<s.length;i++)if(s[i].className)if(s[i].className == 'msg'){
			GU_comment_box.vars[p.g].root_msg = s[i];break;		};
		s = x.getElementsByTagName('span');
		for(i=0;i<s.length;i++)if(s[i].className)if(s[i].className == GU_comment_box.p_PFX+'comment-list'){
			GU_comment_box.vars[p.g].root_list = s[i];break;	};

		return true;
	},
	
	build_m	: function(o,g,t){
		var e,b = 1,r,s;
		try{
			if(o[1] == 'file'){
				var filesize = parseInt(GU_comment_box.f_hs(o[3]).replace(/\s.*$/,''));s = filesize;
				filesize = new String(Math.floor(parseInt(filesize)*100/1024)/100)+'Kb';
				var filename = GU_comment_box.f_xs(GU_comment_box.f_hs(o[3]).replace(/^\d+\s/,''));
				var href = GU_comment_box.root_url+'?g='+encodeURIComponent(g)+'&d='+encodeURIComponent(filename)+'&i='+o[0]+'&t='+s;
				r = 'Download File: <a href="'+href+'" target="_self">'+filename+'</a> <br> File Size: '+filesize;
			} else {
				r = GU_comment_box.f_bbcod(GU_comment_box.f_xs(GU_comment_box.f_hs(o[3])));
			}
		} catch(e) {b = 0;}
		if(!b){b = 1;try{r = GU_comment_box.f_xs(GU_comment_box.f_hs(o[3]));} catch(e) { b = 0 }}
		var nick = GU_comment_box.f_xs(GU_comment_box.f_hs(o[5]));
		var numm = o[0];
		var city = GU_comment_box.f_xs(GU_comment_box.f_hs(o[6]));
		var time = GU_comment_box.f_date(o[2]);
		var r = {'NICK-ATT': ' onclick="eval(unescape(\''+escape('(function(){var e;if(GU_comment_box.vars[unescape(\''+escape(g)+'\')].f.paro.value)try{GU_comment_box.msg_del(unescape(\''+escape(g)+'\'),'+numm+')}catch(e){}})()')+'\'))" ','WEB-URL':'',FLAG: GU_comment_box.f_hs(o[4]), PFX: GU_comment_box.p_PFX,DATE: GU_comment_box.f_date(o[2]),MESSAGE:r,'NICK-NAME':nick,'ADS-CODE':'<span class="'+GU_comment_box.p_PFX+'comment-reply" lang="'+escape('[quote][b]'+nick+'[b] - '+time+'\n'+GU_comment_box.f_xs(GU_comment_box.f_hs(o[3]))+'[quote]\n')+'" onclick="GU_comment_box.reply(unescape(this.lang),unescape(\''+g+'\'))">Reply</span>'+GU_comment_box.get_icon('48',nick,' ondblclick="eval(unescape(\''+escape('(function(){var e;if(GU_comment_box.vars[unescape(\''+escape(g)+'\')].f.paro.value)try{GU_comment_box.blockU(GU_comment_box.f_hs(\''+o[8]+'\'),prompt(\'Block User for %n "days hours:minutes:seconds"\',\'0 1:0:0\'),unescape(\''+escape(g)+'\'))}catch(e){}})()')+'\'))" '),'WEB-NAME':''};
		// 	delete message
		for(e in r)t = t.split('{'+e+'}').join(r[e]);
		return t;
	},
	msg	: function(g,m){
		var e,msg = GU_comment_box.vars[g].root_msg;
		try{clearTimeout(GU_comment_box.vars[g].t_msg);}catch(e){};
		msg.innerHTML = '';
		msg.appendChild(document.createTextNode(msg.lang + ' Â» '+m));
		msg.className = 'msg alert';
		eval("t_msg = setTimeout(function(){var g = unescape('"+escape(g)+"');var msg = GU_comment_box.vars[g].root_msg;msg.className='msg';msg.innerHTML = msg.lang;},3000);");
	},
	send	: function(f){
		var g = f.g.value;
		if(f.nick.value == ''){	GU_comment_box.msg(g,'Enter NickName');f.nick.focus();	return false;	}
		if(f.msg.value == ''){	GU_comment_box.msg(g,'Enter a Comment');f.msg.focus();	return false;	}
		if(f.cpchk.value == ''){	GU_comment_box.msg(g,'Enter Code from Image');f.cpchk.focus();	return false;	}
		GU_comment_box.f_submi({cpche:1},{nick:f.nick.value,nick_eml:f.nick_eml.value,nick_web:f.nick_web.value,msg:f.msg.value,cpchk:f.cpchk.value,g:g,paro:f.paro.value,country:'__',city:f.nick_web.value},g);
		eval("setTimeout(function(){var g = unescape('"+escape(g)+"');var f = GU_comment_box.vars[g].f;f.msg.value = '';f.cpchk.value = '';var i=f.getElementsByTagName('img')[0];i.src=i.lang+new Date().valueOf();f.msg.focus();},2000)");
		eval("setTimeout(function(){var g = unescape('"+escape(g)+"');GU_comment_box.load_t(g);},3000)");
	},
	reply	: function(t,g){
		f = GU_comment_box.vars[g].f;
		f.msg.value = t;
		f.msg.focus();
	},
	msg_del	: function(g,d){
		f = GU_comment_box.vars[g].f;
		alert([g,d])
		GU_comment_box.f_submi({},{g:g,paro:f.paro.value,del:d},g);
	},
	blockU	:function(u,d,g){
	f = GU_comment_box.vars[g].f;
	var e;try{	d = d.split(/[\:\s]/);
	d = parseInt(d[0])*86400+parseInt(d[1])*3600+parseInt(d[2])*60+parseInt(d[3]);	}catch(e){d = 0};
	if(d)	GU_comment_box.f_submi({},{g:g,paro:f.paro.value,block:encodeURIComponent(u),block_time:d},g);
	},
	load_t	: function(g){
		GU_comment_box.f_js(GU_comment_box.vars[g].data_s,'GU-comment-box '+g);
	},
	vars	: {},
	
	verify	: function(){
		var l,o,j,p,e;
		try{if(!GU__minichat_data) return false;}catch(e){return false;};
		var i;for(i in GU_comment_box.vars){
			if(i in GU__minichat_data){
				l = GU_comment_box.vars[i].root_list;
				o = GU__minichat_data[i];	//GU__minichat_data[i] .. info for comment list
				for(j in o){
					p = GU_comment_box.p_PFX+'comment-box list '+i+' row '+j;

					if(document.getElementById(p)){
					
					} else {
						e = document.createElement('div');
						e.id = p;
						e.innerHTML = GU_comment_box.build_m(o[j],i,GU_comment_box.format.box);
						if(l.childNodes.length == 0){
							l.appendChild(e);
						} else {
							l.insertBefore(e,l.childNodes[0]);
						}
					}
				}
			}
		}
	}
};
GU_comment_box.f_js(GU_comment_box.root_url+'?memo=empty&cpche=1','GU-comment-box TIME');
};
setInterval(GU_comment_box.check,2700);
setInterval(GU_comment_box.verify,3000);