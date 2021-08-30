const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92] ;
// First, lets find the range of the grades (difference between highest and lowest).
let tmpGrade = grades ;
let lowestGrade ;
let highestGrade ;
let len = grades.length -1 ;
let reange ;
let median ;
tmpGrade.sort(function(a,b){ //built-in function for execption in sort method.(100)
    return a -b ;
});
lowestGrade = tmpGrade[0];
highestGrade = tmpGrade[len];
range = highestGrade - lowestGrade ;
// calc the median grade.
median = tmpGrade[Math.floor(len/2)];


