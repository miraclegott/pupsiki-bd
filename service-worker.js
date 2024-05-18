/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "2a78f60b75076374aa178bb97f3c0ca7"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a8607cc9.css",
    "revision": "9150517de847dc2c2bab2ba2da0c11d8"
  },
  {
    "url": "assets/img/deleteRequest.b5e76ce5.jpg",
    "revision": "b5e76ce50f471c33e434bd990d4e3f2c"
  },
  {
    "url": "assets/img/deleteResponse.64927f5a.jpg",
    "revision": "64927f5a5e30eb2b88f0f503e651f645"
  },
  {
    "url": "assets/img/patchUserCorrectRequest.1adbc60a.jpg",
    "revision": "1adbc60a1dd42cb8953ae81758c40f90"
  },
  {
    "url": "assets/img/patchUserCorrectResponse.f7ae39c0.jpg",
    "revision": "f7ae39c0dabb2716baca319acabfd739"
  },
  {
    "url": "assets/img/postRequest.2ef9491b.jpg",
    "revision": "2ef9491b919b4df2638fe9f6f97673ea"
  },
  {
    "url": "assets/img/postResponse.7892738b.jpg",
    "revision": "7892738b3efe3990adbab75026235924"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverRequest.254e35af.jpg",
    "revision": "254e35aff5660e52bfbac82f17771f62"
  },
  {
    "url": "assets/img/serverResponse.66361049.jpg",
    "revision": "6636104996db721c9b4c9d48d764fc3b"
  },
  {
    "url": "assets/img/userIdCorrectRequest.cb7ebe80.jpg",
    "revision": "cb7ebe80426ccef1becab7f43337ac26"
  },
  {
    "url": "assets/img/userIdCorrectResponse.cb0a001b.jpg",
    "revision": "cb0a001b41e22968fffd8cf1f64c25ed"
  },
  {
    "url": "assets/img/userIdWrongRequest.539d8d0a.jpg",
    "revision": "539d8d0ab6cc63d674a8843273270761"
  },
  {
    "url": "assets/img/userIdWrongResponse.44db53ef.jpg",
    "revision": "44db53efe5a6c7be9ee689a8c66c3481"
  },
  {
    "url": "assets/img/userRequest.071b2efc.jpg",
    "revision": "071b2efc43fbd1aebfde02428414c7cd"
  },
  {
    "url": "assets/img/userResponse.26f28e85.jpg",
    "revision": "26f28e855020dd702dd919cf9119fc74"
  },
  {
    "url": "assets/js/10.ff2b126f.js",
    "revision": "341033f27b08c46de64e56d4abe4122b"
  },
  {
    "url": "assets/js/11.643f5937.js",
    "revision": "337e193b88654d6d9e14ef54115eacc2"
  },
  {
    "url": "assets/js/12.6c57963b.js",
    "revision": "3c44ef359f053abfe8880e897e8634cd"
  },
  {
    "url": "assets/js/13.a7e90417.js",
    "revision": "c8285c45c9009107e58ffc76c60a1e1e"
  },
  {
    "url": "assets/js/14.978db3fb.js",
    "revision": "792a28c7a25696aacd195ba4ed455f47"
  },
  {
    "url": "assets/js/15.60270995.js",
    "revision": "b6064ddb376338413269f1d4e7a58fe8"
  },
  {
    "url": "assets/js/16.669d43a3.js",
    "revision": "a33f046be97bc718f33df640bf9aff94"
  },
  {
    "url": "assets/js/17.43ebc79c.js",
    "revision": "e4eb8612dc4e8ebea55a9b9ec9a9f79c"
  },
  {
    "url": "assets/js/18.61552e78.js",
    "revision": "9f32308da5bb7d03eea62fb55561f77e"
  },
  {
    "url": "assets/js/19.2333f1d6.js",
    "revision": "e31f2609c55673469d3fa60da9e3d0e3"
  },
  {
    "url": "assets/js/2.2162420d.js",
    "revision": "e9b8a67562b9895a481a636ec6607b98"
  },
  {
    "url": "assets/js/20.5cfa0ee4.js",
    "revision": "ce7ae0a56b27cee2de07bd0702e582ce"
  },
  {
    "url": "assets/js/21.9983732e.js",
    "revision": "90e60484b5ba21ff96757af204268a03"
  },
  {
    "url": "assets/js/22.fb515055.js",
    "revision": "f3cf92f7186048268ac3ad0114f4d0f4"
  },
  {
    "url": "assets/js/23.3003e20f.js",
    "revision": "24ce8fa7ec51c5a21dc31e5062acc84e"
  },
  {
    "url": "assets/js/24.d973e69f.js",
    "revision": "20e7dd57d7dc8e2339fb3dee107bba7c"
  },
  {
    "url": "assets/js/26.f2de5af1.js",
    "revision": "9e7912234b007ac5e589a576d7a3251c"
  },
  {
    "url": "assets/js/3.2a3843f6.js",
    "revision": "653c47404aaa084cfebe496d021d656b"
  },
  {
    "url": "assets/js/4.e7144732.js",
    "revision": "400f1ebf41f3f004773ebd4994d31ab7"
  },
  {
    "url": "assets/js/5.b20a6719.js",
    "revision": "c88ad884b84dfb07c02edbe296927e20"
  },
  {
    "url": "assets/js/6.7449d8a2.js",
    "revision": "48a60ae303df49fd77b5dc5655d4c277"
  },
  {
    "url": "assets/js/7.1320ac30.js",
    "revision": "6dad167f2ee9ad3bd344081d9e0c8a17"
  },
  {
    "url": "assets/js/8.aee802cf.js",
    "revision": "2debff0f67db650f377c1b7df1a162a3"
  },
  {
    "url": "assets/js/9.37050cab.js",
    "revision": "0744b97c5dd2f2c544dbb6ec8d5582dc"
  },
  {
    "url": "assets/js/app.e100e5aa.js",
    "revision": "7fddd8ba3abd6909cffeb6e34c13f08d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fc8d5331c761a86af76696ab4b89ec53"
  },
  {
    "url": "design/index.html",
    "revision": "5865334601901fa091bf938653ab4139"
  },
  {
    "url": "index.html",
    "revision": "e33e39c6ff09d35ad83e81ae6ff35055"
  },
  {
    "url": "intro/index.html",
    "revision": "7d0f4f99195d8c035987d45b4b232705"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6ddc9267a942bef68092e2c5eee46f68"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a97021c8d0b6bb85259ed111e3e56542"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6ee5cfe5e8f57b21cf8c7f3b0a3d6906"
  },
  {
    "url": "software/index.html",
    "revision": "1799fc28355af7080db2696f97be780d"
  },
  {
    "url": "test/index.html",
    "revision": "675c2d920ed99239226f7f5644ff85e7"
  },
  {
    "url": "use cases/index.html",
    "revision": "0174b2c98b154429b4779dd853237410"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
