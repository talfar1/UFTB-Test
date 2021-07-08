SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").Move 794,361 @@ hightlight id_;_590746_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set parameter("username") @@ hightlight id_;_1883439248_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure parameter("password") @@ hightlight id_;_1971374712_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1971373512_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Move 375,373 @@ hightlight id_;_656454_;_script infofile_;_ZIP::ssf6.xml_;_
