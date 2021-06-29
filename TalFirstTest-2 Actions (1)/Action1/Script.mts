SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").Move 502,224 @@ hightlight id_;_2080103008_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("username") @@ hightlight id_;_2107902944_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set parameter("password") @@ hightlight id_;_2080103008_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2080157648_;_script infofile_;_ZIP::ssf33.xml_;_
wait 2

 @@ hightlight id_;_2080076608_;_script infofile_;_ZIP::ssf23.xml_;_
 @@ hightlight id_;_4850816_;_script infofile_;_ZIP::ssf9.xml_;_
 @@ hightlight id_;_4195004_;_script infofile_;_ZIP::ssf23.xml_;_

