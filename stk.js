



// DEFLATE, base64 by Dan Kogai http://github.com/dankogai/
var s=null;
(function(){function y(b){for(var i="";b.length>0;)i+=String.fromCharCode.apply(String,b.splice(0,65536));return i}function da(b){return y(x(P(b)))}function n(b){return x(P(b))}function ea(b){return y(Q(P(b)))}function H(b){return y(Q(b))}function R(b){return y(V(b))}function fa(b){return S(P(b))}function Q(b){for(var i=[],j=0,l=b.length;j<l;j++){var h=b[j];if(h<128)i.push(h);else{var m=b[++j];if(h<224)i.push((h&31)<<6|m&63);else{var n=b[++j];i.push((h&15)<<12|(m&63)<<6|n&63)}}}return i}function x(b){for(var i=
[],j=0,l=b.length;j<l;j++){var h=b[j];h<128?i.push(h):h<2048?i.push(192|h>>>6,128|h&63):i.push(224|h>>>12&15,128|h>>>6&63,128|h&63)}return i}function V(b){for(var b=b.replace(/[^A-Za-z0-9+\/]+/g,""),i=[],j=b.length%4,l=0,h=b.length;l<h;l+=4){var m=(ga[b.charAt(l)]||0)<<18|(ga[b.charAt(l+1)]||0)<<12|(ga[b.charAt(l+2)]||0)<<6|(ga[b.charAt(l+3)]||0);i.push(m>>16,m>>8&255,m&255)}i.length-=[0,0,2,1][j];return i}function S(b){for(var i=0;b.length%3;)b.push(0),i++;for(var j=[],l=0,h=b.length;l<h;l+=3){var m=
b[l],n=b[l+1],x=b[l+2];if(m>=256||n>=256||x>=256)throw"unsupported character found";m=m<<16|n<<8|x;j.push(W[m>>>18],W[m>>>12&63],W[m>>>6&63],W[m&63])}for(;i--;)j[j.length-i-1]="=".charCodeAt(0);return y(j)}function P(b){for(var i=[],j=0,l=b.length;j<l;j++)i[j]=b.charCodeAt(j);return i}var W=function(){for(var b=[],i="A".charCodeAt(0),j="a".charCodeAt(0),l="0".charCodeAt(0),h=0;h<26;h++)b.push(i+h);for(h=0;h<26;h++)b.push(j+h);for(h=0;h<10;h++)b.push(l+h);b.push("+".charCodeAt(0));b.push("/".charCodeAt(0));
return b}(),ga=function(b){for(var i={},j=0,l=b.length;j<l;j++)i[b.charAt(j)]=j;return i}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");if(window.btoa)var X=window.btoa,Y=function(b){return X(da(b))};else X=fa,Y=function(b){return S(n(b))};if(window.atob)var ha=window.atob,ia=function(b){return ea(ha(b))};else ha=R,ia=function(b){return H(V(b))};window.Base64={J:S,w:S,u:V,s:V,C:x,B:x,K:Q,z:Q,m:fa,v:R,M:function(b){return Q(P(b))},L:H,A:H,N:ea,H:n,G:n,D:function(b){return y(x(b))},
I:da,F:Y,t:ia,R:R,T:fa,atob:ha,btoa:X,U:da,r:ea,P:Y,Q:function(b){return Y(b).replace(/[+\/]/g,function(b){return b=="+"?"-":"_"}).replace(/=+$/,"")},O:function(b){return ia(b.replace(/[-_]/g,function(b){return b=="-"?"+":"/"}))}}})();
(function(){function y(){C>8?j(T):C>0&&l(T);C=T=0}function da(a,k){var c=0;do c|=a&1,a>>=1,c<<=1;while(--k>0);return c>>1}function n(a,k){C>16-k?(T|=a<<C,j(T),T=a>>16-C,C+=k-16):(T|=a<<C,C+=k)}function ea(a,k){var c,e=0,d=0,f=0,Aa=0,g,i;if(I!=0){do(e&7)==0&&(Aa=ra[f++]),c=Ba[e++]&255,(Aa&1)==0?b(c,a):(g=ma[c],b(g+256+1,a),i=Ca[g],i!=0&&(c-=Da[g],n(c,i)),c=Ea[d++],g=(c<256?Z[c]:Z[256+(c>>7)])&255,b(g,k),i=na[g],i!=0&&(c-=sa[g],n(c,i))),Aa>>=1;while(e<I)}b(256,a)}function H(a,k){Ba[I++]=k;a==0?D[k].a++:
(a--,D[ma[k]+256+1].a++,J[(a<256?Z[a]:Z[256+(a>>7)])&255].a++,Ea[ta++]=a,oa|=ua);ua<<=1;(I&7)==0&&(ra[Fa++]=oa,oa=0,ua=1);if($>2&&(I&4095)==0){var c=I*8,e=g-K,d;for(d=0;d<30;d++)c+=J[d].a*(5+na[d]);c>>=3;if(ta<parseInt(I/2)&&c<parseInt(e/2))return!0}return I==8191||ta==8192}function R(a){var k,c,e,d;d=g-K;ra[Fa]=oa;x(z);x(A);Q(D,z.c);Q(J,A.c);x(L);for(e=18;e>=3;e--)if(t[La[e]].b!=0)break;ja+=3*(e+1)+14;k=ja+3+7>>3;c=va+3+7>>3;c<=k&&(k=c);if(d+4<=k&&K>=0){n(0+a,3);y();j(d);j(~d);for(e=0;e<d;e++)l(f[K+
e])}else if(c==k)n(2+a,3),ea(M,aa);else{n(4+a,3);d=z.c+1;k=A.c+1;e+=1;n(d-257,5);n(k-1,5);n(e-4,4);for(c=0;c<e;c++)n(t[La[c]].b,3);fa(D,d-1);fa(J,k-1);ea(D,J)}P();a!=0&&y()}function fa(a,k){var c,e=-1,d,g=a[0].b,f=0,i=7,j=4;g==0&&(i=138,j=3);for(c=0;c<=k;c++)if(d=g,g=a[c+1].b,!(++f<i&&d==g)){if(f<j){do b(d,t);while(--f!=0)}else d!=0?(d!=e&&(b(d,t),f--),b(16,t),n(f-3,2)):f<=10?(b(17,t),n(f-3,3)):(b(18,t),n(f-11,7));f=0;e=d;g==0?(i=138,j=3):d==g?(i=6,j=3):(i=7,j=4)}}function Q(a,k){var c,e=-1,d,b=a[0].b,
f=0,g=7,i=4;b==0&&(g=138,i=3);a[k+1].b=65535;for(c=0;c<=k;c++)d=b,b=a[c+1].b,++f<g&&d==b||(f<i?t[d].a+=f:d!=0?(d!=e&&t[d].a++,t[16].a++):f<=10?t[17].a++:t[18].a++,f=0,e=d,b==0?(g=138,i=3):d==b?(g=6,i=3):(g=7,i=4))}function x(a){var k=a.e,c=a.f,e=a.g,d,b=-1,f=e;N=0;ka=573;for(d=0;d<e;d++)k[d].a!=0?(o[++N]=b=d,E[d]=0):k[d].b=0;for(;N<2;)d=o[++N]=b<2?++b:0,k[d].a=1,E[d]=0,ja--,c!=s&&(va-=c[d].b);a.c=b;for(d=N>>1;d>=1;d--)S(k,d);do d=o[1],o[1]=o[N--],S(k,1),c=o[1],o[--ka]=d,o[--ka]=c,k[f].a=k[d].a+k[c].a,
E[f]=E[d]>E[c]+1?E[d]:E[c]+1,k[d].b=k[c].b=f,o[1]=f++,S(k,1);while(N>=2);o[--ka]=o[1];f=a.e;d=a.i;var e=a.h,c=a.c,g=a.j,i=a.f,j,h,l,m,n=0;for(h=0;h<=15;h++)v[h]=0;f[o[ka]].b=0;for(a=ka+1;a<573;a++)if(j=o[a],h=f[f[j].b].b+1,h>g&&(h=g,n++),f[j].b=h,!(j>c))v[h]++,l=0,j>=e&&(l=d[j-e]),m=f[j].a,ja+=m*(h+l),i!=s&&(va+=m*(i[j].b+l));if(n!=0){do{for(h=g-1;v[h]==0;)h--;v[h]--;v[h+1]+=2;v[g]--;n-=2}while(n>0);for(h=g;h!=0;h--)for(j=v[h];j!=0;)if(d=o[--a],!(d>c)){if(f[d].b!=h)ja+=(h-f[d].b)*f[d].a,f[d].a=h;
j--}}V(k,b)}function V(a,b){var c=Array(16),e=0,d;for(d=1;d<=15;d++)e=e+v[d-1]<<1,c[d]=e;for(e=0;e<=b;e++)if(d=a[e].b,d!=0)a[e].a=da(c[d]++,d)}function S(a,b){for(var c=o[b],e=b<<1;e<=N;){e<N&&ia(a,o[e+1],o[e])&&e++;if(ia(a,c,o[e]))break;o[b]=o[e];b=e;e<<=1}o[b]=c}function P(){var a;for(a=0;a<286;a++)D[a].a=0;for(a=0;a<30;a++)J[a].a=0;for(a=0;a<19;a++)t[a].a=0;D[256].a=1;oa=I=ta=Fa=ja=va=0;ua=1}function W(a,b,c){var e,d,f;for(e=0;r!=s&&e<c;){d=c-e;if(d>r.d)d=r.d;for(f=0;f<d;f++)a[b+e+f]=r.l[r.k+f];
r.k+=d;r.d-=d;e+=d;if(r.d==0)d=r,r=r.next,d.next=ba,ba=d}if(e==c)return e;if(u<w){d=c-e;d>w-u&&(d=w-u);for(f=0;f<d;f++)a[b+e+f]=ca[u+f];u+=d;e+=d;w==u&&(w=u=0)}return e}function ga(a,b){var c;if(!Ga){if(!O){C=T=0;var e,d;if(aa[0].b==0){z.e=D;z.f=M;z.i=Ca;z.h=257;z.g=286;z.j=15;z.c=0;A.e=J;A.f=aa;A.i=na;A.h=0;A.g=30;A.j=15;A.c=0;L.e=t;L.f=s;L.i=Pa;L.h=0;L.g=19;L.j=7;for(d=e=L.c=0;d<28;d++){Da[d]=e;for(c=0;c<1<<Ca[d];c++)ma[e++]=d}ma[e-1]=d;for(d=e=0;d<16;d++){sa[d]=e;for(c=0;c<1<<na[d];c++)Z[e++]=
d}for(e>>=7;d<30;d++){sa[d]=e<<7;for(c=0;c<1<<na[d]-7;c++)Z[256+e++]=d}for(c=0;c<=15;c++)v[c]=0;for(c=0;c<=143;)M[c++].b=8,v[8]++;for(;c<=255;)M[c++].b=9,v[9]++;for(;c<=279;)M[c++].b=7,v[7]++;for(;c<=287;)M[c++].b=8,v[8]++;V(M,287);for(c=0;c<30;c++)aa[c].b=5,aa[c].a=da(c,5);P()}for(c=0;c<8192;c++)F[32768+c]=0;Ha=Ia[$].q;Ma=Ia[$].o;Na=Ia[$].p;K=g=0;q=ha(f,0,65536);if(q<=0)O=!0,q=0;else{for(O=!1;q<262&&!O;)X();for(c=G=0;c<2;c++)G=(G<<Ja^f[c]&255)&8191}r=s;u=w=0;$<=3?(B=2,p=0):(p=2,pa=0);wa=!1}Ga=!0;
if(q==0)return wa=!0,0}if((c=W(a,0,b))==b)return b;if(wa)return c;if($<=3)for(;q!=0&&r==s;){i();U!=0&&g-U<=32506&&(p=Y(U),p>q&&(p=q));if(p>=3)if(d=H(g-qa,p-3),q-=p,p<=Ha){p--;do g++,i();while(--p!=0);g++}else g+=p,p=0,G=f[g]&255,G=(G<<Ja^f[g+1]&255)&8191;else d=H(0,f[g]&255),q--,g++;d&&(R(0),K=g);for(;q<262&&!O;)X()}else for(;q!=0&&r==s;){i();B=p;Oa=qa;p=2;U!=0&&B<Ha&&g-U<=32506&&(p=Y(U),p>q&&(p=q),p==3&&g-qa>4096&&p--);if(B>=3&&p<=B){d=H(g-1-Oa,B-3);q-=B-1;B-=2;do g++,i();while(--B!=0);pa=0;p=2;
g++;d&&(R(0),K=g)}else pa!=0?H(0,f[g-1]&255)&&(R(0),K=g):pa=1,g++,q--;for(;q<262&&!O;)X()}q==0&&(pa!=0&&H(0,f[g-1]&255),R(1),wa=!0);return c+W(a,c+0,b-c)}function X(){var a,b,c=65536-q-g;if(c==-1)c--;else if(g>=65274){for(a=0;a<32768;a++)f[a]=f[a+32768];qa-=32768;g-=32768;K-=32768;for(a=0;a<8192;a++)b=F[32768+a],F[32768+a]=b>=32768?b-32768:0;for(a=0;a<32768;a++)b=F[a],F[a]=b>=32768?b-32768:0;c+=32768}O||(a=ha(f,g+q,c),a<=0?O=!0:q+=a)}function Y(a){var b=Na,c=g,e,d=B,i=g>32506?g-32506:0,h=g+258,j=
f[c+d-1],l=f[c+d];B>=Ma&&(b>>=2);do if(e=a,!(f[e+d]!=l||f[e+d-1]!=j||f[e]!=f[c]||f[++e]!=f[c+1])){c+=2;e++;do;while(f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&f[++c]==f[++e]&&c<h);e=258-(h-c);c=h-258;if(e>d){qa=a;d=e;if(e>=258)break;j=f[c+d-1];l=f[c+d]}}while((a=F[a&32767])>i&&--b!=0);return d}function ha(a,b,c){var e;for(e=0;e<c&&Ka<xa.length;e++)a[b+e]=xa.charCodeAt(Ka++)&255;return e}function ia(a,b,c){return a[b].a<a[c].a||a[b].a==
a[c].a&&E[b]<=E[c]}function b(a,b){n(b[a].a,b[a].b)}function i(){G=(G<<Ja^f[g+3-1]&255)&8191;U=F[32768+G];F[g&32767]=U;F[32768+G]=g}function j(a){a&=65535;u+w<8190?(ca[u+w++]=a&255,ca[u+w++]=a>>>8):(l(a&255),l(a>>>8))}function l(a){ca[u+w++]=a;if(u+w==8192&&w!=0){var b;ba!=s?(a=ba,ba=ba.next):a=new h;a.next=s;a.d=a.k=0;r==s?r=ya=a:ya=ya.next=a;a.d=w-u;for(b=0;b<a.d;b++)a.l[b]=ca[u+b];w=u=0}}function h(){this.next=s;this.d=0;this.l=Array(8192);this.k=0}function m(a,b,c,e){this.o=a;this.q=b;this.S=
c;this.p=e}function za(){this.i=this.f=this.e=s;this.c=this.j=this.g=this.h=0}function la(){this.b=this.a=0}var Ja=parseInt(5),ba,r,ya,Ga,ca=s,w,u,wa,f,Ea,Ba,F,T,C,K,G,U,Oa,pa,p,B,g,qa,O,q,Na,Ha,$,Ma,D,J,M,aa,t,z,A,L,v,o,N,ka,E,ma,Z,Da,sa,ra,I,ta,Fa,oa,ua,ja,va,xa,Ka,Ca=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],na=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Pa=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],La=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ia=
[new m(0,0,0,0),new m(4,4,8,4),new m(4,5,16,8),new m(4,6,32,32),new m(4,4,16,16),new m(8,16,32,32),new m(8,16,128,128),new m(8,32,128,256),new m(32,128,258,1024),new m(32,258,258,4096)];window.RawDeflate||(window.RawDeflate={});window.RawDeflate.n=function(a){var b;xa=a;Ka=0;typeof b=="undefined"&&(b=6);(a=b)?a<1?a=1:a>9&&(a=9):a=6;$=a;O=Ga=!1;if(ca==s){ba=r=ya=s;ca=Array(8192);f=Array(65536);Ea=Array(8192);Ba=Array(32832);F=Array(65536);D=Array(573);for(a=0;a<573;a++)D[a]=new la;J=Array(61);for(a=
0;a<61;a++)J[a]=new la;M=Array(288);for(a=0;a<288;a++)M[a]=new la;aa=Array(30);for(a=0;a<30;a++)aa[a]=new la;t=Array(39);for(a=0;a<39;a++)t[a]=new la;z=new za;A=new za;L=new za;v=Array(16);o=Array(573);E=Array(573);ma=Array(256);Z=Array(512);Da=Array(29);sa=Array(30);ra=Array(parseInt(1024))}for(var c=Array(1024),e=[];(a=ga(c,c.length))>0;){var d=Array(a);for(b=0;b<a;b++)d[b]=String.fromCharCode(c[b]);e[e.length]=d.join("")}xa=s;return e.join("")}})();window.jbs_deflate=function(y){return Base64.m(RawDeflate.n(unescape(encodeURIComponent(y))))};


var showsFolderDropdownipb594730 = false;
var removeOverlayTimer = undefined;
var SimpleParseripb594730 = (function() {
var scrubTitle = function(title) {
return title.substring(0, 12) == '(Saving...) ' ? title.substring(12) : title;
};
var getContentFromTag = function(tag, attribute, value, useHTML) {
var tags = document.getElementsByTagName(tag),
i, obj;
for (i = 0; i < tags.length; i += 1) {
obj = tags[i];
if (obj.getAttribute &&
obj.getAttribute(attribute) === value) {
return obj.getAttribute('content') ||
obj.getAttribute('value') ||
(useHTML ? obj.innerHTML : null);
}
}
return null;
};
var getContentUsingXPaths = function(xpaths) {
var result, i;
for (i in xpaths) {
try {
result = document.evaluate(xpaths[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
if (result.singleNodeValue) {
return result.singleNodeValue.textContent;
}
} catch(e) { }
}
};
return {
getBasicPageInfo: function() {
var canonical_url,
links = document.getElementsByTagName('link'),
params = {url: document.URL},
i, title,
// XPaths
titleXPaths;
// Attempt to get the canonical url
canonical_url = getContentFromTag('meta', 'property', 'og:url');
if (canonical_url) {
params.canonical_url = canonical_url;
} else {
for (i = 0; i < links.length; i++) {
if (links[i].getAttribute('rel') === 'canonical') {
params.canonical_url = links[i].getAttribute('href');
break;
}
}
}
// Think about only grabbing the title if its canonical or parsed
title = getContentFromTag('meta', 'property', 'og:title');

if (!title) {
title = document.title;
}
params.title = scrubTitle(title);
thumbnail = getContentFromTag('meta', 'property', 'og:image');
if (thumbnail) {
params.thumbnail = thumbnail;
}
else {
params.thumbnail = ''
}
return params;
}
}
})();
var bodyipb594730, _greaderipb594730, btxTitleipb594730 = '', cancelipb594730 = 0, frameDidLoadipb594730 = 0, _ipDidSendipb594730 = 0;
if (document.title.substring(0, 12) == '(Saving...) ') document.title = document.title.substring(12);
function jbsipb594730(html)
{

if (html.length > 768000) return html; /* too big to deflate quickly */
return '<' + '![D[' + jbs_deflate(html);

}
function btx_singlePageURLipb594730(bodyNode)
{
var singlePageXPs =

new Array();

for (var i = 0; i < singlePageXPs.length; i++) {
try {
var result = document.evaluate(singlePageXPs[i], bodyNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
if (result.singleNodeValue) {
return (
result.singleNodeValue.nodeType == 1 && result.singleNodeValue.nodeName.toLowerCase() == 'a' ?
result.singleNodeValue.getAttribute('href') : result.singleNodeValue.textContent
);
}
} catch(e){ }
}
return false;
}
function btx_nextPageURLipb594730(bodyNode, currentURL)
{
if (currentURL.indexOf('#') >= 0) currentURL = currentURL.substr(0, currentURL.indexOf('#'));
var nextPageXPs =

new Array();

for (var i = 0; i < nextPageXPs.length; i++) {
try {
var result = document.evaluate(nextPageXPs[i], bodyNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
if (result.singleNodeValue) {
var candidate = (
result.singleNodeValue.nodeType == 1 && result.singleNodeValue.nodeName.toLowerCase() == 'a' ?
result.singleNodeValue.getAttribute('href') : result.singleNodeValue.textContent
);
if (candidate.indexOf('#') >= 0) candidate = candidate.substr(0, candidate.indexOf('#'));
if (candidate != currentURL) return candidate;
}
} catch(e){ }
}

return false;
}
function stripCommentsAndHiddenElements(node)
{
if (node.nodeType == 8 /* comment */) node.parentNode.removeChild(node);
else if (node.nodeType == 1 /* element */) {
if (node.style.display == 'none' || node.style.visibility == 'hidden') node.parentNode.removeChild(node);
else {
for (var c = 0; c < node.childNodes.length; c++) stripCommentsAndHiddenElements(node.childNodes[c]);
}
}
}
function addClassipb594730(el, className)
{
if (el.getAttribute('class')) el.setAttribute(el.getAttribute('class') + ' ' + className);
else el.setAttribute('class', className);
}
function btx_bodyipb594730(bodyNode)
{
try {
bodyNode = bodyNode.cloneNode(true);
var o;
if ( (o = bodyNode.getElementById('ovipb594730')) ) o.parentNode.removeChild(o);
var stripElements = [
'iframe', 'script', 'style', 'canvas', 'noscript', 'head',
'input', 'textarea', 'select', 'button'
];
for (var i in stripElements) {
var els = [], ns = bodyNode.getElementsByTagName(stripElements[i]);
for (var j = 0; j < ns.length; j++) els[els.length] = ns[j];
for (var j = 0; j < els.length; j++) {
els[j].parentNode.removeChild(els[j]);
}
}
stripCommentsAndHiddenElements(bodyNode);
} catch(e){ }
return bodyNode;
}
function _viewportWidthipb594730() {
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0];
return w.innerWidth || e.clientWidth || g.clientWidth;
}
function _corsipb594730(method, url, postbody, completionFn, errorFn)
{
try {
if (window.XDomainRequest) {
var xdr = new XDomainRequest();
if (! xdr) throw(0);
xdr.onerror = errorFn;
xdr.ontimeout = errorFn;
xdr.onprogress = function(){};
xdr.onload = function(){ completionFn(xdr.responseText); };
xdr.open(method, url);
xdr.send(postbody);
} else if (window.XMLHttpRequest) {
var x = new XMLHttpRequest();
x.open(method, url, true);
x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
x.onreadystatechange = function(){
try {
if (x.readyState != 4) return;
if (x.status != 200) throw(0);
completionFn(x.responseText);
} catch (e) { errorFn(); }
}
x.send(postbody);
} else {
errorFn();
}
} catch (e) { errorFn(); }
}
function _folderRowipb594730(folder_data) {
folder = document.createElement('div');
folder.setAttribute('style', 'cursor: pointer; text-align: left; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 8px 15px;');
folder.setAttribute('data-folder-id', '' + folder_data.id);
folderIcon = document.createElement('img');
folderIcon.setAttribute('src', document.getElementById('ofiipb594730').getAttribute('src'));
folderIcon.setAttribute('style', 'display: block; float: left; margin-top: -7px; margin-right: 5px; width: 25px; height: 25px;');
folder.appendChild(folderIcon);
folder.appendChild(document.createTextNode(folder_data.name));
folder.onclick = function(e) {
var bookmark_id = document.getElementById('obidipb594730');
var folder_id = e.target.getAttribute('data-folder-id');
setTimeout(function() {
document.getElementById('ofdipb594730').style.visibility = 'hidden';
setTimeout(removeOverlayipb594730, 250);
}, 1);
_corsipb594730('POST', 'https://www.instapaper.com/move/' + bookmark_id.value + '/to/' + folder_id,
"cors=&" + "ch=VnkiaqcrkV9YABYreinRpxMraE&cp=C6cBQ0KPQeQk4V.sZ0.D.9QGiZnHGHn&ce=&cu=8200427" +
"&ajax=true",
function() {},
function() {}
);
}
folder.onmouseover = function(e) {
e.target.style.color = '#0074bf';
}
folder.onmouseout = function(e) {
e.target.style.color = 'black';
}
return folder;
}
function _createDropdownipb594730(responseText) {
try {
var scale = window.innerWidth / screen.availWidth || 1;
if (scale < 1)
scale = 1
json = JSON.parse(responseText);
if (json.bookmark_id && json.folders && json.folders.length && scale == 1) {
folder_dropdown = document.getElementById('oflipb594730');
b_id = document.createElement('input');
b_id.setAttribute('id', 'obidipb594730');
b_id.setAttribute('type', 'hidden');
b_id.setAttribute('value', json.bookmark_id);
folder_dropdown.appendChild(b_id);
for (var i = 0; i < json.folders.length; i++) {
folder_dropdown.appendChild(_folderRowipb594730(json.folders[i]));
}
showsFolderDropdownipb594730 = true;
setTimeout(function () {
folderDropdown = document.getElementById('ofipb594730');
if (_viewportWidthipb594730() < 768) {
cancelButton = document.getElementById('ocipb594730');
cancelButton.style.display = 'none';
folderDropdown.style.right = '20';
}
folderDropdown.style.display = 'block';
folderDropdown.style.visibility = 'visible';
folderDropdown.style.opacity = '1';
}, 1);
}
}
catch(e) {
//console.log('Dropdown error: ' + e);
}
}
function _ipSendipb594730(href, title, from_greader)
{
if (cancelipb594730 || _ipDidSendipb594730) return;
_ipDidSendipb594730 = 1;
var tzd = '';


var thumbnail = '';

if (!from_greader) {
var pageInfo = SimpleParseripb594730.getBasicPageInfo(),
canonical_url = pageInfo.canonical_url,
url = pageInfo.url;
title = pageInfo.title;
thumbnail = pageInfo.thumbnail;
} else {
url = href;
}
var d = document,
l = d.location,
e = window.getSelection,
k = d.getSelection,
x = d.selection,
s = String(e ? e() : (k ? k() : (x ? x.createRange().text : ''))),
e = encodeURIComponent,
z = d.createElement('scr'+'ipt'),

p = (from_greader ? 'gr=1&' : '') +
'a=send-to-kindle&k=' + window.kindleKey + '&u=' + e(url) + '&t=' + e(title) +
'&can_url=' + (canonical_url ? e(canonical_url) : '') +
'&s=' + e(s.length >= 20 && s.length < 10240 ? s : '') +
'&tzd=' + e(tzd) +
'&i=' + e(thumbnail)


var b = _greaderipb594730 ? '' : jbsipb594730(bodyipb594730);
if (b.length > 512000) b = '';

_corsipb594730(
'POST', 'https://www.instapaper.com/bookmarklet/post_v5',
"cors=&" + "ch=VnkiaqcrkV9YABYreinRpxMraE&cp=C6cBQ0KPQeQk4V.sZ0.D.9QGiZnHGHn&ce=&cu=8200427" +
"&" + p + "&b=" + e(b),
function(responseText) {
_createDropdownipb594730(responseText);
_clipb594730_close();
},
function() {

var i=document.createElement('iframe');
i.setAttribute('name', 'ipb594730');
i.setAttribute('id', 'ipb594730');
i.setAttribute('allowtransparency', 'true');
i.setAttribute('style', 'border: 0; width: 1px; height: 1px; position: absolute; left: 0; top: 0;');
i.setAttribute('onload', 'frameDidLoadipb594730++; frameLoadedipb594730();');
document.body.appendChild(i);
p = e(p).replace(/'/g, '%27');
b = e(b).replace(/'/g, '%27');
window.frames['ipb594730'].document.write(
'<html><body style="background-color: transparent;">' +

'<form action="https://www.instapaper.com/bookmarklet/post_v5" method="post" id="f" accept-charset="utf-8">' +
'<input type="hidden" name="p" id="p" value=""/>' +
'<input type="hidden" name="b" id="b" value=""/>' +
'<input type="hidden" name="id" value="ipb594730"/>' +

'</form>' +
"<scr"+"ipt>var e=encodeURIComponent,w=window,d=document,f=d.getElementById('f');" +
"d.getElementById('b').value=decodeURIComponent('" + b + "');d.getElementById('p').value=decodeURIComponent('" + p + "');" +
"d.getElementById('f').submit();" +
"</scr"+"ipt></body></html>"
);
}
);
}
function updateOverlaySizeipb594730()
{
var o = document.getElementById('ovipb594730');
if (! o) return;
var tablet = _viewportWidthipb594730() <= 768;
var scale = window.innerWidth / screen.availWidth || 1;
if (scale < 1)
scale = 1;
document.getElementById('ovipb594730_logo').style.clip = tablet? "rect(0px, 10px, 26px, 0px)": "initial";
document.getElementById('ovipb594730_logoContainer').style.marginTop = tablet? "9px": "8px";
document.getElementById('ovipb594730_logoContainer').style.marginLeft = tablet? "20px": "30px";
document.getElementById('ovipb594730_logoContainer').style.position = tablet? "absolute": "relative";
document.getElementById('ocipb594730').style.display = tablet && showsFolderDropdownipb594730? "none": "block";
document.getElementById('ofipb594730').style.marginRight = tablet? "0px": "30px";
document.getElementById('ocipb594730').style.marginRight = tablet? "0px": "30px";
document.getElementById('ofipb594730').style.right = tablet? "20px": "0px";
document.getElementById('ocipb594730').style.right = tablet? "20px": "0px";
if (scale > 1) {
o.style.padding = 10 * scale + 'px 0px';
document.getElementById('ovipb594730_logoContainer').style.display = 'none';
document.getElementById('ocipb594730').style.display = 'none';
document.getElementById('ofipb594730').style.display = 'none';
document.getElementById('omipb594730').style.fontSize = (16 * scale) + 'px';
document.getElementById('omipb594730').style.marginTop = '0px';
}
}
function updateOverlayTextipb594730(message, subtitle)
{
var om = document.getElementById('omipb594730');
if (! om) return;
om.innerHTML = message + ' ' + subtitle;
}
function overlayDoneipb594730(message, subtitle)
{
var o = document.getElementById('ovipb594730');
if (! o) return;
var d1 = document.getElementById('od1ipb594730');
var d2 = document.getElementById('od2ipb594730');
var d3 = document.getElementById('od3ipb594730');
var oc = document.getElementById('ocipb594730');
if (d1) d1.parentNode.removeChild(d1);
if (d2) d2.parentNode.removeChild(d2);
if (d3) d3.parentNode.removeChild(d3);
updateOverlayTextipb594730(message, subtitle);
removeOverlayTimer = setTimeout(removeOverlayipb594730, 3000);
}
function removeOverlayipb594730()
{
var o = document.getElementById('ovipb594730');
if (o) {
setTimeout(function() {

document.getElementById('ovipb594730').style.cssText += '-webkit-transform: translate3d(0,0,0) translateZ(0); -moz-transform: translate3d(0,0,0) translateZ(0); ms-transform: translate3d(0,0,0) translateZ(0); transform: translate3d(0,0,0) translateZ(0);';

}, 1);
setTimeout(function() {
document.getElementById('ovipb594730').parentNode.removeChild(document.getElementById('ovipb594730'));
}, 500);
}
}
var overlayAnimFrameipb594730 = 0;
function animateOverlayipb594730()
{
var d1 = document.getElementById('od1ipb594730');
var d2 = document.getElementById('od2ipb594730');
var d3 = document.getElementById('od3ipb594730');
if (! d1 || ! d2 || ! d3) return;
d1.style.color = 'rgb(60,60,60)';
d2.style.color = 'rgb(60,60,60)';
d3.style.color = 'rgb(60,60,60)';
overlayAnimFrameipb594730 = (overlayAnimFrameipb594730 + 1) % 4;
if (overlayAnimFrameipb594730 == 1) d1.style.color = 'rgb(150,150,150)';
else if (overlayAnimFrameipb594730 == 2) d2.style.color = 'rgb(150,150,150)';
else if (overlayAnimFrameipb594730 == 3) d3.style.color = 'rgb(150,150,150)';
setTimeout(animateOverlayipb594730, 250);
}
function _folderDropdownVisibleToggleipb594730(e) {
var folderDropdown = document.getElementById('ofdipb594730');
if (folderDropdown.style.visibility == 'hidden') {
clearTimeout(removeOverlayTimer);
folderDropdown.style.visibility = 'visible';
}
else {
folderDropdown.style.visibility = 'hidden';
removeOverlayTimer = setTimeout(removeOverlayipb594730, 2000);
}
if (!e)
e = window.event;
if (e.stopPropagation)
e.stopPropagation();
else
e.cancelBubble = true;
return false;
}
function _folderDropdownHideipb594730() {
var folderDropdown = document.getElementById('ofdipb594730');
if (folderDropdown.style.visibility != 'hidden') {
folderDropdown.style.visibility = 'hidden';
removeOverlayTimer = setTimeout(removeOverlayipb594730, 2000);
}
}
function _folderDropdownipb594730() {
o1 = document.createElement('div');
o1.setAttribute('id', 'ofipb594730');
o1.setAttribute('style', 'border: none !important; height: 36px; transition: opacity .25s ease-out; opacity: 0; visibility: hidden; position: relative; display: none; float: right; margin-top: 2px; margin-right: 35px;');
oi = document.createElement('img');
oi.setAttribute('id', 'ofiipb594730');
oi.setAttribute('style', 'width: 36px; height: 36px; cursor:pointer;');
oi.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiRJREFUeNrs2t1RwkAQB/CEoQA6UCsQKwCfwCewArECpQKgAugAOhDfyJOhArCDlEAHuDuzp2eGjxzcJRf478xNjgDJ5Ze9IyEXbrfbALE/QgABCEAAAhCAAAQgACEABCAAAQhAALoyoPZTu0mL5pn7mUeLaO3TgWdNjCxAQ1oMzmzPhsozIcVlA6rk1J4ala9Wu9UrWxerGn6eM2Bp+J03AeKYElKNMmlyqUBLOrihyRcIZM7ZoyGNaV2Dlt8Ojyu21Z2rrs8AD84EcidIdVndleIyrADlMgYREg/Sj1TWQcmimteOBOmBsuld6242o2HhcqQ4IA3KyQBN8EMXQJUAASAAlXGQpjHBxj2c6SD9W5cx6dAlQFwokOAMCjrxWU5OjC5Wop/5U+7hvLhOygvI+B7Ol+skdDEAAQhAAAIQgAAEIASAAAQgAAEIQFcIlGj1jsG277X6xoNjvXEFFGv1uvwZfzDoM/wMvrtnG7kHzyg5tT1HgaJFlKQ2yFNYbo80Zqo3xoPZZdwe9bh7YzLzI+tfrn0qK6kzzoogeN1cnrnrZ2kc/H/2Piowc7itH8HfrBLj9hydgheGodpZL5UZKlR21Pe891mQT2dHm2Z0Ql+5Ym2OogISpG4qXcsUE8LpqxdOgLSuxFNYXqS7+R483ozS444zoB1YKo2bnsEk8gOR7HrTGtC1B4AABCAAAQhAAAIQgBAAAhCAAAQgAF1Y/AgwABoiAVYqqcpWAAAAAElFTkSuQmCC');
oi.onclick = _folderDropdownVisibleToggleipb594730;
o1.appendChild(oi);
od = document.createElement('div');
od.setAttribute('id', 'ofdipb594730');
od.setAttribute('style',
'position: absolute; width: 200px; background-color: rgba(255,255,255,.98);' +
'box-shadow: rgba(0, 0, 0, 0.156863) 0px 5px 7px 0px, rgba(0, 0, 0, 0.498039) 0px 0px 1px 0px;' +
'visibility: hidden; border-radius: 0px 0px 5px 5px; left: -146px; top: 46px;');
oa = document.createElement('div');
oa.setAttribute('style',
'position: absolute; display: block; width: 0; height: 0; border-color: transparent; border-style: solid;' +
'border-width: 11px; border-top-width: 0; border-bottom-color: rgba(0,0,0,.25); top: -11px; left: 150px;');
oaa = document.createElement('div');
oaa.setAttribute('style',
'position: absolute; display: block; width: 0; height: 0; border-color: transparent; border-style: solid;' +
'border-width: 10px; border-top-width: 0; border-bottom-color: white; margin-left: -10px; top: 1px;');
oa.appendChild(oaa);
od.appendChild(oa);
of = document.createElement('div');
of.setAttribute('id', 'oflipb594730');
of.setAttribute('style', 'max-height: 280px; overflow-y: scroll; -webkit-overflow-scrolling: touch; text-align: left; font-size: 14px;');
oft = document.createElement('div');
oft.setAttribute('style', 'padding: 18px 15px 10px 15px; color: #777;');
oft.appendChild(document.createTextNode('MOVE'));
of.appendChild(oft);
od.appendChild(of);
o1.appendChild(od);
return o1;
}
function _logoipb594730() {
var imgDiv = document.createElement('div');
imgDiv.setAttribute('style', 'position:relative; float: left; margin-top: 8px; margin-left: 30px; width: 168px;');
imgDiv.setAttribute('id', 'ovipb594730_logoContainer');
var img = document.createElement('img');
img.setAttribute('src', "data:image/png;base64,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");
img.setAttribute('id', 'ovipb594730_logo');
img.setAttribute('style', 'position: absolute; width: 142px; height: 26px; display: block;');
imgDiv.appendChild(img);
return imgDiv;
}
function _cancelButtonipb594730() {
o1 = document.createElement('img');
o1.setAttribute('id', 'ocipb594730');
o1.setAttribute('style', 'border: none !important; position: relative; display: block; float: right; width: 36px; height: 36px; margin-right: 30px; margin-top: 2px; cursor:pointer;');
o1.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeFJREFUeNrs29FtgzAQBmC4CTICI6Qj8BT61hHaybpC3kqeMkIyAiNkg9SuiISQgLQ+33+u/pMsSF5y/mLAPpn6fr9XjOUQEhCIQAQiEIEIRCACMQhEIAIRiEAE+mcR60Ep7RGH7rALrUH3Z55Dav9EKaldOJxDu4TzPRBnP+bw6eYSm+DE5H7OEUjjb57HHN61kDRGUEyomX02RZrhPOJN45JPBjr1pyEc2tBuCKQFnJhLO+aGf4qFRK4IpA2cq6vHvDWSBY76PMgKyQony0QxN5IlTraZdC4ka5ysSw1tJARO9rWYFhIKx2SxmoqExDFbzf8VCY1jWu74LZIHHPN60LNIXnBi1Kn7g+q6Vn1cj+dqOMn9QwBtIFWaI6dYoBWkSvOySu0ftCa9cE+C3nNcAZUQUKCNSwxWvnUBtHKTvnlCEmc4bQUs37oA2poEosq3LoCenSF7QhJvON6QxCOOJyTxiuMFSTzjeEAS7zhoJCkBB4kkpeCgkKQkHASSlIZjjSQl4lgiJVcUu9euCYdLBSywr/xBL/1XP6BHUExkQOGsjKSjxgYqlZr0ZJ9iUwHLpJORFHE+4nfJb3VzG/B6q/nevLOCGYEIRCAGgQhEIAIRiEAEIhCDQAQiUN74FmAA5DtqQewismUAAAAASUVORK5CYII=');
o1.onclick = function() {
cancelipb594730 = 1;
document.getElementById('ofdipb594730').style.visibility = 'hidden';
_clipb594730_close(true);
removeOverlayipb594730();
}
return o1;
}
function _statusTitleipb594730() {
var o1 = document.createElement('div');
o1.setAttribute('id', 'omipb594730');
o1.setAttribute('style', 'border: none !important; display: block; margin: 0px auto; margin-top: 7px; width: 250px; color: rgb(60, 60, 60);');
o1.appendChild(document.createTextNode("Saving"));
od1 = document.createElement('span');
od1.setAttribute('id', 'od1ipb594730');
od1.appendChild(document.createTextNode('.'));
o1.appendChild(od1);
od2 = document.createElement('span');
od2.setAttribute('id', 'od2ipb594730');
od2.appendChild(document.createTextNode('.'));
o1.appendChild(od2);
od3 = document.createElement('span');
od3.setAttribute('id', 'od3ipb594730');
od3.appendChild(document.createTextNode('.'));
o1.appendChild(od3);
return o1;
}
function _overlayipb594730() {
var o=document.createElement('div');
o.setAttribute('id', 'ovipb594730');
o.setAttribute('class', 'instapaper_ignore');
var textStyle =
"-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; " +
"font-family: 'HelveticaNeue', Helvetica, Arial, sans-serif; " +
"line-height: 1.0; letter-spacing: normal; font-variant: normal; font-style: normal; user-select: none; -webkit-user-select: none;"
;
o.setAttribute('style',
"position: fixed; z-index: 2147483647; left: 0; top: -150px; width: 100%; font-size: 24px !important; " +
"transition: .4s ease-out; text-align: center;" +
"padding: 10px 0px; margin: 0; background-color: white; color: rgb(60,60,60);" +
"box-shadow: rgba(0, 0, 0, 0.298039) 0px 0px 1px, rgba(0, 0, 0, 0.298039) 0px 3px 50px;" + textStyle
);
o.appendChild(_logoipb594730());
o.appendChild(_cancelButtonipb594730());
o.appendChild(_folderDropdownipb594730());
o.appendChild(_statusTitleipb594730());
return o;
}
function _rlipb594730(){
var title,d=document,l=d.location,href=l.href;
if (typeof iptstbt != 'undefined') { alert("The bookmarklet is correctly installed."); throw(0); }
/* Inspired by Pascal LalibertÃ©'s code */
if (/www\.google\.[^/]+\/reader/.test(d.location) && typeof(window.getPermalink) == 'function') {
_greaderipb594730 = true;
var l = getPermalink();
if (! l) { alert('Select an item to save before using the Save to Instapaper bookmark.'); throw(0); }
href = l.url;
title = l.title;
} else if (typeof NEWSBLUR != 'undefined') {
_greaderipb594730 = true;
if (
typeof NEWSBLUR.reader != 'undefined' &&
typeof NEWSBLUR.reader.active_story != 'undefined' &&
NEWSBLUR.reader.active_story
) {
href = NEWSBLUR.reader.active_story.story_permalink;
title = NEWSBLUR.reader.active_story.story_title;
} else {
alert('Select a story to save before using the Save to Instapaper bookmark.');
throw(0);
}
}
document.body.appendChild(_overlayipb594730());
setTimeout(function() {

document.getElementById('ovipb594730').style.cssText += '-webkit-transform: translate(0, 150px) translate3d(0,0,0) translateZ(0); -moz-transform: translate(0, 150px) translate3d(0,0,0) translateZ(0); -ms-transform: translate(0, 150px) translate3d(0,0,0) translateZ(0); transform: translate(0, 150px) translate3d(0,0,0) translateZ(0);';

}, 1);
 
updateOverlaySizeipb594730();
animateOverlayipb594730();
window.addEventListener("resize", updateOverlaySizeipb594730, false);
window.addEventListener("gesturestart", updateOverlaySizeipb594730, false);
window.addEventListener("gestureend", updateOverlaySizeipb594730, false);
window.addEventListener("gesturechange", updateOverlaySizeipb594730, false);
if ("onorientationchange" in window) window.addEventListener("orientationchange", updateOverlaySizeipb594730, false);
document.body.addEventListener('click', _folderDropdownHideipb594730, false);

function ipMultiPageFetchCompletedipb594730()
{
if (cancelipb594730) return;
//console.log("[ipb594730] Got " + ipPageBodiesipb594730.length + " pages");
if (ipPageBodiesipb594730.length > 1) {
var jsonEsc = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
function jsonQuote(string) {
var subs = {
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'"' : '\\"',
'\\': '\\\\'
};
jsonEsc.lastIndex = 0;
return jsonEsc.test(string) ?
'"' + string.replace(jsonEsc, function (a){
var c = subs[a];
return typeof c === 'string'
? c
: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
}) + '"' :
'"' + string + '"'
;
}
bodyipb594730 = 'multipage:[';
for (var i = 0; i < ipPageBodiesipb594730.length; i++) {
bodyipb594730 +=
(i == 0 ? '' : ',') +
'[' + jsonQuote(ipPageURLsipb594730[i]) + ',' + jsonQuote('<div>' + ipPageBodiesipb594730[i] + '</div>') + ']'
;
}
bodyipb594730 += ']';
} else if (ipSinglePageCrawledipb594730) {
bodyipb594730 = 'singlepage:' + ipPageBodiesipb594730[0];
} else {
bodyipb594730 = ipPageBodiesipb594730[0];
}
//console.log('[ipb594730] Final body: ' + Math.floor(bodyipb594730.length / 1024) + ' KB');
_ipSendipb594730(document.location.href, btxTitleipb594730.length ? btxTitleipb594730 : document.title, false);
}
var ipPageBodiesipb594730 = [];
var ipPageURLsipb594730 = [];
var ipSinglePageCrawledipb594730 = 0;
function ipFetchNextPageipb594730(bodyNode, bodyURL)
{
if (cancelipb594730) return;
(function(DOMParser){"use strict";var DOMParser_proto=DOMParser.prototype,real_parseFromString=DOMParser_proto.parseFromString;try{if((new DOMParser).parseFromString("","text/html")){return;}}catch(ex){}DOMParser_proto.parseFromString=function(markup,type){if(/^\s*text\/html\s*(?:;|$)/i.test(type)){var doc=document.implementation.createHTMLDocument(""),doc_elt=doc.documentElement,first_elt;doc_elt.innerHTML=markup;first_elt=doc_elt.firstElementChild;if(doc_elt.childElementCount===1&&first_elt.localName.toLowerCase()==="html"){doc.replaceChild(first_elt,doc_elt);}return doc;}else{return real_parseFromString.apply(this,arguments);}};}(DOMParser));
var x, p, singlePageURL = (ipPageBodiesipb594730.length == 1 ? btx_singlePageURLipb594730(bodyNode) : 0), nextPageURL = (singlePageURL ? 0 : btx_nextPageURLipb594730(bodyNode, bodyURL));
if (ipPageBodiesipb594730.length < 30 &&
(singlePageURL || nextPageURL) &&
(x=window.XMLHttpRequest?new XMLHttpRequest():(window.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):0))
) {
try {
if (nextPageURL && ipPageURLsipb594730.indexOf(nextPageURL) != -1) throw(0);
//console.log('[ipb594730] crawling ' + (singlePageURL ? 'single-page' : 'next-page') + ' url: ' + (singlePageURL ? singlePageURL : nextPageURL));
updateOverlayTextipb594730("Saving", singlePageURL ? 'All Pages\u2026' : 'Page ' + (ipPageBodiesipb594730.length + 1));
x.open('GET', singlePageURL ? singlePageURL : nextPageURL, true);
x.onreadystatechange = function(){
try {
if (x.readyState == 4) {
if (x.status == 200) {
var nextPageDoc = new DOMParser().parseFromString(x.responseText, 'text/html');
var nextPageBody = btx_bodyipb594730(nextPageDoc.body).innerHTML;
if (singlePageURL) ipSinglePageCrawledipb594730 = 1;
ipPageBodiesipb594730[singlePageURL ? 0 : ipPageBodiesipb594730.length] = nextPageBody;
ipPageURLsipb594730[singlePageURL ? 0 : ipPageURLsipb594730.length] = nextPageURL;
if (singlePageURL) throw(0); else ipFetchNextPageipb594730(nextPageDoc.body, nextPageURL);
} else throw(0);
}
} catch (e) { ipMultiPageFetchCompletedipb594730(); }
}
x.send();
} catch(e) {
ipMultiPageFetchCompletedipb594730();
}
} else {
ipMultiPageFetchCompletedipb594730();
}
}
if (_greaderipb594730) {
updateOverlayTextipb594730("Saving", title);
_ipSendipb594730(href, title, true);
} else {

ipPageBodiesipb594730[0] = btx_bodyipb594730(document.body).innerHTML;
ipPageURLsipb594730[0] = document.location.href;
ipFetchNextPageipb594730(document.body, document.location.href);

}
// closing large _r1 function and running it
}
setTimeout(function () {
_rlipb594730();
}, 450);
function frameLoadedipb594730(event)
{
if (frameDidLoadipb594730 == 2) _clipb594730_close();
}
function _clipb594730_close(cancel)
{
var f = document.getElementById('ipb594730');
if (f) {
f.style.display = 'none';
f.parentNode.removeChild(f);
}
if (! cancel) overlayDoneipb594730("Saved", _greaderipb594730 ? '-' : btxTitleipb594730);
}
