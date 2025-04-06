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

function removeDuplicates() {
    let nums = [1, 1, 2, 2, 2, 2, 3, 3, 4]
    let j = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    console.log(nums.slice(0, j));

}

function mergeSortedArr() {
    let arr1 = [2, 4, 6]
    let arr2 = [1, 3, 5, 8]
    let merge = new Array(arr1.length + arr2.length)
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merge[k++] = arr1[i++]
        }
        else {
            merge[k++] = arr2[j++]
        }
    }

    while (j < arr2.length) {
        merge[k++] = arr2[j++]
    }

    while (i < arr1.length) {
        merge[k++] = arr1[i++]
    }

    console.log(merge);

}

function bestTimeToBuyAndSellStocks() {
    let prices = [7, 1, 5, 3, 6, 4]
    let maxProfit = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]
        let profit = prices[i] - min;
        maxProfit = Math.max(maxProfit, profit)
    }
    console.log(maxProfit);

}

function sortColors() {
    let arr = [2, 0, 1]
    let i = 0;
    let j = 0;
    let k = arr.length - 1
    while (i <= k) {
        if (arr[i] == 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j++;
        }
        else if (arr[i] == 2) {
            [arr[i], arr[k]] = [arr[k], arr[i]];
            k--;
        }
        else i++
    }
    console.log(arr);

}

function maxSubArray() {//Kadane's algo
    let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        max = Math.max(max, sum)
        if (sum < 0) sum = 0
    }
    console.log(max);

}

function majorityElem() {//Moore's voting algo
    let arr = [3, 3, 4];
    let ans = arr[0]
    let count = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == ans) count++
        else count--
        if (count == 0) {
            ans = arr[i]
            count = 1
        }
    }
    console.log(ans);
}

function trappingRainWater() {
    let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    let left = new Array(height.length)
    let right = new Array(height.length)
    let maxLeft = height[0]
    let maxRight = height[height.length - 1]
    left[0] = maxLeft
    right[height.length - 1] = maxRight
    let ans = 0;
    for (let i = 1; i < height.length; i++) {
        maxLeft = Math.max(maxLeft, height[i])
        left[i] = maxLeft
    }
    for (let i = height.length - 2; i >= 0; i--) {
        maxRight = Math.max(maxRight, height[i])
        right[i] = maxRight
    }
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(left[i], right[i]) - height[i]
    }
    console.log(ans);

}

// leftBy1()
// rightBy1()

// leftBykI() //--> nested loop
// rightBykI() //--> nested loop

// leftBykII() //--> extra space
// rightBykII() //--> extra space

// leftBykIII() //--> reverse algo
// rightBykIII() //--> reverse algo

// removeDuplicates()
// mergeSortedArr()
// bestTimeToBuyAndSellStocks()
// sortColors()
// maxSubArray()
// majorityElem()
// trappingRainWater()