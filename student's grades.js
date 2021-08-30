const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92] ;
// First, lets find the range of the grades (difference between highest and lowest).
const tmpGrade = [...grades] ;
let len = grades.length -1 ;
tmpGrade.sort(function(a,b){ //built-in function for execption in sort method.(100)
    return a -b ;
});
function range(grades,len){
    let lowestGrade ;
    let highestGrade ;
    let range ;
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

//calc the range of the grades from the second half of the school year
function halfRange(grades,len){
    let halfrange ;
    let tmpGrade = grades ;
    let halfLen = (Math.floor(len/2)+1);
    tmpGrade = tmpGrade.slice(halfLen,len);
    len = tmpGrade.length ;
    tmpGrade.sort(function(a,b){ 
        return a -b ;
    });
    halfrange = tmpGrade[len-1]-tmpGrade[0];
    return "Half Range: " + halfrange ;
}

console.log("stats: \n" + range(grades,len))
console.log(median(tmpGrade,len))
console.log(halfRange(grades,len))


