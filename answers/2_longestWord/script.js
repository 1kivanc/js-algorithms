export const LongestWord = (sen) => {

    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    arr.sort((a,b) => {return b.length - a.length})

    return arr[0]
}


/*
Longest word 

- using the javascript language, have the function LongestWord(sen)
take the sen parameter being passed and return the largest word in the 
string 

- If there are two or more words that are the same length, return
the first word from the string with that length.

- Ignore punctuation and assume sen will not be empty

*/