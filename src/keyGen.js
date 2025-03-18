// transformString.js

/**
 * Transforms a string by removing all spaces, 
 * making all letters lowercase except the first letter of each word after the first word.
 * 
 * @param {string} str - The input string to transform.
 * @returns {string} - The transformed string.
 */
function keyGen(str) {
    // Convert the entire string to lowercase
    const lowerCaseStr = str.toLowerCase();
    // Remove spaces and capitalize the first letter of each word after the first word
    const transformedStr = lowerCaseStr.replace(/\s+(\w)/g, (_, c) => c.toUpperCase());

    return transformedStr;
}

module.exports = keyGen;
