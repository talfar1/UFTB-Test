Browser("Google").Page("Google").Sync
Browser("Google").Navigate Parameter("x") @@ hightlight id_;_4654654_;_script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Google").Page("Login - UFT Mobile").WebEdit("WebEdit").Set Parameter("y") @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2
Browser("Google").Page("Login - UFT Mobile").WebEdit("WebEdit_2").SetSecure "60c73ef1965e05df2757d8c4b79fba2a0f7e1f559c63" @@ script infofile_;_ZIP::ssf3.xml_;_
wait 2
Browser("Google").Page("Login - UFT Mobile").WebButton("Login").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Google").Page("Dashboard - UFT Mobile").WebMenu("Dashboard Device Lab Apps").Select "Apps" @@ script infofile_;_ZIP::ssf5.xml_;_
wait 2
