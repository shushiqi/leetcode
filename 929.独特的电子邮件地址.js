/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let i = 0; i < emails.length; i++) {
    const arr = emails[i].split("@");
    let local = arr[0].split("+")[0].replaceAll(".", ""),
      domain = arr[1];
    
    set.add(local + "@" + domain);
  }
  

  return set.size;
};
// @lc code=end
let emails = ["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"];
console.log(numUniqueEmails(emails));

