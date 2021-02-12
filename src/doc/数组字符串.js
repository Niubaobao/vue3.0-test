// 数组 
/*
数组中的元素在内存中是连续存储的，且每个元素占用相同大小的内存
*/

//寻找数组的中心索引

const nums = [1, 7, 3, 6, 5, 6]

var pivotIndex = nums => {

    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0; //左侧的和

    for (let i = 0; i < nums.length; i++) {
        if (sum == total - sum - nums[i]) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};

pivotIndex(nums) //3