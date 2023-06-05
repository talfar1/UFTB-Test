SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").Move 296,263 @@ hightlight id_;_27854008_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set parameter("username") @@ hightlight id_;_1973994192_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure parameter("password") @@ hightlight id_;_1973990016_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1978426760_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Move 365,316 @@ hightlight id_;_3342416_;_script infofile_;_ZIP::ssf6.xml_;_

RunAction "Action2", oneIteration, parameter("date"),parameter("numofseats")

