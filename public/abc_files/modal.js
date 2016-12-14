var __bind=function(t,o){return function(){return t.apply(o,arguments)}};define(["jquery","util/util","jquery.mobile.events","jquery.cookie"],function(t,o){var n;return n=function(){function n(o){this.options=o,this.openModal=__bind(this.openModal,this),this.openModalOld=__bind(this.openModalOld,this),this.options=t.extend({},this.defaults,this.options),this.additionalSelectors(),this.delegateEvents()}return n.prototype.defaults={element:"#modal",modalCloseFlag:"modal-close",openButtonAttr:"data-modal-open",closeButtonAttr:"href",modalTransitionAttr:"data-modal-transition",scrollTopDelay:0,modalOnFlag:"modal-on",modalOnTransitionFlag:"modal-on-transition",modalOnIntroFlag:"modal-on-transition-intro",transitionDelay:300},n.prototype.pageUrl="",n.prototype.additionalSelectors=function(){return this.options.$element=t(this.options.element),this.options.openButton="["+this.options.openButtonAttr+"]",this.options.modalTransition="["+this.options.modalTransitionAttr+"]"},n.prototype.delegateEvents=function(){return t("body").on("click",this.options.openButton,function(o){return function(n){var i;return i=t(n.target).attr(o.options.openButtonAttr),o.openModal(i)}}(this)),t("body").on("click",this.options.modalTransition,function(o){return function(n){var i;return i=t(n.target).attr(o.options.modalTransitionAttr),o.modalTransition({url:i})}}(this)),t("body").on("click",this.options.element,function(o){return function(n){var i;return t(n.target).hasClass(o.options.modalCloseFlag)?(n.preventDefault(),i=t(n.target).attr(o.options.closeButtonAttr),o.closeModal(i)):void 0}}(this))},n.prototype.scrollOffset=0,n.prototype.scrollBackOffset=function(){return setTimeout(function(o){return function(){return t(window).scrollTop(o.scrollOffset),t("#mainLayoutWrapper").attr("style","")}}(this),this.options.scrollTopDelay)},n.prototype.openModalOld=function(n){var i,e;return o.updateUrl(n),e=t.trim(n),e=i=o.updateQueryStringParameter(e,"ajax","true"),e.length?(t("html").hasClass(this.options.modalOnFlag)||(this.pageUrl=window.location.href,this.scrollOffset=t(window).scrollTop()),this.additionalSelectors(),this.transitionStart(),o.ajaxModal({url:n,$element:this.options.$element,callBack:function(t){return function(){return t.transitionEnd()}}(this)}),this.additionalSelectors()):void 0},n.prototype.openModal=function(n){return this.transitionStart(),this.scrollOffset=t(window).scrollTop(),o.ajaxModalSuccess({$element:this.options.$element,callBack:function(t){return function(){return t.transitionEnd()}}(this)},n)},n.prototype.closeModalClickEvent=function(){var n;return n=t.cookie("atpUrl"),void 0===n?o.navigateTo(window.location.hostname,!0):t("#mainContent *.not[script]").length?o.navigateTo(n,!0):o.updateUrl(n),this.options.$element.remove()},n.prototype.closeModal=function(n,i){var e,a,s;return null==i&&(i=!1),s=n,(null!=s?s.length:void 0)||(s=null!=(e=o.getModalContainer())?e:null!=(a=t.trim(n).length?t.trim(n):void 0)?a:"#"),this.additionalSelectors(),t("body").hasClass("is-mobile")?(t("html").removeClass(this.options.modalOnFlag),this.options.$element.remove(),s.length?(o.navigateTo(s),o.updateUrl(n)):(this.pageUrl&&!o.isIE9()&&(o.navigateTo(this.pageUrl),o.updateUrl(this.pageUrl)),this.scrollBackOffset(),t("html").removeClass(this.options.modalOnIntroFlag))):setTimeout(function(n){return function(){return t("html").removeClass(n.options.modalOnFlag),setTimeout(function(){return n.options.$element.remove(),s.length&&o.navigateTo(s,!1),n.pageUrl&&!o.isIE9()&&(o.navigateTo(n.pageUrl),o.updateUrl(n.pageUrl)),(void 0===i||i===!1)&&n.scrollBackOffset(),t("html").removeClass(n.options.modalOnIntroFlag)},n.options.transitionDelay)}}(this),2*this.options.transitionDelay)},n.prototype.transitionStart=function(){return t("html").addClass(this.options.modalOnTransitionFlag),t("html").hasClass(this.options.modalOnFlag)?t("html").addClass(this.options.modalOnTransitionFlag):void 0},n.prototype.transitionEnd=function(){return t("html").hasClass(this.options.modalOnFlag)||(setTimeout(function(o){return function(){return t("html").addClass(o.options.modalOnFlag),t("#mainLayoutWrapper").attr("style","margin-top: -"+o.scrollOffset+"px;")}}(this),50),setTimeout(function(o){return function(){return t("html").addClass(o.options.modalOnIntroFlag)}}(this),2*this.options.transitionDelay)),setTimeout(function(o){return function(){return t("html").removeClass(o.options.modalOnTransitionFlag),t("#mainLayoutWrapper").attr("style","margin-top: -"+o.scrollOffset+"px;")}}(this),this.options.transitionDelay)},n.prototype.modalTransition=function(o){var n;return n=t(this.options.$element.selector),n.empty(),n.html(t(o).children())},n}()});