// Chapter 14-16 ARRAYS

// Q-1:

// var studentsNames = [];

// Q-2:

// var studentsNames = {};
// studentNames.names = []

// Q-3:

// var stringArr = ["a","b","c"];

// Q-4:

// var numArr = [1,2,3,4];

// Q-5:

// var booleanArr = [true,false];

// Q-6:

// var mixedArr = ["a","b",1,2,true];

// Q-7:

// var mixedArr = ["a","b",1,2,true];

// var eduPakistan = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// document.write("<h1>Qualifications: <br><br> 1) " + eduPakistan[0] + "<br>2) " + eduPakistan[1] + "<br>3) " + eduPakistan[2] + "<br>4) " + eduPakistan[3] + "<br>5) " + eduPakistan[4] + "<br>6) " + eduPakistan[5] + "<br>7) " + eduPakistan[6] + "<br>8) " + eduPakistan[7]);

// Q-8:

// var studentNames = ["Asad", "Abbas", "Ali"];
// var totalMarks = 500;
// var obtainMarks = [];
// var obtainMarks1 = +prompt("Please Enter marks of ASAD out of 500");
// var obtainMarks2 = +prompt("Please Enter marks of ABBAS out of 500");
// var obtainMarks3 = +prompt("Please Enter marks of ALI out of 500");

// obtainMarks.push(obtainMarks1, obtainMarks2, obtainMarks3);
// document.write("<h1>Total Marks: 500</h1>");
//   document.write("<h2>Score of " + studentNames[0] + " is " + obtainMarks[0] + ". Percentage: " + (obtainMarks1 / totalMarks) * 100 + "%");
//   document.write("<h2>Score of " + studentNames[1] + " is " + obtainMarks[1] + ". Percentage: " + (obtainMarks2 / totalMarks) * 100 + "%");
//   document.write( "<h2>Score of " + studentNames[2] + " is " + obtainMarks[2] + ". Percentage: " + (obtainMarks3 / totalMarks) * 100 + "%");

// Q-9:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// a:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// var userColor = prompt("which color do you want to add in the Begining?");
// colorNames.unshift(userColor);
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// b:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// var userColor = prompt("which color do you want to add in the End?");
// colorNames.push(userColor);
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// c:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// colorNames.splice (0, 0, "Magenta", "Black");
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// d:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// colorNames.splice (0, 2);
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// e:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// colorNames.pop ();
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// f:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// var userColor = prompt("which color do you want to add?");
// var userPosition = +prompt("which Array index do you want to add?");
// colorNames.splice (userPosition -1, 0, userColor);
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// g:

// var colorNames = ["Red", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Pink", "White"];
// var userPosition = +prompt("which Position do you want to Delete colors?");
// var userRange = +prompt("How many colors do you want to delete?");
// colorNames.splice (userPosition -1, userRange);
// for(i=0; i<colorNames.length; i++){
//   document.write(colorNames[i] + "<br>");
// }

// Q-10:

// var scores = [320,230,480,120,590,240];
// document.write("<h1>Scores of the students: " + scores);
// scores.sort();
// document.write("<h1>Sorted scores of the students: " + scores);

// Q-11:

// var cityNames = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar", "Hyderabad", "Sukkur", "Kalam"];

// document.write("<h1>All Cities:</h1>");
// document.write(cityNames);
// var selectedCities = cityNames.slice(3, 6);
// document.write("<h1>Selected Cities:</h1>");
// document.write(selectedCities);

// Q-12:

// var arr = ["This", "is","my", "cat"];
// document.write("<h1>Original Array:</h1>");
// document.write(arr);
// document.write("<h1>Joined Array:</h1>");
// var newarr = arr.join(" ");
// document.write(newarr);


// Q-13:

// var devicesArr = [];
// devicesArr.push("keyboard");
// devicesArr.push("mouse");
// devicesArr.push("printer");
// devicesArr.push("monitor");
// document.write("<h1>Devices:</h1>");
// document.write(devicesArr);
// var firstValue = devicesArr.shift();
// var secondValue = devicesArr.shift();
// var thirdValue = devicesArr.shift();
// var fourthValue = devicesArr.shift();
// document.write("<h1>First In First Out (FIFO) Order:</h1>");
// document.write("Value Out 1:", firstValue + "<br>");
// document.write("Value Out 2:", secondValue + "<br>");
// document.write("Value Out 3:", thirdValue + "<br>");
// document.write("Value Out 3:", fourthValue + "<br>");

// Q-14:

// var devicesArr = [];
// devicesArr.push("keyboard");
// devicesArr.push("mouse");
// devicesArr.push("printer");
// devicesArr.push("monitor");
// document.write("<h1>Devices:</h1>");
// document.write(devicesArr);
// var firstValue = devicesArr.pop();
// var secondValue = devicesArr.pop();
// var thirdValue = devicesArr.pop();
// var fourthValue = devicesArr.pop();
// document.write("<h1>Last In First Out (LIFO) Order:</h1>");
// document.write("Value Out 1:", firstValue + "<br>");
// document.write("Value Out 2:", secondValue + "<br>");
// document.write("Value Out 3:", thirdValue + "<br>");
// document.write("Value Out 3:", fourthValue + "<br>");

// Q-15:

var arr = new Array("Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier");

document.write("<select>" +
    "<option>" + arr[0] + "</option>" +
    "<option>" + arr[1] + "</option>" +
    "<option>" + arr[2] + "</option>" +
    "<option>" + arr[3] + "</option>" +
    "<option>" + arr[4] + "</option>" +
    "<option>" + arr[5] + "</option>" +
"</select>");
