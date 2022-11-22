export const findIntersection = (arr) => {

    let intersection = [];

    const kume1 = arr[0].replace(/\s/g,"").split(',')
    const kume2 = arr[1].replace(/\s/g,"").split(',')

    kume2.forEach((item) => {
        if(kume1.includes(item)){
            intersection.push(item)
        }
    })

    if(intersection.length != 0){
        return intersection.toString()
    }else{
        return false
    }

}

/*
 Have the function FindIntersection(strArr) read the array
 of the strings stored in strArr which will contain 2 elements:
 the first element will represent a list of comma-separated a second 
 list of comma-separated numbers (also sorted). your goal
 is to return a comma-separated string containing the numbers
 that occur in elements of strArr in sorted order. If there is no 
 intersection , return the string false 
 */