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
    "url": "404.html",
    "revision": "567ef207ca10de8bbdd6da47d8240040"
  },
  {
    "url": "assets/css/0.styles.44111ffa.css",
    "revision": "d1c801059cd377e58df06f26a074cf29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4e6ccf5.js",
    "revision": "df4e5da9504f76107ce2c929aa6bf87f"
  },
  {
    "url": "assets/js/11.2777b637.js",
    "revision": "730f22b2b5f4a11760effa114505e494"
  },
  {
    "url": "assets/js/12.4a067d6a.js",
    "revision": "344e81c2432822c4be4d104e342f1d52"
  },
  {
    "url": "assets/js/13.174cb259.js",
    "revision": "1b9115d31df051f9bf5bf8dd27247589"
  },
  {
    "url": "assets/js/14.2bcf7b7f.js",
    "revision": "f05ed54523a95048963c5de7ef336942"
  },
  {
    "url": "assets/js/15.a4df89a3.js",
    "revision": "f1d6d88b4ae0bbbaf334c70ab527817e"
  },
  {
    "url": "assets/js/16.1df4917f.js",
    "revision": "90efc9337d5da7dbf68e0b210680c87a"
  },
  {
    "url": "assets/js/17.4163fba5.js",
    "revision": "b983c4bbf83d942771bea72f155b4fd0"
  },
  {
    "url": "assets/js/18.f89ce319.js",
    "revision": "a5881b3749d8ddd246d23d9c85242711"
  },
  {
    "url": "assets/js/19.c4e1e9b5.js",
    "revision": "e98d95ccb3d62f7e0644ff8daaef77be"
  },
  {
    "url": "assets/js/2.5f974afc.js",
    "revision": "4c8ba430cbfed9ad18eb4ea7f6fff69b"
  },
  {
    "url": "assets/js/20.557b1f39.js",
    "revision": "50e59251f40cb105510de68a0c4eba42"
  },
  {
    "url": "assets/js/21.1628db24.js",
    "revision": "f27def2582f24ca000488037c6bd0d8b"
  },
  {
    "url": "assets/js/22.ac939110.js",
    "revision": "52a782224613def7a2718dfe4de574ec"
  },
  {
    "url": "assets/js/3.605daa86.js",
    "revision": "e42f1f7e5398583c8c7836cf28895195"
  },
  {
    "url": "assets/js/4.17fe7f49.js",
    "revision": "f0b70362a728a6e153566f166c951bbc"
  },
  {
    "url": "assets/js/5.90cdf109.js",
    "revision": "7f63f65dbf52974a866bf500a0aaf9f0"
  },
  {
    "url": "assets/js/6.d9897289.js",
    "revision": "55c2e983017baf742e1b9de3fe7258f0"
  },
  {
    "url": "assets/js/7.31f97fee.js",
    "revision": "3dbd5190c6e0df9a7d730a81189a23c1"
  },
  {
    "url": "assets/js/8.09438130.js",
    "revision": "d80d424d041f548e058655944d2f1ffa"
  },
  {
    "url": "assets/js/9.d7c02753.js",
    "revision": "5d29eaa0ec6e4959cc6f73bebd30792e"
  },
  {
    "url": "assets/js/app.4ac3a6ef.js",
    "revision": "ff00f00f8bf1f95debbc8d08da94bb84"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "d1eefba92766fc29e62020e6b43624f2"
  },
  {
    "url": "content/cloud-advocate/deploy-javaee-to-azure-1.html",
    "revision": "71900d7bbb8783fd849bec76bac3b0a2"
  },
  {
    "url": "content/cloud-advocate/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "110f7ec5382a0b099d70017301a91d07"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "16e6adad8371c8d2b11100fdc1df8145"
  },
  {
    "url": "content/cloud-advocate/index.html",
    "revision": "e957b5650cceeb868ec651777ad165ba"
  },
  {
    "url": "content/cloud-advocate/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "a5ce403db115ef7a10509de75abda70d"
  },
  {
    "url": "content/cloud-advocate/what-learned-ignite.html",
    "revision": "bf795bd0fde05878467cd64a7a9b0d4f"
  },
  {
    "url": "content/index.html",
    "revision": "c3885780afbd9855efb63bb6ce1c4cc2"
  },
  {
    "url": "content/tips-tricks/index.html",
    "revision": "86f1a744694571c05a854503222a631d"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "2524936ae4c4527ec52ebfb8b9b97d0c"
  },
  {
    "url": "img/azure.png",
    "revision": "310a1fc453144b3e862d85cbcade59fc"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "504c965882af60958d65bea015f636f3"
  },
  {
    "url": "LICENSE.html",
    "revision": "0249afa83dd810d761e98f5c4fac318a"
  },
  {
    "url": "tags.html",
    "revision": "328ef528359cda58fd173ec6620048a6"
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
