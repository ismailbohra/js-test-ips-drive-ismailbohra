function smallestMissingPositiveInteger(nums) {

  nums.sort((a, b) => a - b);
  let smallestpositive = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= smallestpositive && nums[i]>0) {
      smallestpositive = nums[i] + 1
    }
  }
  return smallestpositive
}
module.exports = smallestMissingPositiveInteger;

