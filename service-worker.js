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
    "revision": "91b7e8d7f076255fa5eee47316b0b7de"
  },
  {
    "url": "assets/css/0.styles.5623a4ee.css",
    "revision": "88a42662f99c07aa7535e16d68d39c77"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.739a4000.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.3cd37b15.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.b70fef75.js",
    "revision": "68513c8d6ce5f8bdc469d4a5c988bdbd"
  },
  {
    "url": "assets/js/24.f95cd407.js",
    "revision": "86298f8b08917ca7abe392f7da633e05"
  },
  {
    "url": "assets/js/25.63077962.js",
    "revision": "3fbb1d88b3474c47d4f1a7bc521e589a"
  },
  {
    "url": "assets/js/26.c3c2d762.js",
    "revision": "0213803c42ee035577343a499939858d"
  },
  {
    "url": "assets/js/27.3fa2cea1.js",
    "revision": "aee03b76740ec6a27ca59efac7871159"
  },
  {
    "url": "assets/js/28.0634cf62.js",
    "revision": "7fc431561f80b9bf26755473b27c4126"
  },
  {
    "url": "assets/js/29.4bd78fbe.js",
    "revision": "a915140a59a5db0bbcb2eda0122422c2"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.6424378a.js",
    "revision": "07b3c01f70bc12eb65b0551df10855cb"
  },
  {
    "url": "assets/js/31.47cec15d.js",
    "revision": "734f796bcaace84bf969c9ba4a4f4aff"
  },
  {
    "url": "assets/js/32.d40f1d97.js",
    "revision": "1d468fd0e486edc12aad945e6469da2b"
  },
  {
    "url": "assets/js/33.e58a1342.js",
    "revision": "d5904691c36e6e3671b6372e1e496c19"
  },
  {
    "url": "assets/js/34.30a0a3b1.js",
    "revision": "7d7e9097c4c02236e4e3463faa745c42"
  },
  {
    "url": "assets/js/35.3be83656.js",
    "revision": "ae665880edf9992dab7673956c10579f"
  },
  {
    "url": "assets/js/36.009a247b.js",
    "revision": "fb44bafa08a4f3c0d2a9e3ee4f4f7d5d"
  },
  {
    "url": "assets/js/37.c00712d1.js",
    "revision": "553bb34bbf982b8863752bfe95c9bd59"
  },
  {
    "url": "assets/js/38.4c7593c5.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.c031d0db.js",
    "revision": "dbf6b4c6d35b765112e6cda698d4740c"
  },
  {
    "url": "assets/js/41.221f2e7b.js",
    "revision": "5da02e51842e2378314ef1b1f47e82cb"
  },
  {
    "url": "assets/js/42.03413c6b.js",
    "revision": "7fbff33cc90906cdc2ced33b78c6faa0"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.1d8cf640.js",
    "revision": "12edda269864a26a57674afed60af8f5"
  },
  {
    "url": "assets/js/45.b4e03677.js",
    "revision": "ef2fab02197de9877c7901b51e5d4b20"
  },
  {
    "url": "assets/js/46.8a012360.js",
    "revision": "b2d45ad23eb91dc87c96b7c138d0158a"
  },
  {
    "url": "assets/js/47.7d1144af.js",
    "revision": "3cf4576b12a83743b2da9500adb10787"
  },
  {
    "url": "assets/js/48.321987c9.js",
    "revision": "25cdae886b83efd774fc3e5b502ce8a1"
  },
  {
    "url": "assets/js/49.d4abd079.js",
    "revision": "ff8781dcb935c27844e6cfb4761b8560"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.7f7c5c5b.js",
    "revision": "7e58c8f73fb99f2f19af7549a2a64be4"
  },
  {
    "url": "assets/js/51.a5fbebbb.js",
    "revision": "27bb34492259904b0e345d3f653407fa"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.abc4fe68.js",
    "revision": "d222c3f4c290b98a3a4f2c9a43f4da23"
  },
  {
    "url": "assets/js/54.2bf230dd.js",
    "revision": "6152f44928eb4f5aa58cf62d8bd7f16d"
  },
  {
    "url": "assets/js/55.c48b66f1.js",
    "revision": "3e8bd89be92d6451d779ad8d6f9b5aad"
  },
  {
    "url": "assets/js/56.bc206002.js",
    "revision": "fe8f65f94e60bd40f798f0cef04ad86d"
  },
  {
    "url": "assets/js/57.8c30c115.js",
    "revision": "3e1f0ae0605bb4ab8c2fede7d2a13431"
  },
  {
    "url": "assets/js/58.980687dd.js",
    "revision": "14c780f4425920bf8f5afac98b09155b"
  },
  {
    "url": "assets/js/59.df5d027b.js",
    "revision": "b5b7a0ac43c0fff4de69559a7a5918c0"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.1ece1b19.js",
    "revision": "f23ac4fc15caef907c53e19627020801"
  },
  {
    "url": "assets/js/61.bcf61a4e.js",
    "revision": "4b24fc472daee7e5519d14aa5b833404"
  },
  {
    "url": "assets/js/62.eeb015e0.js",
    "revision": "94582e4c19e4223ebdffebcf9d7709d1"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.f9f1fe8f.js",
    "revision": "bc03c59b465d48a642c9a5d3c9864201"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.b43d7671.js",
    "revision": "1372f9c6aa958d0ad5df495daaadc308"
  },
  {
    "url": "assets/js/67.43a24117.js",
    "revision": "c72d757574418ad0f58e786ec6ae4253"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.b3e578b1.js",
    "revision": "212687bcdc0811ceb5ce6ba76c720337"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "7b768e20b9a7c01bb50960a4e889a36c"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "78792d175d2026adab230378e12bf6b3"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "6316ddc6e2da6af9196e9287fea6c357"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "d011467b110c30715f82d3cb632a3929"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "b3430a69da2467bbd92c746acac4c4ea"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "5117ff2fef7825ba36df8855fc58e6bc"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "ab0c70338287fc8d27efbbda3093bf29"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "28e91871b4150ee89402cb80931322df"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "ec1fc43ce9dda86fd65d1360d6100a32"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "d81847e3fe5fa2a75e9585307482031c"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "0757f0822c2d0b9bfa877fd7ba94ccaa"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "0e66d5cfbb7930db430b758e733214c8"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "6799119dcad8a0921fd01fb571aa9e29"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "45b7d5357c57581ad1cbdecb4ed3307b"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "8b2d3504755a8b90f344de81a2fd120c"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "14382554da7f8eb6fed92838f4eb18c7"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "79a28773691e92e3697e833324516a8f"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "19da5bb483898c4c9561fd72dcf4eb87"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "ff5f1c7f5a7f97dc49ad8080df58de45"
  },
  {
    "url": "base/practice/test.html",
    "revision": "02a6382c94395d5980076a633601a842"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "20f2af34ab5d2b75b06bd22b65febce4"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "f3ee9ef2e553762f9a1da8471d8f6e2a"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "29b92a1137ce72e8ecc62eb917702166"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "310715eab8770efd4f9309d209dc70e7"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "f3a650f3112efc3d2a46a3112b0c2b1b"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "0b99f040f71a1e06c2efdf1f28af848e"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "c88de5073774024e3ddaa07323f75173"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "f41539b4325eb28f117d909fbc17a066"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "d5e29d653a70947d820bff0856b2bfcb"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "8d098dfd2481357d0e650ddf559cd9ff"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "791723d67a2d3c7e560211b58b8053e3"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "0b9a6db907565a5dfd56f401e765dfcb"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "a78f958d336e1147b868e31837f9d36b"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "d9c4dae12c705883154f785061667db9"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "a818fbb0acab369195ea0aad3752e900"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "5f4a14acc78dde2c8aea18876b6f523f"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "749b88a9a6230b528ddd287f56c62786"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "2bc7caa7d793f49d8004bdb4da11d46b"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "b97527fb37332925bee3293b837689bb"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "b41f07eb9624fd9adb525f8f57ed1a02"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "f7aedbd5d43a54de1e510b111f1589e2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "30a96c5e6553fc422e02c33ca7122147"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4b8865eaac060141feb0c0c8be630385"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "c8d7b280fab0fa0f93effea6c58651b0"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ffe0975b3069ed7d2541ee327cd94862"
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
