function dropElements(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[0])) {
            break;

        }else {
            arr.shift()
        }
    }
console.log(arr);
}
 dropElements([1,2,3,4,5,6,7,8], function(n) {
     return n >= 4;
 })
 dropElements([1,2,3,4], function(n) {
     return n < 4;
 })
