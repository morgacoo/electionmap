var createPolitician = function(name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.announceCandidate = function() {
    console.log("Your candidate is " + this.name + "!");
  };

  politician.announceCandidate();
  politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician;
};

var morgan = createPolitician("Morgan Cook", [132, 17, 11]);
var ali = createPolitician("Ali Borowsky", [245, 141, 136]);


morgan.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

ali.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

morgan.electionResults[9] = 1;
morgan.electionResults[4] = 17;
morgan.electionResults[43] = 11;

ali.electionResults[9] = 28;
ali.electionResults[4] = 38;
ali.electionResults[43] = 27;


morgan.tallyUpTotalVotes();
ali.tallyUpTotalVotes();

console.log(morgan.totalVotes);
console.log(ali.totalVotes);

var winner = "???";
if (morgan.totalVotes > ali.totalVotes) {
  winner = morgan.name;
} else if (morgan.totalVotes < ali.totalVotes) {
  winner = ali.name;
} else {
  winner = "DRAW";
}

console.log("And the winner is " + winner + "!!!");
console.log("Morgan's color is " + morgan.partyColor);
console.log("Ali's color is " + ali.partyColor);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = morgan.name;
row.children[1].innerText = morgan.totalVotes;
row.children[2].innerText = ali.name;
row.children[3].innerText = ali.totalVotes;
row.children[5].innerText = winner;

var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];

var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];



/*HERE? NEED TO DEFINE STATE*/
var setStateResults = function(state) {
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  theStates[state].winner = null;
  if (morgan.electionResults[state] > ali.electionResults[state]) {
    theStates[state].winner = morgan;
  } else if (morgan.electionResults[state] < ali.electionResults[state]) {
    theStates[state].winner = ali;
  }

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidate1Name.innerText = morgan.name;
candidate2Name.innerText = ali.name;

candidate1Results.innerText = morgan.electionResults[state];
candidate2Results.innerText = ali.electionResults[state];
}
