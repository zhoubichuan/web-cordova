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
    "revision": "679da3a6c05eb64fd83a7007b7addf55"
  },
  {
    "url": "assets/css/0.styles.cff10c52.css",
    "revision": "72ffb4f9adcf615ae1a121dbd84123fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b7df6821.js",
    "revision": "98ed81568db29772243de3efba08a983"
  },
  {
    "url": "assets/js/10.234e234b.js",
    "revision": "0e8adb4b2a48dc9928b23ec4d4ee62a2"
  },
  {
    "url": "assets/js/11.4609f1bf.js",
    "revision": "fc5c5c27eb6b943933a184dce8264acd"
  },
  {
    "url": "assets/js/12.39c5989d.js",
    "revision": "7039a01c5c0c1b75c4519d6c02ba102b"
  },
  {
    "url": "assets/js/13.36efc327.js",
    "revision": "67f9b597852723905241e96f4662fd56"
  },
  {
    "url": "assets/js/14.7155b4ab.js",
    "revision": "6d4be6e659237955448502cdbdbd78bd"
  },
  {
    "url": "assets/js/15.1170c77d.js",
    "revision": "fa4c522016a66ede6b95041f16ad9e31"
  },
  {
    "url": "assets/js/16.ff44e513.js",
    "revision": "03b4c164afd1b7f991cd0a29ff04a1c1"
  },
  {
    "url": "assets/js/17.4455a3ba.js",
    "revision": "40509966a38e66ccd39fc8b458f6d7de"
  },
  {
    "url": "assets/js/18.4902830a.js",
    "revision": "649c0fda6b165890f2f3b9e167d3a813"
  },
  {
    "url": "assets/js/19.bd7781e4.js",
    "revision": "5047c66a41e534d79a2f201ca56a93f5"
  },
  {
    "url": "assets/js/2.5e761e62.js",
    "revision": "596c99e57b654cebc9dd3748b348773f"
  },
  {
    "url": "assets/js/20.72f467a8.js",
    "revision": "7e7bde6431d91f830b1493f1a05da238"
  },
  {
    "url": "assets/js/21.8b431040.js",
    "revision": "eb33ca71bf4f57d79e6a51844da0c277"
  },
  {
    "url": "assets/js/22.4cd5aaca.js",
    "revision": "c2f3fb0b8b9c24fb1fe81423a5b69855"
  },
  {
    "url": "assets/js/23.89b4f917.js",
    "revision": "97d5ca49b45c22580233dbbe0c16d2c7"
  },
  {
    "url": "assets/js/24.c62186b0.js",
    "revision": "4f305d258d6b5b4e80a3ac420a9091d4"
  },
  {
    "url": "assets/js/25.76dc5039.js",
    "revision": "6286b137e92f889c019505ed68ac0209"
  },
  {
    "url": "assets/js/26.a49f57af.js",
    "revision": "8909c7db234757be12d67bea9b48d41b"
  },
  {
    "url": "assets/js/27.b3d14c6e.js",
    "revision": "82af6a58014f270daa2b2c3492241e6f"
  },
  {
    "url": "assets/js/28.b36a1f62.js",
    "revision": "3912c02810cd867e8bcd6e91ef7af9ec"
  },
  {
    "url": "assets/js/29.1f61114d.js",
    "revision": "2706d74bfdb191be7fe47136069eb503"
  },
  {
    "url": "assets/js/3.5df44c0a.js",
    "revision": "271256aeccf2f79480333d368a1b7506"
  },
  {
    "url": "assets/js/30.6e7ef630.js",
    "revision": "b8053090b18ecd72a520bb622ff3a26b"
  },
  {
    "url": "assets/js/31.f235c54a.js",
    "revision": "9810d388831698368d91cd2fe9454b96"
  },
  {
    "url": "assets/js/32.4f2e77bd.js",
    "revision": "8b3f9bfa24fd594820bf5a7d98046fa2"
  },
  {
    "url": "assets/js/33.d8d3e0b1.js",
    "revision": "a8d5694eb37a0711a1cd9a3de0ec21d3"
  },
  {
    "url": "assets/js/34.bcfe96b3.js",
    "revision": "1f2d0237aa8daf6e5284a1a7e2995d15"
  },
  {
    "url": "assets/js/35.e6e1cc65.js",
    "revision": "76285b631ee480ec91e3e4892163f209"
  },
  {
    "url": "assets/js/36.234254c5.js",
    "revision": "30e5ba7bb9b514b5e6ecca81dcb74f5d"
  },
  {
    "url": "assets/js/37.ca578ffc.js",
    "revision": "eaaadade4a44dda20a291c5d1b5aef7d"
  },
  {
    "url": "assets/js/38.3857de09.js",
    "revision": "79def5d3b620a5bd3497502226b6796d"
  },
  {
    "url": "assets/js/39.77ba51c3.js",
    "revision": "d6acb6e836d185ee3b57c6162a63d45a"
  },
  {
    "url": "assets/js/4.621c41d4.js",
    "revision": "4d9c3796d91fbfaa62abf840bf05b9e7"
  },
  {
    "url": "assets/js/40.a92d27b5.js",
    "revision": "43b7704ec5baaaf22842d2d10bef0cf9"
  },
  {
    "url": "assets/js/41.be35b346.js",
    "revision": "12c4bbb6d05bdd189f43791cd62446d4"
  },
  {
    "url": "assets/js/42.28245f9a.js",
    "revision": "329dcf3f8444c4c6984de13f10824927"
  },
  {
    "url": "assets/js/43.8da8445d.js",
    "revision": "b13d907a4fc7cffe7079d0dec7d081a1"
  },
  {
    "url": "assets/js/44.84eac315.js",
    "revision": "728eb60aaa8d36d1603835e924e9c827"
  },
  {
    "url": "assets/js/45.a56f7041.js",
    "revision": "91bb3106f2e204b0672106379d3a86ed"
  },
  {
    "url": "assets/js/46.2a0d148d.js",
    "revision": "3c0cf37836c2015d41c82c6946a9c291"
  },
  {
    "url": "assets/js/47.d8d3e8ca.js",
    "revision": "c210a2a4d35f80780cb19ffe1248c72d"
  },
  {
    "url": "assets/js/48.21c47092.js",
    "revision": "927082dcdcc54cb34af65de1dca8ceb7"
  },
  {
    "url": "assets/js/49.8f33bf41.js",
    "revision": "9bbc5fc4fbff775a18bbaa9d34a6c82a"
  },
  {
    "url": "assets/js/5.5c929258.js",
    "revision": "0dd1ce215e81dd0ee30dee7a1aec5904"
  },
  {
    "url": "assets/js/50.2bb7331c.js",
    "revision": "e4c2695a2208d5529e835e7b4bbaa9bc"
  },
  {
    "url": "assets/js/51.4d2396e5.js",
    "revision": "c4b2398b0e5a3cd4b2a1ffac2c2c651e"
  },
  {
    "url": "assets/js/52.0e84d087.js",
    "revision": "f0c293114bf650b28478232325d1b61e"
  },
  {
    "url": "assets/js/53.565f1bda.js",
    "revision": "f8085e739442662ac888e7a7f3a0cb41"
  },
  {
    "url": "assets/js/54.f00a6377.js",
    "revision": "eed4d9e43bf0957bca819349f71eb3aa"
  },
  {
    "url": "assets/js/55.28a1773c.js",
    "revision": "9c79f7e077c7b9fbd8db95a0433ec3e0"
  },
  {
    "url": "assets/js/56.1ab5510e.js",
    "revision": "7e87937fd0c75363f2533b1229f9442d"
  },
  {
    "url": "assets/js/57.602b55fa.js",
    "revision": "fa7944cd8a8c8b079d7ac7443b1e241b"
  },
  {
    "url": "assets/js/58.63a16967.js",
    "revision": "4921ce4b7a5957206e4db868ad8d9650"
  },
  {
    "url": "assets/js/59.b11cbee8.js",
    "revision": "6b9090053c6f3285ec4b094c55775ecc"
  },
  {
    "url": "assets/js/6.d0455c1a.js",
    "revision": "410410dcb2c6b66e925b8aef17b6d5af"
  },
  {
    "url": "assets/js/60.229ed482.js",
    "revision": "e7901a607ff5bb3ad93cab387b1787aa"
  },
  {
    "url": "assets/js/61.85ebf5f1.js",
    "revision": "361fb273cd89e0cc250fb0ec077a81c3"
  },
  {
    "url": "assets/js/62.6387d050.js",
    "revision": "5767838c5ff524b3d4bb40fdf5a7e70d"
  },
  {
    "url": "assets/js/63.b5e7c8a0.js",
    "revision": "3d6753ed13832d965b89b07287fb7655"
  },
  {
    "url": "assets/js/64.451c3842.js",
    "revision": "925fd188392079f28ab7031a5abfe945"
  },
  {
    "url": "assets/js/65.96c5b847.js",
    "revision": "1fabb560ca89632dc0e85fa29f3e7ad0"
  },
  {
    "url": "assets/js/66.4d96eb9f.js",
    "revision": "e81b1fe2c14427dff0df9445f01df483"
  },
  {
    "url": "assets/js/67.ad7d9ee6.js",
    "revision": "fbdc442097bde2591b7240aa6b51d589"
  },
  {
    "url": "assets/js/68.381ba3fe.js",
    "revision": "1da80a40f155a45a2afe7353718912f0"
  },
  {
    "url": "assets/js/7.fe2e9c8c.js",
    "revision": "572fbd043948d111edc95494bad568ef"
  },
  {
    "url": "assets/js/app.2c634af2.js",
    "revision": "bac4fdb950d2f3d1e4b8f9565c02c021"
  },
  {
    "url": "assets/js/vendors~docsearch.d9992789.js",
    "revision": "6de2aa96a3a1b7f388a86b7ffed76452"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "f212692037ee540083ffc9b99ed2ef63"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "e56d225bd9129a7299dbdd1c231e1e79"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "301eeb0d4c12d3473e9759ab4d695344"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "49bc70d57872f85b4a2ced74d770d5ec"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "164f923e49dd29742000a833c134339b"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "d34f062436dc444f4e6fbbf2569c70cb"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "301cadd98b154c0c2b43df150439ef5b"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "6b6ea5d0f0e23fcd0da057c81c5f3269"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "17cb417db52b53afdb1e96bf7089e4f2"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "99507c08f6c9072165336924359ac8d2"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "8f7e430969100ac9fab081d023ee3e43"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "4697a79671104b1a33c46606152acbfa"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "d503245fa8c5757f3bb52787ec3ffb77"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "5cff726d1280fa2fc22baf8b1f93fd90"
  },
  {
    "url": "base/practice/1.cordova.html",
    "revision": "686e1602b46a3896b90db0d46fb9e440"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "443e69aa7ba103e8a7abb21b1831979c"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "1ac19b36b485b9f9a63c53607120b3eb"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "4af9f6782a078b64b2545bd12375ceca"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "56cc685ac08bafff3c50a6bae5ea8e32"
  },
  {
    "url": "base/practice/test.html",
    "revision": "1a78f8d3affd88ec67d7528314f3d1f3"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "9f4d77bf490770431e46bcc3bb0dd1b0"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "547e1f309b97764b2e83b87eb806e82e"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "f3a22de764e1cdc31c3f4d367c1abb96"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "b010975e64d29c2410fd4cd468784521"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "910064f18a38f72e89c3bb0ebc9948b3"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "668cbcf293418d7b8aa1803bdd472315"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "d9b10ed94c0059ec0db0a7c2a86f6828"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "0bd0c564f422d59464bf607e71f58e4b"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "889fd520c66d6e98998f3b3f91e26336"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "149abea3af9085a0c59acd32b0a49402"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "fad5c3ef877ade9417bf0b5a6699076c"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "a3e9ba0af9bc7eca26883f31484482a4"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "ae704a1e200e74533c149eec5c4a4aa8"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "a1bb07f2aad7633d80557d50438d7a97"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "6a34a450c59dbd67f8b16382b9eb06ae"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0580c0d98ce07135f2d5914be62d68f5"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6134df9e02d1f4f3442993ba6d103d2d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "59f513e48ac09ec8153dd872943d2537"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "456be226aed84277d351252bceaa8082"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "734785507fd481d8b25a6c855883f36a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "48e6f3f9512a5697622fd984e630de2b"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "fbf2f8269521f793be4fd8cb72c26b14"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "9ee37341688709cebd4714e3bb737561"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "ea4792db0f2bff24eb20aa3d7f1643f0"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "c189c332bd191e0d8d0d06d0337aaf45"
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
