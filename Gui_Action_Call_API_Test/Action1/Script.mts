SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").Move 491,290 @@ hightlight id_;_1378752_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1987481856_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "60e2d013fde594f251f6" @@ hightlight id_;_1921389760_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1922118176_;_script infofile_;_ZIP::ssf6.xml_;_

RunAPITest "API-TEST1", parameter("flight_from") ,parameter("flight_to"),parameter("name")







