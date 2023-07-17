1) Firstly Create an Application by Name “SimpleCalci”
2) Go to xml code of design change the layout to “RelativeLayout”
3) Add TextView component & change the following properties:
- Size: 38dp
- Text: Simple Calci
- Center-Align
4) Add PlainText(EditText) component & change the following properties in XML Code:
- Text: “”
- Hint: “Enter the first number”
- id: “@+id/editText1”
5) Add PlainText(EditText) component & change the following properties in XML Code:
- Text: “”
- Hint: “Enter the second number”
- id: “@+id/editText2”
6) Add TextView component to display result & change the following properties:
- Size: 40dp
- Text: “0”
- Center-Align
- id: “@+id/textView1”
7) Add 4 Buttons & rename the four buttons “Add”, “Sub”,”Mul” and “div” with
following addition:
- Onclick: “doAdd”(Add Button)
- Onclick: “doSub”(Sub Button)
- Onclick:“doMul”(Mul Button)
- Onclick: “doDiv”(Div Button)