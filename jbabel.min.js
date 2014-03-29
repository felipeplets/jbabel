/*
 * jbabel JavaScript Translation Library v0.0.5
 * http://plets.com.br/jbabel/
 *
 * Copyright (c) 2014 Felipe Plets
 *
 * Date: 2014-03-29 8:20:00 GMT-0300
 * Revision: 5
 */
(function(a){a.jbabel={DefaultLanguage:"en",ResourceType:"json",ResourcePath:"i18n",ResourceFile:"i18n",Objs:[],ResourceList:[],CurrentTranslation:[],Library:"jQuery",Load:function(b){if(!b||typeof b==="function"){b=this.DefaultLanguage}if(typeof this.ResourceList[b]=="undefined"){this.LoadResourceLib(b)}this.CurrentTranslation=this.ResourceList[b];this.TranslateAll()},InitLanguageSwitcher:function(){a("[data-i18n-switcher]").click(function(){a.jbabel.Load(a(this).attr("data-i18n-switcher"))})},LoadResourceLib:function(b){a.jbabel.ResourceList[b]=(function(){var c=null;a.ajax({async:false,global:false,crossDomain:true,url:a.jbabel.ResourcePath+"/"+a.jbabel.ResourceFile+"."+b+"."+a.jbabel.ResourceType+"?"+new Date().getTime(),dataType:"json",success:function(d){c=d}});return c})()},GetTranslation:function(b){return this.CurrentTranslation[b]},Translate:function(e,b,d){var c=this.GetTranslation(b);if(d){e.attr(d,c)}else{e.html(c)}},TranslateAll:function(){var c={};for(var b=0;b<this.Objs.length;b++){c=this.Objs[b];a.jbabel.Translate(c[0],c[1],c[2])}a("[data-i18n]").each(function(){a.jbabel.Translate(a(this),a(this).attr("data-i18n"))})}};a.fn.Translate=function(b,c){a.jbabel.Objs.push([this,b,c]);a.jbabel.Translate(this,b,c);return this};a(document).ready(a.proxy(a.jbabel.Load,a.jbabel));a(document).ready(a.proxy(a.jbabel.InitLanguageSwitcher,a.jbabel))})(jQuery);