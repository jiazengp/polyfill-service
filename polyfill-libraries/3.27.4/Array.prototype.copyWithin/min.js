CreateMethodProperty(Array.prototype,"copyWithin",function(t,r){"use strict";var e=arguments[2];if(null===this||this===undefined)throw new TypeError("Cannot call method on "+this);var a=Object(this),n=ToInteger(a.length);n<=0&&(n=0),n=n===Infinity?Math.pow(2,53)-1:Math.min(n,Math.pow(2,53)-1),n=Math.max(n,0);var i,h=ToInteger(t);i=h<0?Math.max(n+h,0):Math.min(h,n);var o,M=ToInteger(r);o=M<0?Math.max(n+M,0):Math.min(M,n);var m;m=e===undefined?n:ToInteger(e);var v;v=m<0?Math.max(n+m,0):Math.min(m,n);var p,s=Math.min(v-o,n-i);for(o<i&&i<o+s?(p=-1,o=o+s-1,i=i+s-1):p=1;s>0;){var d=String(o),f=String(i);if(HasProperty(a,d)){var g=a[d];a[f]=g}else delete a[f];o+=p,i+=p,s-=1}return a});