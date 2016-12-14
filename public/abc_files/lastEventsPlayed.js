define(["jquery","jquery.royalslider","breakpoints"],function(t){var o;return o=function(){function o(o){this.options=o,this.options=t.extend({},this.defaults,this.options),this.additionalSelectors(),this.initPage()}return o.prototype.defaults={element:"#lastEventsPlayed",tournamentInfo:".rsActiveSlide .tourney-results-wrapper",tournamentInfoMobile:".rsActiveSlide .last-events-played-header",button:".rsArrow",isMobile:t("body").hasClass("is-mobile"),autoPlay:!0,slider:!0,autoplayDelay:600,transitionSpeed:600,ofPhrase:"of",tournamentPhrase:"Tournament",analytics:{gaCategory:"Last Events Played - Players",gaClickAction:"Click",gaLabelNext:"Next",gaLabelPrev:"Previous"}},o.prototype.additionalSelectors=function(){return this.options.$element=t(this.options.element),this.options.$tournamentInfo=this.options.$element.find(this.options.tournamentInfo),this.options.$tournamentInfoMobile=this.options.$element.find(this.options.tournamentInfoMobile),this.options.$button=t(this.options.$element.find(this.options.button)),this.options.$window=t(window),this.options.$body=t("body")},o.prototype.initPage=function(){var t,o,i,n,e,s;return i=this,this.options.$window.setBreakpoints({breakpoints:[768,1025]}),n=this.options.$element.find(".royalSlider").html(),e=this.options.$element.find(".royalSlider").attr("class"),o=!1,(this.options.$body.hasClass("breakpoint-768")||this.options.$body.width()<=1024)&&(t=!1,s="fade",o!==!0&&(o=!0,i.initRoyalSlider(n,e,t,s))),(this.options.$body.hasClass("breakpoint-1025")||this.options.$body.width()>1024)&&(t=!1,s="move",o!==!0&&(o=!0,i.initRoyalSlider(n,e,t,s))),this.options.$window.bind("enterBreakpoint768",function(){return t=!1,s="fade",o!==!0?(o=!0,i.initRoyalSlider(n,e,t,s)):void 0}),this.options.$window.bind("enterBreakpoint1025",function(){return t=i.options.autoPlay,s="move",o!==!0?(o=!0,i.initRoyalSlider(n,e,t,s)):void 0}),this.options.$window.bind("exitBreakpoint768",function(){return o=!1,i.options.$element.find(".royalSlider").royalSlider("destroy")}),this.options.$window.bind("exitBreakpoint1025",function(){return o=!1,i.options.$element.find(".royalSlider").royalSlider("destroy")})},o.prototype.initRoyalSlider=function(t,o,i,n){var e;return e=this,this.options.autoplayDelay<=0&&(this.options.autoplayDelay=600),this.options.slider?(e.options.$element.find(".royalSlider").empty().removeClass().addClass(o).append(t),e.options.$element.find(".royalSlider").royalSlider({transitionSpeed:e.options.transitionSpeed,transitionType:n,autoHeight:!0,autoScaleSlider:!1,controlNavigation:"none",imageAlignCenter:!1,imageScaleMode:"none",imageScalePadding:0,arrowsNavAutoHide:!1,slidesSpacing:0,navigateByClick:!1,addActiveClass:!0,fadeinLoadedSlide:!1,loop:!0,autoPlay:{delay:3e3,enabled:i,pauseOnHover:!0,delay:e.options.autoplayDelay}}),e.resizeButtons(),e.options.$element.find(".royalSlider").on("click",".rsArrowLeft",function(){return function(){return window.app.Analytics.trackEvent(e.options.analytics.gaCategory,e.options.analytics.gaToggleAction,e.options.analytics.gaLabelPrev)}}(this)),e.options.$element.find(".royalSlider").on("click",".rsArrowRight",function(){return function(){return window.app.Analytics.trackEvent(e.options.analytics.gaCategory,e.options.analytics.gaToggleAction,e.options.analytics.gaLabelNext)}}(this))):void 0},o.prototype.resizeButtons=function(){return this.resizeInterval=setInterval(function(t){return function(){var o;return t.additionalSelectors(),t.options.$button.length?(o=t.options.isMobile?t.options.$tournamentInfoMobile.outerHeight():t.options.$tournamentInfo.outerHeight()-3,t.options.$button.height(o)):clearInterval(t.resizeInterval)}}(this),100)},o.prototype.updateSliderText=function(){var t,o,i;return t=this.options.$element.find(".royalSlider"),o=t.data("royalSlider"),i=t.find(".rsContainer > .rsSlide").length+1,this.options.$tournamentInfoMobile.html(""+this.options.tournamentPhrase+" "+(o.currSlideId+1)+" "+this.options.ofPhrase+" "+i)},o}()});