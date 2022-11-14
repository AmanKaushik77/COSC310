import posTagger from 'wink-pos-tagger';
// Create an instance of the pos tagger.
//var posTagger = require( 'wink-pos-tagger' );
var tagger = posTagger();

// Tag the sentence using the tag sentence api.
tagger.tagSentence( console.log(userResponse()) );