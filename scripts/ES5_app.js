var _banano_bananoglassui=new banano_bananoglassui();
/* App */
function banano_bananoglassui() {var _B;this.__1="bananoglassui";this.__2="BANano Glass UI";this.__3="c:\laragon\www";this.__4="1.00";this.__5="";this.banano_ready=function() {if (_B==null) _B=this;var __6,__7,__8,__9,__a;__6=null;__6=u("#body");__7={};__7={};__7.mode="no-cors";__8={};__9="";__a={};__a=fetch("./assets/index.html",__7);__a.then(async function(__8) {return __8.text();}).then(async function(__9) {__6.html(__9);});};}window.addEventListener('online', function() {if (typeof _banano_bananoglassui['banano_online']==="function") {_banano_bananoglassui.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_bananoglassui['banano_offline']==="function") {_banano_bananoglassui.banano_offline();}});var BANversion=1626043554933;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_bananoglassui.banano_ready();}}