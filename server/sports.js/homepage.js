import React, { useState } from "react";

const SportsBetting = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [sportsAPIKey, setSportsAPIKey] = useState(
    "8b80cb19e317c4b97ba6b368e1d88304"
  );
  const [financeAPIKey, setFinanceAPIKey] = useState(
    "b934f7803e914bf5a6b670a53e20c559"
  );
  const [sportsLeagues, setSportsLeagues] = useState([
    {
      name: "Select a League and select a type of bet to see the odds and scores!",
      id: "sample choice",
      value: "sample choice",
    },
    {
      name: "American Football (NFL)",
      id: "americanfootball_nfl",
      value: "americanfootball_nfl",
    },
    
    {
      name: 'Select a League and select a type of bet to see the odds and scores!',
      id: 'sample choice',
      value: 'sample choice'
    },
    {
      name: 'American Football (NFL)',
      id: 'americanfootball_nfl',
      value: 'americanfootball_nfl'
    },
    {
      name: 'American Football (NCAA)',
      id: 'americanfootball_ncaaf',
      value: 'americanfootball_ncaaf'
    },
    {
      name: 'Aussie Rules Football (AFL)',
      id: 'aussierules_afl',
      value: 'aussierules_afl'
    },
    {
      name: 'Baseball (MLB)',
      id: 'baseball_mlb',
      value: 'baseball_mlb'
    },
    {
      name: 'Basketball (NBA)',
      id: 'basketball_nba',
      value: 'basketball_nba'
    },
    {
      name: 'National Hockey League (NHL)',
      id: 'icehockey_nhl',
      value: 'icehockey_nhl'
    },
    {
      name: 'Mixed Martial Arts (MMA)',
      id: 'mma_mixed_martial_arts',
      value: 'mma_mixed_martial_arts'
    },
    {
      name: 'Soccer (Premier League)',
      id: 'soccer_epl',
      value: 'soccer_epl'
    },
    {
      name: 'Soccer (La Liga)',
      id: 'soccer_spain_la_liga',
      value: 'soccer_spain_la_liga'
    },
    {
      name: 'Soccer (MLS)',
      id: 'soccer_usa_mls',
      value: 'soccer_usa_mls'
    },
    {
      name: 'Soccer (UEFA Champions League)',
      id: 'soccer_uefa_champs_league',
      value: 'soccer_uefa_champs_league'
    }
  ]);

  const handleBetSelectorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    console.log(selectedValue);
    if (selectedValue === "Sports") {
      console.log("sports chosen");
      nbaScoresInfoBoard();
      displaySportsBetCard();
    } else if (selectedValue === "Finance") {
      console.log("finance chosen");
      financeInfoBoard();
      //displayFinanceBetCard()
    }
  };

  const nbaScoresInfoBoard = () => {
    const nbascoresURL = `https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=2&apiKey=${sportsAPIKey}`;

    fetch(nbascoresURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const sampleScores = data;
        console.log(sampleScores);
        starterSportsDisplay(sampleScores);
      });
  };

  const starterSportsDisplay = (sampleScores) => {
    let scoresContainer = document.querySelector("#infoBoard");

    for (let i = 0; i < sampleScores.length; i++) {
      let pastScore = document.createElement("div");
      pastScore.classList.add("card-item");
      let scores = document.createElement("p");
      scores.textContent = `${sampleScores[i].scores[0].name}: ${sampleScores[i].scores[0].score}, ${sampleScores[i].scores[1].name}: ${sampleScores[i].scores[1].score}`;
      let teamsBanner = document.createElement("h3");
      teamsBanner.textContent = `${sampleScores[i].home_team} vs. ${sampleScores[i].away_team}`;

      pastScore.appendChild(teamsBanner);
      pastScore.appendChild(scores);
      scoresContainer.append(pastScore);
    }
  };

  //change api to finance for multi stocks
  const financeInfoBoard = () => {
    var financeURL = `https://api.the-odds-api.com/v4/sports/finance/odds/?apiKey=${sportsapiKey}`;

    fetch(financeURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var sampleFinance = data;
        console.log(sampleFinance);
        starterFinanceDisplay(sampleFinance);
      });
  }
  // add actual names for info from array
  const starterFinanceDisplay = (sampleFinance) => {
    let financeContainer = document.querySelector('#infoBoard');
  
    for (var i = 0; i < sampleFinance.length; i++) {
      let stocks = document.createElement('div');
      pastScore.classList.add('card-item');
      let stockPrice = document.createElement('p');
      stockPrice.textContent = `${sampleScores[i].scores[0].name}: ${sampleScores[i].scores[0].score}, ${sampleScores[i].scores[1].name}: ${sampleScores[i].scores[1].score}`;
      let stockName = document.createElement('h3');
      teamsBanner.textContent = `${sampleScores[i].home_team} vs. ${sampleScores[i].away_team}`;

      stocks.appendChild(stockName);
      stocks.appendChild(stockPrice);
      financeContainer.append(stocks);
    }
  }

  //Displays card to choose sport to bet on/if they want a rgular or custom bet
  const displaySportsBetCard = () => {
    const betCard = document.querySelector('#predictorCard'); 
    betCard.innerHTML = '';

    // Create a label for the date input
    const label = document.createElement('label');
    label.textContent = 'Choose a date: ';
    // Created a date input
    const datePicker = document.createElement('input');
    datePicker.setAttribute('type', 'date');
    datePicker.setAttribute('id', 'date-picker');
    datePicker.setAttribute('value', '2021-01-01');
    // Created dropdown for the sports(Leagues)
    let sportsSelector = document.createElement('select');
    sportsSelector.setAttribute('id', 'sportselector');
    sportsSelector.addEventListener('change', () => {
      const selectedValue = sportsSelector.value;
      console.log('Selected league value:', selectedValue);
      updatedapiInfo(selectedValue);
    });
    // Created a button for the custom bets
    let customBetButton = document.createElement('button');
    customBetButton.textContent = 'Create Custom Bet';
    customBetButton.classList.add('customBetButton');
    customBetButton.addEventListener('click', () => {
      displayCustomSportsBet();
      console.log('custom bet button clicked')
    });
    // Created a button for the current odds
    let currentOddsButton = document.createElement('button');
    currentOddsButton.textContent = 'Current Odds';
    currentOddsButton.classList.add('currentOddsButton');
    currentOddsButton.addEventListener('click', getCurrentSportsOdds);
  
    // Created the options for the sports(Leagues)
    sportsSelector.setAttribute('id', 'sportselector');
    for (var i = 0; i < sportsLeagues.length; i++) { 
      let sportsOption = document.createElement('option');
      sportsOption.setAttribute('value', sportsLeagues[i].id);
      sportsOption.textContent = sportsLeagues[i].name;
      sportsSelector.appendChild(sportsOption);
      betCard.appendChild(sportsSelector);
    }
    betCard.appendChild(label);
    betCard.appendChild(datePicker);
    betCard.appendChild(customBetButton);
    betCard.appendChild(currentOddsButton);
    betCard.appendChild(sportsSelector);
  }

  //pulls info for updated scores for the selected sport
  const updatedapiInfo = (selectedValue) => {
    var updatedSport = selectedValue;
    console.log(updatedSport);
    if (updatedSport === 'sample choice') {
      console.log('no sport chosen');
    } else {
      console.log(updatedSport + ' chosen');
      sportAPI = updatedSport
      var newscoresURL = `https://api.the-odds-api.com/v4/sports/${updatedSport}/scores/?daysFrom=2&apiKey=${sportsapiKey}`;
      fetch(newscoresURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          var updatedScores = data;
          console.log(updatedScores);
          updatedOddsDisplay(updatedScores);
          getCurrentSportsOdds(updatedScores);
        });
    }
  }

  //Displays updated scores for the selected sport
  const updatedOddsDisplay = (updatedScores) => {
    let updatedScoresContainer = document.querySelector('#infoBoard');
    updatedScoresContainer.innerHTML = '';
  
    for (var i = 0; i < updatedScores.length; i++) {
      let updatedScore = document.createElement('div');
      updatedScore.classList.add('card-item');
      let newScores = document.createElement('p');
      newScores.textContent = `${updatedScores[i].scores[0].name}: ${updatedScores[i].scores[0].score}, ${updatedScores[i].scores[1].name}: ${updatedScores[i].scores[1].score}`;
      let updatedTeamsBanner = document.createElement('h3');
      updatedTeamsBanner.textContent = `${updatedScores[i].home_team} vs. ${updatedScores[i].away_team}`;

      updatedScore.appendChild(updatedTeamsBanner);
      updatedScore.appendChild(newScores);
      updatedScoresContainer.append(updatedScore);
    }
  }
  
  //Displays inputs for custom bet
  const displayCustomSportsBet = () => {
  console.log('custom bet button clicked')
  // wipes the bet card clean
  const betCard = document.querySelector('#predictorCard'); 
  betCard.innerHTML = '';

  // Created input for bet type
  const eventType = document.createElement('input');
  eventType.setAttribute('type', 'text');
  eventType.setAttribute('id', 'bet-type');
  eventType.setAttribute('placeholder', 'What type of bet is this?(i.e sport type, entertainment, politics, etc.)');

  // Created input for bet description
  const betDescription = document.createElement('input');
  betDescription.setAttribute('type', 'text');
  betDescription.setAttribute('id', 'bet-description');
  betDescription.setAttribute('placeholder', 'Describe what your bet is.');

  // Created input for bet amount
  const betAmount = document.createElement('input');
  betAmount.setAttribute('type', 'number');
  betAmount.setAttribute('id', 'bet-amount');
  betAmount.setAttribute('step', '10.00');
  betAmount.setAttribute('placeholder', 'Amount (e.g., 100 or 40.00)');

  const betOdds = document.createElement('input');
  betOdds.setAttribute('type', 'text');
  betOdds.setAttribute('id', 'bet-odds');
  betOdds.setAttribute('placeholder', 'Odds (e.g., +100, -120)');

  // Created a date input for expiration date
  const datePicker = document.createElement('input');
  datePicker.setAttribute('type', 'date');
  datePicker.setAttribute('id', 'date-picker');
  datePicker.setAttribute('value', '2021-01-01');

  // Created a submit button for the custom bets
  let customBetSubmitButton = document.createElement('button');
  customBetSubmitButton.textContent = 'Submit Custom Bet';
  customBetSubmitButton.classList.add('customBetSubmitButton');
  customBetSubmitButton.addEventListener('click', submitCustomSportsBet);
  betCard.appendChild(eventType);
  betCard.appendChild(betDescription);
  betCard.appendChild(betAmount);
  betCard.appendChild(betOdds);
  betCard.appendChild(datePicker);
  betCard.appendChild(customBetSubmitButton);
  }
  
  //gets current odds for the selected sport
  const getCurrentSportsOdds = () => {
  var selectedSport = document.querySelector('#sportselector').value;
  console.log ("selected sport is" + selectedSport);
  console.log('current odds button clicked')
  var oddsURL = `https://api.the-odds-api.com/v4/sports/${selectedSport}/odds?apiKey=${sportsapiKey}&regions=us&markets=h2h%2Cspreads&dateFormat=iso&oddsFormat=american&bookmakers=bovada`;

    fetch(oddsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var oddsData = data;
        console.log(oddsData);
        displayCurrentSportsOdds(oddsData);
      });
  }

  const displayCurrentSportsOdds = (oddsData) => {
  console.log('current odds button clicked')
  // wipes the bet card clean
  const betCard = document.querySelector('#predictorCard');
  betCard.innerHTML = '';

  // chackboxes for odds
  const checkbox1 = document.createElement('input');
  checkbox1.type = 'checkbox';
  checkbox1.id = 'homeTeam';
  checkbox1.value = 'home team';

  const label1 = document.createElement('label');
  label1.htmlFor = 'checkbox1';
  label1.textContent = 'Home Team';

  const checkbox2 = document.createElement('input');
  checkbox2.type = 'checkbox';
  checkbox2.id = 'awayTeam';
  checkbox2.value = 'away team';

  const label2 = document.createElement('label');
  label2.htmlFor = 'checkbox2';
  label2.textContent = 'Away Team';
  // Created a expiration date
  const expirationDate = document.createElement('input');
  expirationDate.setAttribute('type', 'date');
  expirationDate.setAttribute('id', 'date-picker');
  expirationDate.setAttribute('value', '2021-01-01');
  // Created a submit button for the custom bets
  var createdBetSubmitButton = document.createElement('button');
  createdBetSubmitButton.textContent = 'Submit Custom Bet';
  createdBetSubmitButton.classList.add('customBetSubmitButton');
  createdBetSubmitButton.addEventListener('click', submitCreatedSportsBet);
  // input for amount
  const wagerAmount = document.createElement('input');
  wagerAmount.setAttribute('type', 'number');
  wagerAmount.setAttribute('id', 'bet-amount');
  wagerAmount.setAttribute('step', '10.00');
  wagerAmount.setAttribute('placeholder', 'Amount (e.g., 100 or 40.00)');
  //appending
  betCard.appendChild(checkbox1);
  betCard.appendChild(label1);
  betCard.appendChild(checkbox2);
  betCard.appendChild(label2);
  betCard.appendChild(wagerAmount);
  betCard.appendChild(expirationDate);
  betCard.appendChild(createdBetSubmitButton);
  // options for odds(value is the odds)
  let oddsSelector = document.createElement('select');
  oddsSelector.setAttribute('id', 'odds-selector');
  oddsSelector.addEventListener('change', () => {
    const selectedBet = oddsSelector.value;
    console.log('Selected league value:', selectedBet);
    submitBet(selectedBet);
  });
    for (var i = 0; i < sportsLeagues.length; i++) { 
    let oddsOption = document.createElement('option');
    oddsOption.textContent = `${oddsData[i].home_team}: ${oddsData[i].bookmakers[0].markets[0].outcomes[0].price}, ${oddsData[i].away_team}: ${oddsData[i].bookmakers[0].markets[0].outcomes[1].price}`;
    oddsSelector.appendChild(oddsOption);
    betCard.appendChild(oddsSelector);
    }
  }

  //submits custom bet
  const submitCustomSportsBet = () => {
    console.log('custom bet button clicked') 
  }

  //submits bet
  const submitCreatedSportsBet = () => {
    console.log('submit bet button clicked')
  }

  return (
    <div>
      <select id="betselector" onChange={handleBetSelectorChange}>
        <option value="">Select Bet Type</option>
        <option value="Sports">Sports</option>
        <option value="Finance">Finance</option>
      </select>
      <div id="infoBoard"></div>
      {/* Other HTML elements */}
    </div>
  );
};

export default SportsBetting;