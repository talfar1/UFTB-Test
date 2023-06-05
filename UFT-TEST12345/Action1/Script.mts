wait 3
Browser("Google").Page("Google").WebEdit("Search").Set "test" @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Google").Page("Google").WebButton("Google Search").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Google").Page("test - Google Search").Link("Images").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 3
Browser("Google").Page("test - Google Search").Link("Videos").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
