'search_flight
wait 2
WpfWindow("Micro Focus MyFlight Sample").Move 577,326
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Portland"
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_4").Click 7,13
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate Parameter("date")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select Parameter("numofseats")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click
wait 1









'

