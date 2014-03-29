/*
 * jbabel JavaScript Translation Library v0.0.5
 * http://plets.com.br/jbabel/
 *
 * Copyright (c) 2014 Felipe Plets
 *
 * Date: 2014-03-29 8:20:00 GMT-0300
 * Revision: 5
 */
(function($) { 

	$.jbabel = {
	// Default language is english
	DefaultLanguage: 'en',
	// Only JSON supported by now
  	ResourceType: 'json',
	// Resource path, the directory in which the translations are stored
  	ResourcePath: 'i18n',
	// Name pattern for the translation files
  	ResourceFile: 'i18n',
	// Array of lib objects that contain terms to translate
  	Objs: [],
	// Array of language resources
  	ResourceList: [],
	// Array of current language resources
  	CurrentTranslation: [],
	// Library used on this app
  	Library: 'jQuery',
	
	// Function that load ResourceList to objects
	Load: function (PsLang) {
		// If don't have PsLang than set default language.
		if (!PsLang || typeof PsLang === 'function') {
			PsLang = this.DefaultLanguage;
		}
		// If language lib is not loaded than load it
		if (typeof this.ResourceList[PsLang] == 'undefined'){
			this.LoadResourceLib(PsLang);
		}
		// If language lib is loaded than just translate all terms
		// Get library that will be used into translation
		this.CurrentTranslation = this.ResourceList[PsLang];
		this.TranslateAll();
	},

	// Initialize language switcher
	InitLanguageSwitcher: function (){
		$("[data-i18n-switcher]").click(function() {
			$.jbabel.Load($(this).attr("data-i18n-switcher"));
		});
	},
	
	// Load resource library
	LoadResourceLib: function(PsLang) {
		$.jbabel.ResourceList[PsLang] = (function () {
		    var json = null;
		    $.ajax({
		        async		: false,
		        global		: false,
		        crossDomain	: true,
		        url			: $.jbabel.ResourcePath + '/' + $.jbabel.ResourceFile + '.' + PsLang + '.' + $.jbabel.ResourceType + '?' + new Date().getTime(),
		        dataType	: "json",
		        success 	: function (data) {
		            json = data;
		        }
		    });
		    return json;
		})(); 
	}, 

	GetTranslation: function(PsResourceID) {
		return this.CurrentTranslation[PsResourceID];
	},

	Translate: function(PoObject, PsResourceID, PsAttribute){
		// String translated
	  	var sTranslation = this.GetTranslation(PsResourceID);
		// do the translation
		if (PsAttribute) {
			PoObject.attr(PsAttribute, sTranslation);
		} else {
			PoObject.html(sTranslation);
		}
	},

	TranslateAll: function() {
		var oObject = {};
		// Pass throught all objects setting the translation into it
		for (var i = 0; i < this.Objs.length; i++) {
			// Get object to be translated 
			oObject      = this.Objs[i];
			// Call the translation for each object
			$.jbabel.Translate(oObject[0], oObject[1], oObject[2]);
		}

		// Also translate all objects that use the data-i18n attribute
		$("[data-i18n]").each(function(){
			$.jbabel.Translate($(this), $(this).attr("data-i18n"));
		});
	}
};

// jQUery extension that sets the translation resource ID to each object
  $.fn.Translate = function(PsResourceID, PsAttribute) {
	$.jbabel.Objs.push([this, PsResourceID, PsAttribute]);
	$.jbabel.Translate(this, PsResourceID, PsAttribute);
	return this;
  };

// Load the default language 
  $(document).ready($.proxy($.jbabel.Load, $.jbabel));
  $(document).ready($.proxy($.jbabel.InitLanguageSwitcher, $.jbabel));

})(jQuery);

// Glossary
// Translation Resource ID
// Translation Resource
