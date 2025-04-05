function leftBy1() {
    let arr = [1, 2, 3, 4, 5];
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy
    console.log(arr);
}

function rightBy1() {
    let arr = [1, 2, 3, 4, 5];
    let copy = arr[arr.length - 1]
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = copy
    console.log(arr);

}

function leftBykI() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for left rotation'))
    k = k % arr.length;
    for (let j = 1; j <= k; j++) {
        let copy = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = copy
    }
    console.log(arr);
}

function rightBykI() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for left rotation'))
    k = k % arr.length;
    for (let j = 1; j <= k; j++) {
        let copy = arr[arr.length - 1]
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1]
        }
        arr[0] = copy
    }
    console.log(arr);
}

function leftBykII() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for right rotation'))
    k = k % arr.length;
    let temp = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + k) % arr.length]
    }
    console.log(temp);
}

function rightBykII() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for right rotation'))
    k = k % arr.length;
    let temp = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        temp[(i + k) % arr.length] = arr[i];
    }
    console.log(temp);
}

function leftBykIII() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for left rotation'))
    k = k % arr.length;

    reverse(0, k - 1)
    reverse(k, arr.length - 1)
    reverse(0, arr.length - 1)

    function reverse(i, j) {
        while (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    console.log(arr);

}

function rightBykIII() {
    let arr = [1, 2, 3, 4, 5];
    let k = Number(prompt('Enter k value for right rotation'))
    k = k % arr.length;

    reverse(0, arr.length - 1)
    reverse(0, k - 1)
    reverse(k, arr.length - 1)

    function reverse(i, j) {
        while (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    console.log(arr);
}

function removeDuplicates(){

}

function mergeArr1(){

}

function mergeArr2(){

}

function stocks1(){

}

function stocks2(){

}

function sortColors(){

}

function maxSubArray(){//Kadane's algo

}

function majorityElem(){//Moore's voting algo

}

function trappingRainWater(){

}

// leftBy1()
// rightBy1()

// leftBykI() //--> nested loop
// rightBykI() //--> nested loop

// leftBykII() //--> extra space
// rightBykII() //--> extra space

// leftBykIII() //--> reverse algo
// rightBykIII() //--> reverse algo

removeDuplicates()
mergeArr1()
mergeArr2()
stocks1()
stocks2()
sortColors()
maxSubArray()
majorityElem()
trappingRainWater()