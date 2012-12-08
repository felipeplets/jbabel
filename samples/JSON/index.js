// Once the window is loaded execute this function
$(document).ready(Window_OnLoad);

// The directory where the translation resources are
jbabel.ResourcePath = "resource/";

// The method that loads the jBabel and also set function to translate
function Window_OnLoad() {

// Identify which container is linked to which translation string
  $("#pnlA").Translate("HELLOWORLD");

	// Add a trigger to change the language
	$("a").click(function(){jbabel.Load($(this)[0].title);});

	// Load the language you want to be the default
	jbabel.Load("en");
}