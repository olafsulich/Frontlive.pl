if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,i,s)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const b={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return c;case"module":return b;default:return e(a)}})).then(e=>{const a=s(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UPMx-wzEXYOgf3941lMI3/_buildManifest.js",revision:"c28f482c5370343ba1104ee79eb2cfaf"},{url:"/_next/static/UPMx-wzEXYOgf3941lMI3/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/122871220829627de73f68cfc1e479303701bb2b.e9822ed50be8908c72cd.js",revision:"fc4b3685e3a54ca5636356665aaafe55"},{url:"/_next/static/chunks/75da2af423652fd0c814449032256e0bf7815bed.1d4ad9531c6f5860a0f2.js",revision:"1b66c8144575fd8a2944549c1d18301e"},{url:"/_next/static/chunks/be05e7c691ebb866a9a072f3ec32ccc4d8b2566f.383db3608cd5b18bd3ce.js",revision:"670806bde6d3f423828ec1495b6e2edc"},{url:"/_next/static/chunks/c9787b2e67d04485ea556b79e503c7f6cc1ff4d5.11f1172e1c5d9ed2e3da.js",revision:"0ce415cd2a439ba3daf846d5a44d3563"},{url:"/_next/static/chunks/cd5bab3e.a4bd50c80a045b0a4dca.js",revision:"a3c28947c2fda94a62dd37f1dca74423"},{url:"/_next/static/chunks/commons.e74ef894edb175a8fbff.js",revision:"2865ed63ba184c74b6ca77489dea1625"},{url:"/_next/static/chunks/f4d6e91da9ac3e40aff49b764a5d47f7a8339801.b0891a3a6c31b66080f9.js",revision:"d345753b6a849706b4eb00b8c6c32089"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-662eba8b802e28c82e98.js",revision:"542774ab2ac68c92c9bf77eb1154f8a3"},{url:"/_next/static/chunks/pages/_app-7379c3740098412cdd17.js",revision:"f0fea7f6705066a502baef9f33845ba7"},{url:"/_next/static/chunks/pages/_error-ece4f34a89496f1c9af1.js",revision:"ac922aef411d84f0f0e7c61400c64173"},{url:"/_next/static/chunks/pages/blog-172667fa9f61e38827d5.js",revision:"4395bc14af0bec2b7196b629eae6b9b5"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-afc8a7aae7dc1ce42d17.js",revision:"839eeb12b8e0c67f9f29ec36e766cbd3"},{url:"/_next/static/chunks/pages/index-14e544e6dbb5542dadec.js",revision:"cd812a161bec991d419c28cf638491c2"},{url:"/_next/static/chunks/pages/kategorie-a233626c2c01004864cf.js",revision:"28944a2bb6fcd1e228f26d9b903b5778"},{url:"/_next/static/chunks/pages/kategorie/%5Bslug%5D-dec030bdca173cb39678.js",revision:"a4545985299e3f88e033322085dcc8f8"},{url:"/_next/static/chunks/pages/o-mnie-b7d2c008bef67255457c.js",revision:"3b3daa0d82db31847b46c709aa9d09a3"},{url:"/_next/static/chunks/pages/portfolio-fc6e3868ee448cb58ad4.js",revision:"1034fffd4ca6c2cd2bd3bb5bd78497e6"},{url:"/_next/static/chunks/pages/portfolio/%5Bslug%5D-092198333309c031ce5e.js",revision:"11c44bc4d646eaeb002ed449090180e9"},{url:"/_next/static/chunks/polyfills-a928219009fd672c1f9f.js",revision:"18c1e069ba2cfd5f75859b660810a118"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/023fc8e90bcea10b7c25.css",revision:"47ba97e1004d0f636dab74dcd2d47133"},{url:"/_next/static/css/14d735667bf0964898de.css",revision:"5ce9add10cdd32e15cb63964c8811733"},{url:"/_next/static/css/23cede687db04e1bb653.css",revision:"7fb049391ecb6327b5b140cb63de1b63"},{url:"/_next/static/css/29eeb3c3b7782e5b17bf.css",revision:"dfe4cc77d3afa3cb5c13fbbd8e381d52"},{url:"/_next/static/css/435bfd899684fc25d747.css",revision:"588e43351f70497ae83cafb07f26ab9f"},{url:"/_next/static/css/746e308da15997f88d5e.css",revision:"2d9dcfe54cbe884a51d806b4a93439db"},{url:"/_next/static/css/8c0f28e8bcc17a7865fe.css",revision:"5cca180432bd9e34a6d6145b6e57ac58"},{url:"/_next/static/css/bdc09237e012503bcef9.css",revision:"1ea78d9c908947595896796287f99e06"},{url:"/_next/static/css/de23f5832227f039ea10.css",revision:"838d08e7826e712967f80c57ddbb55bd"},{url:"/_next/static/images/Apollo-app-5b9d63116b93e04484d962d042c1c762.png.webp",revision:"5b9d63116b93e04484d962d042c1c762"},{url:"/_next/static/images/Apollo-app-bd328fd4b6eba5c2608ef6cd76695136.png",revision:"bd328fd4b6eba5c2608ef6cd76695136"},{url:"/_next/static/images/Covid-ulotki-267eb0254ad4077445056e0ccb787107.png",revision:"267eb0254ad4077445056e0ccb787107"},{url:"/_next/static/images/Covid-ulotki-9e94d3ab6222b65dead423e0c2fc9b3e.png.webp",revision:"9e94d3ab6222b65dead423e0c2fc9b3e"},{url:"/_next/static/images/CyrisXD-Readme-2167bcee46ab94054939d0329b244169.png.webp",revision:"2167bcee46ab94054939d0329b244169"},{url:"/_next/static/images/CyrisXD-Readme-e5d926077879541bd424d29c3c749532.png",revision:"e5d926077879541bd424d29c3c749532"},{url:"/_next/static/images/DevTools-a11y-181e9b24f162b030bd2cd8ad7bf8e430.png",revision:"181e9b24f162b030bd2cd8ad7bf8e430"},{url:"/_next/static/images/DevTools-a11y-99b840200746238be5846ca69fa48387.png.webp",revision:"99b840200746238be5846ca69fa48387"},{url:"/_next/static/images/DevTools-vision-3b0e7f87222ad6b3a64aa7dc88bf68a3.jpg.webp",revision:"3b0e7f87222ad6b3a64aa7dc88bf68a3"},{url:"/_next/static/images/DevTools-vision-de5b6c8c6f74a403a8a5a08e1cbae377.jpg",revision:"de5b6c8c6f74a403a8a5a08e1cbae377"},{url:"/_next/static/images/Firestore-8c257f346776fc7fc4ceb6f9592b18fd.png",revision:"8c257f346776fc7fc4ceb6f9592b18fd"},{url:"/_next/static/images/Firestore-twórcy-a0f9d255a6ca02afb6a2721106466795.png.webp",revision:"a0f9d255a6ca02afb6a2721106466795"},{url:"/_next/static/images/Firestore-twórcy-e1651eb1c197b1e91f17e40738fa5674.png",revision:"e1651eb1c197b1e91f17e40738fa5674"},{url:"/_next/static/images/GraphQLvsRest-1038f8c4c58dd448db3436ef89d32da5.png.webp",revision:"1038f8c4c58dd448db3436ef89d32da5"},{url:"/_next/static/images/GraphQLvsRest-5049d9b249aca0efdec816b1f6373d5a.png",revision:"5049d9b249aca0efdec816b1f6373d5a"},{url:"/_next/static/images/InterfacevsType-ca0f2e36db5eef5415922ab26b99bf5a.jpeg",revision:"ca0f2e36db5eef5415922ab26b99bf5a"},{url:"/_next/static/images/InterfacevsType-ed22453d57376f452086e3373f43a3f6.jpeg.webp",revision:"ed22453d57376f452086e3373f43a3f6"},{url:"/_next/static/images/Jason-Readme-39bd01b90c4e8f68371b4941298bb22c.png",revision:"39bd01b90c4e8f68371b4941298bb22c"},{url:"/_next/static/images/Jason-Readme-f0c6f3567398acedc2502181bf63fe2d.png.webp",revision:"f0c6f3567398acedc2502181bf63fe2d"},{url:"/_next/static/images/Michael-Readme-036058a83929bd86b1e1f3df1d09281b.png",revision:"036058a83929bd86b1e1f3df1d09281b"},{url:"/_next/static/images/Michael-Readme-c19bf7a5df21a5292486fd7d902de2a8.png.webp",revision:"c19bf7a5df21a5292486fd7d902de2a8"},{url:"/_next/static/images/Monica-Readme-2f5ce6d904ff646ae5f199bea67170f9.png.webp",revision:"2f5ce6d904ff646ae5f199bea67170f9"},{url:"/_next/static/images/Monica-Readme-52c670f6e9a0e58ce172420f689ec9d7.png",revision:"52c670f6e9a0e58ce172420f689ec9d7"},{url:"/_next/static/images/Readme-Olaf-5bbdd72a6ccc6b141a3b89597d664f64.png.webp",revision:"5bbdd72a6ccc6b141a3b89597d664f64"},{url:"/_next/static/images/Readme-Olaf-8fe816f077b7118d7f71dfd70648f40b.png",revision:"8fe816f077b7118d7f71dfd70648f40b"},{url:"/_next/static/images/SR-01-c225942ad927206a0e00592cf142018b.png.webp",revision:"c225942ad927206a0e00592cf142018b"},{url:"/_next/static/images/SR-01-faf17d9420ac954dbd748e6d271ca2eb.png",revision:"faf17d9420ac954dbd748e6d271ca2eb"},{url:"/_next/static/images/SR-02-5496aba2b7b580e9582b6499e4c39510.png.webp",revision:"5496aba2b7b580e9582b6499e4c39510"},{url:"/_next/static/images/SR-02-e1786e664f68d923b66ef03c5aa7a655.png",revision:"e1786e664f68d923b66ef03c5aa7a655"},{url:"/_next/static/images/SR-03-7b7b5323074af7f8358314394d797b17.png",revision:"7b7b5323074af7f8358314394d797b17"},{url:"/_next/static/images/SR-03-8ceaab75e43106f37d9794e23abe7271.png.webp",revision:"8ceaab75e43106f37d9794e23abe7271"},{url:"/_next/static/images/TypedDocumentNode-86b1517f85d369daed33694cb3137d96.gif",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/_next/static/images/TypedDocumentNode-86b1517f85d369daed33694cb3137d96.gif.webp",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/_next/static/images/accessibility-tree-719fb4c36b861942cd35ac5d498844db.jpg",revision:"719fb4c36b861942cd35ac5d498844db"},{url:"/_next/static/images/accessibility-tree-dbdfc149bfface763ee2bfef8ab11ea2.jpg.webp",revision:"dbdfc149bfface763ee2bfef8ab11ea2"},{url:"/_next/static/images/alias-gql-48f1006b3c0e6be4350b4022425892d3.png",revision:"48f1006b3c0e6be4350b4022425892d3"},{url:"/_next/static/images/alias-gql-b559f73077151356f1a5eb9198141474.png.webp",revision:"b559f73077151356f1a5eb9198141474"},{url:"/_next/static/images/android-chrome-192x192-3ed83baa13122d8a5e201079728dc2e1.png",revision:"3ed83baa13122d8a5e201079728dc2e1"},{url:"/_next/static/images/android-chrome-512x512-3f7e0d596af14f59de4bc35e98bdba31.png.webp",revision:"3f7e0d596af14f59de4bc35e98bdba31"},{url:"/_next/static/images/android-chrome-512x512-84b227d4489a340e9d27255fb36b8793.png",revision:"84b227d4489a340e9d27255fb36b8793"},{url:"/_next/static/images/apollo-postacie-636931f32b98eed4b35367b8bcbe299f.png",revision:"636931f32b98eed4b35367b8bcbe299f"},{url:"/_next/static/images/apollo-postacie-beb1966cecda2849ab36b52fff2ea331.png.webp",revision:"beb1966cecda2849ab36b52fff2ea331"},{url:"/_next/static/images/apple-touch-icon-6601e4159da1fe4abc29e98d57f28f23.png",revision:"6601e4159da1fe4abc29e98d57f28f23"},{url:"/_next/static/images/atomic-316cee40636741ccfb625c39bd72039c.png",revision:"316cee40636741ccfb625c39bd72039c"},{url:"/_next/static/images/atomic-fb9c69140d49dda9750a329811289f43.png.webp",revision:"fb9c69140d49dda9750a329811289f43"},{url:"/_next/static/images/atoms-6dc3d4d52fd9ffbd628f5ca33ba63461.jpg",revision:"6dc3d4d52fd9ffbd628f5ca33ba63461"},{url:"/_next/static/images/atoms-e167c6d4b814333c14baa9d96c8f03c1.jpg.webp",revision:"e167c6d4b814333c14baa9d96c8f03c1"},{url:"/_next/static/images/category-css-3ec231a8c8d88fb890b0a5ebdbf197fd.png",revision:"3ec231a8c8d88fb890b0a5ebdbf197fd"},{url:"/_next/static/images/category-css-d351435e7812e10794d41c716e27f6fe.png.webp",revision:"d351435e7812e10794d41c716e27f6fe"},{url:"/_next/static/images/category-dostepnosc-a9811f27e5b2290bd112e5ef13e9c831.png",revision:"a9811f27e5b2290bd112e5ef13e9c831"},{url:"/_next/static/images/category-dostepnosc-e0c0e1e4f396f214b0d2b53d9d0ba206.png.webp",revision:"e0c0e1e4f396f214b0d2b53d9d0ba206"},{url:"/_next/static/images/category-firebase-6a2cbdc3775c18c369642f94e777c005.png.webp",revision:"6a2cbdc3775c18c369642f94e777c005"},{url:"/_next/static/images/category-firebase-fb2208bd56ce6765365bfcba7225cdae.png",revision:"fb2208bd56ce6765365bfcba7225cdae"},{url:"/_next/static/images/category-graphql-0b70dcd5e9a75d7793f6ec78a8da5b33.png.webp",revision:"0b70dcd5e9a75d7793f6ec78a8da5b33"},{url:"/_next/static/images/category-graphql-d3fff604d946f9e693b02f0101aa044e.png",revision:"d3fff604d946f9e693b02f0101aa044e"},{url:"/_next/static/images/category-javascript-5d3adacf7718dbe22ef1fbbcf4f069c4.png.webp",revision:"5d3adacf7718dbe22ef1fbbcf4f069c4"},{url:"/_next/static/images/category-javascript-d17e19e8206d98287d14361779144839.png",revision:"d17e19e8206d98287d14361779144839"},{url:"/_next/static/images/category-typescript-0bc72068b5105679b9d7dced5c069410.png.webp",revision:"0bc72068b5105679b9d7dced5c069410"},{url:"/_next/static/images/category-typescript-274e1b2e47b27806c17dc99fc7795bdc.png",revision:"274e1b2e47b27806c17dc99fc7795bdc"},{url:"/_next/static/images/category-webpack-3f114220e429e4ac3e0f43a69ef049cd.png",revision:"3f114220e429e4ac3e0f43a69ef049cd"},{url:"/_next/static/images/category-webpack-a8e0eae2728ccb6b58be5261b02bfc58.png.webp",revision:"a8e0eae2728ccb6b58be5261b02bfc58"},{url:"/_next/static/images/ci-test-97e1c462d0ee6b5e8fb97a2ff9ab409d.png.webp",revision:"97e1c462d0ee6b5e8fb97a2ff9ab409d"},{url:"/_next/static/images/ci-test-b3fcc2ef761a4d4fba4e19a0de2debbe.png",revision:"b3fcc2ef761a4d4fba4e19a0de2debbe"},{url:"/_next/static/images/clamp-fn-1-85a753591b5a39d3ab9599a22bda880a.png",revision:"85a753591b5a39d3ab9599a22bda880a"},{url:"/_next/static/images/clamp-fn-1-e53b614906bb515bc9f5b684ac322b2a.png.webp",revision:"e53b614906bb515bc9f5b684ac322b2a"},{url:"/_next/static/images/clamp-margin-730cceb0e9f6449f7b707d87404d87f2.png",revision:"730cceb0e9f6449f7b707d87404d87f2"},{url:"/_next/static/images/clamp-margin-f3e37a4d368c7974905687b7394cb94a.png.webp",revision:"f3e37a4d368c7974905687b7394cb94a"},{url:"/_next/static/images/clamp-paragraph-083b3b434fdc95a30d8704a460397e1e.png",revision:"083b3b434fdc95a30d8704a460397e1e"},{url:"/_next/static/images/clamp-paragraph-e204c92699874575c7d64124db955a62.png.webp",revision:"e204c92699874575c7d64124db955a62"},{url:"/_next/static/images/clamp-wsparcie-6ccf44663600ead8bd4cfb84f8614f22.png",revision:"6ccf44663600ead8bd4cfb84f8614f22"},{url:"/_next/static/images/clamp-wsparcie-a4c5237040b09dc336494705d9778b7a.png.webp",revision:"a4c5237040b09dc336494705d9778b7a"},{url:"/_next/static/images/color-contrast-485816a4ca3bc2c785b3960129b925de.png",revision:"485816a4ca3bc2c785b3960129b925de"},{url:"/_next/static/images/color-contrast-b481832be422e727d357346eeec93754.png.webp",revision:"b481832be422e727d357346eeec93754"},{url:"/_next/static/images/devfeedback-b87ed368ff6557a35b844c66f60ad53b.png.webp",revision:"b87ed368ff6557a35b844c66f60ad53b"},{url:"/_next/static/images/devfeedback-c636d62b72de57d466087186c0663da0.png",revision:"c636d62b72de57d466087186c0663da0"},{url:"/_next/static/images/gatsby-cta-620e5113806e44166478389760f3b521.png",revision:"620e5113806e44166478389760f3b521"},{url:"/_next/static/images/gatsby-cta-8a2764006ba3bd38842e1a51a49d22f8.png.webp",revision:"8a2764006ba3bd38842e1a51a49d22f8"},{url:"/_next/static/images/graphql-bf579a40b8b0fc3c65fce6c4290c2bed.svg",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/_next/static/images/graphql-bf579a40b8b0fc3c65fce6c4290c2bed.svg.webp",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/_next/static/images/grapqhl-playground-blank-2a2a3b780b39b043a99e62225ac2d5c6.png.webp",revision:"2a2a3b780b39b043a99e62225ac2d5c6"},{url:"/_next/static/images/grapqhl-playground-blank-863a7b2869671c0fc9c4e18d546ac6b9.png",revision:"863a7b2869671c0fc9c4e18d546ac6b9"},{url:"/_next/static/images/inne-846c927b763a489eddad5685a53e91de.png.webp",revision:"846c927b763a489eddad5685a53e91de"},{url:"/_next/static/images/karta-postaci-apollo-5593773b4499e057c2d0e29879feb2a6.png",revision:"5593773b4499e057c2d0e29879feb2a6"},{url:"/_next/static/images/karta-postaci-apollo-887256b7192c0cb3625cb7eb0933ed40.png.webp",revision:"887256b7192c0cb3625cb7eb0933ed40"},{url:"/_next/static/images/logo-0e655a6ef3db5d425c936e94e28076ab.png",revision:"0e655a6ef3db5d425c936e94e28076ab"},{url:"/_next/static/images/logo-cff84be654eb71789cc544db278fb541.png.webp",revision:"cff84be654eb71789cc544db278fb541"},{url:"/_next/static/images/main-b4f50f6123187592203d0c36ac9e311f.png.webp",revision:"b4f50f6123187592203d0c36ac9e311f"},{url:"/_next/static/images/main-e4ffec705f937f6f0f833fd3d8104fc3.png",revision:"e4ffec705f937f6f0f833fd3d8104fc3"},{url:"/_next/static/images/max-fn-1-1f18ee3868b1a935160667789084bf3f.png",revision:"1f18ee3868b1a935160667789084bf3f"},{url:"/_next/static/images/max-fn-1-b60df5bfc2a496a11a58b964ee594d01.png.webp",revision:"b60df5bfc2a496a11a58b964ee594d01"},{url:"/_next/static/images/max-fn-2-5200adf3a072ab2131ab395dbdbdb337.png",revision:"5200adf3a072ab2131ab395dbdbdb337"},{url:"/_next/static/images/max-fn-2-bda82ddff94c8a7249cbf11ca3ff8548.png.webp",revision:"bda82ddff94c8a7249cbf11ca3ff8548"},{url:"/_next/static/images/me-061535847224a3e368696574365f32b3.png.webp",revision:"061535847224a3e368696574365f32b3"},{url:"/_next/static/images/me-ec21695b80e8e4900f13e80a2e9e485f.png",revision:"ec21695b80e8e4900f13e80a2e9e485f"},{url:"/_next/static/images/min-fn-1-e0e82369bac025e848df789de5502d1d.png",revision:"e0e82369bac025e848df789de5502d1d"},{url:"/_next/static/images/min-fn-2-88cbd506fed763c78ffaa2cb9cc70e62.png",revision:"88cbd506fed763c78ffaa2cb9cc70e62"},{url:"/_next/static/images/molecule-71358925bac0478fa4d53d97b2aec24e.jpg",revision:"71358925bac0478fa4d53d97b2aec24e"},{url:"/_next/static/images/molecules-60eef7d87d83bce7d13a56f840888fbb.png",revision:"60eef7d87d83bce7d13a56f840888fbb"},{url:"/_next/static/images/molecules-6ab359cfd507701efd8e3ab24ac9d916.png.webp",revision:"6ab359cfd507701efd8e3ab24ac9d916"},{url:"/_next/static/images/mstile-150x150-b4689c0338289648c987396ffd60954e.png",revision:"b4689c0338289648c987396ffd60954e"},{url:"/_next/static/images/olaf-124f8b4612c11a4045d23e9475602c4d.png.webp",revision:"124f8b4612c11a4045d23e9475602c4d"},{url:"/_next/static/images/olaf-84c100b16b816677a1c5e4b0c92c225f.png",revision:"84c100b16b816677a1c5e4b0c92c225f"},{url:"/_next/static/images/organisms-0034f8ae8545553f63997e397a15c169.png.webp",revision:"0034f8ae8545553f63997e397a15c169"},{url:"/_next/static/images/organisms-084dcef2fb158aadab334c660c5871d1.jpg",revision:"084dcef2fb158aadab334c660c5871d1"},{url:"/_next/static/images/organisms-737729c50d427312cc9386798cd49ded.png",revision:"737729c50d427312cc9386798cd49ded"},{url:"/_next/static/images/pages-b9ef046d02aee4cfa272511c0e799d4d.jpg.webp",revision:"b9ef046d02aee4cfa272511c0e799d4d"},{url:"/_next/static/images/pages-eb19a3bc98cc129145376265e7e9b8d3.jpg",revision:"eb19a3bc98cc129145376265e7e9b8d3"},{url:"/_next/static/images/projecty-6def7270a592365476c54ddbe255d8fd.png",revision:"6def7270a592365476c54ddbe255d8fd"},{url:"/_next/static/images/przeprogramowani-5b725fa7f214afdfdee74c71e4ed4a33.png.webp",revision:"5b725fa7f214afdfdee74c71e4ed4a33"},{url:"/_next/static/images/przeprogramowani-f831c01065c86045bd396a39abf6e6bb.png",revision:"f831c01065c86045bd396a39abf6e6bb"},{url:"/_next/static/images/react-e201953d4bf08c6d4667305c72834072.png",revision:"e201953d4bf08c6d4667305c72834072"},{url:"/_next/static/images/react-e4f7a450155a19495e84c0c82300df9f.png.webp",revision:"e4f7a450155a19495e84c0c82300df9f"},{url:"/_next/static/images/readme-04bd5e2d057bf9495881ff90ce26155d.png.webp",revision:"04bd5e2d057bf9495881ff90ce26155d"},{url:"/_next/static/images/readme-aa66614154687f50a9298fa798cccb73.png",revision:"aa66614154687f50a9298fa798cccb73"},{url:"/_next/static/images/readme-template-2f342579959d4375db1d853e8cc36d80.png",revision:"2f342579959d4375db1d853e8cc36d80"},{url:"/_next/static/images/readme-template-b27eec3c33d47c11e5665d1f70918ea1.png.webp",revision:"b27eec3c33d47c11e5665d1f70918ea1"},{url:"/_next/static/images/recenzje-44c30ea562092d8e2275008df239d520.png",revision:"44c30ea562092d8e2275008df239d520"},{url:"/_next/static/images/templates-b214ba9428cb4ef0c29929faf2fe9b8b.jpg.webp",revision:"b214ba9428cb4ef0c29929faf2fe9b8b"},{url:"/_next/static/images/templates-e4ccae48036d6844ec6db4df7dbc7fe7.jpg",revision:"e4ccae48036d6844ec6db4df7dbc7fe7"},{url:"/_next/static/images/use-haki-569f841b9994e567d26ddeb2769b2656.png.webp",revision:"569f841b9994e567d26ddeb2769b2656"},{url:"/_next/static/images/use-haki-9a849c2c4e589227880b8591ceb3ca92.png",revision:"9a849c2c4e589227880b8591ceb3ca92"},{url:"/_next/static/images/whocanuse-6903af4641fbf7fdc1a1f5a944ab7325.png",revision:"6903af4641fbf7fdc1a1f5a944ab7325"},{url:"/_next/static/images/whocanuse-ba28256a09295cf420371fbd044e17d4.png.webp",revision:"ba28256a09295cf420371fbd044e17d4"},{url:"/_next/static/images/wsparcie-houdini-48a4ddcc6ac77c321cbc6b0ecb9daabb.png.webp",revision:"48a4ddcc6ac77c321cbc6b0ecb9daabb"},{url:"/_next/static/images/wsparcie-houdini-b584daf11ad4972a55e4a82edf47561d.png",revision:"b584daf11ad4972a55e4a82edf47561d"},{url:"/browserconfig.xml",revision:"d274430c2db6d83fbb368aeb171d5fa2"},{url:"/favicons/android-chrome-192x192.png",revision:"3ed83baa13122d8a5e201079728dc2e1"},{url:"/favicons/android-chrome-512x512.png",revision:"84b227d4489a340e9d27255fb36b8793"},{url:"/favicons/apple-touch-icon.png",revision:"6601e4159da1fe4abc29e98d57f28f23"},{url:"/favicons/favicon-16x16.png",revision:"6e21bb0063b15d9f8661eeb93964dafd"},{url:"/favicons/favicon-32x32.png",revision:"8a599f4d100652ab6698918d14237106"},{url:"/favicons/favicon.ico",revision:"4a958eed55fd112dcf97cad96ba7b822"},{url:"/favicons/mstile-150x150.png",revision:"b4689c0338289648c987396ffd60954e"},{url:"/favicons/safari-pinned-tab.svg",revision:"d1fe704636974ad72b2f6830d5cee737"},{url:"/fonts/CriteriaCFBold.ttf",revision:"a8a1593ce70a690380219fe00719e675"},{url:"/fonts/CriteriaCFBold.woff",revision:"e320ff75a066cfb5fd8072b90aa66e48"},{url:"/fonts/CriteriaCFDemibold.ttf",revision:"4c548f7c0863ea4aa143410c386fb34a"},{url:"/fonts/CriteriaCFDemibold.woff",revision:"450eec6514b85c04e557d25721c5603b"},{url:"/icons/anchor.svg",revision:"627c5d5e5cb9838617b2aea6141a5a1c"},{url:"/icons/arrow-right.svg",revision:"b45869161478ee5facc27c06f75a1449"},{url:"/icons/check-mark.svg",revision:"2e7eb535ba04f3974ff51d93e7dc4532"},{url:"/icons/circle.svg",revision:"7d569946bd3a7956772f09ea7ab7a1a5"},{url:"/icons/facebook.svg",revision:"246c880186fbe4d4859ad626a610cc23"},{url:"/icons/github.svg",revision:"c5297de4c7e16e0d8e681533ddd4e538"},{url:"/icons/graphql.svg",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/icons/linkedin.svg",revision:"7f596d1c7040bfae2b9b20821b7c229f"},{url:"/icons/quote.svg",revision:"d889c4bd0f773144e273147ea1ccda61"},{url:"/icons/sparkle.svg",revision:"cbdd14b75508f862600296514bff38cf"},{url:"/icons/twitter.svg",revision:"6e5885cfaebab3acc43c844645b00abd"},{url:"/icons/typescript.svg",revision:"c71c26eb3c7d1b42da2ad9008450ff2c"},{url:"/images/a11y.png",revision:"8878a0f560ff8da304a6542fc1ea1b14"},{url:"/images/atomic-design/atomic.png",revision:"316cee40636741ccfb625c39bd72039c"},{url:"/images/atomic-design/atoms.jpg",revision:"6dc3d4d52fd9ffbd628f5ca33ba63461"},{url:"/images/atomic-design/molecule.jpg",revision:"71358925bac0478fa4d53d97b2aec24e"},{url:"/images/atomic-design/molecules.png",revision:"60eef7d87d83bce7d13a56f840888fbb"},{url:"/images/atomic-design/organisms.jpg",revision:"084dcef2fb158aadab334c660c5871d1"},{url:"/images/atomic-design/organisms.png",revision:"737729c50d427312cc9386798cd49ded"},{url:"/images/atomic-design/pages.jpg",revision:"eb19a3bc98cc129145376265e7e9b8d3"},{url:"/images/atomic-design/templates.jpg",revision:"e4ccae48036d6844ec6db4df7dbc7fe7"},{url:"/images/blacksoft-logo.png",revision:"ceec50160a1ff11a5520b83f65c82d7a"},{url:"/images/category-css.png",revision:"3ec231a8c8d88fb890b0a5ebdbf197fd"},{url:"/images/category-dostepnosc.png",revision:"a9811f27e5b2290bd112e5ef13e9c831"},{url:"/images/category-firebase.png",revision:"fb2208bd56ce6765365bfcba7225cdae"},{url:"/images/category-graphql.png",revision:"d3fff604d946f9e693b02f0101aa044e"},{url:"/images/category-javascript.png",revision:"d17e19e8206d98287d14361779144839"},{url:"/images/category-typescript.png",revision:"274e1b2e47b27806c17dc99fc7795bdc"},{url:"/images/category-webpack.png",revision:"3f114220e429e4ac3e0f43a69ef049cd"},{url:"/images/continous-integration-z-netlify-i-circleci/ci-test.png",revision:"b3fcc2ef761a4d4fba4e19a0de2debbe"},{url:"/images/css-fluid-typography/clamp-fn-1.png",revision:"85a753591b5a39d3ab9599a22bda880a"},{url:"/images/css-fluid-typography/clamp-margin.png",revision:"730cceb0e9f6449f7b707d87404d87f2"},{url:"/images/css-fluid-typography/clamp-paragraph.png",revision:"083b3b434fdc95a30d8704a460397e1e"},{url:"/images/css-fluid-typography/clamp-wsparcie.png",revision:"6ccf44663600ead8bd4cfb84f8614f22"},{url:"/images/css-fluid-typography/fluid-1.mp4",revision:"5779f671e16e962a6c4791c5430389cc"},{url:"/images/css-fluid-typography/max-fn-1.png",revision:"1f18ee3868b1a935160667789084bf3f"},{url:"/images/css-fluid-typography/max-fn-2.png",revision:"5200adf3a072ab2131ab395dbdbdb337"},{url:"/images/css-fluid-typography/min-fn-1.png",revision:"e0e82369bac025e848df789de5502d1d"},{url:"/images/css-fluid-typography/min-fn-2.png",revision:"88cbd506fed763c78ffaa2cb9cc70e62"},{url:"/images/css-houdini/wsparcie-houdini.png",revision:"b584daf11ad4972a55e4a82edf47561d"},{url:"/images/css.png",revision:"32ead53a47966f17770095411ba97ceb"},{url:"/images/devfeedback.png",revision:"c636d62b72de57d466087186c0663da0"},{url:"/images/devfeedback1.png",revision:"4c0d3505dcc0e7533793f7dc72f4fa99"},{url:"/images/devops.png",revision:"0f60034df23d13caeb13227a356ceb44"},{url:"/images/dostepnosc-czytniki-ekranowe/DevTools-a11y.png",revision:"181e9b24f162b030bd2cd8ad7bf8e430"},{url:"/images/dostepnosc-czytniki-ekranowe/DevTools-vision.jpg",revision:"de5b6c8c6f74a403a8a5a08e1cbae377"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-01.png",revision:"faf17d9420ac954dbd748e6d271ca2eb"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-02.png",revision:"e1786e664f68d923b66ef03c5aa7a655"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-03.png",revision:"7b7b5323074af7f8358314394d797b17"},{url:"/images/dostepnosc-popularne-bledy/Covid-ulotki.png",revision:"267eb0254ad4077445056e0ccb787107"},{url:"/images/dostepnosc-semantyczny-html/accessibility-tree.jpg",revision:"719fb4c36b861942cd35ac5d498844db"},{url:"/images/dostepnosc-semantyczny-html/color-contrast.png",revision:"485816a4ca3bc2c785b3960129b925de"},{url:"/images/dostepnosc-semantyczny-html/whocanuse.png",revision:"6903af4641fbf7fdc1a1f5a944ab7325"},{url:"/images/firebase-pobieranie-danych/Firestore-twórcy.png",revision:"e1651eb1c197b1e91f17e40738fa5674"},{url:"/images/firebase-pobieranie-danych/Firestore.png",revision:"8c257f346776fc7fc4ceb6f9592b18fd"},{url:"/images/firebase.png",revision:"ed81dbc7c3f8047053f2890909132166"},{url:"/images/gatsby-cta.png",revision:"620e5113806e44166478389760f3b521"},{url:"/images/gatsby.png",revision:"75422f32e894f75846b2c7601383fd7a"},{url:"/images/github-profile-readme/CyrisXD-Readme.png",revision:"e5d926077879541bd424d29c3c749532"},{url:"/images/github-profile-readme/Jason-Readme.png",revision:"39bd01b90c4e8f68371b4941298bb22c"},{url:"/images/github-profile-readme/Michael-Readme.png",revision:"036058a83929bd86b1e1f3df1d09281b"},{url:"/images/github-profile-readme/Monica-Readme.png",revision:"52c670f6e9a0e58ce172420f689ec9d7"},{url:"/images/github-profile-readme/Readme-Olaf.png",revision:"8fe816f077b7118d7f71dfd70648f40b"},{url:"/images/graphql-apollo/Apollo-app.png",revision:"bd328fd4b6eba5c2608ef6cd76695136"},{url:"/images/graphql-apollo/apollo-postacie.png",revision:"636931f32b98eed4b35367b8bcbe299f"},{url:"/images/graphql-apollo/karta-postaci-apollo.png",revision:"5593773b4499e057c2d0e29879feb2a6"},{url:"/images/graphql-generator/TypedDocumentNode.gif",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/images/graphql-podstawy/GraphQLvsRest.png",revision:"5049d9b249aca0efdec816b1f6373d5a"},{url:"/images/graphql-podstawy/grapqhl-playground-blank.png",revision:"863a7b2869671c0fc9c4e18d546ac6b9"},{url:"/images/graphql-sredniozaawansowany/alias-gql.png",revision:"48f1006b3c0e6be4350b4022425892d3"},{url:"/images/graphql.png",revision:"616316b2719202a72b771ef296daf1a5"},{url:"/images/hypnocoders-logo.png",revision:"6bd279dcea8eefa16e7377a4e125fbc5"},{url:"/images/inne.png",revision:"b0fa5daceaee686b36707d8f63733306"},{url:"/images/javascript.png",revision:"d4917378901d9954c0e32187233a2075"},{url:"/images/logo.png",revision:"0e655a6ef3db5d425c936e94e28076ab"},{url:"/images/main.png",revision:"e4ffec705f937f6f0f833fd3d8104fc3"},{url:"/images/me.png",revision:"ec21695b80e8e4900f13e80a2e9e485f"},{url:"/images/olaf.png",revision:"84c100b16b816677a1c5e4b0c92c225f"},{url:"/images/projecty.png",revision:"6def7270a592365476c54ddbe255d8fd"},{url:"/images/przeprogramowani-logo.png",revision:"7c451b05e208e7ef21fd655610c999e8"},{url:"/images/przeprogramowani.png",revision:"f831c01065c86045bd396a39abf6e6bb"},{url:"/images/react.png",revision:"e201953d4bf08c6d4667305c72834072"},{url:"/images/readme-na-githubie-robisz-to-zle/readme-template.png",revision:"2f342579959d4375db1d853e8cc36d80"},{url:"/images/readme-na-githubie-robisz-to-zle/readme.png",revision:"aa66614154687f50a9298fa798cccb73"},{url:"/images/recenzje.png",revision:"44c30ea562092d8e2275008df239d520"},{url:"/images/svelte.png",revision:"f7a2394c93c7c9ae22e311a992fa8d20"},{url:"/images/typescript-klasy/InterfacevsType.jpeg",revision:"ca0f2e36db5eef5415922ab26b99bf5a"},{url:"/images/typescript.png",revision:"168b54f4f969cfb89e5cd9a4618eb215"},{url:"/images/use-haki.png",revision:"9a849c2c4e589227880b8591ceb3ca92"},{url:"/images/user.png",revision:"48753a99c169bddaadb6ceb3d6d3a7b5"},{url:"/images/webpack.png",revision:"ae1ff2980d85ddb92647c77c464bf26e"},{url:"/robots.txt",revision:"25ea0615cbd9efeabf349585a9ecff1d"},{url:"/rss.xml",revision:"509141599553b0d257a947d0de261b0f"},{url:"/site.webmanifest",revision:"6262fc80be90383de40022c1f43d28b6"},{url:"/sitemap.xml",revision:"1947b479bc4090a5f8ff6649e23bc08e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));