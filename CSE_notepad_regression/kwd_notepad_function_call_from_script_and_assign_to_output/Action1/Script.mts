Window("Notepad").Activate
Window("Notepad").WinEditor("Edit").Type micReturn
Window("Notepad").WinEditor("Edit").Type "lets wait function! "
waiting
Window("Notepad").WinEditor("Edit").Type micReturn
Window("Notepad").WinEditor("Edit").Type "print function ! "
Window("Notepad").WinEditor("Edit").Type micReturn
Parameter("out_for_function") = printing( Parameter("p2_in"), Parameter("p3_in"))
