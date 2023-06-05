
wait 2
Browser("Browser").Navigate "http://mc-nightly-server-10.myd.swinfra.net:8080/" @@ hightlight id_;_1771536_;_script infofile_;_ZIP::ssf6.xml_;_
wait 5
Browser("Login - UFT Mobile").Page("Login - UFT Mobile").WebEdit("WebEdit").Set "admin@default.com" @@ script infofile_;_ZIP::ssf1.xml_;_
wait 2
Browser("Login - UFT Mobile").Page("Login - UFT Mobile").WebEdit("WebEdit_2").SetSecure "60c62cba131e09c9362454a8ec2400afbfc5434d00b5" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2
Browser("Login - UFT Mobile").Page("Login - UFT Mobile").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Login - UFT Mobile").Page("Dashboard - UFT Mobile").WebMenu("Dashboard Device Lab Apps").Select "Apps" @@ script infofile_;_ZIP::ssf4.xml_;_
wait 5
