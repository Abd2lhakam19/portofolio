'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "3c26f85907045e138fda40d62f6d1c7a",
".git/logs/HEAD": "b2921d351f196bbbb648d6aed98b6e15",
".git/logs/refs/heads/main": "21a12bac3e4ff16cd793bf1750a2b7b8",
".git/logs/refs/remotes/origin/main": "3a15d3290df291ce9055380bbd077990",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/refs/heads/main": "575af112f194da4eeed7cd394452ad59",
".git/refs/remotes/origin/main": "575af112f194da4eeed7cd394452ad59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "557814024e79407fe3271330a1e65c19",
".git/index": "ccdf94a1b17db8fde2926a43eb75bb7e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/38f236f12f0a9d062020253e3758f17c7bd628": "68726eca593054dcd9ddba1da29bcc40",
".git/objects/38/2c2d325ef95c6409a5331dd47fca4fb498ab77": "ab9ddc60ff16f1c2aa07c1561fac7841",
".git/objects/38/45e1717511a972703798081889a2040c2dc08b": "e6167882e85fbd195ffc3113067181e5",
".git/objects/d8/09140662aaec2c4a11edb0f4becd0f710b89df": "72c5b14d8bb7feebee62413072b2e90c",
".git/objects/e7/0ab96c7813e7c728017d64fdd9f4b0c97e0c00": "1f406da713d40fdd3d88ed77a833669b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/b5/d86f15360b2e7931180ceccfa0f936d5e068d2": "b192e7e5c362594f1f10ccfc46c4b322",
".git/objects/48/d6c2a32f221c783f2c57240da2a3a21df88ae4": "f03f0eb052f18f465b1224492325bdae",
".git/objects/f7/21fc0e262c6ee57299331546a28727eb906e9e": "0e26f744b2c6c45f110ab9e79b276a8e",
".git/objects/54/a493c3b27e63c552a10d269939c854cb19b893": "6e790ff15dd88a550dad7d6f19232c5e",
".git/objects/e8/68028faaa2f683b20cfad26c7e4461e101b2bb": "254d5f751130118285e5021c780c0bb1",
".git/objects/4c/65ca7f1aaeacc26b716e390fa602f3d6721d6b": "9d8b93c74f06012e79f8fed439a16b70",
".git/objects/ab/927cf3e8148f08207c43e138414ed615f8aa8d": "8d3ef686dc5a0904418ff406afe24d40",
".git/objects/a0/71b7b85fa7c97ac3485fd880a54378d68b4cda": "f4871b78fd503cdfdd939c7f9293c56f",
".git/objects/06/9fffab11cad7d5df080660d004bbcb2d267096": "ae8b53c4b7e02f912629a0b682e2e295",
".git/objects/3e/38a89772fb137c99d4ae97971d4c0a0bb8ae19": "54eeee0f0afc2a053512072388ee65b2",
".git/objects/3e/b1e1c28bebc98848f183733a4f0719d9e8cc3c": "a32fad8620efc647c748cbf7f531b417",
".git/objects/8b/f82cece1da361de59df7741ffd80b47df14e4e": "d71fa84be5ec547c615cf2d1a2fe1692",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/13/dce20b038c32b8a65e5d612f478753de71df58": "da130ee75f37154ca21f08671771ad40",
".git/objects/1a/49c0187f97a32f7fc251715b2a9d4adc1355d4": "8cdcb6a4bc979922733a3c74861c5e37",
".git/objects/5b/72e98a9c489f55a230873e6564f1b80958bf49": "d394477fafdf81c930fdea8e82743d13",
".git/objects/5b/5731dc8de6e83cc0ee4904d2364c2b0ffe3ae8": "514da0db54823888c4410a866ffa7e07",
".git/objects/5b/12c69a7afd259bfb4f1fd508e22c7e3c34c69c": "53f32e621187929ffd69b5f0dbf64fa2",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/da/a4b85fcfb2b840a19e0485b26f69b273501355": "79756ed80ca41ff74fcbe44dbe19450a",
".git/objects/1c/29b80905dc538c567386ba7b6d679d9057ff51": "edd4c52f4eba8ae11a0e1f3b46b28988",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bd/f318613c8fc517f1ac9a82aaf37c69262f406e": "b7b1b39aa2e36d57552792f8dcffbc38",
".git/objects/16/5e250b541d514aa32a9a51c1e6533da4a850d1": "68abdabf3e5007067cc7c70583cb48cb",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/f5/d8fdb0701fe7f6c90ae0732500d32a557fc4b0": "6d93817681de7f3ad0470b5b8b105777",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/db/1662d0027b94103bde9cf41d3935bde291f75e": "2e2199ceede570c0c9192cc02bf170ee",
".git/objects/5f/94a4520074a3493a646dff53a10c8005e55a5e": "6132186166916d03f54df13e29fbd679",
".git/objects/5f/a3af15d59668be3ef4ee538c4f37cae70e063c": "ae7d505cccaf472cb6d47171f65a780b",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7c28879fce848c17d963a17e3329dedb60f4b": "f573144296c7234300be7e72630b6c1a",
".git/objects/24/56b828b9fe4655fa9cb7dcca6342386f1f469c": "726450e260d8e50ea9e66264a51cc6fc",
".git/objects/d2/0506d039a9eee8d8cbf02afc29b00e0959b46c": "3bf7b4300fc0057f98ef4d08b40fd692",
".git/objects/62/ee4e912e05d77c589c17d9fb6016bafee7eb4f": "e510ee222b294f112b2e8bd360a32592",
".git/objects/de/acc0a5056a5ce04b5fd0ad11e88ecfa610ea4b": "87791f6e517c0671b6388bc0a687f9d2",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/b2/f1e0d6d10ad425639025cd01bf189215a01ea0": "7f8ce5d553b0161f5f6a8955a2761533",
".git/objects/f9/92c22de40ac0263e6a1a1a9211a0d0b5aba0ab": "4db42326811a52d2e1f1e0674de2a46b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/9c593c650f9bc7bd2a079fa45235f6873f1bc6": "ebd7a4123d0afcb7d145fd9431bc05e1",
".git/objects/df/f8b8dba6aa8ca93e52534257d8f7bd304d8040": "5194f6b69e8884745c5e986ba5c7f1d7",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/c0/6c1a7faf1a9bcbc7a27d732ac1350603eb5746": "182a1b081215092c1282c97ddb154c26",
".git/objects/07/a35ed31a13454edd5ed14f99067c176d7ef8c3": "df2e31ad0f4524eb6104ace72471e7b5",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/60/1f394e72159b1987bba52115bff2f338ab712f": "cc42cd61c9fed658e90f7a64875f67e0",
".git/objects/f6/864778c53246ed89a20c147a8dcf8787122caf": "3ca363cf552bb0214227031be0c18e47",
".git/objects/f6/21a11812a955bc3b5f31dd58560ba84c9d380a": "34b2f7f84b202c9a24fd073d323c7567",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/71/5137a6e07cc7b9a05754b362561bf57359ba5e": "8216c75300d0b50a3d44fc1bcc47b4bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/56/93085149a2e2774ef4cccbe9f162b115ca0d8e": "224e8d5e26d6cca081d922d5b5d3a74a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/cd/0a60ff6a12ce88da8cf0a74fd49a132bd61583": "d43f9339aea5c9ae5da0b9da8bc5d207",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/7047a27a3439d8b6aef6de932a54a8122d60e8": "fcbedd5928dfd9e19704ec3cd13b400b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/4b/7d55799f33a44e2bb3349ef3bd77f410085eb6": "5424a9da0035dc72ca6b18936e1fc277",
".git/objects/4b/8caba510a6c79beec7033733f8189f84c0225f": "312f0de598d0e22bff54d2f7b686ae5c",
".git/objects/0e/bceb4102a59c4184a46a1ad48c3149f53c44c9": "b7fe30a5de75c7f989b48465b963ef6a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/97/1f470b99e492d35393cbd98fb15a297dbf1dc3": "4fb9859762346644c6bac89180c598aa",
".git/objects/63/c8746d98d65355bb442ef6da973051e709b2ef": "b98985abc54e8b6e7dcca185be460d56",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/6a/036a9d581ebe61f1e21d7f0c69472851d524cb": "6cb43fc4c063ad5d88c1db8bad2a51e1",
".git/objects/8d/b5dc3577bcd334083f67d15b34be74e4672a99": "c0546c01b9e02f1a61f31279b4f3eab7",
".git/objects/31/e20f6d1e25c356b1e80456838f53577ea228ef": "abc55c6d9971d047cc88fe992dc18253",
".git/objects/fb/c544af6f1c9b2a7993d0b75334841a4a3b4133": "13a11cb97b8c81e174101fb5caa79071",
".git/objects/7a/4bc3fe90fa89e4dff528161159ff9fee835eaf": "98754a585f4ff8c75de5e438fdc055ca",
".git/objects/d3/9aa4e7da78bb99f8e29f6af56b48e11cc63ea1": "fb8acebc6a4ca7b0603b74bc6ca2ce32",
".git/config": "f0e14f579ba74483d97fd3c49692f3fa",
"assets/AssetManifest.bin.json": "58c9b2210bd82ff765e3dfb81550c8b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/assets/images/cv.jpg": "fc32bf29c1dcd2678345f54a14c0ac9f",
"assets/assets/images/me.jpeg": "c3fe31478a4d4729aea70efad6b6443c",
"assets/assets/fonts/SpaceMono-Bold.ttf": "87357b7223ab3ed8c3da24f77f51d85f",
"assets/assets/fonts/SpaceMono-Italic.ttf": "c3032fccd961d5b63025241eb1dae029",
"assets/assets/fonts/SpaceMono-BoldItalic.ttf": "8a6e1f92b87c88bc2f63e7ba68c68624",
"assets/assets/fonts/SpaceMono-Regular.ttf": "59c83e1fe244568db558bab69755a6dd",
"assets/FontManifest.json": "a5946c6547b50733039f5d7b88e50b84",
"assets/fonts/MaterialIcons-Regular.otf": "e69be70b61f66847be018b5a778d76d4",
"assets/AssetManifest.bin": "2c84326453548c98fc468b4e3fa5f8f6",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "d8365a0c84636ffc63b905192854ace0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"manifest.json": "dcc3d0a8fd596930a8fc2d4bbc48de0f",
"flutter_bootstrap.js": "a356169b028802496f4ee764a65f0d1f",
"main.dart.js": "42337142dc7e2cd78174a5ceb8c60d7a",
"index.html": "e018c9f755da7d9dc2e340acf2cc50cf",
"/": "e018c9f755da7d9dc2e340acf2cc50cf"};
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
