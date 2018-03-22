var cachepages = [
    "/notices",
    "/access",
    "/pantene",
    "/food",
    "/food?tab=stall",
    "/food?tab=bakery",
    "/food?tab=cafe",
    "/events",
    "/events?tab=stage",
    "/events?tab=gym",
    "/events?tab=kaikan",
    "/goods",
    "/invmatch",
    "/invmatch?tab=day1",
    "/invmatch?tab=day2",
    "/radio",
    "/about",
    "/pantene?modal=pantene_modal_Jungle",
    "/pantene?modal=pantene_modal_Alice_in_Wonderland",
    "/pantene?modal=pantene_modal_Venezia",
    "/pantene?modal=pantene_modal_cafe1",
    "/pantene?modal=pantene_modal_cafe2",
    "/pantene?modal=pantene_modal_Home",
    "/pantene?modal=pantene_modal_RI_N_GO_KU",
    "/pantene?modal=pantene_modal_Switch",
    "/pantene?modal=pantene_modal_Totoro",
    "/events?tab=stage&collapse=event_collapse_stage_Otokogumi_1",
    "/events?tab=stage&collapse=event_collapse_stage_Ms_THS_Con_preA",
    "/events?tab=stage&collapse=event_collapse_stage_Quiz_SUIRAN",
    "/events?tab=stage&collapse=event_collapse_stage_Ms_THS_Con_preB",
    "/events?tab=stage&collapse=event_collapse_stage_Comedians_Acrobats_andOthers",
    "/events?tab=stage&collapse=event_collapse_stage_Ms_THS_Con_preC",
    "/events?tab=stage&collapse=event_collapse_stage_Otokogumi_2",
    "/events?tab=stage&collapse=event_collapse_stage_Maji_Singers_Cup",
    "/events?tab=stage&collapse=event_collapse_stage_Muscle_Kingdom",
    "/events?tab=stage&collapse=event_collapse_stage_Champion_of_THS",
    "/events?tab=stage&collapse=event_collapse_stage_Yasai",
    "/events?tab=stage&collapse=event_collapse_stage_Ms_THS_Con_FINAL",
    "/events?tab=stage&collapse=event_collapse_stage_Grand_Finale",
    "/events?tab=gym&collapse=event_collapse_gym_SUIRAN_STATION",
    "/events?tab=kaikan&collapse=event_collapse_kaikan_TWO_1stDay",
    "/invmatch?tab=day1&collapse=invmatch_collapse_BasketBall_1stDay",
    "/invmatch?tab=day2&collapse=invmatch_collapse_BaseBall_2ndDay",
    "/assets/main.min.js",
    "/assets/style.min.css",
    "/assets/img/andro_icon_144.png",
    "/assets/img/andro_icon_600.png",
    "/assets/img/X-SUIRAN-t-144-f-fs8.png",
    "/assets/img/X-SUIRAN-t-600-f-fs8.png",
    "/assets/img/TwitterCard7.png",
    "/assets/fonts/GenShinGothic-Heavy.woff2",
    "/assets/fonts/GenShinGothic-Bold.woff2",
    "/assets/fonts/GenShinGothic-Medium.woff2",
    "/assets/fonts/GenShinGothic-Regular.woff2",
    "/assets/fonts/GenShinGothic-Normal.woff2",
    "/assets/fonts/GenShinGothic-Light.woff2",
    "/api/v1/index.json",
    "/files/2017/bgimages/v2.0/background-g.png",
    "/files/2017/bgimages/v2.0/background-n.png",
    "/files/2017/bgimages/v2.0/background-s.png",
    "/files/2017/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2",
    "/files/2017/font-awesome/4.7.0/css/font-awesome.min.css",
    "/files/2017/icons/1.1.5/style.css",
    "/files/2017/icons/1.1.5/fonts/icomoon.woff",
    "/files/2017/img/top/saya_modified5.svg",
    "/files/2017/img/top/saya_modified5.svgz",
    "/files/2017/img/top/poster2017_ex.jpg",
    "/files/2017/fonts/irohakakuC-Bold.woff2",
    "/files/2017/fonts/irohakakuC-Regular.woff2",
    "/files/2017/fonts/irohakakuC-Light.woff2",
    "/files/2017/fonts/mgenplus-p-black.woff2",
    "/files/2017/fonts/mgenplus-p-heavy.woff2",
    "/files/2017/fonts/mgenplus-p-bold.woff2",
    "/files/2017/fonts/mgenplus-p-regular.woff2",
    "/files/2017/fonts/mgenplus-p-light.woff2",
    "/files/2017/fonts/mgenplus-c-black.woff2",
    "/files/2017/fonts/mgenplus-c-heavy.woff2",
    "/files/2017/fonts/mgenplus-c-bold.woff2",
    "/files/2017/fonts/mgenplus-c-regular.woff2",
    "/files/2017/fonts/mgenplus-c-light.woff2",

];
var version = '99999999';
this.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll(cachepages);
    })
  );
});
this.addEventListener('fetch', function(event) {
  var cacheWhitelist = [version];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
  event.respondWith(
    caches.match(event.request)
      .then(
        function (response) {
          if (response) {
            return response;
          }
                  let fetchRequest = event.request.clone();

                  return fetch(fetchRequest)
                      .then((response) => {
                          if (!response || response.status !== 200 || response.type !== 'basic') {
                              return response;
                          }
                          let responseToCache = response.clone();

                          caches.open(version)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });

                          return response;
                      });
              })
  );
});

this.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });