/*
(function(w,t) {
    t = w.tms = w.tms || {}; t.queue = t.queue || new Array();
    t.config = {site_type: 'single_page', trigger_view_on_hashchange: 'true'} // for SPA
    t.track = {
        view: function(u,cb,uid) {tms.queue.push({event: 'view', data: u, cb: cb, uid: uid }); return true;},
        link: function(u,cb,uid) {tms.queue.push({event: 'link', data: u, cb: cb, uid: uid }); return true;}
    }
})();
*/

(function(a,b,c,d,e) {
    a='//tags.tiqcdn.com/utag/hsbc/hk-rbwm-gsp/dev/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;
    d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a)
})();
