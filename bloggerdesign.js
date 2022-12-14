function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
{"version":3,"sources":["../src/modal.js"],"names":["Modal","$","NAME","VERSION","DATA_KEY","EVENT_KEY","DATA_API_KEY","JQUERY_NO_CONFLICT","fn","TRANSITION_DURATION","BACKDROP_TRANSITION_DURATION","ESCAPE_KEYCODE","Default","backdrop","keyboard","focus","show","DefaultType","Event","HIDE","HIDDEN","SHOW","SHOWN","FOCUSIN","RESIZE","CLICK_DISMISS","KEYDOWN_DISMISS","MOUSEUP_DISMISS","MOUSEDOWN_DISMISS","CLICK_DATA_API","ClassName","SCROLLBAR_MEASURER","BACKDROP","OPEN","FADE","Selector","DIALOG","DATA_TOGGLE","DATA_DISMISS","FIXED_CONTENT","STICKY_CONTENT","NAVBAR_TOGGLER","element","config","_config","_getConfig","_element","_dialog","find","_backdrop","_isShown","_isBodyOverflowing","_ignoreBackdropClick","_originalBodyPadding","_scrollbarWidth","toggle","relatedTarget","hide","_isTransitioning","Util","supportsTransitionEnd","hasClass","showEvent","trigger","isDefaultPrevented","_checkScrollbar","_setScrollbar","_adjustDialog","document","body","addClass","_setEscapeEvent","_setResizeEvent","on","event","one","target","is","_showBackdrop","_showElement","preventDefault","hideEvent","transition","off","removeClass","TRANSITION_END","_hideModal","emulateTransitionEnd","dispose","removeData","window","handleUpdate","typeCheckConfig","parentNode","nodeType","Node","ELEMENT_NODE","appendChild","style","display","removeAttribute","scrollTop","reflow","_enforceFocus","shownEvent","transitionComplete","has","length","which","setAttribute","_resetAdjustments","_resetScrollbar","_removeBackdrop","remove","callback","animate","doAnimate","createElement","className","appendTo","currentTarget","callbackRemove","isModalOverflowing","scrollHeight","documentElement","clientHeight","paddingLeft","paddingRight","rect","getBoundingClientRect","left","right","innerWidth","_getScrollbarWidth","each","index","actualPadding","calculatedPadding","css","data","parseFloat","actualMargin","marginRight","calculatedMargin","padding","margin","scrollDiv","scrollbarWidth","width","clientWidth","removeChild","_jQueryInterface","TypeError","selector","getSelectorFromElement","tagName","$target","call","Constructor","noConflict"],"mappings":";;;;;;AAGA;;;;;;AAOA,IAAMA,QAAS,UAACC,CAAD,EAAO;AACpB;;;;;AAMA,MAAMC,OAA+B,OAArC;AACA,MAAMC,UAA+B,OAArC;AACA,MAAMC,WAA+B,UAArC;AACA,MAAMC,kBAAmCD,QAAzC;AACA,MAAME,eAA+B,WAArC;AACA,MAAMC,qBAA+BN,EAAEO,EAAF,CAAKN,IAAL,CAArC;AACA,MAAMO,sBAA+B,GAArC;AACA,MAAMC,+BAA+B,GAArC;AACA,MAAMC,iBAA+B,EAArC,CAfoB,CAeoB;;AAExC,MAAMC,UAAU;AACdC,cAAW,IADG;AAEdC,cAAW,IAFG;AAGdC,WAAW,IAHG;AAIdC,UAAW;AAJG,GAAhB;AAOA,MAAMC,cAAc;AAClBJ,cAAW,kBADO;AAElBC,cAAW,SAFO;AAGlBC,WAAW,SAHO;AAIlBC,UAAW;AAJO,GAApB;AAOA,MAAME,QAAQ;AACZC,mBAA2Bd,SADf;AAEZe,uBAA6Bf,SAFjB;AAGZgB,mBAA2BhB,SAHf;AAIZiB,qBAA4BjB,SAJhB;AAKZkB,yBAA8BlB,SALlB;AAMZmB,uBAA6BnB,SANjB;AAOZoB,qCAAoCpB,SAPxB;AAQZqB,yCAAsCrB,SAR1B;AASZsB,yCAAsCtB,SAT1B;AAUZuB,6CAAwCvB,SAV5B;AAWZwB,8BAA4BxB,SAA5B,GAAwCC;AAX5B,GAAd;AAcA,MAAMwB,YAAY;AAChBC,wBAAqB,yBADL;AAEhBC,cAAqB,gBAFL;AAGhBC,UAAqB,YAHL;AAIhBC,UAAqB,MAJL;AAKhBb,UAAqB;AALL,GAAlB;AAQA,MAAMc,WAAW;AACfC,YAAqB,eADN;AAEfC,iBAAqB,uBAFN;AAGfC,kBAAqB,wBAHN;AAIfC,mBAAqB,mDAJN;AAKfC,oBAAqB,aALN;AAMfC,oBAAqB;AAGvB;;;;;;AATiB,GAAjB;;AArDoB,MAoEdzC,KApEc;AAAA;AAAA;AAqElB,mBAAY0C,OAAZ,EAAqBC,MAArB,EAA6B;AAC3B,WAAKC,OAAL,GAA4B,KAAKC,UAAL,CAAgBF,MAAhB,CAA5B;AACA,WAAKG,QAAL,GAA4BJ,OAA5B;AACA,WAAKK,OAAL,GAA4B9C,EAAEyC,OAAF,EAAWM,IAAX,CAAgBb,SAASC,MAAzB,EAAiC,CAAjC,CAA5B;AACA,WAAKa,SAAL,GAA4B,IAA5B;AACA,WAAKC,QAAL,GAA4B,KAA5B;AACA,WAAKC,kBAAL,GAA4B,KAA5B;AACA,WAAKC,oBAAL,GAA4B,KAA5B;AACA,WAAKC,oBAAL,GAA4B,CAA5B;AACA,WAAKC,eAAL,GAA4B,CAA5B;AACD,KA/EiB,CAiFlB;;;AAjFkB;;AA2FlB;AA3FkB,WA6FlBC,MA7FkB,mBA6FXC,aA7FW,EA6FI;AACpB,aAAO,KAAKN,QAAL,GAAgB,KAAKO,IAAL,EAAhB,GAA8B,KAAKzC,IAAL,CAAUwC,aAAV,CAArC;AACD,KA/FiB;;AAAA,WAiGlBxC,IAjGkB,iBAiGbwC,aAjGa,EAiGE;AAAA;;AAClB,UAAI,KAAKE,gBAAL,IAAyB,KAAKR,QAAlC,EAA4C;AAC1C;AACD;;AAED,UAAIS,KAAKC,qBAAL,MAAgC3D,EAAE,KAAK6C,QAAP,EAAiBe,QAAjB,CAA0B/B,UAAUI,IAApC,CAApC,EAA+E;AAC7E,aAAKwB,gBAAL,GAAwB,IAAxB;AACD;;AAED,UAAMI,YAAY7D,EAAEiB,KAAF,CAAQA,MAAMG,IAAd,EAAoB;AACpCmC;AADoC,OAApB,CAAlB;AAIAvD,QAAE,KAAK6C,QAAP,EAAiBiB,OAAjB,CAAyBD,SAAzB;;AAEA,UAAI,KAAKZ,QAAL,IAAiBY,UAAUE,kBAAV,EAArB,EAAqD;AACnD;AACD;;AAED,WAAKd,QAAL,GAAgB,IAAhB;;AAEA,WAAKe,eAAL;;AACA,WAAKC,aAAL;;AAEA,WAAKC,aAAL;;AAEAlE,QAAEmE,SAASC,IAAX,EAAiBC,QAAjB,CAA0BxC,UAAUG,IAApC;;AAEA,WAAKsC,eAAL;;AACA,WAAKC,eAAL;;AAEAvE,QAAE,KAAK6C,QAAP,EAAiB2B,EAAjB,CACEvD,MAAMO,aADR,EAEEU,SAASG,YAFX,EAGE,UAACoC,KAAD;AAAA,eAAW,MAAKjB,IAAL,CAAUiB,KAAV,CAAX;AAAA,OAHF;AAMAzE,QAAE,KAAK8C,OAAP,EAAgB0B,EAAhB,CAAmBvD,MAAMU,iBAAzB,EAA4C,YAAM;AAChD3B,UAAE,MAAK6C,QAAP,EAAiB6B,GAAjB,CAAqBzD,MAAMS,eAA3B,EAA4C,UAAC+C,KAAD,EAAW;AACrD,cAAIzE,EAAEyE,MAAME,MAAR,EAAgBC,EAAhB,CAAmB,MAAK/B,QAAxB,CAAJ,EAAuC;AACrC,kBAAKM,oBAAL,GAA4B,IAA5B;AACD;AACF,SAJD;AAKD,OAND;;AAQA,WAAK0B,aAAL,CAAmB;AAAA,eAAM,MAAKC,YAAL,CAAkBvB,aAAlB,CAAN;AAAA,OAAnB;AACD,KA/IiB;;AAAA,WAiJlBC,IAjJkB,iBAiJbiB,KAjJa,EAiJN;AAAA;;AACV,UAAIA,KAAJ,EAAW;AACTA,cAAMM,cAAN;AACD;;AAED,UAAI,KAAKtB,gBAAL,IAAyB,CAAC,KAAKR,QAAnC,EAA6C;AAC3C;AACD;;AAED,UAAM+B,YAAYhF,EAAEiB,KAAF,CAAQA,MAAMC,IAAd,CAAlB;AAEAlB,QAAE,KAAK6C,QAAP,EAAiBiB,OAAjB,CAAyBkB,SAAzB;;AAEA,UAAI,CAAC,KAAK/B,QAAN,IAAkB+B,UAAUjB,kBAAV,EAAtB,EAAsD;AACpD;AACD;;AAED,WAAKd,QAAL,GAAgB,KAAhB;AAEA,UAAMgC,aAAavB,KAAKC,qBAAL,MAAgC3D,EAAE,KAAK6C,QAAP,EAAiBe,QAAjB,CAA0B/B,UAAUI,IAApC,CAAnD;;AAEA,UAAIgD,UAAJ,EAAgB;AACd,aAAKxB,gBAAL,GAAwB,IAAxB;AACD;;AAED,WAAKa,eAAL;;AACA,WAAKC,eAAL;;AAEAvE,QAAEmE,QAAF,EAAYe,GAAZ,CAAgBjE,MAAMK,OAAtB;AAEAtB,QAAE,KAAK6C,QAAP,EAAiBsC,WAAjB,CAA6BtD,UAAUT,IAAvC;AAEApB,QAAE,KAAK6C,QAAP,EAAiBqC,GAAjB,CAAqBjE,MAAMO,aAA3B;AACAxB,QAAE,KAAK8C,OAAP,EAAgBoC,GAAhB,CAAoBjE,MAAMU,iBAA1B;;AAEA,UAAIsD,UAAJ,EAAgB;AACdjF,UAAE,KAAK6C,QAAP,EACG6B,GADH,CACOhB,KAAK0B,cADZ,EAC4B,UAACX,KAAD;AAAA,iBAAW,OAAKY,UAAL,CAAgBZ,KAAhB,CAAX;AAAA,SAD5B,EAEGa,oBAFH,CAEwB9E,mBAFxB;AAGD,OAJD,MAIO;AACL,aAAK6E,UAAL;AACD;AACF,KA3LiB;;AAAA,WA6LlBE,OA7LkB,sBA6LR;AACRvF,QAAEwF,UAAF,CAAa,KAAK3C,QAAlB,EAA4B1C,QAA5B;AAEAH,QAAEyF,MAAF,EAAUtB,QAAV,EAAoB,KAAKtB,QAAzB,EAAmC,KAAKG,SAAxC,EAAmDkC,GAAnD,CAAuD9E,SAAvD;AAEA,WAAKuC,OAAL,GAA4B,IAA5B;AACA,WAAKE,QAAL,GAA4B,IAA5B;AACA,WAAKC,OAAL,GAA4B,IAA5B;AACA,WAAKE,SAAL,GAA4B,IAA5B;AACA,WAAKC,QAAL,GAA4B,IAA5B;AACA,WAAKC,kBAAL,GAA4B,IAA5B;AACA,WAAKC,oBAAL,GAA4B,IAA5B;AACA,WAAKE,eAAL,GAA4B,IAA5B;AACD,KA1MiB;;AAAA,WA4MlBqC,YA5MkB,2BA4MH;AACb,WAAKxB,aAAL;AACD,KA9MiB,EAgNlB;;;AAhNkB,WAkNlBtB,UAlNkB,uBAkNPF,MAlNO,EAkNC;AACjBA,4BACK/B,OADL,EAEK+B,MAFL;AAIAgB,WAAKiC,eAAL,CAAqB1F,IAArB,EAA2ByC,MAA3B,EAAmC1B,WAAnC;AACA,aAAO0B,MAAP;AACD,KAzNiB;;AAAA,WA2NlBoC,YA3NkB,yBA2NLvB,aA3NK,EA2NU;AAAA;;AAC1B,UAAM0B,aAAavB,KAAKC,qBAAL,MACjB3D,EAAE,KAAK6C,QAAP,EAAiBe,QAAjB,CAA0B/B,UAAUI,IAApC,CADF;;AAGA,UAAI,CAAC,KAAKY,QAAL,CAAc+C,UAAf,IACD,KAAK/C,QAAL,CAAc+C,UAAd,CAAyBC,QAAzB,KAAsCC,KAAKC,YAD9C,EAC4D;AAC1D;AACA5B,iBAASC,IAAT,CAAc4B,WAAd,CAA0B,KAAKnD,QAA/B;AACD;;AAED,WAAKA,QAAL,CAAcoD,KAAd,CAAoBC,OAApB,GAA8B,OAA9B;;AACA,WAAKrD,QAAL,CAAcsD,eAAd,CAA8B,aAA9B;;AACA,WAAKtD,QAAL,CAAcuD,SAAd,GAA0B,CAA1B;;AAEA,UAAInB,UAAJ,EAAgB;AACdvB,aAAK2C,MAAL,CAAY,KAAKxD,QAAjB;AACD;;AAED7C,QAAE,KAAK6C,QAAP,EAAiBwB,QAAjB,CAA0BxC,UAAUT,IAApC;;AAEA,UAAI,KAAKuB,OAAL,CAAa7B,KAAjB,EAAwB;AACtB,aAAKwF,aAAL;AACD;;AAED,UAAMC,aAAavG,EAAEiB,KAAF,CAAQA,MAAMI,KAAd,EAAqB;AACtCkC;AADsC,OAArB,CAAnB;;AAIA,UAAMiD,qBAAqB,SAArBA,kBAAqB,GAAM;AAC/B,YAAI,OAAK7D,OAAL,CAAa7B,KAAjB,EAAwB;AACtB,iBAAK+B,QAAL,CAAc/B,KAAd;AACD;;AACD,eAAK2C,gBAAL,GAAwB,KAAxB;AACAzD,UAAE,OAAK6C,QAAP,EAAiBiB,OAAjB,CAAyByC,UAAzB;AACD,OAND;;AAQA,UAAItB,UAAJ,EAAgB;AACdjF,UAAE,KAAK8C,OAAP,EACG4B,GADH,CACOhB,KAAK0B,cADZ,EAC4BoB,kBAD5B,EAEGlB,oBAFH,CAEwB9E,mBAFxB;AAGD,OAJD,MAIO;AACLgG;AACD;AACF,KAtQiB;;AAAA,WAwQlBF,aAxQkB,4BAwQF;AAAA;;AACdtG,QAAEmE,QAAF,EACGe,GADH,CACOjE,MAAMK,OADb,EACsB;AADtB,OAEGkD,EAFH,CAEMvD,MAAMK,OAFZ,EAEqB,UAACmD,KAAD,EAAW;AAC5B,YAAIN,aAAaM,MAAME,MAAnB,IACA,OAAK9B,QAAL,KAAkB4B,MAAME,MADxB,IAEA3E,EAAE,OAAK6C,QAAP,EAAiB4D,GAAjB,CAAqBhC,MAAME,MAA3B,EAAmC+B,MAAnC,KAA8C,CAFlD,EAEqD;AACnD,iBAAK7D,QAAL,CAAc/B,KAAd;AACD;AACF,OARH;AASD,KAlRiB;;AAAA,WAoRlBwD,eApRkB,8BAoRA;AAAA;;AAChB,UAAI,KAAKrB,QAAL,IAAiB,KAAKN,OAAL,CAAa9B,QAAlC,EAA4C;AAC1Cb,UAAE,KAAK6C,QAAP,EAAiB2B,EAAjB,CAAoBvD,MAAMQ,eAA1B,EAA2C,UAACgD,KAAD,EAAW;AACpD,cAAIA,MAAMkC,KAAN,KAAgBjG,cAApB,EAAoC;AAClC+D,kBAAMM,cAAN;;AACA,mBAAKvB,IAAL;AACD;AACF,SALD;AAMD,OAPD,MAOO,IAAI,CAAC,KAAKP,QAAV,EAAoB;AACzBjD,UAAE,KAAK6C,QAAP,EAAiBqC,GAAjB,CAAqBjE,MAAMQ,eAA3B;AACD;AACF,KA/RiB;;AAAA,WAiSlB8C,eAjSkB,8BAiSA;AAAA;;AAChB,UAAI,KAAKtB,QAAT,EAAmB;AACjBjD,UAAEyF,MAAF,EAAUjB,EAAV,CAAavD,MAAMM,MAAnB,EAA2B,UAACkD,KAAD;AAAA,iBAAW,OAAKiB,YAAL,CAAkBjB,KAAlB,CAAX;AAAA,SAA3B;AACD,OAFD,MAEO;AACLzE,UAAEyF,MAAF,EAAUP,GAAV,CAAcjE,MAAMM,MAApB;AACD;AACF,KAvSiB;;AAAA,WAySlB8D,UAzSkB,yBAySL;AAAA;;AACX,WAAKxC,QAAL,CAAcoD,KAAd,CAAoBC,OAApB,GAA8B,MAA9B;;AACA,WAAKrD,QAAL,CAAc+D,YAAd,CAA2B,aAA3B,EAA0C,IAA1C;;AACA,WAAKnD,gBAAL,GAAwB,KAAxB;;AACA,WAAKoB,aAAL,CAAmB,YAAM;AACvB7E,UAAEmE,SAASC,IAAX,EAAiBe,WAAjB,CAA6BtD,UAAUG,IAAvC;;AACA,eAAK6E,iBAAL;;AACA,eAAKC,eAAL;;AACA9G,UAAE,OAAK6C,QAAP,EAAiBiB,OAAjB,CAAyB7C,MAAME,MAA/B;AACD,OALD;AAMD,KAnTiB;;AAAA,WAqTlB4F,eArTkB,8BAqTA;AAChB,UAAI,KAAK/D,SAAT,EAAoB;AAClBhD,UAAE,KAAKgD,SAAP,EAAkBgE,MAAlB;AACA,aAAKhE,SAAL,GAAiB,IAAjB;AACD;AACF,KA1TiB;;AAAA,WA4TlB6B,aA5TkB,0BA4TJoC,QA5TI,EA4TM;AAAA;;AACtB,UAAMC,UAAUlH,EAAE,KAAK6C,QAAP,EAAiBe,QAAjB,CAA0B/B,UAAUI,IAApC,IACZJ,UAAUI,IADE,GACK,EADrB;;AAGA,UAAI,KAAKgB,QAAL,IAAiB,KAAKN,OAAL,CAAa/B,QAAlC,EAA4C;AAC1C,YAAMuG,YAAYzD,KAAKC,qBAAL,MAAgCuD,OAAlD;AAEA,aAAKlE,SAAL,GAAiBmB,SAASiD,aAAT,CAAuB,KAAvB,CAAjB;AACA,aAAKpE,SAAL,CAAeqE,SAAf,GAA2BxF,UAAUE,QAArC;;AAEA,YAAImF,OAAJ,EAAa;AACXlH,YAAE,KAAKgD,SAAP,EAAkBqB,QAAlB,CAA2B6C,OAA3B;AACD;;AAEDlH,UAAE,KAAKgD,SAAP,EAAkBsE,QAAlB,CAA2BnD,SAASC,IAApC;AAEApE,UAAE,KAAK6C,QAAP,EAAiB2B,EAAjB,CAAoBvD,MAAMO,aAA1B,EAAyC,UAACiD,KAAD,EAAW;AAClD,cAAI,OAAKtB,oBAAT,EAA+B;AAC7B,mBAAKA,oBAAL,GAA4B,KAA5B;AACA;AACD;;AACD,cAAIsB,MAAME,MAAN,KAAiBF,MAAM8C,aAA3B,EAA0C;AACxC;AACD;;AACD,cAAI,OAAK5E,OAAL,CAAa/B,QAAb,KAA0B,QAA9B,EAAwC;AACtC,mBAAKiC,QAAL,CAAc/B,KAAd;AACD,WAFD,MAEO;AACL,mBAAK0C,IAAL;AACD;AACF,SAbD;;AAeA,YAAI2D,SAAJ,EAAe;AACbzD,eAAK2C,MAAL,CAAY,KAAKrD,SAAjB;AACD;;AAEDhD,UAAE,KAAKgD,SAAP,EAAkBqB,QAAlB,CAA2BxC,UAAUT,IAArC;;AAEA,YAAI,CAAC6F,QAAL,EAAe;AACb;AACD;;AAED,YAAI,CAACE,SAAL,EAAgB;AACdF;AACA;AACD;;AAEDjH,UAAE,KAAKgD,SAAP,EACG0B,GADH,CACOhB,KAAK0B,cADZ,EAC4B6B,QAD5B,EAEG3B,oBAFH,CAEwB7E,4BAFxB;AAGD,OA7CD,MA6CO,IAAI,CAAC,KAAKwC,QAAN,IAAkB,KAAKD,SAA3B,EAAsC;AAC3ChD,UAAE,KAAKgD,SAAP,EAAkBmC,WAAlB,CAA8BtD,UAAUT,IAAxC;;AAEA,YAAMoG,iBAAiB,SAAjBA,cAAiB,GAAM;AAC3B,iBAAKT,eAAL;;AACA,cAAIE,QAAJ,EAAc;AACZA;AACD;AACF,SALD;;AAOA,YAAIvD,KAAKC,qBAAL,MACD3D,EAAE,KAAK6C,QAAP,EAAiBe,QAAjB,CAA0B/B,UAAUI,IAApC,CADH,EAC8C;AAC5CjC,YAAE,KAAKgD,SAAP,EACG0B,GADH,CACOhB,KAAK0B,cADZ,EAC4BoC,cAD5B,EAEGlC,oBAFH,CAEwB7E,4BAFxB;AAGD,SALD,MAKO;AACL+G;AACD;AACF,OAlBM,MAkBA,IAAIP,QAAJ,EAAc;AACnBA;AACD;AACF,KAlYiB,EAoYlB;AACA;AACA;AACA;;;AAvYkB,WAyYlB/C,aAzYkB,4BAyYF;AACd,UAAMuD,qBACJ,KAAK5E,QAAL,CAAc6E,YAAd,GAA6BvD,SAASwD,eAAT,CAAyBC,YADxD;;AAGA,UAAI,CAAC,KAAK1E,kBAAN,IAA4BuE,kBAAhC,EAAoD;AAClD,aAAK5E,QAAL,CAAcoD,KAAd,CAAoB4B,WAApB,GAAqC,KAAKxE,eAA1C;AACD;;AAED,UAAI,KAAKH,kBAAL,IAA2B,CAACuE,kBAAhC,EAAoD;AAClD,aAAK5E,QAAL,CAAcoD,KAAd,CAAoB6B,YAApB,GAAsC,KAAKzE,eAA3C;AACD;AACF,KApZiB;;AAAA,WAsZlBwD,iBAtZkB,gCAsZE;AAClB,WAAKhE,QAAL,CAAcoD,KAAd,CAAoB4B,WAApB,GAAkC,EAAlC;AACA,WAAKhF,QAAL,CAAcoD,KAAd,CAAoB6B,YAApB,GAAmC,EAAnC;AACD,KAzZiB;;AAAA,WA2ZlB9D,eA3ZkB,8BA2ZA;AAChB,UAAM+D,OAAO5D,SAASC,IAAT,CAAc4D,qBAAd,EAAb;AACA,WAAK9E,kBAAL,GAA0B6E,KAAKE,IAAL,GAAYF,KAAKG,KAAjB,GAAyBzC,OAAO0C,UAA1D;AACA,WAAK9E,eAAL,GAAuB,KAAK+E,kBAAL,EAAvB;AACD,KA/ZiB;;AAAA,WAialBnE,aAjakB,4BAiaF;AAAA;;AACd,UAAI,KAAKf,kBAAT,EAA6B;AAC3B;AACA;AAEA;AACAlD,UAAEkC,SAASI,aAAX,EAA0B+F,IAA1B,CAA+B,UAACC,KAAD,EAAQ7F,OAAR,EAAoB;AACjD,cAAM8F,gBAAgBvI,EAAEyC,OAAF,EAAW,CAAX,EAAcwD,KAAd,CAAoB6B,YAA1C;AACA,cAAMU,oBAAoBxI,EAAEyC,OAAF,EAAWgG,GAAX,CAAe,eAAf,CAA1B;AACAzI,YAAEyC,OAAF,EAAWiG,IAAX,CAAgB,eAAhB,EAAiCH,aAAjC,EAAgDE,GAAhD,CAAoD,eAApD,EAAwEE,WAAWH,iBAAX,IAAgC,OAAKnF,eAA7G;AACD,SAJD,EAL2B,CAW3B;;AACArD,UAAEkC,SAASK,cAAX,EAA2B8F,IAA3B,CAAgC,UAACC,KAAD,EAAQ7F,OAAR,EAAoB;AAClD,cAAMmG,eAAe5I,EAAEyC,OAAF,EAAW,CAAX,EAAcwD,KAAd,CAAoB4C,WAAzC;AACA,cAAMC,mBAAmB9I,EAAEyC,OAAF,EAAWgG,GAAX,CAAe,cAAf,CAAzB;AACAzI,YAAEyC,OAAF,EAAWiG,IAAX,CAAgB,cAAhB,EAAgCE,YAAhC,EAA8CH,GAA9C,CAAkD,cAAlD,EAAqEE,WAAWG,gBAAX,IAA+B,OAAKzF,eAAzG;AACD,SAJD,EAZ2B,CAkB3B;;AACArD,UAAEkC,SAASM,cAAX,EAA2B6F,IAA3B,CAAgC,UAACC,KAAD,EAAQ7F,OAAR,EAAoB;AAClD,cAAMmG,eAAe5I,EAAEyC,OAAF,EAAW,CAAX,EAAcwD,KAAd,CAAoB4C,WAAzC;AACA,cAAMC,mBAAmB9I,EAAEyC,OAAF,EAAWgG,GAAX,CAAe,cAAf,CAAzB;AACAzI,YAAEyC,OAAF,EAAWiG,IAAX,CAAgB,cAAhB,EAAgCE,YAAhC,EAA8CH,GAA9C,CAAkD,cAAlD,EAAqEE,WAAWG,gBAAX,IAA+B,OAAKzF,eAAzG;AACD,SAJD,EAnB2B,CAyB3B;;AACA,YAAMkF,gBAAgBpE,SAASC,IAAT,CAAc6B,KAAd,CAAoB6B,YAA1C;AACA,YAAMU,oBAAoBxI,EAAE,MAAF,EAAUyI,GAAV,CAAc,eAAd,CAA1B;AACAzI,UAAE,MAAF,EAAU0I,IAAV,CAAe,eAAf,EAAgCH,aAAhC,EAA+CE,GAA/C,CAAmD,eAAnD,EAAuEE,WAAWH,iBAAX,IAAgC,KAAKnF,eAA5G;AACD;AACF,KAhciB;;AAAA,WAkclByD,eAlckB,8BAkcA;AAChB;AACA9G,QAAEkC,SAASI,aAAX,EAA0B+F,IAA1B,CAA+B,UAACC,KAAD,EAAQ7F,OAAR,EAAoB;AACjD,YAAMsG,UAAU/I,EAAEyC,OAAF,EAAWiG,IAAX,CAAgB,eAAhB,CAAhB;;AACA,YAAI,OAAOK,OAAP,KAAmB,WAAvB,EAAoC;AAClC/I,YAAEyC,OAAF,EAAWgG,GAAX,CAAe,eAAf,EAAgCM,OAAhC,EAAyCvD,UAAzC,CAAoD,eAApD;AACD;AACF,OALD,EAFgB,CAShB;;AACAxF,QAAKkC,SAASK,cAAd,UAAiCL,SAASM,cAA1C,EAA4D6F,IAA5D,CAAiE,UAACC,KAAD,EAAQ7F,OAAR,EAAoB;AACnF,YAAMuG,SAAShJ,EAAEyC,OAAF,EAAWiG,IAAX,CAAgB,cAAhB,CAAf;;AACA,YAAI,OAAOM,MAAP,KAAkB,WAAtB,EAAmC;AACjChJ,YAAEyC,OAAF,EAAWgG,GAAX,CAAe,cAAf,EAA+BO,MAA/B,EAAuCxD,UAAvC,CAAkD,cAAlD;AACD;AACF,OALD,EAVgB,CAiBhB;;AACA,UAAMuD,UAAU/I,EAAE,MAAF,EAAU0I,IAAV,CAAe,eAAf,CAAhB;;AACA,UAAI,OAAOK,OAAP,KAAmB,WAAvB,EAAoC;AAClC/I,UAAE,MAAF,EAAUyI,GAAV,CAAc,eAAd,EAA+BM,OAA/B,EAAwCvD,UAAxC,CAAmD,eAAnD;AACD;AACF,KAxdiB;;AAAA,WA0dlB4C,kBA1dkB,iCA0dG;AAAE;AACrB,UAAMa,YAAY9E,SAASiD,aAAT,CAAuB,KAAvB,CAAlB;AACA6B,gBAAU5B,SAAV,GAAsBxF,UAAUC,kBAAhC;AACAqC,eAASC,IAAT,CAAc4B,WAAd,CAA0BiD,SAA1B;AACA,UAAMC,iBAAiBD,UAAUjB,qBAAV,GAAkCmB,KAAlC,GAA0CF,UAAUG,WAA3E;AACAjF,eAASC,IAAT,CAAciF,WAAd,CAA0BJ,SAA1B;AACA,aAAOC,cAAP;AACD,KAjeiB,EAmelB;;;AAnekB,UAqeXI,gBAreW,6BAqeM5G,MAreN,EAqeca,aAred,EAqe6B;AAC7C,aAAO,KAAK8E,IAAL,CAAU,YAAY;AAC3B,YAAIK,OAAO1I,EAAE,IAAF,EAAQ0I,IAAR,CAAavI,QAAb,CAAX;;AACA,YAAMwC,uBACD5C,MAAMY,OADL,EAEDX,EAAE,IAAF,EAAQ0I,IAAR,EAFC,EAGD,OAAOhG,MAAP,KAAkB,QAAlB,IAA8BA,MAH7B,CAAN;;AAMA,YAAI,CAACgG,IAAL,EAAW;AACTA,iBAAO,IAAI3I,KAAJ,CAAU,IAAV,EAAgB4C,OAAhB,CAAP;AACA3C,YAAE,IAAF,EAAQ0I,IAAR,CAAavI,QAAb,EAAuBuI,IAAvB;AACD;;AAED,YAAI,OAAOhG,MAAP,KAAkB,QAAtB,EAAgC;AAC9B,cAAI,OAAOgG,KAAKhG,MAAL,CAAP,KAAwB,WAA5B,EAAyC;AACvC,kBAAM,IAAI6G,SAAJ,wBAAkC7G,MAAlC,QAAN;AACD;;AACDgG,eAAKhG,MAAL,EAAaa,aAAb;AACD,SALD,MAKO,IAAIZ,QAAQ5B,IAAZ,EAAkB;AACvB2H,eAAK3H,IAAL,CAAUwC,aAAV;AACD;AACF,OArBM,CAAP;AAsBD,KA5fiB;;AAAA;AAAA;AAAA,0BAmFG;AACnB,eAAOrD,OAAP;AACD;AArFiB;AAAA;AAAA,0BAuFG;AACnB,eAAOS,OAAP;AACD;AAzFiB;;AAAA;AAAA;AA+fpB;;;;;;;AAMAX,IAAEmE,QAAF,EAAYK,EAAZ,CAAevD,MAAMW,cAArB,EAAqCM,SAASE,WAA9C,EAA2D,UAAUqC,KAAV,EAAiB;AAAA;;AAC1E,QAAIE,MAAJ;AACA,QAAM6E,WAAW9F,KAAK+F,sBAAL,CAA4B,IAA5B,CAAjB;;AAEA,QAAID,QAAJ,EAAc;AACZ7E,eAAS3E,EAAEwJ,QAAF,EAAY,CAAZ,CAAT;AACD;;AAED,QAAM9G,SAAS1C,EAAE2E,MAAF,EAAU+D,IAAV,CAAevI,QAAf,IACX,QADW,gBAERH,EAAE2E,MAAF,EAAU+D,IAAV,EAFQ,EAGR1I,EAAE,IAAF,EAAQ0I,IAAR,EAHQ,CAAf;;AAMA,QAAI,KAAKgB,OAAL,KAAiB,GAAjB,IAAwB,KAAKA,OAAL,KAAiB,MAA7C,EAAqD;AACnDjF,YAAMM,cAAN;AACD;;AAED,QAAM4E,UAAU3J,EAAE2E,MAAF,EAAUD,GAAV,CAAczD,MAAMG,IAApB,EAA0B,UAACyC,SAAD,EAAe;AACvD,UAAIA,UAAUE,kBAAV,EAAJ,EAAoC;AAClC;AACA;AACD;;AAED4F,cAAQjF,GAAR,CAAYzD,MAAME,MAAlB,EAA0B,YAAM;AAC9B,YAAInB,WAAQ4E,EAAR,CAAW,UAAX,CAAJ,EAA4B;AAC1B,kBAAK9D,KAAL;AACD;AACF,OAJD;AAKD,KAXe,CAAhB;;AAaAf,UAAMuJ,gBAAN,CAAuBM,IAAvB,CAA4B5J,EAAE2E,MAAF,CAA5B,EAAuCjC,MAAvC,EAA+C,IAA/C;AACD,GAhCD;AAkCA;;;;;;AAMA1C,IAAEO,EAAF,CAAKN,IAAL,IAAaF,MAAMuJ,gBAAnB;AACAtJ,IAAEO,EAAF,CAAKN,IAAL,EAAW4J,WAAX,GAAyB9J,KAAzB;;AACAC,IAAEO,EAAF,CAAKN,IAAL,EAAW6J,UAAX,GAAwB,YAAY;AAClC9J,MAAEO,EAAF,CAAKN,IAAL,IAAaK,kBAAb;AACA,WAAOP,MAAMuJ,gBAAb;AACD,GAHD;;AAKA,SAAOvJ,KAAP;AACD,CArjBa,CAqjBXC,CArjBW,CAAd","file":"modal.js","sourcesContent":["import $ from 'jquery'\nimport Util from './util'\n\n/**\n * --------------------------------------------------------------------------\n * Bootstrap (v4.0.0): modal.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst Modal = (($) => {\n  /**\n   * ------------------------------------------------------------------------\n   * Constants\n   * ------------------------------------------------------------------------\n   */\n\n  const NAME                         = 'modal'\n  const VERSION                      = '4.0.0'\n  const DATA_KEY                     = 'bs.modal'\n  const EVENT_KEY                    = `.${DATA_KEY}`\n  const DATA_API_KEY                 = '.data-api'\n  const JQUERY_NO_CONFLICT           = $.fn[NAME]\n  const TRANSITION_DURATION          = 300\n  const BACKDROP_TRANSITION_DURATION = 150\n  const ESCAPE_KEYCODE               = 27 // KeyboardEvent.which value for Escape (Esc) key\n\n  const Default = {\n    backdrop : true,\n    keyboard : true,\n    focus    : true,\n    show     : true\n  }\n\n  const DefaultType = {\n    backdrop : '(boolean|string)',\n    keyboard : 'boolean',\n    focus    : 'boolean',\n    show     : 'boolean'\n  }\n\n  const Event = {\n    HIDE              : `hide${EVENT_KEY}`,\n    HIDDEN            : `hidden${EVENT_KEY}`,\n    SHOW              : `show${EVENT_KEY}`,\n    SHOWN             : `shown${EVENT_KEY}`,\n    FOCUSIN           : `focusin${EVENT_KEY}`,\n    RESIZE            : `resize${EVENT_KEY}`,\n    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,\n    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,\n    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,\n    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,\n    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`\n  }\n\n  const ClassName = {\n    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',\n    BACKDROP           : 'modal-backdrop',\n    OPEN               : 'modal-open',\n    FADE               : 'fade',\n    SHOW               : 'show'\n  }\n\n  const Selector = {\n    DIALOG             : '.modal-dialog',\n    DATA_TOGGLE        : '[data-toggle=\"modal\"]',\n    DATA_DISMISS       : '[data-dismiss=\"modal\"]',\n    FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',\n    STICKY_CONTENT     : '.sticky-top',\n    NAVBAR_TOGGLER     : '.navbar-toggler'\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Class Definition\n   * ------------------------------------------------------------------------\n   */\n\n  class Modal {\n    constructor(element, config) {\n      this._config              = this._getConfig(config)\n      this._element             = element\n      this._dialog              = $(element).find(Selector.DIALOG)[0]\n      this._backdrop            = null\n      this._isShown             = false\n      this._isBodyOverflowing   = false\n      this._ignoreBackdropClick = false\n      this._originalBodyPadding = 0\n      this._scrollbarWidth      = 0\n    }\n\n    // Getters\n\n    static get VERSION() {\n      return VERSION\n    }\n\n    static get Default() {\n      return Default\n    }\n\n    // Public\n\n    toggle(relatedTarget) {\n      return this._isShown ? this.hide() : this.show(relatedTarget)\n    }\n\n    show(relatedTarget) {\n      if (this._isTransitioning || this._isShown) {\n        return\n      }\n\n      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {\n        this._isTransitioning = true\n      }\n\n      const showEvent = $.Event(Event.SHOW, {\n        relatedTarget\n      })\n\n      $(this._element).trigger(showEvent)\n\n      if (this._isShown || showEvent.isDefaultPrevented()) {\n        return\n      }\n\n      this._isShown = true\n\n      this._checkScrollbar()\n      this._setScrollbar()\n\n      this._adjustDialog()\n\n      $(document.body).addClass(ClassName.OPEN)\n\n      this._setEscapeEvent()\n      this._setResizeEvent()\n\n      $(this._element).on(\n        Event.CLICK_DISMISS,\n        Selector.DATA_DISMISS,\n        (event) => this.hide(event)\n      )\n\n      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {\n        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {\n          if ($(event.target).is(this._element)) {\n            this._ignoreBackdropClick = true\n          }\n        })\n      })\n\n      this._showBackdrop(() => this._showElement(relatedTarget))\n    }\n\n    hide(event) {\n      if (event) {\n        event.preventDefault()\n      }\n\n      if (this._isTransitioning || !this._isShown) {\n        return\n      }\n\n      const hideEvent = $.Event(Event.HIDE)\n\n      $(this._element).trigger(hideEvent)\n\n      if (!this._isShown || hideEvent.isDefaultPrevented()) {\n        return\n      }\n\n      this._isShown = false\n\n      const transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)\n\n      if (transition) {\n        this._isTransitioning = true\n      }\n\n      this._setEscapeEvent()\n      this._setResizeEvent()\n\n      $(document).off(Event.FOCUSIN)\n\n      $(this._element).removeClass(ClassName.SHOW)\n\n      $(this._element).off(Event.CLICK_DISMISS)\n      $(this._dialog).off(Event.MOUSEDOWN_DISMISS)\n\n      if (transition) {\n        $(this._element)\n          .one(Util.TRANSITION_END, (event) => this._hideModal(event))\n          .emulateTransitionEnd(TRANSITION_DURATION)\n      } else {\n        this._hideModal()\n      }\n    }\n\n    dispose() {\n      $.removeData(this._element, DATA_KEY)\n\n      $(window, document, this._element, this._backdrop).off(EVENT_KEY)\n\n      this._config              = null\n      this._element             = null\n      this._dialog              = null\n      this._backdrop            = null\n      this._isShown             = null\n      this._isBodyOverflowing   = null\n      this._ignoreBackdropClick = null\n      this._scrollbarWidth      = null\n    }\n\n    handleUpdate() {\n      this._adjustDialog()\n    }\n\n    // Private\n\n    _getConfig(config) {\n      config = {\n        ...Default,\n        ...config\n      }\n      Util.typeCheckConfig(NAME, config, DefaultType)\n      return config\n    }\n\n    _showElement(relatedTarget) {\n      const transition = Util.supportsTransitionEnd() &&\n        $(this._element).hasClass(ClassName.FADE)\n\n      if (!this._element.parentNode ||\n         this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {\n        // Don't move modal's DOM position\n        document.body.appendChild(this._element)\n      }\n\n      this._element.style.display = 'block'\n      this._element.removeAttribute('aria-hidden')\n      this._element.scrollTop = 0\n\n      if (transition) {\n        Util.reflow(this._element)\n      }\n\n      $(this._element).addClass(ClassName.SHOW)\n\n      if (this._config.focus) {\n        this._enforceFocus()\n      }\n\n      const shownEvent = $.Event(Event.SHOWN, {\n        relatedTarget\n      })\n\n      const transitionComplete = () => {\n        if (this._config.focus) {\n          this._element.focus()\n        }\n        this._isTransitioning = false\n        $(this._element).trigger(shownEvent)\n      }\n\n      if (transition) {\n        $(this._dialog)\n          .one(Util.TRANSITION_END, transitionComplete)\n          .emulateTransitionEnd(TRANSITION_DURATION)\n      } else {\n        transitionComplete()\n      }\n    }\n\n    _enforceFocus() {\n      $(document)\n        .off(Event.FOCUSIN) // Guard against infinite focus loop\n        .on(Event.FOCUSIN, (event) => {\n          if (document !== event.target &&\n              this._element !== event.target &&\n              $(this._element).has(event.target).length === 0) {\n            this._element.focus()\n          }\n        })\n    }\n\n    _setEscapeEvent() {\n      if (this._isShown && this._config.keyboard) {\n        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {\n          if (event.which === ESCAPE_KEYCODE) {\n            event.preventDefault()\n            this.hide()\n          }\n        })\n      } else if (!this._isShown) {\n        $(this._element).off(Event.KEYDOWN_DISMISS)\n      }\n    }\n\n    _setResizeEvent() {\n      if (this._isShown) {\n        $(window).on(Event.RESIZE, (event) => this.handleUpdate(event))\n      } else {\n        $(window).off(Event.RESIZE)\n      }\n    }\n\n    _hideModal() {\n      this._element.style.display = 'none'\n      this._element.setAttribute('aria-hidden', true)\n      this._isTransitioning = false\n      this._showBackdrop(() => {\n        $(document.body).removeClass(ClassName.OPEN)\n        this._resetAdjustments()\n        this._resetScrollbar()\n        $(this._element).trigger(Event.HIDDEN)\n      })\n    }\n\n    _removeBackdrop() {\n      if (this._backdrop) {\n        $(this._backdrop).remove()\n        this._backdrop = null\n      }\n    }\n\n    _showBackdrop(callback) {\n      const animate = $(this._element).hasClass(ClassName.FADE)\n        ? ClassName.FADE : ''\n\n      if (this._isShown && this._config.backdrop) {\n        const doAnimate = Util.supportsTransitionEnd() && animate\n\n        this._backdrop = document.createElement('div')\n        this._backdrop.className = ClassName.BACKDROP\n\n        if (animate) {\n          $(this._backdrop).addClass(animate)\n        }\n\n        $(this._backdrop).appendTo(document.body)\n\n        $(this._element).on(Event.CLICK_DISMISS, (event) => {\n          if (this._ignoreBackdropClick) {\n            this._ignoreBackdropClick = false\n            return\n          }\n          if (event.target !== event.currentTarget) {\n            return\n          }\n          if (this._config.backdrop === 'static') {\n            this._element.focus()\n          } else {\n            this.hide()\n          }\n        })\n\n        if (doAnimate) {\n          Util.reflow(this._backdrop)\n        }\n\n        $(this._backdrop).addClass(ClassName.SHOW)\n\n        if (!callback) {\n          return\n        }\n\n        if (!doAnimate) {\n          callback()\n          return\n        }\n\n        $(this._backdrop)\n          .one(Util.TRANSITION_END, callback)\n          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)\n      } else if (!this._isShown && this._backdrop) {\n        $(this._backdrop).removeClass(ClassName.SHOW)\n\n        const callbackRemove = () => {\n          this._removeBackdrop()\n          if (callback) {\n            callback()\n          }\n        }\n\n        if (Util.supportsTransitionEnd() &&\n           $(this._element).hasClass(ClassName.FADE)) {\n          $(this._backdrop)\n            .one(Util.TRANSITION_END, callbackRemove)\n            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)\n        } else {\n          callbackRemove()\n        }\n      } else if (callback) {\n        callback()\n      }\n    }\n\n    // ----------------------------------------------------------------------\n    // the following methods are used to handle overflowing modals\n    // todo (fat): these should probably be refactored out of modal.js\n    // ----------------------------------------------------------------------\n\n    _adjustDialog() {\n      const isModalOverflowing =\n        this._element.scrollHeight > document.documentElement.clientHeight\n\n      if (!this._isBodyOverflowing && isModalOverflowing) {\n        this._element.style.paddingLeft = `${this._scrollbarWidth}px`\n      }\n\n      if (this._isBodyOverflowing && !isModalOverflowing) {\n        this._element.style.paddingRight = `${this._scrollbarWidth}px`\n      }\n    }\n\n    _resetAdjustments() {\n      this._element.style.paddingLeft = ''\n      this._element.style.paddingRight = ''\n    }\n\n    _checkScrollbar() {\n      const rect = document.body.getBoundingClientRect()\n      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth\n      this._scrollbarWidth = this._getScrollbarWidth()\n    }\n\n    _setScrollbar() {\n      if (this._isBodyOverflowing) {\n        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set\n        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set\n\n        // Adjust fixed content padding\n        $(Selector.FIXED_CONTENT).each((index, element) => {\n          const actualPadding = $(element)[0].style.paddingRight\n          const calculatedPadding = $(element).css('padding-right')\n          $(element).data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n        })\n\n        // Adjust sticky content margin\n        $(Selector.STICKY_CONTENT).each((index, element) => {\n          const actualMargin = $(element)[0].style.marginRight\n          const calculatedMargin = $(element).css('margin-right')\n          $(element).data('margin-right', actualMargin).css('margin-right', `${parseFloat(calculatedMargin) - this._scrollbarWidth}px`)\n        })\n\n        // Adjust navbar-toggler margin\n        $(Selector.NAVBAR_TOGGLER).each((index, element) => {\n          const actualMargin = $(element)[0].style.marginRight\n          const calculatedMargin = $(element).css('margin-right')\n          $(element).data('margin-right', actualMargin).css('margin-right', `${parseFloat(calculatedMargin) + this._scrollbarWidth}px`)\n        })\n\n        // Adjust body padding\n        const actualPadding = document.body.style.paddingRight\n        const calculatedPadding = $('body').css('padding-right')\n        $('body').data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)\n      }\n    }\n\n    _resetScrollbar() {\n      // Restore fixed content padding\n      $(Selector.FIXED_CONTENT).each((index, element) => {\n        const padding = $(element).data('padding-right')\n        if (typeof padding !== 'undefined') {\n          $(element).css('padding-right', padding).removeData('padding-right')\n        }\n      })\n\n      // Restore sticky content and navbar-toggler margin\n      $(`${Selector.STICKY_CONTENT}, ${Selector.NAVBAR_TOGGLER}`).each((index, element) => {\n        const margin = $(element).data('margin-right')\n        if (typeof margin !== 'undefined') {\n          $(element).css('margin-right', margin).removeData('margin-right')\n        }\n      })\n\n      // Restore body padding\n      const padding = $('body').data('padding-right')\n      if (typeof padding !== 'undefined') {\n        $('body').css('padding-right', padding).removeData('padding-right')\n      }\n    }\n\n    _getScrollbarWidth() { // thx d.walsh\n      const scrollDiv = document.createElement('div')\n      scrollDiv.className = ClassName.SCROLLBAR_MEASURER\n      document.body.appendChild(scrollDiv)\n      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth\n      document.body.removeChild(scrollDiv)\n      return scrollbarWidth\n    }\n\n    // Static\n\n    static _jQueryInterface(config, relatedTarget) {\n      return this.each(function () {\n        let data = $(this).data(DATA_KEY)\n        const _config = {\n          ...Modal.Default,\n          ...$(this).data(),\n          ...typeof config === 'object' && config\n        }\n\n        if (!data) {\n          data = new Modal(this, _config)\n          $(this).data(DATA_KEY, data)\n        }\n\n        if (typeof config === 'string') {\n          if (typeof data[config] === 'undefined') {\n            throw new TypeError(`No method named \"${config}\"`)\n          }\n          data[config](relatedTarget)\n        } else if (_config.show) {\n          data.show(relatedTarget)\n        }\n      })\n    }\n  }\n\n  /**\n   * ------------------------------------------------------------------------\n   * Data Api implementation\n   * ------------------------------------------------------------------------\n   */\n\n  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {\n    let target\n    const selector = Util.getSelectorFromElement(this)\n\n    if (selector) {\n      target = $(selector)[0]\n    }\n\n    const config = $(target).data(DATA_KEY)\n      ? 'toggle' : {\n        ...$(target).data(),\n        ...$(this).data()\n      }\n\n    if (this.tagName === 'A' || this.tagName === 'AREA') {\n      event.preventDefault()\n    }\n\n    const $target = $(target).one(Event.SHOW, (showEvent) => {\n      if (showEvent.isDefaultPrevented()) {\n        // Only register focus restorer if modal will actually get shown\n        return\n      }\n\n      $target.one(Event.HIDDEN, () => {\n        if ($(this).is(':visible')) {\n          this.focus()\n        }\n      })\n    })\n\n    Modal._jQueryInterface.call($(target), config, this)\n  })\n\n  /**\n   * ------------------------------------------------------------------------\n   * jQuery\n   * ------------------------------------------------------------------------\n   */\n\n  $.fn[NAME] = Modal._jQueryInterface\n  $.fn[NAME].Constructor = Modal\n  $.fn[NAME].noConflict = function () {\n    $.fn[NAME] = JQUERY_NO_CONFLICT\n    return Modal._jQueryInterface\n  }\n\n  return Modal\n})($)\n\nexport default Modal\n"]}
var Modal = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'modal';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning || this._isShown) {
        return;
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);
      $(this._element).removeClass(ClassName.SHOW);
      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(window, document, this._element, this._backdrop).off(EVENT_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin

        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');

        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      }); // Restore sticky content and navbar-toggler margin

      $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // Static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _extends({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : _extends({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);
//# sourceMappingURL=modal.js.map
