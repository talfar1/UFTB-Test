wait 3
Browser("Google").Page("Google").WebEdit("Search").Set "test"
wait 2
Browser("Google").Page("Google").WebButton("Google Search").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Google").Page("test - Google Search").Link("Images").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 3
Browser("Google").Page("test - Google Search").Link("Videos").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
