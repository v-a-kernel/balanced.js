/**
 * balanced.js v0.0.4
 */
var balanced=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b){function c(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function d(a,b,d,e){for(var f,g,h=b instanceof RegExp&&b.ignoreCase,i=b instanceof RegExp?b:new RegExp(c(b)),j=d instanceof RegExp?d:new RegExp(c(d)),k=e instanceof RegExp?e:new RegExp(c(e)),l=new RegExp(i.source+"|"+j.source+"|"+k.source,"g"+(h?"i":"")),m=[],n=null;g=l.exec(a);)!n&&g[0].match(i)?(n=g,f=1):g[0].match(j)?f++:g[0].match(k)&&f--,null!==n&&0===f&&(m.push({index:n.index,length:g.index-n.index,head:n[0],tail:g[0]}),n=null);return m}function e(a,b,c){for(var d=0,e=0;e<a.length;e++){var f=a[e],g=c(b.substr(f.index+d+f.head.length,f.length-f.head.length),f.head,f.tail);b=b.substr(0,f.index+d)+g+b.substr(f.index+d+f.length+f.tail.length,b.length-(f.index+d+f.length)),d+=g.length-f.length-f.tail.length}return b}function f(a,b,c,f,g){var h=d(a,b,c,f);return e(h,a,g)}b.replaceMatchesInString=e,b.replacements=function(a){if(a=a||{},a.head=a.head||a.right,!a.source)throw new Error('Balanced: please provide a "source" property');if(!a.right)throw new Error('Balanced: please provide a "right" property');if(!a.left)throw new Error('Balanced: please provide a "left" property');if("function"!=typeof a.replace)throw new Error('Balanced: please provide a "replace" function');return f(a.source,a.head,a.right,a.left,a.replace)},b.matches=function(a){if(a=a||{},a.head=a.head||a.right,!a.source)throw new Error('Balanced: please provide a "source" property');if(!a.right)throw new Error('Balanced: please provide a "right" property');if(!a.left)throw new Error('Balanced: please provide a "left" property');return d(a.source,a.head,a.right,a.left)}}]);