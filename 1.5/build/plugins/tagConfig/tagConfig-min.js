/*!build time : 2013-09-29 5:24:16 PM*/
KISSY.add("gallery/uploader/1.5/plugins/tagConfig/tagConfig",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e="";b.all;var f=["autoUpload","postData","action","multiple","multipleLen","uploadType","disabled"],g=["max","maxSize","allowRepeat","allowExts","required","widthHeight"];return a.extend(d,c,{pluginInitializer:function(a){if(!a)return!1;var b=this,c=a.get("_oldInput");return c?(b.set("uploader",a),b.set("input",c),b.cover(),void 0):!1},cover:function(){var a=this;return a._setUploaderConfig(),a._setAuthConfig(),a},_setUploaderConfig:function(){var b,c=this,d=c.get("input"),e=c.get("uploader");a.each(f,function(c){if(b=d.attr(c)){switch(c){case"postData":c="data",b=a.JSON.parse(b);break;case"uploadType":c="type";break;case"autoUpload":b="true"==b}e.set(c,b)}})},_setAuthConfig:function(){var b=this,c=b.get("input"),d=b.get("uploader"),e=d.getPlugin("auth");if(!e)return!1;var f,h;a.each(g,function(a){if(f=c.attr(a)){switch(a){case"allowRepeat":f="true"==f;break;case"maxSize":f=Number(f)}e.set(a,f)}h=c.attr(a+"-msg"),h&&e.msg(a,h)})}},{ATTRS:{pluginId:{value:"tagConfig"},input:{value:e}}}),d},{requires:["node","base"]});