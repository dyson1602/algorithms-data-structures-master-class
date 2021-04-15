// Given a string s of words delimited by spaces, reverse the order of words.

const reverseWord = (sentence) => {
  return sentence.split(' ').reverse().join(' ')
}