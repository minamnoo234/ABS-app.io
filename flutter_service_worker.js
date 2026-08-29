'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8b8cf55735610fa1defa4fbc69fad09d",
".git/config": "e8d7a5971f501338feb00828539c97f3",
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
".git/index": "be6357595be42991489de82f624d5460",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b53107be92bb5a5ea41f857df965ce0",
".git/logs/refs/heads/gh-pages": "1c08872982d54ac82546ab1a9995cc68",
".git/logs/refs/heads/main": "17e381adfa487092215da4c333791a56",
".git/logs/refs/remotes/origin/gh-pages": "4a3c5984126268f3b24884fd48334704",
".git/logs/refs/remotes/origin/main": "448f1243965c9eeb75f7ea11ebb86571",
".git/logs/refs/remotes/origin/master": "bc55a59ff12af8a6281858eb2d3576b6",
".git/objects/02/b709e08df031a7c8a00ec401379894f2375944": "f3828f80d600d50c2ab4ab45210cf5eb",
".git/objects/0c/d87c78bbc286cc240f40aa64be682d9164b38b": "08d21449427af20eb9735e979b0922bb",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/12/b1a9e632f990ef4315213dd417b48726aadc3d": "35b32af358dc18c906facb30794006af",
".git/objects/13/504f4b680b920a06657929cf6d19532784649e": "08d5503eb580261983d2a829d2eee8d2",
".git/objects/16/ad188bf138659ba38ffcf5dea9f15261a85c73": "523469baabcd8ef6a3f6ace02f049437",
".git/objects/16/d2aa476adca5953a78f9419cc8c5c7404e82ad": "f1189582b70dd05c48c7305be95fce20",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/b35c64f96d731f92bfe0e6ad252aa4cb786c8e": "093c17f774b5b65ef65e0439ad328f8f",
".git/objects/20/d855a0f7531798e160c88e9ea39ea58ff77c41": "9d1ba812b445036e2995797347289814",
".git/objects/21/b94448bad19554502b1cf15fb8d3992486e265": "2033df01b900db6253739da7c3574ce8",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/24/25d7b7f3d51d90068d6d92cbd0e16de917e39c": "b6195e0d0f60eabe42327ee896392f2c",
".git/objects/2d/c02f1f34f09cc669647f508497a59703590650": "54424fd273e8cd621c2f9ea66f0fdff1",
".git/objects/3a/7090607b8855dbf9399794d90a7303f233f2d8": "b4d09ea1c6e294d3aaaeee76fc6acb76",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/75067ddfb981e6046d08c0de7f5c9ec8552b16": "fab373b66e723517a3e11218c6ac8cdb",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/3f/db26237564d8a3daed9891a53f55757ffaa22a": "f9dc39150b8d4d35a6e6312be3a95970",
".git/objects/41/669c6bbf718f8969ec208fcbc667d9fca41a45": "dc190fe797343c2c5accb23eb493cd14",
".git/objects/41/67b3f89420f3f2b886a7b7f7aa252ea737b4ab": "a9f599f812b8cd2d35dd0cacb3b3d94a",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ecbf465c32bcbb856ef32182f121409d5688bd": "e72d61aa39c78b2e46244f4aa474a9e9",
".git/objects/4a/7eec08c672392906ccefca67b52b7411519a80": "d4b8430a7442642513ae67b1ecf33c1e",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/827b111533963d6e6f7ed5c1ff69b2178017bf": "1bd2c34756c63071e25e1686d8a758aa",
".git/objects/4f/89ec9a216db40a3e266b76063948917c26985b": "3815aa06c08cf919dc289eaf4069ec3b",
".git/objects/50/72ce2885adf261e15c6ccc0a3543a1f6efcfb9": "f56216b81ee769ec15bf5a9e6ab3b02a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/031d79ea48fb704dfe129d19357e3276eeca1c": "f7521bfcd9c1766c1958e1085db3a786",
".git/objects/58/1a35be502a5c3ced21c18ffe42cc02ffbdfcd3": "4b00a360a7aee48868a34c2518ca517e",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/28bacbb625471b9c95c2fcd98224d170fe564f": "c51f1333178c3ea0770c46642b2ddb28",
".git/objects/66/bcc3c36211109b6a8d109e3278d74a56b4535b": "535ea67f2190734a22943dc162e18f1c",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/5e00ed8163d7fba7e9a1497b094e7632628495": "84af4697a09ec131d1a0d0b2bbf8a51f",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/52da586ebe58f84a6a990cab800c70c4afaf67": "faea1437063b1b225ea2106070df3626",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/fc2f8ef4edc7d56cd90ba2467b89c42044b717": "55df578fbdba56ae79796e13958f2f3e",
".git/objects/7c/f966f48102a118ffccacc4eabfb7150bfd21f7": "e2a3e1cbd056a831e6ef7378736312ad",
".git/objects/81/7563a78f591eb50eabe30de77caa144fd7e1e3": "9e452c35b3779218ae271824530eb910",
".git/objects/83/36df3fc3cc3d5dd42469a679c4c83cef7c4910": "1f6ad9b059cb32e463448a71a6e91312",
".git/objects/86/09265a98f3efdea4adc950d65931def80ab9bb": "c5d5aad1183cff74d8c291fd825b7122",
".git/objects/87/4b6caeebcc025fae65dc342f4ccffa6f12248b": "e59c8b20d3a6d01d8ca258bda07c3009",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d80950c52ec67214204d92f550e629fb0dee4b": "6cd33f83e29c2cec24e8ba85743bc741",
".git/objects/8b/23b9b26f6bfcf27fb45d16ff652e67db976a1f": "540992bd58ee79f9fd05f0ae21df4d7c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/803bf2cb5c3c4894b7c705788c9d308eb77447": "ab865e010600a88bcb3dd5d12313588b",
".git/objects/92/4ebeb3606b95d33d76a28b0c4425c099c39789": "94c7253a09e4e004217b8f36e446c871",
".git/objects/95/96b31cafa82e15ab375871c484ab2536c5be53": "5d4df6d691ac7854eeba52db8314dc7a",
".git/objects/95/fa4fc2c46936d80e650ea0b0298f542d930964": "9818b96b1386058348cd8604329b6ef7",
".git/objects/99/57a83f597bf2458786cb041e023691e98b9594": "3ea985f93269e6043a4f662d688cd51e",
".git/objects/9a/a82d00e8fefa6e80e2136d878a85453396554f": "35bacd5f72c849b33e47a081f561aa64",
".git/objects/9b/5b5ec533b9e3ddf74955e8c8673c0079604678": "313cbb408026dfc4b96b8add4731d0b1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/a04d1f6c8837521461783dc67e3803d10c487b": "76dce99955886f11fffb9e0c60fb5724",
".git/objects/a4/e6360cfc7976d52a807a331fbacdb720f38623": "651e22b1ed95d3a6cc98b8772dd99158",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a7/f44b53000f7a3cfa58a29828d44cb3f268cb65": "d394cf24a18400ecf050742660fb80dd",
".git/objects/a8/1228a245618ca530ec9016e195105a825476bd": "dad572c0603750b34c0c059607143539",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/4ad1915fe781e57ec8a71b5fa4147e62be8285": "bb20fe278f2096c5de0aeb74e784e38b",
".git/objects/ac/b2cb12cfc3655773c6bbe05b5978ff3d5b77c8": "34af352b4d28d1e0adf32f3838612f66",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/a5e715eea410314f240d03204e9467ed7eaf61": "958b4ea59b55b20aa31a01e5a6b053b4",
".git/objects/b5/e51a746eb179d482115f25fd065e294ef9bffc": "97765dfb395d267e857a9414065d6347",
".git/objects/b6/59bb322e2fe202d6a51213cc4cf5e9d2e87038": "ffc0527e9b07c73d05418b3de3eb6826",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8fee150bea84a51ede11d8484e8fa7396ffd8e": "c627fb0c9e2d4a5dbf4d97f9759e3bd9",
".git/objects/b8/1abad35347af818093911a003c1249938fb0ff": "510b5a2d59646f1a1a3e5f855bd5765f",
".git/objects/b8/34d01bec6cf6f3194b7d62176638d933e406bc": "195a3c57964b462c95b34cf86573380b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/be/0c47fff73899336a361c3a8925fbd60d3c447d": "3e778de70ca3bb6452dd76d06d52fd8f",
".git/objects/bf/96b91acf97f176534c95b9be4fecadec8c2dcd": "ed1eaf3c683565a41d651a7a711d9671",
".git/objects/c3/24ec508df992ca966ad9c269e07d58255fae07": "ae2851a3f3d90890f457cb7a322470e0",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7bf408dfd3191114c10aee3ea9339a70b3595a": "1677bff42f4b5168b191f1004af7666b",
".git/objects/d6/374358ba66cecf0e095bd4f947ae5d2410ba33": "aee7908f719c0e7f5d6112d3cd1209df",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9daef8d2c39bf4652504fe4bdd124fa39d477b": "dbd3f718ca8fac73cdf2432efe2a8f1b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e4/2b1599cc8c6365e310ee5c97ecdc42c470ef79": "41172ecb9caefbf4ed814a453f36b415",
".git/objects/e6/9c1961ac87b9c5e759a32b515a978d5f4003cb": "2fbbc80d06c9639d63b68d097c12f7e5",
".git/objects/e7/1db361a836ba65eaecaf6e1a50e581da8d41e7": "fabc775d02cdf611d4159db4a377355c",
".git/objects/eb/6c984ff257734b79ce043c05d81061a13975bd": "d752fa2f7d42e32256e7bc80aebdfe3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/8cfbadbc6f2344a837dabb483a24b9050f3f83": "56c827970b7489d555d16bf07bdc9f5e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4b39e37afd92d6435353ad2ccc5988c3f571bb": "e7ff89f4d6e7474562859b2aec421571",
".git/objects/f2/83e376a6cb5b1cb46169af572d5b3c8f8d5148": "59d9f3cb0401db199d9f5b92ae61a844",
".git/objects/f5/205e76bcef1ab7ab54adffc2b7dd8be650677e": "80836702a4216e4456e9b2d956fffdb9",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/ff/fcc815ef6c84243a57f9abc99b476edc99e799": "3528f5105a2935c787bfc87430c11393",
".git/refs/heads/gh-pages": "b7502179f3f5abef6e93254c1f758b24",
".git/refs/heads/main": "5783258af97d22fd89636e11bd42651a",
".git/refs/remotes/origin/gh-pages": "b7502179f3f5abef6e93254c1f758b24",
".git/refs/remotes/origin/main": "b7502179f3f5abef6e93254c1f758b24",
".git/refs/remotes/origin/master": "c49c4af4fc8bb25575602a77079a6f03",
"404.html": "7198a5892ee336575cc8ea8abc56d20b",
"assets/AssetManifest.bin": "284788fd264c153c693ab7d889000426",
"assets/AssetManifest.bin.json": "bd9c3128afebd3657406d269576a8d2d",
"assets/AssetManifest.json": "86a26a25989b67feb427a2c731bd9a97",
"assets/assets/images/aftar-app.png": "3a050199071a38aa0739902336865dbf",
"assets/assets/images/logo.png": "fe6283b92255aaa05353528cce45f784",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1365e11c86754d987a5a662c6b3e7526",
"assets/NOTICES": "b57b099437876bbb5591a73c750e5927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1b142b6b4ecb36dab257596d17b39e4c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5b3195f06f2a6fdd33a7fa69f5ea5ec2",
"/": "5b3195f06f2a6fdd33a7fa69f5ea5ec2",
"main.dart.js": "2ba6c1dc49b8bab3b7d6680f680a7440",
"manifest.json": "7d63da0828a1a05a78c8a32e42ab9c80",
"version.json": "d5555e0f3239d6ce99fc7a1405818b15"};
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
