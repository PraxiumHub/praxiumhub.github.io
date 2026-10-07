/*
 * Lightweight i18n. English lives in the HTML itself; this file holds Korean and Japanese.
 *   data-i18n="key"                → replaces the element's innerHTML
 *   data-i18n-attr="attr:key|..."  → replaces attributes (alt, content, aria-label …)
 *   data-lang-only="ko"            → long blocks (e.g. the privacy policy) shown only in that language
 */
(function () {
  var LANGS = ["en", "ko", "ja"];

  var DICT = {
    ko: {
      "meta.title": "Praxium Hub — 관찰을 위해 빚어낸 살아있는 세계",
      "meta.desc": "Praxium Hub는 생명 관찰 시뮬레이션을 만드는 스튜디오입니다. 살아있는 생물을 바라보고, 돌보고, 배울 수 있는 차분한 앱을 만듭니다. 첫 작품은 Crystal Shrimp Tank입니다.",
      "skip": "본문으로 건너뛰기",
      "menu.open": "메뉴 열기",
      "menu.close": "메뉴 닫기",

      "nav.about": "소개",
      "nav.approach": "철학",
      "nav.journey": "앞으로",
      "nav.contact": "문의",
      "nav.home": "홈",

      "hero.eyebrow": "생명 관찰 시뮬레이션",
      "hero.title": "관찰을 위해 빚어낸<br><em>살아있는 세계.</em>",
      "hero.lede": "Praxium Hub는 살아있는 생물과 그들이 사는 생태계를 바라보고, 돌보고, 배울 수 있는 차분하고 정성스러운 애플리케이션을 만듭니다.",
      "hero.cta": "Crystal Shrimp Tank 보기",
      "hero.story": "우리의 이야기",

      "about.eyebrow": "이름의 의미",
      "about.title": "실천과 배움이 만나는 곳.",
      "about.eqLabel": "praxis 더하기 curriculum은 Praxium",
      "about.g1": "실천",
      "about.g2": "배움의 과정",
      "about.g3": "실천을 통한 배움",
      "about.p1": "Praxium Hub라는 이름은 <em>praxis</em>(실천)와 <em>curriculum</em>(배움의 과정)에서 왔습니다. 진정한 이해는 이론과 직접 해 보는 경험이 이어질 때 생긴다는 우리의 믿음을 담았습니다.",
      "about.p2": "실용적인 교육을 위한 틀로 시작한 Praxium Hub는 이제 생명 관찰 시뮬레이션을 만드는 스튜디오로 자랐습니다. 매일의 꾸준한 실천을 통해 호기심을 지식으로 바꾸는 앱을 만듭니다.",

      "approach.eyebrow": "우리의 방식",
      "approach.title": "이기기 위한 게임이 아니라,<br><em>바라보기 위한 세계를 만듭니다.</em>",
      "approach.p1.t": "바라보기",
      "approach.p1.d": "모든 생물은 저마다의 행동과 성장, 리듬을 따릅니다. 보여주기 위해 꾸며진 것은 없습니다. 그저 주의 깊게 바라보고 알아차리면 됩니다.",
      "approach.p2.t": "돌보기",
      "approach.p2.d": "살아있는 세계는 돌보는 방식에 반응합니다. 속도나 점수보다 작지만 꾸준한 돌봄이 더 중요합니다.",
      "approach.p3.t": "배우기",
      "approach.p3.d": "실제 생태계가 움직이는 원리를 바탕으로, 호기심이 이해로 이어지도록 합니다. 직접 해 보며 얻는 지식입니다.",

      "product.eyebrow": "첫 번째 작품",
      "product.status": "Google Play 출시 예정",
      "product.lede": "크리스탈 레드와 크리스탈 블랙 새우를 키우는 고요한 3D 수조입니다. 물을 건강하게 관리하고, 수조를 꾸미고, 세대가 이어지는 모습을 지켜보세요. 새우 한 마리 한 마리가 지닌 유전자가 무늬와 등급, 그리고 언젠가 태어날 새끼의 모습을 결정합니다.",
      "product.shotAlt": "Crystal Shrimp Tank의 수초 수조. 크리스탈 새우들이 유목을 오르고, 석등과 수초, 넓적한 돌 주변의 어두운 바닥재에서 먹이를 찾고 있습니다.",

      "f1.t": "유전과 등급",
      "f1.d": "유전자 기반의 유전이 모든 무늬를 결정합니다. C등급부터 SSS등급까지 개량하고, 숨겨진 희귀 변이를 찾아보세요.",
      "f2.t": "살아있는 생애",
      "f2.d": "새우는 자라고, 탈피하고, 짝을 찾고, 번식합니다. 구애의 춤을 지켜보고, 알을 돌보고, 갓 태어난 새끼를 맞이하세요.",
      "f3.t": "살아있는 물",
      "f3.d": "암모니아, 미네랄, 수온, pH는 시간에 따라 계속 변합니다. 수초는 도움이 되고, 소홀함은 금방 드러납니다. 균형을 맞추는 것이 실력입니다.",
      "f4.t": "수조 꾸미기",
      "f4.d": "아누비아스, 미크로소리움, 모스, 로터스를 심고 유목과 돌을 배치하세요. 조명과 배경도 기분에 맞게 바꿀 수 있습니다.",
      "f5.t": "물멍을 위한 설계",
      "f5.d": "정면, 위, 관찰, 수조 안 시점의 카메라를 지원합니다. 느긋한 흐름과 적은 관리 부담으로, 그저 곁에 두고 바라볼 수 있는 수조입니다.",
      "f6.t": "사진 모드",
      "f6.d": "마음에 드는 순간을 담아 갤러리에 저장하고, 직접 가꾼 수조를 공유해 보세요.",

      "meta.platform": "플랫폼",
      "meta.languages": "지원 언어",
      "meta.status": "상태",
      "meta.statusValue": "출시 막바지 준비 중",

      "detail.alt": "넓적한 돌과 수초, 신전 장식 사이의 어두운 바닥재에서 먹이를 찾는 크리스탈 레드 새우들의 근접 화면",
      "detail.caption": "제 속도로 먹이를 찾는 크리스탈 레드 새우들.",

      "journey.eyebrow": "앞으로의 여정",
      "journey.title": "수조 하나는 시작일 뿐입니다.",
      "journey.lede": "Crystal Shrimp Tank는 더 큰 여정의 출발점입니다. 저마다의 행동과 성장, 리듬을 지닌 다양한 생명으로 이 여정을 넓혀 갈 것입니다.",
      "journey.t1.tag": "지금",
      "journey.t1.d": "민물새우와 그 유전, 그리고 새우가 기대어 사는 작은 생태계.",
      "journey.t2.tag": "다음",
      "journey.t2.t": "더 많은 생명",
      "journey.t2.d": "새로운 생물과 서식지를, 각자가 실제로 살아가고 자라는 방식 그대로 담아냅니다.",
      "journey.t3.tag": "언제나",
      "journey.t3.t": "실천으로서의 관찰",
      "journey.t3.d": "인내가 이해로 보답받는 살아있는 세계들을 계속 늘려 갑니다.",

      "contact.title": "편하게 연락 주세요.",
      "contact.text": "질문, 의견, 협업 제안 등 무엇이든 환영합니다.",

      "footer.privacy": "개인정보처리방침",

      "privacy.title": "개인정보처리방침 — Praxium Hub",
      "privacy.desc": "Praxium Hub 및 Crystal Shrimp Tank의 개인정보처리방침입니다.",

      "nf.title": "페이지를 찾을 수 없습니다 — Praxium Hub",
      "nf.heading": "수조의 이 자리는 비어 있어요.",
      "nf.text": "찾으시는 페이지가 어디론가 흘러가 버렸습니다.",
      "nf.back": "Praxium Hub로 돌아가기"
    },

    ja: {
      "meta.title": "Praxium Hub — 観察するために生まれた、生きている世界",
      "meta.desc": "Praxium Hubは、生き物を観察するシミュレーションをつくるスタジオです。生き物を眺め、世話をし、学ぶための穏やかなアプリを届けます。第一作は Crystal Shrimp Tank です。",
      "skip": "本文へスキップ",
      "menu.open": "メニューを開く",
      "menu.close": "メニューを閉じる",

      "nav.about": "私たちについて",
      "nav.approach": "理念",
      "nav.journey": "これから",
      "nav.contact": "お問い合わせ",
      "nav.home": "ホーム",

      "hero.eyebrow": "生命観察シミュレーション",
      "hero.title": "観察するために生まれた、<br><em>生きている世界。</em>",
      "hero.lede": "Praxium Hubは、生き物とその暮らす生態系を眺め、世話をし、学ぶことができる、穏やかで丁寧につくられたアプリケーションを開発しています。",
      "hero.cta": "Crystal Shrimp Tank を見る",
      "hero.story": "私たちの物語",

      "about.eyebrow": "名前の由来",
      "about.title": "実践と学びが出会う場所。",
      "about.eqLabel": "praxis と curriculum で Praxium",
      "about.g1": "実践",
      "about.g2": "学びの課程",
      "about.g3": "実践を通じた学び",
      "about.p1": "Praxium Hubという名前は、<em>praxis</em>(実践)と<em>curriculum</em>(学びの課程)に由来します。本当の理解は、理論と実際の体験が結びついたときに生まれる——そんな私たちの信念を込めました。",
      "about.p2": "実践的な教育のためのフレームワークとして始まったPraxium Hubは、いま生命観察シミュレーションに取り組むスタジオへと成長しました。日々の根気強い実践を通じて、好奇心を知識へと変えるアプリをつくっています。",

      "approach.eyebrow": "私たちの考え方",
      "approach.title": "勝つためのゲームではなく、<br><em>観察するための世界をつくる。</em>",
      "approach.p1.t": "観る",
      "approach.p1.d": "どの生き物も、それぞれの行動・成長・リズムに従って生きています。見せるための演出はありません。ただ注意を向け、気づくだけです。",
      "approach.p2.t": "世話をする",
      "approach.p2.d": "生きた世界は、世話の仕方にこたえて変わっていきます。スピードやスコアよりも、小さく続けるケアが大切です。",
      "approach.p3.t": "学ぶ",
      "approach.p3.d": "実際の生態系の仕組みにもとづき、好奇心を理解へとつなげます。実践を通じて身につく知識です。",

      "product.eyebrow": "第一作",
      "product.status": "Google Play にて近日公開",
      "product.lede": "クリスタルレッドとクリスタルブラックのシュリンプを育てる、静かな3D水槽です。水質を健やかに保ち、水槽をレイアウトし、世代が受け継がれていく様子を見守りましょう。一匹一匹がもつ遺伝子が、模様やグレード、そしていつか生まれる子どもの姿を決めていきます。",
      "product.shotAlt": "Crystal Shrimp Tank の水草水槽。クリスタルシュリンプが流木を登り、石灯籠や水草、平たい石のまわりの黒いソイルでエサを探している。",

      "f1.t": "遺伝とグレード",
      "f1.d": "遺伝子にもとづく遺伝が、すべての模様を決めます。グレードCからSSSまで改良し、隠れたレア個体を探しましょう。",
      "f2.t": "リアルなライフサイクル",
      "f2.d": "シュリンプは成長し、脱皮し、求愛し、繁殖します。求愛のダンスを見守り、卵を見届け、生まれた稚エビを迎えましょう。",
      "f3.t": "生きている水",
      "f3.d": "アンモニア、ミネラル、水温、pHは時間とともに変化します。水草は助けになり、手を抜けばすぐに表れます。バランスこそが腕の見せどころです。",
      "f4.t": "水槽レイアウト",
      "f4.d": "アヌビアス、ミクロソリウム、モス、ロータスを植え、流木や石を配置しましょう。照明や背景も気分に合わせて変えられます。",
      "f5.t": "眺めるための設計",
      "f5.d": "正面・真上・観察・水槽内の各カメラに対応。ゆったりとしたペースで手間も少なく、ただそばに置いて眺めていられる水槽です。",
      "f6.t": "フォトモード",
      "f6.d": "お気に入りの瞬間を撮影してギャラリーに保存し、育てた水槽をシェアしましょう。",

      "meta.platform": "プラットフォーム",
      "meta.languages": "対応言語",
      "meta.status": "ステータス",
      "meta.statusValue": "リリースに向けて最終準備中",

      "detail.alt": "平たい石と水草、神殿の飾りのあいだの黒いソイルでエサを探すクリスタルレッドのクローズアップ",
      "detail.caption": "マイペースにエサを探す、クリスタルレッドたち。",

      "journey.eyebrow": "これからの旅",
      "journey.title": "ひとつの水槽は、はじまりにすぎません。",
      "journey.lede": "Crystal Shrimp Tankは、より大きな旅の出発点です。それぞれの行動・成長・リズムをもつ、さまざまな生き物へとこの旅を広げていきます。",
      "journey.t1.tag": "現在",
      "journey.t1.d": "淡水シュリンプとその遺伝、そしてシュリンプが暮らす小さな生態系。",
      "journey.t2.tag": "次に",
      "journey.t2.t": "さらなる生き物たち",
      "journey.t2.d": "新たな生き物と生息環境を、それぞれが実際に暮らし成長する姿にもとづいて描きます。",
      "journey.t3.tag": "いつも",
      "journey.t3.t": "実践としての観察",
      "journey.t3.d": "根気が理解として報われる、生きた世界を増やし続けます。",

      "contact.title": "お気軽にご連絡ください。",
      "contact.text": "ご質問、ご意見、協業のご提案など、何でもお寄せください。",

      "footer.privacy": "プライバシーポリシー",

      "privacy.title": "プライバシーポリシー — Praxium Hub",
      "privacy.desc": "Praxium Hub および Crystal Shrimp Tank のプライバシーポリシーです。",

      "nf.title": "ページが見つかりません — Praxium Hub",
      "nf.heading": "水槽のこの場所は、からっぽです。",
      "nf.text": "お探しのページは、どこかへ流れていってしまったようです。",
      "nf.back": "Praxium Hub に戻る"
    }
  };

  var root = document.documentElement;

  function t(key, fallback) {
    var d = DICT[root.lang];
    return (d && d[key] != null) ? d[key] : fallback;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "en";
    root.lang = lang;
    var d = DICT[lang] || {};

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.dataset.i18nSrc === undefined) el.dataset.i18nSrc = el.innerHTML;
      var v = d[el.dataset.i18n];
      el.innerHTML = v != null ? v : el.dataset.i18nSrc;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.dataset.i18nAttr.split("|").forEach(function (pair) {
        var p = pair.split(":"), attr = p[0], key = p[1];
        var store = "i18nOrig" + attr.replace(/(^|-)(\w)/g, function (_, __, c) { return c.toUpperCase(); });
        if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(attr) || "";
        var v = d[key];
        el.setAttribute(attr, v != null ? v : el.dataset[store]);
      });
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });

    root.classList.remove("i18n-wait");
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }

  function setLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);
      }
    } catch (e) {}
    apply(lang);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-set-lang]");
    if (b) setLang(b.dataset.setLang);
  });

  window.i18n = { t: t, setLang: setLang };
  apply(root.lang);
})();
