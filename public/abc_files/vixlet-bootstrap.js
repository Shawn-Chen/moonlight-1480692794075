// this goes in the <head> to minimize loading delay
(function(d,s,id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = '//widgets.vixlet.com/sdk.js';
  js.async = true;
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'vixlet-jssdk'));

// this goes anywhere
window.vixAsyncInit = function (vixlet) {

  // subscribe to 'auth:success' and 'auth:ended' events to implement SSO
  vixlet.on('auth:success', function (userData) {
    // runs when a user successfully logs in to Vixlet
    console.log('publisher: auth:success event received!', userData);
  });
  vixlet.on('auth:ended', function () {
    // runs when a user logs out from Vixlet
    console.log('publisher: auth:ended event received!');
  });
  vixlet.on('widget:ready', function (id) {
    console.log(JSON.stringify(id));
  });

  vixlet.init({
    // place your configuration parameters here
    clientToken: '2QvxLB4AUwnQNkH',
    // specify a cookie domain w/ a leading dot to share login sessions across all subdomains
    cookieDomain: '.atpworldtour.com',
  });
};