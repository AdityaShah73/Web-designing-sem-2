function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));