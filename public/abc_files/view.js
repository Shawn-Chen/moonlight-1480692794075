define(["jquery","views/baseView","util/pageTransitions"],function(e,a,t){var n;return n=a.View.extend({className:"main-container",render:function(){var n,r,i,o,s,l,c;return s=this,i=location.href.length,n="",e("body").hasClass("is-tablet")&&(n="&t=1"),e("body").hasClass("is-mobile")&&(n="&m=1"),location.href.indexOf("m=1")>-1&&(n=""),o="?",location.search&&(o="&"),location.hash?(r=location.href.indexOf("#"),l=location.href.substring(0,r)+o+"ajax=true"+n+location.href.substring(r,i)):(-1===location.href.indexOf("?")||void 0!==location.search&&""!==location.search||(o=""),l=location.href+o+"ajax=true"+n),null!=(c=app.ajaxRequest)&&c.abort(),app.ajaxRequest=e.get(l,function(e){var a;return s.router.trackPageView(),a=t.get(),a.response=e,a.transitionEnd()}),a.View.prototype.render.apply(s,arguments)}})});