var createCandidate = function(name, partyColor) {

var politician = {};

politician.name = name;

politician.partyColor = partyColor;

politician.electionResults = null;

politician.totalVotes = 0;

  politician.tallyVotes = function(){

  this.totalVotes = 0;

  for (i = 0; i < this.electionResults.length; i++) {
    this.totalVotes += this.electionResults[i];

  }

};

  return politician;

};



var jon = createCandidate("Jon Snow", [0, 68, 0]);
var dani = createCandidate("Danaerys Targaryan", [0, 0, 77]);

jon.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

dani.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jon.electionResults[9] = 1;
dani.electionResults[9] = 28;

jon.electionResults[4] = 17;
dani.electionResults[4] = 38;

jon.electionResults[43] = 11;
dani.electionResults[43] = 27;

jon.electionResults[11] = 1;
dani.electionResults[11] = 3;

jon.tallyVotes();
dani.tallyVotes();

console.log(jon.totalVotes);
console.log(dani.totalVotes);

var setStateResults = function(state){

  theStates[state].winner = null;

  if (jon.electionResults[state] > dani.electionResults[state]){

    theStates[state].winner = jon;

  } else if (jon.electionResults[state] < dani.electionResults[state]){

      theStates[state].winner = dani;
  };

  var stateWinner = theStates[state].winner;


  if (stateWinner != null) {

    theStates[state].rgbColor = stateWinner.partyColor;

  } else {

    theStates[state].rgbColor = [96, 52, 171];
  };

 var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];

var stateName = header.children[0].children[0];

var abbreviation = header.children[0].children[1];

var candidateName1 = body.children[0].children[0];

var candidateName2 = body.children[1].children[0];

var candidateResults1 = body.children[0].children[1];

var candidateResults2 = body.children[1].children[1];

var winnerName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbreviation.innerText = theStates[state].nameAbbrev;
candidateName1.innerText = jon.name;
candidateName2.innerText = dani.name;
candidateResults1.innerText = jon.electionResults[state];
candidateResults2.innerText = dani.electionResults[state];

  if (stateWinner === jon) {
    winnerName.innerText = jon.name;
  } else if (stateWinner === dani){
    winnerName.innerText = dani.name;
  } else {

    winnerName.innerText = "DRAW";
  };




};


var winner;

if (jon.totalVotes < dani.totalVotes){

  winner = dani.name;

} else if (jon.totalVotes > dani.totalVotes) {
  winner = jon.name;

} else {
  winner = "Draw";
};

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = jon.name;
row.children[1].innerText = jon.totalVotes;
row.children[2].innerText = dani.name;
row.children[3].innerText = dani.totalVotes;
row.children[5].innerText = winner;
