/*!build time : 2015-04-09 10:11:32 AM*/
KISSY.add("kg/uploader/3.0.1/plugins/callapp/callapp",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}return a.extend(d,c,{pluginInitializer:function(a){var b=this;return a?void a.on("no-windVane",function(){if(!lib||!lib.callapp)return alert(b.get("noSupport")),!1;var a=b.get("msg"),c=lib.callapp;if(confirm(a)){var d=b.get("url");c.gotoPage(d)}}):!1}},{ATTRS:{pluginId:{value:"callapp"},url:{value:""},msg:{value:"\u4e0a\u4f20\u529f\u80fd\u53ea\u80fd\u5728\u6dd8\u5b9d\u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528\uff0c\u662f\u5426\u8df3\u8f6c\u5230\u5ba2\u6237\u7aef\uff1f"},noSupport:{value:"\u975e\u5e38\u62b1\u6b49\uff0c\u4e0a\u4f20\u529f\u80fd\u53ea\u80fd\u5728\u6dd8\u5b9d\u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528T_T"},sb:{value:""}}}),d},{requires:["node","base"]});