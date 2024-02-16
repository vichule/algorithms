/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

let example1 = [1,2,3,1]
let example2 = [1,2,3,4]
let example3 = [1,1,1,3,3,4,3,2,4,2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const hashMap = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hashMap){
            return true
            
        }  
        hashMap[nums[i]] = 1      
    }
    return false
};

console.log(containsDuplicate(example3))


/* Another aproachment */

function containsDuplicate2(nums) {
    const isDuplicate = new Set(nums)
    return isDuplicate.size !== nums.length

}; //faster and short
