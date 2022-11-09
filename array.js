// Create a function to sort a given array into ascending order.
function sort_array(arr) {
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}
let arr = [23, 45, 34, 12, 5, 96, 16]
console.log(sort_array(arr))