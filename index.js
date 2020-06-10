const shortString = "Hi there";
const longString = "the quick brown fox jumped over the lazy dog";

const toCapitalize = str => {
    const words = str.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
}
console.log(toCapitalize(shortString));
console.log(toCapitalize(longString));