const args = process.argv.slice(2);
const franc = require('franc');
const langs = require('langs');

const langCode = franc(args[0]);

const langName = langs.where('3', langCode);

const generateAnswer = languageObject => {
    if (languageObject) {
        return languageObject.name;
    } else return 'Error, please enter a longer phrase.';
}

console.log(generateAnswer(langName));