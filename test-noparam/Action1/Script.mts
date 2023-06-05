SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
wait 2
WpfWindow("Micro Focus MyFlight Sample").Move 497,294 @@ hightlight id_;_5374398_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1884466152_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "60dc3f46269926c52d85" @@ hightlight id_;_1884466824_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1897602808_;_script infofile_;_ZIP::ssf6.xml_;_
wait 3
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_7537518_;_script infofile_;_ZIP::ssf7.xml_;_
