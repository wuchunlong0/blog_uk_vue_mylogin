var Markdown;Markdown="object"==typeof exports&&"function"==typeof require?exports:{},function(){function e(e){return e}function t(e){return!1}function n(){}function r(){}n.prototype={chain:function(t,n){var r=this[t];if(!r)throw new Error("unknown hook "+t);r===e?this[t]=n:this[t]=function(e){var t=Array.prototype.slice.call(arguments,0);return t[0]=r.apply(null,t),n.apply(null,t)}},set:function(e,t){if(!this[e])throw new Error("unknown hook "+e);this[e]=t},addNoop:function(t){this[t]=e},addFalse:function(e){this[e]=t}},Markdown.HookCollection=n,r.prototype={set:function(e,t){this["s_"+e]=t},get:function(e){return this["s_"+e]}},Markdown.Converter=function(){function e(e){return e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(e,t,n,r,o,i){return t=t.toLowerCase(),R.set(t,C(n)),o?r:(i&&_.set(t,i.replace(/"/g,"&quot;")),"")})}function t(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,o),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,o),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,o),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,o),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,o)}function o(e,t){var n=t;return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(K.push(n)-1)+"K\n\n"}function i(e,n){e=I.preBlockGamut(e,D),e=f(e);var r="<hr />\n";return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,r),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,r),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,r),e=g(e),e=m(e),e=T(e),e=I.postBlockGamut(e,D),e=t(e),e=x(e,n)}function a(e){return e=I.preSpanGamut(e),e=w(e),e=l(e),e=y(e),e=u(e),e=c(e),e=E(e),e=e.replace(/~P/g,"://"),e=C(e),e=k(e),e=e.replace(/  +\n/g," <br>\n"),e=I.postSpanGamut(e)}function l(e){var t=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(t,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=H(t,"!"==e.charAt(1)?"\\`*_/":"\\`*_")})}function c(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,s),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,s)}function s(e,t,n,r,o,i,a,l){void 0==l&&(l="");var c=t,s=n.replace(/:\/\//g,"~P"),u=r.toLowerCase(),p=o,f=l;if(""==p)if(""==u&&(u=s.toLowerCase().replace(/ ?\n/g," ")),p="#"+u,void 0!=R.get(u))p=R.get(u),void 0!=_.get(u)&&(f=_.get(u));else{if(!(c.search(/\(\s*\)$/m)>-1))return c;p=""}p=M(p),p=H(p,"*_");var g='<a href="'+p+'"';return""!=f&&(f=d(f),f=H(f,"*_"),g+=' title="'+f+'"'),g+=">"+s+"</a>"}function u(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,p),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,p)}function d(e){return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function p(e,t,n,r,o,i,a,l){var c=t,s=n,u=r.toLowerCase(),p=o,f=l;if(f||(f=""),""==p){if(""==u&&(u=s.toLowerCase().replace(/ ?\n/g," ")),p="#"+u,void 0==R.get(u))return c;p=R.get(u),void 0!=_.get(u)&&(f=_.get(u))}s=H(d(s),"*_[]()"),p=H(p,"*_");var g='<img src="'+p+'" alt="'+s+'"';return f=d(f),f=H(f,"*_"),g+=' title="'+f+'"',g+=" />"}function f(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,t){return"<h1>"+a(t)+"</h1>\n\n"}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,t){return"<h2>"+a(t)+"</h2>\n\n"}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,t,n){var r=t.length;return"<h"+r+">"+a(n)+"</h"+r+">\n\n"})}function g(e){e+="~0";var t=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return N?e=e.replace(t,function(e,t,n){var r=t,o=n.search(/[*+-]/g)>-1?"ul":"ol",i=h(r,o);return i=i.replace(/\s+$/,""),i="<"+o+">"+i+"</"+o+">\n"}):(t=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(t,function(e,t,n,r){var o=t,i=n,a=r.search(/[*+-]/g)>-1?"ul":"ol",l=h(i,a);return l=o+"<"+a+">\n"+l+"</"+a+">\n"})),e=e.replace(/~0/,"")}function h(e,t){N++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var n=A[t],r=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),o=!1;return e=e.replace(r,function(e,t,n,r){var l=r,c=/\n\n$/.test(l),s=c||l.search(/\n{2,}/)>-1;return s||o?l=i(L(l),!0):(l=g(L(l)),l=l.replace(/\n$/,""),l=a(l)),o=c,"<li>"+l+"</li>\n"}),e=e.replace(/~0/g,""),N--,e}function m(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,n){var r=t,o=n;return r=b(L(r)),r=B(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>","\n\n"+r+"\n\n"+o}),e=e.replace(/~0/,"")}function v(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(K.push(e)-1)+"K\n\n"}function w(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,t,n,r,o){var i=r;return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=b(i),i=i.replace(/:\/\//g,"~P"),t+"<code>"+i+"</code>"})}function b(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=H(e,"*_{}[]\\",!1)}function k(e){return e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),e=e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function T(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var n=t;return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=i(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var n=t;return n=n.replace(/^  /gm,"~0"),n=n.replace(/~0/g,"")}),v("<blockquote>\n"+n+"\n</blockquote>")})}function x(e,t){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),r=[],o=/~K(\d+)K/,i=n.length,l=0;l<i;l++){var c=n[l];o.test(c)?r.push(c):/\S/.test(c)&&(c=a(c),c=c.replace(/^([ \t]*)/g,"<p>"),c+="</p>",r.push(c))}if(!t){i=r.length;for(var l=0;l<i;l++)for(var s=!0;s;)s=!1,r[l]=r[l].replace(/~K(\d+)K/g,function(e,t){return s=!0,K[t]})}return r.join("\n\n")}function C(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function y(e){return e=e.replace(/\\(\\)/g,q),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,q)}function $(e,t,n,r){if(t)return e;if(")"!==r.charAt(r.length-1))return"<"+n+r+">";for(var o=r.match(/[()]/g),i=0,a=0;a<o.length;a++)"("===o[a]?i<=0?i=1:i++:i--;var l="";if(i<0){var c=new RegExp("\\){1,"+-i+"}$");r=r.replace(c,function(e){return l=e,""})}return"<"+n+r+">"+l}function E(e){e=e.replace(/(="|<)?\b(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\])])(?=$|\W)/gi,$);var t=function(e,t){return'<a href="'+t+'">'+I.plainLinkText(t)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,t)}function S(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var n=parseInt(t);return String.fromCharCode(n)})}function L(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}function B(e){if(!/\t/.test(e))return e;var t,n=["    ","   ","  "," "],r=0;return e.replace(/[\n\t]/g,function(e,o){return"\n"===e?(r=o+1,e):(t=(o-r)%4,r=o+1,n[t])})}function M(e){if(!e)return"";var t=e.length;return e.replace(z,function(n,r){return"~D"==n?"%24":":"!=n||r!=t-1&&!/[0-9\/]/.test(e.charAt(r+1))?"%"+n.charCodeAt(0).toString(16):":"})}function H(e,t,n){var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(r="\\\\"+r);var o=new RegExp(r,"g");return e=e.replace(o,q)}function q(e,t){var n=t.charCodeAt(0);return"~E"+n+"E"}var I=this.hooks=new n;I.addNoop("plainLinkText"),I.addNoop("preConversion"),I.addNoop("postNormalization"),I.addNoop("preBlockGamut"),I.addNoop("postBlockGamut"),I.addNoop("preSpanGamut"),I.addNoop("postSpanGamut"),I.addNoop("postConversion");var R,_,K,N;this.makeHtml=function(n){if(R)throw new Error("Recursive call to converter.makeHtml");return R=new r,_=new r,K=[],N=0,n=I.preConversion(n),n=n.replace(/~/g,"~T"),n=n.replace(/\$/g,"~D"),n=n.replace(/\r\n/g,"\n"),n=n.replace(/\r/g,"\n"),n="\n\n"+n+"\n\n",n=B(n),n=n.replace(/^[ \t]+$/gm,""),n=I.postNormalization(n),n=t(n),n=e(n),n=i(n),n=S(n),n=n.replace(/~D/g,"$$"),n=n.replace(/~T/g,"~"),n=I.postConversion(n),K=_=R=null,n};var D=function(e){return i(e)},A={ol:"\\d+[.]",ul:"[*+-]"},z=/(?:["'*()[\]:]|~D)/g}}(),function(){function e(e){return e.replace(/<[^>]*>?/gi,t)}function t(e){return e.match(i)||e.match(a)||e.match(l)?e:""}function n(e){if(""==e)return"";var t=/<\/?\w+[^>]*(\s|$|>)/g,n=e.toLowerCase().match(t),r=(n||[]).length;if(0==r)return e;for(var o,i,a,l="<p><img><br><li><hr>",c=[],s=[],u=!1,d=0;d<r;d++)if(o=n[d].replace(/<\/?(\w+).*/,"$1"),!(c[d]||l.search("<"+o+">")>-1)){if(i=n[d],a=-1,!/^<\//.test(i))for(var p=d+1;p<r;p++)if(!c[p]&&n[p]=="</"+o+">"){a=p;break}a==-1?u=s[d]=!0:c[a]=!0}if(!u)return e;var d=0;return e=e.replace(t,function(e){var t=s[d]?"":e;return d++,t})}var r,o;"object"==typeof exports&&"function"==typeof require?(r=exports,o=require("./Markdown.Converter").Converter):(r=window.Markdown,o=r.Converter),r.getSanitizingConverter=function(){var t=new o;return t.hooks.chain("postConversion",e),t.hooks.chain("postConversion",n),t};var i=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,a=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,l=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i}(),function(){function e(){}function t(e,t){var r,o,i,a=this,l=[],c=0,s="none",u=function(e,t){s!=e&&(s=e,t||p()),"moving"!=s?o=setTimeout(d,1):i=null},d=function(e){i=new n(t,e),o=void 0};this.setCommandMode=function(){s="command",p(),o=setTimeout(d,0)},this.canUndo=function(){return c>1},this.canRedo=function(){return l[c+1]},this.undo=function(){a.canUndo()&&(r?(r.restore(),r=null):(l[c]=new n(t),l[--c].restore(),e&&e())),s="none",t.input.focus(),d()},this.redo=function(){a.canRedo()&&(l[++c].restore(),e&&e()),s="none",t.input.focus(),d()};var p=function(){var o=i||new n(t);return!!o&&("moving"==s?void(r||(r=o)):(r&&(l[c-1].text!=r.text&&(l[c++]=r),r=null),l[c++]=o,l[c+1]=null,void(e&&e())))},f=function(e){var t=!1;if((e.ctrlKey||e.metaKey)&&!e.altKey){var n=e.keyCode,r=String.fromCharCode(n);switch(r.toLowerCase()){case"y":a.redo(),t=!0;break;case"z":e.shiftKey?a.redo():a.undo(),t=!0}}if(t)return e.preventDefault&&e.preventDefault(),void(window.event&&(window.event.returnValue=!1))},h=function(e){if(!e.ctrlKey&&!e.metaKey){var t=e.keyCode;t>=33&&t<=40||t>=63232&&t<=63235?u("moving"):8==t||46==t||127==t?u("deleting"):13==t?u("newlines"):27==t?u("escape"):(t<16||t>20)&&91!=t&&u("typing")}},m=function(){g.addEvent(t.input,"keypress",function(e){!e.ctrlKey&&!e.metaKey||e.altKey||89!=e.keyCode&&90!=e.keyCode||e.preventDefault()});var e=function(){i&&i.text!=t.input.value&&void 0==o&&(s="paste",p(),d())};g.addEvent(t.input,"keydown",f),g.addEvent(t.input,"keydown",h),g.addEvent(t.input,"mousedown",function(){u("moving")}),t.input.onpaste=e,t.input.ondrop=e},v=function(){m(),d(!0),p()};v()}function n(t,n){var r=this,o=t.input;this.init=function(){!g.isVisible(o)||!n&&l.activeElement&&l.activeElement!==o||(this.setInputAreaSelectionStartEnd(),this.scrollTop=o.scrollTop,(!this.text&&o.selectionStart||0===o.selectionStart)&&(this.text=o.value))},this.setInputAreaSelection=function(){g.isVisible(o)&&(o.focus(),o.setSelectionRange(r.start,r.end),o.scrollTop=r.scrollTop)},this.setInputAreaSelectionStartEnd=function(){r.start=o.selectionStart,r.end=o.selectionEnd},this.restore=function(){void 0!=r.text&&r.text!=o.value&&(o.value=r.text),this.setInputAreaSelection(),o.scrollTop=r.scrollTop},this.getChunks=function(){var t=new e;return t.before=g.fixEolChars(r.text.substring(0,r.start)),t.startTag="",t.selection=g.fixEolChars(r.text.substring(r.start,r.end)),t.endTag="",t.after=g.fixEolChars(r.text.substring(r.end)),t.scrollTop=r.scrollTop,t},this.setChunks=function(e){e.before=e.before+e.startTag,e.after=e.endTag+e.after,this.start=e.before.length,this.end=e.before.length+e.selection.length,this.text=e.before+e.selection+e.after,this.scrollTop=e.scrollTop},this.init()}function r(e,t,n){var r,o,i,a=3e3,c="delayed",s=function(e,t){g.addEvent(e,"input",t),e.onpaste=t,e.ondrop=t,g.addEvent(e,"keypress",t),g.addEvent(e,"keydown",t)},u=function(){var e=0;return window.innerHeight?e=window.pageYOffset:l.documentElement&&l.documentElement.scrollTop?e=l.documentElement.scrollTop:l.body&&(e=l.body.scrollTop),e},d=function(){if(t.preview){var n=t.input.value;if(!n||n!=i){i=n;var r=(new Date).getTime();n=e.makeHtml(n),o=(new Date).getTime()-r,v(n)}}},p=function(){if(r&&(clearTimeout(r),r=void 0),"manual"!==c){var e=0;"delayed"===c&&(e=o),e>a&&(e=a),r=setTimeout(d,e)}},f=function(){t.preview&&(t.preview.scrollTop=t.preview.scrollHeight)};this.refresh=function(e){e?(i="",d()):p()},this.processingTime=function(){return o};var m=!0,v=function(e){var r=h.getTop(t.input)-u();if(t.preview&&(t.preview.innerHTML=e,n()),f(),m)return void(m=!1);var o=h.getTop(t.input)-u();window.scrollBy(0,o-r)};s(t.input,p),d(),t.preview&&(t.preview.scrollTop=0)}function o(e,t,r,o,i,a,l){function c(e){if(h.focus(),e.textOp){r&&r.setCommandMode();var i=new n(t);if(!i)return;var a=i.getChunks(),l=function(){h.focus(),a&&i.setChunks(a),i.restore(),o.refresh()},c=e.textOp(a,l);c||l()}e.execute&&e.execute(r)}function u(e,t){var n="0px",r="-20px",o="-40px",i=e.getElementsByTagName("span")[0];t?(i.style.backgroundPosition=e.XShift+" "+n,e.onmouseover=function(){i.style.backgroundPosition=this.XShift+" "+o},e.onmouseout=function(){i.style.backgroundPosition=this.XShift+" "+n},e.isHelp||(e.onclick=function(){return this.onmouseout&&this.onmouseout(),c(this),!1})):(i.style.backgroundPosition=e.XShift+" "+r,e.onmouseover=e.onmouseout=e.onclick=function(){})}function d(e){return"string"==typeof e&&(e=i[e]),function(){e.apply(i,arguments)}}function p(){var n=t.buttonBar,r=document.createElement("ul");r.id="wmd-button-row"+e,r.className="wmd-button-row",r=n.appendChild(r);var o=0,i=function(t,n,i,a){var l=document.createElement("li");l.className="wmd-button "+t,l.style.left=o+"px",o+=25;var c=document.createElement("span");return l.id=t+e,l.appendChild(c),l.title=n,l.XShift=i,a&&(l.textOp=a),u(l,!0),r.appendChild(l),l},c=function(t){var n=document.createElement("li");n.className="wmd-spacer wmd-spacer"+t,n.id="wmd-spacer"+t+e,r.appendChild(n),o+=25};m.bold=i("wmd-bold-button",l("bold"),"0px",d("doBold")),m.italic=i("wmd-italic-button",l("italic"),"-20px",d("doItalic")),c(1),m.link=i("wmd-link-button",l("link"),"-40px",d(function(e,t){return this.doLinkOrImage(e,t,!1)})),m.quote=i("wmd-quote-button",l("quote"),"-60px",d("doBlockquote")),m.code=i("wmd-code-button",l("code"),"-80px",d("doCode")),m.image=i("wmd-image-button",l("image"),"-100px",d(function(e,t){return this.doLinkOrImage(e,t,!0)})),c(2),m.olist=i("wmd-olist-button",l("olist"),"-120px",d(function(e,t){this.doList(e,t,!0)})),m.ulist=i("wmd-ulist-button",l("ulist"),"-140px",d(function(e,t){this.doList(e,t,!1)})),m.heading=i("wmd-heading-button",l("heading"),"-160px",d("doHeading")),m.hr=i("wmd-hr-button",l("hr"),"-180px",d("doHorizontalRule")),c(3),m.undo=i("wmd-undo-button",l("undo"),"-200px",null),m.undo.execute=function(e){e&&e.undo()};var p=l(/win/.test(s.platform.toLowerCase())?"redo":"redomac");if(m.redo=i("wmd-redo-button",p,"-220px",null),m.redo.execute=function(e){e&&e.redo()},c(4),a){var g=document.createElement("li"),h=document.createElement("span");g.appendChild(h),g.className="wmd-button wmd-help-button",g.id="wmd-help-button"+e,g.XShift="-300px",g.isHelp=!0,g.style.left="375px",g.title=l("help"),g.onclick=a.handler,u(g,!0),r.appendChild(g),m.help=g}m.previewmode=i("wmd-previewmode-button",l("previewmode"),"-360px"),m.livemode=i("wmd-livemode-button",l("livemode"),"-340px"),m.editmode=i("wmd-editmode-button",l("editmode"),"-320px"),c(5),m.fullscreen=i("wmd-fullscreen-button",l("fullscreen"),"-240px"),f()}function f(){r&&(u(m.undo,r.canUndo()),u(m.redo,r.canRedo()))}var h=t.input,m={};p();var v="keydown";g.addEvent(h,v,function(e){if((e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey){var t=e.keyCode,n=String.fromCharCode(t).toLowerCase();switch(n){case"b":c(m.bold);break;case"i":c(m.italic);break;case"l":c(m.link);break;case"q":c(m.quote);break;case"k":c(m.code);break;case"g":c(m.image);break;case"o":c(m.olist);break;case"u":c(m.ulist);break;case"h":c(m.heading);break;case"r":c(m.hr);break;case"y":c(m.redo);break;case"z":c(e.shiftKey?m.redo:m.undo);break;default:return}e.preventDefault&&e.preventDefault(),window.event&&(window.event.returnValue=!1)}}),g.addEvent(h,"keyup",function(e){if(e.shiftKey&&!e.ctrlKey&&!e.metaKey){var t=e.keyCode;if(13===t){var n={};n.textOp=d("doAutoindent"),c(n)}}}),this.setUndoRedoButtonStates=f}function i(e,t,n){this.hooks=e,this.getString=t,this.converter=n}function a(e){return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(e,t,n){var r=!1;return t=t.replace(/%(?:[\da-fA-F]{2})|\?|\+|[^\w\d-.\/[\]]/g,function(e){if(3===e.length&&"%"==e.charAt(0))return e.toUpperCase();switch(e){case"?":return r=!0,"?";case"+":if(r)return"%20"}return encodeURI(e)}),n&&(n=n.trim?n.trim():n.replace(/^\s*/,"").replace(/\s*$/,""),n=n.replace(/"/g,"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),n?t+' "'+n+'"':t})}var l=window.document,c=window.RegExp,s=window.navigator,u={lineLength:72},d={bold:"Strong <strong> Ctrl+B",boldexample:"strong text",italic:"Emphasis <em> Ctrl+I",italicexample:"emphasized text",link:"Hyperlink <a> Ctrl+L",linkdescription:"enter link description here",linkdialog:'<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',quote:"Blockquote <blockquote> Ctrl+Q",quoteexample:"Blockquote",code:"Code Sample <pre><code> Ctrl+K",codeexample:"enter code here",image:"Image <img> Ctrl+G",imagedescription:"enter image description here",imagedialog:"<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",olist:"Numbered List <ol> Ctrl+O",ulist:"Bulleted List <ul> Ctrl+U",litem:"List item",heading:"Heading <h1>/<h2> Ctrl+H",headingexample:"Heading",hr:"Horizontal Rule <hr> Ctrl+R",undo:"Undo - Ctrl+Z",redo:"Redo - Ctrl+Y",redomac:"Redo - Ctrl+Shift+Z",help:"Markdown Editing Help",fullscreen:"Full Screen",editmode:"Editing Mode",livemode:"Living Mode",previewmode:"Previewing Mode"},p="http://",f="http://";Markdown.Editor=function(e,n,a){var c,s=this,u=this.hooks=new Markdown.HookCollection,p=function(e){return a.strings[e]||d[e]};a=a||{},a.strings=a.strings||{},n=n||"",u.addNoop("onPreviewRefresh"),u.addNoop("postBlockquoteCreation"),u.addFalse("insertImageDialog"),this.getConverter=function(){return e},this.run=function(){function d(e){this.buttonBar=l.getElementById("wmd-button-bar"+e),this.preview=l.getElementById("wmd-preview"+e),this.input=l.getElementById("wmd-input"+e)}if(!c){c=new d(n);var f,g,h=new i(u,p,e),m=new r(e,c,function(){u.onPreviewRefresh()});/\?noundo/.test(l.location.href)||(f=new t(function(){m.refresh(),g&&g.setUndoRedoButtonStates()},c),this.textOperation=function(e){f.setCommandMode(),e(),s.refreshPreview()}),g=new o(n,c,f,m,h,a.helpButton,p),g.setUndoRedoButtonStates();var v=s.refreshPreview=function(){m.refresh(!0)};v()}}};var g={isVisible:function(e){return"none"!==window.getComputedStyle(e,null).getPropertyValue("display")},addEvent:function(e,t,n){e.addEventListener(t,n,!1)},removeEvent:function(e,t,n){e.removeEventListener(t,n,!1)},fixEolChars:function(e){return e=e.replace(/\r\n?/g,"\n")},extendRegExp:function(e,t,n){t=null===t||void 0===t?"":t,n=null===n||void 0===n?"":n;var r,o=e.toString();return o=o.replace(/\/([gim]*)$/,function(e,t){return r=t,""}),o=o.replace(/(^\/|\/$)/g,""),o=t+o+n,new c(o,r)}},h={getTop:function(e){return e.getBoundingClientRect().top+document.documentElement.scrollTop},getHeight:function(e){return e.offsetHeight||e.scrollHeight},getWidth:function(e){return e.offsetWidth||e.scrollWidth},getPageSize:function(){var e,t,n,r;l.body.scrollHeight>l.body.offsetHeight?(e=l.body.scrollWidth,t=l.body.scrollHeight):(e=l.body.offsetWidth,t=l.body.offsetHeight),n=self.innerWidth,r=self.innerHeight;var o=Math.max(e,n),i=Math.max(t,r);return[o,i,n,r]}},m={createBackground:function(){var e=l.body.appendChild(l.createElement("div"));h.getPageSize()[1]+"px";return e.className="wmd-prompt-background",e},prompt:function(e,t,n){var r,o;t=void 0===t?"":t;var i=function(e){var t=e.keyCode;if(27===t)return e.stopPropagation&&e.stopPropagation(),a(!0),!1},a=function(e){g.removeEvent(l.body,"keyup",i);var t=o.value;return e?t=null:(t=t.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(t)||(t="http://"+t)),r.parentNode.removeChild(r),n(t),!1},c=function(){r=l.body.appendChild(l.createElement("div")),r.className="wmd-prompt-dialog";var n=r.appendChild(l.createElement("div"));n.innerHTML=e;var c=r.appendChild(l.createElement("form"));c.style;c.onsubmit=function(){return a(!1)},o=c.appendChild(l.createElement("input")),o.type="text",o.value=t;var s=c.appendChild(l.createElement("button"));s.onclick=function(){return a(!1)},s.innerHTML="确认";var u=c.appendChild(l.createElement("button"));u.onclick=function(){return a(!0)},u.innerHTML="取消",g.addEvent(l.body,"keyup",i)};c(),setTimeout(function(){var e=t.length;if(void 0!==o.selectionStart)o.selectionStart=0,o.selectionEnd=e,o.focus();else if(o.createTextRange){var n=o.createTextRange();n.collapse(!1),n.moveStart("character",-e),n.moveEnd("character",e),n.select()}},0)}};e.prototype.findTags=function(e,t){var n,r=this;e&&(n=g.extendRegExp(e,"","$"),this.before=this.before.replace(n,function(e){return r.startTag=r.startTag+e,""}),n=g.extendRegExp(e,"^",""),this.selection=this.selection.replace(n,function(e){return r.startTag=r.startTag+e,""})),t&&(n=g.extendRegExp(t,"","$"),this.selection=this.selection.replace(n,function(e){return r.endTag=e+r.endTag,""}),n=g.extendRegExp(t,"^",""),this.after=this.after.replace(n,function(e){return r.endTag=e+r.endTag,""}))},e.prototype.trimWhitespace=function(e){var t,n,r=this;e?t=n="":(t=function(e){return r.before+=e,""},n=function(e){return r.after=e+r.after,""}),this.selection=this.selection.replace(/^(\s*)/,t).replace(/(\s*)$/,n)},e.prototype.skipLines=function(e,t,n){e=(void 0===e?1:e)+1,t=(void 0===t?1:t)+1;var r,o;if(this.selection=this.selection.replace(/(^\n*)/,""),this.startTag=this.startTag+c.$1,this.selection=this.selection.replace(/(\n*$)/,""),this.endTag=this.endTag+c.$1,this.startTag=this.startTag.replace(/(^\n*)/,""),this.before=this.before+c.$1,this.endTag=this.endTag.replace(/(\n*$)/,""),this.after=this.after+c.$1,this.before){for(r=o="";e--;)r+="\\n?",o+="\n";n&&(r="\\n*"),this.before=this.before.replace(new c(r+"$",""),o)}if(this.after){for(r=o="";t--;)r+="\\n?",o+="\n";n&&(r="\\n*"),this.after=this.after.replace(new c(r,""),o)}};var v=i.prototype;v.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",v.unwrap=function(e){var t=new c("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");e.selection=e.selection.replace(t,"$1 $2")},v.wrap=function(e,t){this.unwrap(e);var n=new c("(.{1,"+t+"})( +|$\\n?)","gm"),r=this;e.selection=e.selection.replace(n,function(e,t){return new c("^"+r.prefixes,"").test(e)?e:t+"\n"}),e.selection=e.selection.replace(/\s+$/,"")},v.doBold=function(e,t){return this.doBorI(e,t,2,this.getString("boldexample"))},v.doItalic=function(e,t){return this.doBorI(e,t,1,this.getString("italicexample"))},v.doBorI=function(e,t,n,r){e.trimWhitespace(),e.selection=e.selection.replace(/\n{2,}/g,"\n");var o=/(\**$)/.exec(e.before)[0],i=/(^\**)/.exec(e.after)[0],a=Math.min(o.length,i.length);if(a>=n&&(2!=a||1!=n))e.before=e.before.replace(c("[*]{"+n+"}$",""),""),e.after=e.after.replace(c("^[*]{"+n+"}",""),"");else if(!e.selection&&i){e.after=e.after.replace(/^([*_]*)/,""),e.before=e.before.replace(/(\s?)$/,"");var l=c.$1;e.before=e.before+i+l}else{e.selection||i||(e.selection=r);var s=n<=1?"*":"**";e.before=e.before+s,e.after=s+e.after}},v.stripLinkDefs=function(e,t){return e=e.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(e,n,r,o,i){return t[n]=e.replace(/\s*$/,""),o?(t[n]=e.replace(/["(](.+?)[")]$/,""),o+i):""})},v.addLinkDef=function(e,t){var n=0,r={};e.before=this.stripLinkDefs(e.before,r),e.selection=this.stripLinkDefs(e.selection,r),e.after=this.stripLinkDefs(e.after,r);for(var o="",i=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,a=e.before+e.selection+e.after,l=this.converter.makeHtml(a),c="http://this-is-a-real-link.biz/";l.indexOf(c)!=-1;)c+="nicetry/";var s="\n\n",u=0,d=a.replace(i,function v(e,t,n,r,o,a,l){u+=l,s+=" ["+u+"]: "+c+u+"/unicorn\n",u+=t.length,n=n.replace(i,v),u-=t.length;var d=t+n+r+u+a;return u-=l,d});l=this.converter.makeHtml(d+s);var p=function(e){return l.indexOf(c+e+"/unicorn")!==-1},f=function(e){n++,e=e.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+n+"]:"),o+="\n"+e},g=function(e,t,o,a,l,c,s){return p(u+s)?(u+=s+t.length,o=o.replace(i,g),u-=s+t.length,r[l]?(f(r[l]),t+o+a+n+c):e):e},h=e.before.length;e.before=e.before.replace(i,g),u+=h,h=e.selection.length,t?f(t):e.selection=e.selection.replace(i,g),u+=h;var m=n;return e.after=e.after.replace(i,g),e.after&&(e.after=e.after.replace(/\n*$/,"")),e.after||(e.selection=e.selection.replace(/\n*$/,"")),e.after+="\n\n"+o,m},v.doLinkOrImage=function(e,t,n){e.trimWhitespace(),e.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var r;if(!(e.endTag.length>1&&e.startTag.length>0)){if(e.selection=e.startTag+e.selection+e.endTag,e.startTag=e.endTag="",/\n\n/.test(e.selection))return void this.addLinkDef(e,null);var o=this,i=function(i){if(r.parentNode.removeChild(r),null!==i){e.selection=(" "+e.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1);var l=" [999]: "+a(i),c=o.addLinkDef(e,l);e.startTag=n?"![":"[",e.endTag="]["+c+"]",e.selection||(n?e.selection=o.getString("imagedescription"):e.selection=o.getString("linkdescription"))}t()};return r=m.createBackground(),n?this.hooks.insertImageDialog(i)||m.prompt(this.getString("imagedialog"),p,i):m.prompt(this.getString("linkdialog"),f,i),!0}e.startTag=e.startTag.replace(/!?\[/,""),e.endTag="",this.addLinkDef(e,null)},v.doAutoindent=function(e,t){var n=this,r=!1;e.before=e.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n"),e.before=e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n"),e.before=e.before.replace(/(\n|^)[ \t]+\n$/,"\n\n"),e.selection||/^[ \t]*(?:\n|$)/.test(e.after)||(e.after=e.after.replace(/^[^\n]*/,function(t){return e.selection=t,""}),r=!0),/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before)&&n.doList&&n.doList(e),/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before)&&n.doBlockquote&&n.doBlockquote(e),/(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before)&&n.doCode&&n.doCode(e),r&&(e.after=e.selection+e.after,e.selection="")},v.doBlockquote=function(e,t){e.selection=e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(t,n,r,o){return e.before+=n,e.after=o+e.after,r}),e.before=e.before.replace(/(>[ \t]*)$/,function(t,n){return e.selection=n+e.selection,""}),e.selection=e.selection.replace(/^(\s|>)+$/,""),e.selection=e.selection||this.getString("quoteexample");var n,r="",o="";if(e.before){for(var i=e.before.replace(/\n$/,"").split("\n"),a=!1,l=0;l<i.length;l++){var c=!1;n=i[l],a=a&&n.length>0,/^>/.test(n)?(c=!0,!a&&n.length>1&&(a=!0)):c=!!/^[ \t]*$/.test(n)||a,c?r+=n+"\n":(o+=r+n,r="\n")}/(^|\n)>/.test(r)||(o+=r,r="")}e.startTag=r,e.before=o,e.after&&(e.after=e.after.replace(/^\n?/,"\n")),e.after=e.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(t){return e.endTag=t,""});var s=function(t){var n=t?"> ":"";e.startTag&&(e.startTag=e.startTag.replace(/\n((>|\s)*)\n$/,function(e,t){return"\n"+t.replace(/^[ ]{0,3}>?[ \t]*$/gm,n)+"\n"})),e.endTag&&(e.endTag=e.endTag.replace(/^\n((>|\s)*)\n/,function(e,t){return"\n"+t.replace(/^[ ]{0,3}>?[ \t]*$/gm,n)+"\n"}))};/^(?![ ]{0,3}>)/m.test(e.selection)?(this.wrap(e,u.lineLength-2),e.selection=e.selection.replace(/^/gm,"> "),s(!0),e.skipLines()):(e.selection=e.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(e),s(!1),!/^(\n|^)[ ]{0,3}>/.test(e.selection)&&e.startTag&&(e.startTag=e.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(e.selection)&&e.endTag&&(e.endTag=e.endTag.replace(/^\n{0,2}/,"\n\n"))),e.selection=this.hooks.postBlockquoteCreation(e.selection),/\n/.test(e.selection)||(e.selection=e.selection.replace(/^(> *)/,function(t,n){return e.startTag+=n,""}))},v.doCode=function(e,t){var n=/\S[ ]*$/.test(e.before),r=/^[ ]*\S/.test(e.after);if(!r&&!n||/\n/.test(e.selection)){e.before=e.before.replace(/[ ]{4}$/,function(t){return e.selection=t+e.selection,""});var o=1,i=1;/(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before)&&(o=0),/^\n(\t|[ ]{4,})/.test(e.after)&&(i=0),e.skipLines(o,i),e.selection?/^[ ]{0,3}\S/m.test(e.selection)?/\n/.test(e.selection)?e.selection=e.selection.replace(/^/gm,"    "):e.before+="    ":e.selection=e.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm,""):(e.startTag="    ",e.selection=this.getString("codeexample"))}else e.trimWhitespace(),e.findTags(/`/,/`/),e.startTag||e.endTag?e.endTag&&!e.startTag?(e.before+=e.endTag,e.endTag=""):e.startTag=e.endTag="":(e.startTag=e.endTag="`",e.selection||(e.selection=this.getString("codeexample")))},v.doList=function(e,t,n){var r=/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,o=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,i="-",a=1,l=function(){var e;return n?(e=" "+a+". ",a++):e=" "+i+" ",e},s=function(e){return void 0===n&&(n=/^\s*\d/.test(e)),e=e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(e){return l()})};if(e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null),!e.before||/\n$/.test(e.before)||/^\n/.test(e.startTag)||(e.before+=e.startTag,e.startTag=""),e.startTag){var d=/\d+[.]/.test(e.startTag);if(e.startTag="",e.selection=e.selection.replace(/\n[ ]{4}/g,"\n"),this.unwrap(e),e.skipLines(),d&&(e.after=e.after.replace(o,s)),n==d)return}var p=1;e.before=e.before.replace(r,function(e){return/^\s*([*+-])/.test(e)&&(i=c.$1),p=/[^\n]\n\n[^\n]/.test(e)?1:0,s(e)}),e.selection||(e.selection=this.getString("litem"));var f=l(),g=1;e.after=e.after.replace(o,function(e){return g=/[^\n]\n\n[^\n]/.test(e)?1:0,s(e)}),e.trimWhitespace(!0),e.skipLines(p,g,!0),e.startTag=f;var h=f.replace(/./g," ");this.wrap(e,u.lineLength-h.length),e.selection=e.selection.replace(/\n/g,"\n"+h)},v.doHeading=function(e,t){if(e.selection=e.selection.replace(/\s+/g," "),e.selection=e.selection.replace(/(^\s+|\s+$)/g,""),!e.selection)return e.startTag="## ",e.selection=this.getString("headingexample"),void(e.endTag=" ##");var n=0;e.findTags(/#+[ ]*/,/[ ]*#+/),/#+/.test(e.startTag)&&(n=c.lastMatch.length),e.startTag=e.endTag="",e.findTags(null,/\s?(-+|=+)/),/=+/.test(e.endTag)&&(n=1),/-+/.test(e.endTag)&&(n=2),e.startTag=e.endTag="",e.skipLines(1,1);var r=0==n?2:n-1;if(r>0){var o=r>=2?"-":"=",i=e.selection.length;for(i>u.lineLength&&(i=u.lineLength),e.endTag="\n";i--;)e.endTag+=o}},v.doHorizontalRule=function(e,t){e.startTag="----------\n",e.selection="",e.skipLines(2,1,!0)}}(),function(){"use strict";var e,t=this,n=new Markdown.Converter,r={helpButton:{title:"Markdown 语法",handler:function(){alert("详查 Markdown 语法")}},strings:{bold:"加粗 <strong> Ctrl+B",boldexample:"加粗文字",
italic:"斜体 <em> Ctrl+I",italicexample:"斜体文字",link:"链接 <a> Ctrl+L",linkdescription:"这里输入链接描述",linkdialog:"插入链接",quote:"引用 <blockquote> Ctrl+Q",quoteexample:"引用文字",code:"代码 <pre><code> Ctrl+K",codeexample:"请输入代码",image:"图片 <img> Ctrl+G",imagedescription:"这里输入图片描述",imagedialog:"<h2>插入图片</h2><hr>",olist:"有序列表 <ol> Ctrl+O",ulist:"普通列表 <ul> Ctrl+U",litem:"列表项目",heading:"标题 <h1>/<h2> Ctrl+H",headingexample:"标题文字",hr:"分割线 <hr> Ctrl+R",undo:"撤销 - Ctrl+Z",redo:"重做 - Ctrl+Y",redomac:"重做 - Ctrl+Shift+Z",help:"Markdown 语法",fullscreen:"全屏",editmode:"编辑模式",livemode:"实时模式",previewmode:"预览模式"}},o="demo",i=function(t,i,a){if(t){var l=document.getElementById(t);l&&(i=i||o,a=a||r,l.setAttribute("class","mded editMode"),l.innerHTML='<div class="mded-toolbar" id="wmd-button-bar-'+i+'"></div><div class="wmd"><textarea class="wmd-input" id="wmd-input-'+i+'"></textarea><div class="wmd-preview"><div class="wmd-preview-cont" id="wmd-preview-'+i+'"></div></div></div><div class="mded-resize">调整高度</div>',e=new Markdown.Editor(n,"-"+i,a),e.run(),document.getElementById("wmd-editmode-button-"+i).addEventListener("click",function(){l.classList.remove("liveMode"),l.classList.remove("previewMode"),l.classList.add("editMode")},!1),document.getElementById("wmd-livemode-button-"+i).addEventListener("click",function(){l.classList.remove("editMode"),l.classList.remove("previewMode"),l.classList.add("liveMode")},!1),document.getElementById("wmd-previewmode-button-"+i).addEventListener("click",function(){l.classList.remove("editMode"),l.classList.remove("liveMode"),l.classList.add("previewMode")},!1),document.getElementById("wmd-fullscreen-button-"+i).addEventListener("click",function(){l.classList.toggle("fullscreenMode")},!1))}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=i),exports.mded=i):"function"==typeof define&&define.amd?define("underscore",function(){return i}):t.mded=i}.call(this);