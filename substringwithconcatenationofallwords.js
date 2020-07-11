//Objective is to find the indexes of all substrings that are a concatenation
//of the words in a list, using each word only once

let s = "barfoothefoobarman", words = ["foo","bar"]


//O(n * m * l) solution where n is the length of the string, m is the length of the
//total number of words, and l is the length of each word
//We use a sliding window approach here

let left = 0
let right = 0
let result = []
let wordLength = words[0].length
let wordCount = words.length
let map = {}

for (let word of words) {
    if (map[word] == undefined) {
        map[word] = 1
    } else {
        map[word]++
    }
}

//Go up to the last index that can fit all words
for (let i = 0; i < s.length - (wordLength * wordCount) + 1; i++) {
    let wordsSeen = {}
    for (let j = 0; j < wordCount; j++) {
        //If each word's length was 3, then skip '3' indexes each time we iterate
        let wordIndex = i + (j * wordLength)
        let word = s.substring(wordIndex, wordIndex + wordLength)
        
        if (wordsSeen[word] == undefined) {
            wordsSeen[word] = 1
        } else {
            wordsSeen[word]++
        }
        
        //If the frequency of the word is higher than the original mapping OR if it doesn't
        //exist in the origin map, then leave the loop
        if (wordsSeen[word] > (map[word] || 0)) {
            break
        }
        
        //If we haven't 'break' yet and we've put in all words
        if (j + 1 == wordCount) {
            result.push(i)
        }
    }
}

return result