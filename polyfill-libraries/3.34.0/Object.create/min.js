CreateMethodProperty(Object,"create",function e(t,r){if("object"!==Type(t)&&"null"!==Type(t))throw new TypeError("Object prototype may only be an Object or null");var o=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return o.constructor.prototype=t,1 in arguments?Object.defineProperties(o,r):o});