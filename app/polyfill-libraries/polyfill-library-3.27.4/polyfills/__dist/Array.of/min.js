CreateMethodProperty(Array,"of",function(){var r=arguments.length,t=arguments,e=this;if(IsConstructor(e))var a=Construct(e,[r]);else var a=ArrayCreate(r);for(var o=0;o<r;){var n=t[o],v=ToString(o);CreateDataPropertyOrThrow(a,v,n);var o=o+1}return a.length=r,a});