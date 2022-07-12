# COMP1231-Assignment2

# Table of Contents

1. [Function 1](#Unique-Array)
2. [Function 2](#Fail-Pass-Averages)
1. [Function 3](#Check-Date)
2. [Function 4](#How-many-Days-Between)
1. [Function 5](#Swap-Characters)
2. [Function 6](#Move-Capital-Letters)
1. [Function 7](#Leading-Zeros)
2. [Function 8](#Sort-Me)
1. [Function 9](#Repeating-Characters)
2. [Function 10](#Capitalize-first-Letter-of-Each-Word)
## Unique Array
`function uniqueArray(arr)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* Receives an array of integers as an argument
* The function removes all duplicates (if they exist) from the array and returns it to the caller.
* Assume the input array parameter will have at least one element in it.
* Displays the calculated information as illustrated below:

```Calling uniqueArray([33]) ➔ [33]```

```Calling uniqueArray([33, 33, 1, 4]) ➔ [1, 4]```

```Calling uniqueArray([33, 33, 1, 4, 1]) ➔ [4]```

## Fail Pass Averages
`function failPassAvg(arr)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* Receives an array of numbers as a parameter, with each integer being a mark out of 100.
* The function should return an array consisting of all the averages less than 50, followed by the average of all the mark more than 50.
  - both averages should be rounded to the nearest whole number.
  - If there are no failing marks (< 50), then the average fail mark should be set to -1
  - If there are no passing marks (> 50), then the average pass mark should be set to -1
* Displays the calculated information as illustrated below:

```Calling failPassAvg([63, 65, 33]) ➔ [33, 64]```

```Calling failPassAvg([63, 62, 100, 100]) ➔ [-1, 81]```

```Calling failPassAvg([33, 42, 20, 10]) ➔ [26, -1]```

## Check Date
`function checkDate(string)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* Receives a string as a parameter.
* The function returns a Boolean indicating if the parameter string passed, is a valid date
  - True indicates a valid date was provideD
  - False indicates that a valid date was not provided.
* A valid date string, will have only the full month name (ex “January” not “Jan”) and a day number
  - A year will not be provided and thus your logic need not be concerned in that regard.
* The string parameter can contain any number of spaces, but the month name must always start at the first non-space character from the beginning of the string
* The day number part of the date string to be tested could contain alphabetic characters and thus making it invalid.
* You may assume February only has 28 days in it.
* Displays the calculated information as illustrated below:

```Calling checkDate("January 21") ➔ true```

```Calling checkDate("Auust 3") ➔ false```

```Calling checkDate("June 15B") ➔ false```

```Calling checkDate("February 0") ➔ false```

```Calling checkDate("December 3k1") ➔false```

```Calling checkDate("February 29") ➔ false```

```Calling checkDate("February 28") ➔ true```

## How many Days Between
`function daysBetweenTwoDates( str_date1, str_date2 )`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* Create a function that takes two valid dates as arguments
* The function returns the number of days between str_date1 and str_date2
* Displays the calculated information as illustrated below:

```Calling daysBetweenTwoDates("June 14, 2021", "June 20, 2021") ➔ 6 ```

```Calling daysBetweenTwoDates("December 29, 2021", "January 1, 2022") ➔ 3 ```

```Calling daysBetweenTwoDates("July 20, 2021", "July 30, 2021") ➔ 10 ```

## Swap Characters
`function swapCharacter(string, c1, c2)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* That take three arguments, a string, character 1 and character 2
* The function replaces all instances of c1 with c2, and vice versa
* The function returns the updated string
* Displays the result to the console as illustrated below.

```Calling swapCharacter("aabbccc", "a", "b") ➔ "bbaaccc"```

```Calling swapCharacter("random w#rds writt&n h&r&", "#", "&") ➔ "random w&rds writt#n h#r#"```

```Calling swapCharacter("128 895 556 788 999", "8", "9") ➔ "129 985 556 799 888"```

## Move Capital Letters
`function moveCapitalToFront(string)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* The function moves all capital letters to the front of a word.
* The uppercase letters moved to the front, maintain their original relative order
* The lowercase letters moved to the back front, maintain their original relative order
* Displays the result to the console as illustrated below:

```Calling moveCapitalToFront("hApPy") ➔ "APhpy"```

```Calling moveCapitalToFront("moveMENT") ➔ "MENTmove"```

```Calling moveCapitalToFront("shOrtCAKE") ➔ "OCAKEshrt"```

## Leading Zeros
`function trimZero(string)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* That takes in a string number as an argument
* The function returns the number removing any trailing and/or leading zeros.
* Trailing zeros are the zeros after a decimal point which don’t affect the value of the number
* Leading zeros are the zeros before a number which don’t affect the value of the number
* Displays the results to the console as illustrated below:

```Calling trimZero("230.000") ➔ "230"```

```Calling trimZero("00402") ➔ "402"```

```Calling trimZero("03.1400") ➔ "3.14"```

```Calling trimZero("30") ➔ "30"```

## Sort Me
`function sortArray(arr[], str)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* That takes in an array of integers, and a string (“Asc”, “Des”, “None”)
* The function returns the array of number according to the following rules
  - “***Asc***” returns a sorted array in ascending order
  - “***Des***” returns a sorted array in descending order
  - “***None***” returns an array without any modification
* Displays the result to the console as illustrated below:

```Calling sortArray([4, 3, 2, 1], "Asc")  ➔ [1, 2, 3, 4] ```

```Calling sortArray([7, 8, 11, 66], "Des")  ➔ [66, 11, 8, 7] ```

```Calling sortArray([1, 2, 3, 4], "None")  ➔ [1, 2, 3, 4] ```

## Repeating Characters
`function repeatingCharacter(string)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* That takes in a string
* The function returns the first character that repeats
* If there is no character that repeats, return -1
* The function should be case sensitive (case sensitive "I" not equal to "i")
* Displays the result to the console as illustrated below.

```Calling repeatingCharacter(“legolas”) ➔ "l"```

```Calling repeatingCharacter(“Gandalf”) ➔ "a"```

```Calling repeatingCharacter(“Balrog”) ➔ "-1"```

```Calling repeatingCharacter(“Isildur”) ➔ "-l"```

## Capitalize first Letter of Each Word
`function capitalizeFirstLetter(string)`

Create a JavaScript function that meets the following requirements:
* Please give your function a descriptive name
* That takes in a string as an argument
* The function converts first character of each word to uppercase
* The function returns the newly formatted string
* Displays the result to the console as illustrated below.

```Calling capitalizeFirstLetter("This is a title") ➔ "This Is A Title"```

```Calling capitalizeFirstLetter("capitalize every word") ➔ "Capitalize Every Word"```

```Calling capitalizeFirstLetter("I Like Pizza") ➔ "I Like Pizza"```

```Calling capitalizeFirstLetter("PIZZA PIZZA PIZZA") ➔ "PIZZA PIZZA PIZZA"```
