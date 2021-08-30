const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92] ;
// First, lets find the range of the grades (difference between highest and lowest).
let tmpGrade = grades ;
let len = grades.length -1 ;

tmpGrade.sort(function(a,b){ //built-in function for execption in sort method.(100)
    return a -b ;
});
function range(grades,len){
    let lowestGrade ;
    let highestGrade ;
    let reange ;
    lowestGrade = tmpGrade[0];
    highestGrade = tmpGrade[len];
    range = highestGrade - lowestGrade ;
    return "range: " + range ;
    }

// calc the median grade.
function median(tmpGrade,len){
    let median ;
    median = tmpGrade[Math.floor(len/2)];
    return "median: " + median ;
}

console.log(range(grades,len))
console.log(median(tmpGrade,len))

