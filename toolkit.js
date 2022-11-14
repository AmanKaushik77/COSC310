
var text = "that is so bad that we had to sit in line for so long! My feet were hurting soo bad."


console.log("POS Tagger --------------------")
POStagger(text);
console.log("Sentiment -----------");
Sentiment(text);
console.log("NER-----------------------");
NER(text);

function POStagger(text){

var posTagger = require( 'wink-pos-tagger' );

var tagger = posTagger();


var tagged = tagger.tagSentence(text);
for(var i = 0; i < tagged.length; i++){
    console.log(tagged[i]);
}

}


function Sentiment(text){

var sentiment = require( 'wink-sentiment' );



    console.log( sentiment( text ) );



}

function NER(text){
    var ner = require( 'wink-ner' );

var myNER = ner();

var trainingData = [
  { text: 'phone', entityType: 'product'},
  { text: 'desktop', entityType: 'product' },
  { text: 'laptop', entityType: 'product' },
  { text: 'tablet', entityType: 'product' },
  { text: 'watch', entityType: 'product' }
];

myNER.learn( trainingData );

var winkTokenizer = require( 'wink-tokenizer' );

var tokenize = winkTokenizer().tokenize;

var tokens = tokenize( text );

tokens = myNER.recognize( tokens );
var tok = tokens;

console.log( tok );

}