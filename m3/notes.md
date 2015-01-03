Some notes I'm keeping from this third module:

* Within this module there is a single index.html file that calls the javascript code from the js directory. It is setup to always call the file named script.js and after each snippet of video tutorial we copy that file content to a another js file representative of the constructs discussed. So, from the script.js file we create the following files in order:


1. ifStatement.js
1. elseIfStatement.js
1. whileStatement.js
1. forStatement.js - does not explain that the for loop in this example does not handle the situation where age == 0 the way he explained how to handle this in the do-while loop discussion.
1. break.js - this is even a more broken example based on the logic of the tutorial. The code works, just not as anyone would ever imagine it should nor even as he explains. If age == 0 then no statement prints, if age == 1 then no statement prints, if age == 2 then only a single "happy birthday" statement prints. The break statement works as it should but the example story doesn't really work.
1. switch.js
