# Table of Contents

1. [Function 1](#Calculate-Change)
2. [Function 2](#Miles-to-Kilometers)
1. [Function 3](#Find-Min-and-Max)
2. [Function 4](#Count-Occurrences)
1. [Function 5](#Convert-Number-Grade-to-Letter-Grade)
2. [Function 6](#Reverse-the-Order-of-the-Array)
1. [Function 7](#School-Days-Remaining)
2. [Function 8](#Count-Vowels)
1. [Function 9](#Alphabetical-Order)

## Calculate Change
`function _two(cents)`

Create a JavaScript function that meets the following requirements:
* Is passed an integer parameter, representing a number of Canadian cents.
* The function uses the parameter to determine the smallest number of Canadian quarters, dimes, nickels and pennies that are equal to the given (parameter) amount.
* Displays the calculated information as illustrated below:

```Calling _two(80)```

```80 cents in minimal change is: 3 quarters, 0 dimes, 1 nickels and 0 pennies.```

## Miles to Kilometers
`function _three(miles, kilometers)`

Create a JavaScript function that meets the following requirements:
* Receives two distances, one distance in miles and the other, a distance in kilometers value.
* Converts the miles to the equivalent kilometer value
* Converts the kilometer value to the equivalent miles
* Displays the calculated information as illustrated below:

```Calling _three(15,9)```

```15 miles = 24.14 Kilometers, 9 kilometers = 5.59 miles.```

## Find Min and Max
`function _four( array )`

Create a JavaScript function that meets the following requirements:
* Receives an integer array as a parameter
* The function transverses the array to determine the minimum and maximum values in the array.
* Displays the calculated information as illustrated below:

```Calling _four([-8,-1,-87,-14,-81,-74,-20,-86,-61,-10]);```

```The minimum valu in the array is: -87, the maximum value is -1```

## Count Occurrences
`function _five(string, char)`

Create a JavaScript function that meets the following requirements:
* Accepts two input parameters, a string and a character letter.
* The function determines the number of occurrences of the character in the string.
* Displays the result to the console as illustrated below.

```Calling _five(“map”, “p”);```

```The word map has 1 occurrences of the character p```

## Convert Number Grade to Letter Grade
`function _six( grade )`

Create a JavaScript function that meets the following requirements:
* Is passed a numeric grade, calculating and displaying the corresponding letter grade based on: 100 - 90 = **‘A+’**, 89 - 85 = **‘A’**, 84 - 80 = **‘A’**, 79 -76 = **‘B+’**, 75 – 73 = **‘B’**, 72 – 70 = **‘B-’**, 69 – 66 = **‘C+’**, 65 – 63 = **‘C’**, 62 – 60 = **‘C-’**, 59 – 56 = **‘D+’**, 55 – 53 = **‘D’**, 52 – 50 = **‘D-’**, < 50 = **‘F’**
* Displays the result to the console as illustrated below:

```Calling _six(93)```

```Congratulations, you passed the course. Your final grade is grade = 'A+'```

```Calling _six(39)```

```Unfortunately, you did not meet the minimum requirement to pass the course. your final grade is: grade = 'F'```

## Reverse the Order of the Array
`function _seven(array)`

Create a JavaScript function that meets the following requirements:
* Receives character array
* The function reverses the order of the of the character array.
* Displays the results to the console as illustrated below:

`Calling _seven([j, p, g, F, c, x, A, c, q, I]);`

`Original order array = [j, p, g, F, c, x, A, c, q, I]`

`Reversed order array = [I, q, c, A, x, c, F, g, p, j]`

## School Days Remaining
`function _eight()`

Create a JavaScript function that meets the following requirements:
* Receives no input parameters
* Determines the number of days until the end of the school year
* Please note the last day of the W2021 School Calendar is: **Friday, April 23 rd , 2021**
* Displays the result to the console as illustrated below:

`Calling _eight()`

`Current date = 2/1/2021, last day of school = 04/23/2021. The days left until the end of school = 81 days.`

## Count Vowels
`function _nine(word)`

Create a JavaScript function that meets the following requirements:
* Accepts a string parameter, counting the number of vowels within the string.
* The function should be case insensitive, handling both upper and/or lowercase letters.
* Displays the result to the console as illustrated below.

`Calling _nine(“flugelhorn”);`

`Vowel count: A=0, E=1, I=0, O=1, U=1, Y=0`

## Alphabetical Order
`function _ten(my_string)`

Create a JavaScript function that meets the following requirements:
* Create a JavaScript function that accepts a string parameter, then organizes the string so it’s in alphabetical order
* The function is case **insensitive**, that is, it does not distinguish any difference between upper or lower case.
* Displays the result to the console as illustrated below.

`Calling _ten(“Sameer”);`

`The string converted in alphabetical order is: aeemrS`
