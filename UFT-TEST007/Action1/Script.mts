wait 3 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login - UFT Mobile").Page("Login - UFT Mobile_2").WebEdit("WebEdit").Set "admin@default.com" @@ script infofile_;_ZIP::ssf4.xml_;_
wait 2
Browser("Login - UFT Mobile").Page("Login - UFT Mobile_2").WebEdit("WebEdit_2").SetSecure "60c6287a1149ad502c5b17a1ed75313a88f59df2d3f7" @@ script infofile_;_ZIP::ssf5.xml_;_
wait 2
Browser("Login - UFT Mobile").Page("Login - UFT Mobile_2").WebButton("Login").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Login - UFT Mobile").Page("Dashboard - UFT Mobile").WebMenu("Dashboard Device Lab Apps").Select "Apps" @@ script infofile_;_ZIP::ssf7.xml_;_
wait 2
