//1-question
// function isPalindrome(s) {
   
//     let normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

//     let reversedStr = normalizedStr.split('').reverse().join('');
    
//     return normalizedStr === reversedStr;
// }

// const input = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(input)); 




//2-question
// function removeElement(nums, val) {
//     let k = 0; 
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
            
//             nums[k] = nums[i];
//             k++; 
//         }
//     }
    
//     return k; 
// }
// let nums = [3, 2, 2, 3];
// let val = 3;
// let k = removeElement(nums, val);
// console.log(k); 
// console.log(nums);  


//3-question

// function strStr(haystack, needle) {
//     if (needle === "") {
//         return 0;
//     }
//     return haystack.indexOf(needle);
// }
// let haystack = "sadbutsad";
// let needle = "sad";
// console.log(strStr(haystack, needle)); 

// 4-question
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];}
        acc[key].push(item);
        return acc; 
    }, {});};
const array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
];
const result = array.groupBy(function(item) {
    return item.id;
});
console.log(result);

