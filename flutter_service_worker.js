'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "52d051ee5b251bd64872712a129ebde8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "617502d1c0f92ded123fec1804c60c0d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "196a03fd093cb5a465a174798ec71eb3",
".git/logs/refs/heads/gh-pages": "196a03fd093cb5a465a174798ec71eb3",
".git/logs/refs/remotes/origin/gh-pages": "13037fc1139b9e2bec4b4c0e98607f61",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0d/9372bedcb33cad3718db1fcfde0f84827c00ad": "6f6f7132f7b06c1cd0c0993e7504a49b",
".git/objects/13/8e15fb4f4bb7b6301f2272ab5f5eddb17d5aaa": "f63a318a2d900c987aee26ae6071bfe3",
".git/objects/19/c15534e4da9308a9c3b1c8df799d3cef6ef581": "6e7df3b42a8a412b1a692dd53a80e826",
".git/objects/1a/fd5744725de6c3bbdfd5e7f07b59f37ce90321": "aec7abc7c8c2179093a3d09430f44188",
".git/objects/1f/640b7c6e4d17a9c9c7bc14e63c6f98413f1755": "5c24bf3d4c0f12f1086077f2a6f8dc36",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/09a811d2595d11d613390aaa8b784dfe262068": "b29988113440e94c6140fa3ed6c6547e",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/0d17dc488b24ccf60e4f45a3f053785ca5f95a": "9f7678da6e52549a5c4f508aa40f887a",
".git/objects/4a/b1ff043a79ff89c69295cea51a64ebbf39d1d6": "24e2d2dd9778cd391d9ea5e24f6e4c44",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/b368619266a02ebf81d26dbe8dfc025c3c15e8": "8ebd99e0b533a40c358d0676cc84825f",
".git/objects/5a/e8018f935f816adc9d48fb58bafb1a5f66ae51": "992076bad930d9b322bee743439e68d3",
".git/objects/5c/41aa869b7ae7f546ec06dd75d84d87a09940cc": "50327fb5b97ea04ea74568fee33f4149",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/75ad2ef74c2e7c7ae7fc0ed67a91ae02797d46": "b919b11e56ca26ad63fe2560d130ebbd",
".git/objects/6e/685cad34880a1eaeb981560d3c254f2f086d80": "3b3571aac458890d0b873d87c42f97e8",
".git/objects/7d/e4b281723b92097906c35c8ad86cbfb2c174bb": "b99eb0b65115ba767cf1f2568152398e",
".git/objects/83/e02cac0dba9bd4d00a78b2f40335dcdc3191b2": "0bbe39ef69ae52f2e9f0cedd5b608c15",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/7474174095ed1a83be577b5a400da89c0670a3": "bca241c2db9737048250fdf241d2eef8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/45c46cb33ab054f1cc02ba7ea850e3cf1b34ac": "53e4c70ec6bdd9501cde3dde81fc1c1b",
".git/objects/99/2946a08af99c98ae036de5d6a0f5bde81c9384": "992f7041e0d6b7028ebdc1e41a45f235",
".git/objects/a4/2f8a117b833ced238a3d15f3e2615a4a2fa4d6": "795cc9bad87382be89690ef424c7720d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b4/0bd9247e3754e3212779a11f127c0e419c7a96": "df6992f822445ce74a5c22e69afe6838",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f53f8cfafb5c1308c224bbe6bf1a4e13d6bbc3": "04383ea6003093240c6ca30b8e3f0458",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d1/bd072e239e1e8f515c691711a6e0c37a935483": "83e9f3b2671eb0d85fdbba7f7e104b66",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/8b711438636cfa99a5d9aafbb6e588a73dfab6": "75626df56cffd97d93a5360680d29086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a4ba6f9cb400cc509ce2e8be2a1360c2c3a8ed": "e4158855063d696ccefaf73d5c9faf4f",
".git/objects/ef/042b7f53f3322b91a06df36bda0de832ad6fc4": "201e7407b4de94afa6355384f3241e0a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4b52ced69a83646ee1ae87a0143f4d9f0d2be4": "99d3b5b951a341c2f5a564b53b423d3a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/fb/417a030aee47a382131f766278965f8204ab3b": "1b8b30ade7ebe35d1bfbc34334434cc8",
".git/refs/heads/gh-pages": "7c5f9cb34f85c3aecdda4a6610d479f8",
".git/refs/remotes/origin/gh-pages": "7c5f9cb34f85c3aecdda4a6610d479f8",
"assets/AssetManifest.bin": "be81bbb4f51a06be0cff1b798829b251",
"assets/AssetManifest.bin.json": "82526601ae4686b707279dbacb76bc34",
"assets/AssetManifest.json": "c6b5535d10a05c6bf6d0497952727b54",
"assets/assets/1.jpeg": "0b3347aca59a78a5ca02d344f319bc81",
"assets/assets/2.jpeg": "bed31b3ba714efafefaa3ccfd959fec4",
"assets/assets/3.jpeg": "ff9f58015da2706b8d3239bc3000b745",
"assets/assets/4.jpeg": "d8df27188992d2cacc68a9cb2f2c8222",
"assets/assets/5.jpeg": "25a5feda2ceee4a15289d524d1f322a0",
"assets/assets/6.jpeg": "537d7f690b95a09c102bfcc3d34b627b",
"assets/assets/background1.jpg": "8f81fd01b410de98545bb0052a7f6263",
"assets/assets/background2.jpg": "322e86058b8bdaa9e2b45a229145caef",
"assets/assets/background3.jpg": "94b2c6afe2126b327a89156fd6e82613",
"assets/assets/background4.jpg": "62c9e9061ae4d3d0caf0e7ccd647cc45",
"assets/assets/background_intro.jpg": "990fae21b0a8c52347bc45269ce1a7aa",
"assets/assets/intro.jpeg": "c4400206c9fd7a7a448fed6765c6f8b2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "f0845e19f30d959b3d123e5febe20ed8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b6f1d0573b6f9fcd20303c297832c57b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6810d6aef9f0e0cf6f58b546b6de0549",
"/": "6810d6aef9f0e0cf6f58b546b6de0549",
"main.dart.js": "2032afe54ac5c0e57b6f66cf6c1c2e85",
"manifest.json": "05c43cbd200abfdb42df558f9ce3d46b",
"version.json": "06305007eb388f63e54fbfe031e5589a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
