define(["util/util","jquery","underscore","jquery.migrate","jquery.mobile.events","signalr/liveHub"],function(n,t,e){var i;return i=function(){function n(){}var i,o;return o=null,n.getInstance=function(){return null!=o?o:o=new i},i=function(){function n(n){return this.options=n,"4000"===location.port?!1:(this.options=t.extend({},this.defaults,this.options),this.scoreEvents=[],this.newsEvents=[],this.hub=t.connection.aTPLiveHub,this.delegateEvents(),void t.connection.hub.start().done(function(n){return function(){return n.options.isConnected=!0}}(this)))}return n.prototype.registerNewsEvent=function(n){return n&&e.isFunction(n)?this.newsEvents.push(n):void 0},n.prototype.registerScoresEvent=function(n){return n&&e.isFunction(n)?this.scoreEvents.push(n):void 0},n.prototype.delegateEvents=function(){var n;return n=this,setInterval,t.connection.hub.disconnected(function(){n.options.isConnected=!1,setTimeout(function(){return t.connection.hub.start().done(function(){n.options.isConnected=!0},5e3)})}),this.hub.client.pushNewScores=function(t){var e,i,o,s,r;for(s=n.scoreEvents,r=[],i=0,o=s.length;o>i;i++)e=s[i],r.push(e(t));return r},this.hub.client.pushNewArticles=function(t){var e,i,o,s,r;for(s=n.newsEvents,r=[],i=0,o=s.length;o>i;i++)e=s[i],r.push(e(t));return r}},n}(),n}()});