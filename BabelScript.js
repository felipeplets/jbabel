/*
 * BabelScript JavaScript Translation Library v0.0.1
 * http://plets.com.br/babelscript/
 *
 * Copyright (c) 2010 Felipe Plets
 *
 * Date: 2010-05-21 22:40:00 GMT-0300
 * Revision: 1
 */

var BabelScript = {
	// Default language is english
	Language: "en-US",
	// Add XML and ASP.NET RESOURCE
  ResourceType: "json",
	// Resource path, default is the same from the HTML file
  ResourcePath: "",
	// Array of lib objects that contain terms to translate
  Objs: [],
	// Array of language resources
  ResourceList: [],
	// Library used on this app
  Library: "jQuery",
	
	// Function that load ResourceList to objects
	Load: function (PsLang){
		// If don't have PsLang than set default language.
		if (!PsLang)
			PsLang = BabelScript.Language;
		// If language lib is not loaded than load it
		if (typeof BabelScript.ResourceList[PsLang] == 'undefined'){
			BabelScript.LoadResourceLib(PsLang);
		} else { // If language lib is loaded than just translate all terms
		  // Get library that will be used into translation
			var oResourceLib = BabelScript.ResourceList[PsLang];
			// Pass throught all objects setting the translation into it
			for (var i = 0; i < BabelScript.Objs.length; i++) {
				// Get object to be translated 
				var oObject      = BabelScript.Objs[i];
				// Resource ID
				var oResourceID  = oObject[1];
				// HTML element to be translated
				var oElement     = oObject[0];
				// String translated
			  var sTranslation = oResourceLib[oResourceID];
				// do the translation
				oElement.html(sTranslation);
			}
		}
	},
	
	// Load resource library
	LoadResourceLib: function(PsLang){
		// Get head element
		var head = document.getElementsByTagName('head')[0];
		// Create an Script element
		var oScript = document.createElement('script');
		oScript.type= "text/javascript";
		// Set the ResourcePath + file name
		oScript.src = BabelScript.ResourcePath + "BabelScript." + PsLang + '.js?' + new Date().getTime();
		head.appendChild(oScript);
	}
};

// jQUery extension that sets the translation resource ID to each object
(function($) { 
  $.fn.Translate = function(PsResourceID) { 
	BabelScript.Objs.push([this, PsResourceID]);
	return this;
  };
})(jQuery);

// Glossário
// Translation Resource ID
// Translation Resource
