// Once the window is loaded execute this function
$(document).ready(Window_OnLoad);

// The method that loads the jBabel and also set function to translate
function Window_OnLoad() {

	// Identify which container is linked to which translation string
	 $("title").Translate("SAMPLE");			  // TAG as selector	
	 $("#pnlHelloWorld").Translate("HELLOWORLD"); // ID as selector
	 $(".translation").Translate("TRANSLATION");  // CLASS as selector 
	 $("a[title='en']").Translate("EN");  		  // ATTRIBUTE selector
	 $("a[title='es']").Translate("ES");  		  // ATTRIBUTE selector
	 $("a[title='pt']").Translate("PT");  		  // ATTRIBUTE selector
}