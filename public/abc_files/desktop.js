require.config({urlArgs:"bust="+cacheBuster,baseUrl:"/assets/js",waitSeconds:1e3,paths:{jquery:"vendor/jquery.min","jquery.migrate":"vendor/migrate","jquery.mobile.events":"vendor/mobile.events","jquery.royalslider":"vendor/jquery.royalslider",backbone:"vendor/backbone-min",underscore:"vendor/underscore-min",htmlParser:"vendor/htmlParser",postscribe:"vendor/postscribe.min",isInViewport:"vendor/isInViewport.min",waypoints:"vendor/jquery.waypoints","waypoints-sticky":"vendor/waypoints-sticky.min",chart:"vendor/Chart.min","signalr.min":"vendor/jquery.signalr-2.1.0.min",zeroclipboard:"vendor/ZeroClipboard.min",counterup:"vendor/jquery.counterup.min",ooyalaApi:"vendor/ooyala-api","jquery.cookie":"vendor/jquery.cookie",breakpoints:"vendor/breakpoints"},shim:{"jquery.migrate":{deps:["jquery"]},breakpoints:{deps:["jquery"]},"jquery.mobile.events":{deps:["jquery"]},"jquery.royalslider":{deps:["jquery"]},isInViewport:{deps:["jquery"]},"waypoints-sticky":{deps:["waypoints"]},"signalr.min":{deps:["jquery"]},counterup:{deps:["waypoints"]},"jquery.cookie":{deps:["jquery"]}}}),require(["util/init"]);