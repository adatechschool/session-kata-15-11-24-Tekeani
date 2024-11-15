const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }


function getLatinCharacterList() {
    let string = prompt("Entrez un mot :")

    if (!/^[a-zA-Z]+$/.test(string)) {
        alert("Veuillez entrer que des lettres svp")
        getLatinCharacterList()
    } else {
        let tableWord = string.split('')
        let i = 0

        for (i = 0; i < tableWord.length; i++) {
        console.log(tableWord[i])
     }
     return string.split('')
    }
}


function translateLatinCharacter(word) {
    let translatedWord = ""
    let i = 0

    for (i = 0; i < word.length; i++) {
        let letter = word[i].toUpperCase()
        if (latinToMorse[letter]) {
            translatedWord += latinToMorse[letter] + ' '
        }
    }
    return translatedWord
}




let word = getLatinCharacterList()
if (word) {
    let morseCode = translateLatinCharacter(word)
    console.log("Traduction en morse : " + morseCode)
}