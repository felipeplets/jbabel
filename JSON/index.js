$(document).ready(Window_OnLoad);
BabelScript.ResourcePath = "resource/";

function Window_OnLoad() {
  $("#pnlA").Translate("HELLOWORLD");
  BabelScript.Load("en");
  $("a").click(function(){BabelScript.Load($(this)[0].title);});
}