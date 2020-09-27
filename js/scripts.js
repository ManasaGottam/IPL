function getAllTeams(){

    if(window.innerWidth>920){
        displayElementsDesktop();
    }
    else{
        displayElementsMobile();
    }
    
}

function displayElementsDesktop(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://ipl-t20.herokuapp.com/teams';
    fetch(proxyUrl + url).then(function(response){
                // console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            }).then((response)=> {
                // console.log("response json teams: "+response);
                const app = document.getElementById('app')
                const grid = document.createElement('div')
                grid.setAttribute('class', 'grid-container')
                // console.log("in desktop");
                document.getElementById('loader').style.display = 'none';
                response.forEach((team) => {
                    // console.log(team.teamName)
                    var gridItem = document.createElement('div');
                    gridItem.setAttribute('class', 'grid-item');

                    var card = document.createElement('div')
                    card.setAttribute('class', 'card ' + getCssClassForTeam(team.teamName))
                    // console.log(team.teamName+" "+getCssClassForTeam(team.teamName));

                    //Create img tag
                    var cardLogoDiv = document.createElement('div')
                    cardLogoDiv.setAttribute('class','card_logoDiv')
                    const cardLogo = document.createElement('img')
                    cardLogo.setAttribute('class','card_logo');
                    cardLogo.setAttribute('src', './images/teamLogos/'+getCssClassForTeam(team.teamName)+'.png');

                    var cardTitle = document.createElement('h1')
                    cardTitle.setAttribute('class','card_title');
                    cardTitle.textContent = team.teamName

                    var cardSub = document.createElement('p')
                    cardSub.setAttribute('class','card_subtitle');
                    cardSub.textContent = team.venue

                    var cardLink = document.createElement('a');
                    cardLink.setAttribute('href', '#'+team.id);
                    cardLink.setAttribute('class','card_link')
                    cardLink.textContent = 'View Team';

                    var winningYears = document.createElement('div')
                    var years = team.winningYears;
                    // console.log(years+" years");
                    if(years.length >0){
                        winningYears.setAttribute('class','card_winning-years')
                        winningYears.innerHTML=years;
                    }
                    // Append the cards to the container element
                    grid.appendChild(gridItem)
                    gridItem.append(card)

                    card.appendChild(cardLogoDiv)
                    card.appendChild(cardTitle)
                    card.appendChild(cardSub)
                    card.appendChild(winningYears)
                    var linebreak = document.createElement('br');
                    card.appendChild(linebreak);
                    card.appendChild(cardLink)

                    cardLogoDiv.appendChild(cardLogo)

                    window.localStorage.setItem(team.teamName+'venue',team.venue)
                    window.localStorage.setItem(team.id+'winningYears',years)
                    // console.log("Storing: "+team.id+"winningYears as : "+years)
                })
                app.appendChild(grid)
            }).catch((error) => {
                console.log(error);
                document.getElementById('loader').style.display = 'none';
                errorPage();
            });
}

function displayElementsMobile(){
    document.getElementById('loader').visible = true;
    // var request = new XMLHttpRequest()
    // request.open('GET', 'https://cors-anywhere.herokuapp.com/'+'https://ipl-t20.herokuapp.com/teams', true)
    // request.onload = function () {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://ipl-t20.herokuapp.com/teams';
    fetch(proxyUrl + url).then(function(response){
                // console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            }).then((response)=> {
                // console.log("response json teams: "+response);
                const app = document.getElementById('app')
                const grid = document.createElement('div')
                grid.setAttribute('class', 'grid-mobile-container')

                document.getElementById('loader').style.display = 'none';
                response.forEach((team) => {
                    // console.log(team.teamName)
                    var gridItem = document.createElement('div');
                    gridItem.setAttribute('class', 'grid-mobile-item');

                    var card = document.createElement('div')
                    card.setAttribute('class', 'mobile-card ' + getCssClassForTeam(team.teamName))
                    // console.log(team.teamName+" "+getCssClassForTeam(team.teamName));

                    //Create img tag
                    var cardLogoDiv = document.createElement('div')
                    cardLogoDiv.setAttribute('class','mobile-card_logoDiv mobile-header-item')
                    const cardLogo = document.createElement('img')
                    cardLogo.setAttribute('class','mobile-card_logo');
                    cardLogo.setAttribute('src', './images/teamLogos/'+getCssClassForTeam(team.teamName)+'.png');

                    var cardTitle = document.createElement('p')
                    cardTitle.setAttribute('class','mobile-card_title mobile-header-item');
                    cardTitle.textContent = team.teamName

                    // var cardSub = document.createElement('p')
                    // cardSub.setAttribute('class','card_subtitle');
                    // cardSub.textContent = team.venue

                    var cardLink = document.createElement('a');
                    cardLink.setAttribute('href', '#'+team.id);
                    cardLink.setAttribute('class','mobile-card_link mobile-header-item')
                    cardLink.textContent = '>';

                    var winningYears = document.createElement('div')
                    var years = team.winningYears;
                    // console.log(years+" years");
                    if(years.length >0){
                        winningYears.setAttribute('class','mobile-card_winning-years mobile-header-item')
                        winningYears.innerHTML=years;
                    }
                    // Append the cards to the container element
                    var header = document.createElement('div')
                    header.setAttribute('class','mobile-header')

                    grid.appendChild(gridItem)
                    gridItem.append(card)

                    cardLogoDiv.appendChild(cardLogo)
                    header.appendChild(cardLogoDiv)
                    header.appendChild(cardTitle)
                    header.appendChild(winningYears)
                    header.appendChild(cardLink)
                    card.appendChild(header)
                    // var linebreak = document.createElement('br');
                    // card.appendChild(linebreak);
                    window.localStorage.setItem(team.teamName+'venue',team.venue)
                    window.localStorage.setItem(team.teamName+'winningYears',years)
                })
                app.appendChild(grid)
            }).catch((error) => {
                console.log(error);
                document.getElementById('loader').style.display = 'none';
                    errorPage();
            });
}

function getTeamData(team_name){
    // console.log("in getAllTeams()");
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://ipl-t20.herokuapp.com/teams/'+team_name;
    fetch(proxyUrl + url).then(function(response){
                // console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            }).then((response)=> {
                document.getElementById('loader').style.display = 'none';
                // console.log("response json: "+response)
                const app = document.getElementById('app')
                // const grid = document.createElement('div')
                // grid.setAttribute('class', 'grid-container')

                var bannerContainer = document.createElement('div')
                bannerContainer.setAttribute('class','banner-container')
                bannerContainer.setAttribute('style','background-image: url(../images/banner.png);background-color:'+getTeamColor(team_name))
                app.appendChild(bannerContainer)

                var bannerLogoDiv = document.createElement('div')
                bannerLogoDiv.setAttribute('class','banner-logoDiv')
                const bannerLogo = document.createElement('img')
                bannerLogo.setAttribute('class','banner-logo')
                bannerLogo.setAttribute('src', './images/teamLogos/'+team_name+'.png')
                // console.log("teamName: "+team_name+" loc: "+'./images/teamLogos/'+team_name+'.png')
                bannerLogoDiv.appendChild(bannerLogo)

                var teamNameEle = document.createElement('h1')
                teamNameEle.setAttribute('class','banner-teamName')
                teamNameEle.textContent = team_name

                var years = window.localStorage.getItem(team_name+'winningYears')
                // console.log("Retriving: "+team_name+" winningYears as : "+years+" : "+team_name+'winningYears')
                var winwinningYearsEle = document.createElement('h2')
                winwinningYearsEle.setAttribute('class','banner-winningYears')
                winwinningYearsEle.textContent = years
                
                var venue = window.localStorage.getItem(team_name+'venue')
                // console.log("Venue: "+venue+" teamName: "+team_name)

                var captainId = response.team.captainId;
                var wicketKeeperId = response.team.wicketKeeperId;
                // console.log("capId: "+captainId)

                var captain;
                var wicketKeeper;

                var players= response.players;

                for(let player of players){
                    if(player.id === captainId){
                        captain = player.name;
                    }
                    if(player.id === wicketKeeperId){
                        wicketKeeper = player.name;
                    }
                }

                var captainDiv = document.createElement('div')
                captainDiv.setAttribute('class','banner-captainDiv banner-grid-container')
                var captainLabel = document.createElement('label')
                captainLabel.setAttribute('class','banner-captainLabel banner-grid-item')
                captainLabel.textContent = 'Captain: '
                var captainName = document.createElement('h3')
                captainName.setAttribute('class','banner-captainName banner-grid-item')
                // console.log("captain: "+captain)
                captainName.textContent = captain
                captainDiv.appendChild(captainLabel)
                captainDiv.appendChild(captainName)

                var venueDiv = document.createElement('div')
                venueDiv.setAttribute('class','banner-venueDiv banner-grid-container')
                var venueLabel = document.createElement('label')
                venueLabel.setAttribute('class','banner-venueLabel banner-grid-item')
                venueLabel.textContent = 'Venue:'
                var venueName = document.createElement('h3')
                venueName.setAttribute('class','banner-venueName banner-grid-item')
                console.log(venue+" here")
                venueName.textContent = venue
                venueDiv.appendChild(venueLabel)
                venueDiv.appendChild(venueName)

                // bannerGridContainer = document.createElement('div')
                // bannerGridContainer.setAttribute('class','banner-grid-container')
                // bannerGridContainer.appendChild(captainDiv)
                // bannerGridContainer.appendChild(venueDiv)

                bannerContainer.appendChild(bannerLogoDiv)
                bannerContainer.appendChild(teamNameEle)
                bannerContainer.appendChild(winwinningYearsEle)
                bannerContainer.appendChild(captainDiv)
                bannerContainer.appendChild(venueDiv)


                const teamContainer = document.createElement('div')
                teamContainer.setAttribute('class', 'grid-container')
                app.appendChild(teamContainer)
                var team=response.team;
                // console.log("team: "+response)
                var captianId = team.captainId;
                var wicketKeeperId = team.wicketKeeperId;
                console.log(players)
                // console.log("captain "+captianId+"; wicketKeeperId "+wicketKeeperId);
                for(let player of players){
                    var gridItem = document.createElement('div');
                    gridItem.setAttribute('class', 'grid-item');

                    var url= window.location.href;
                    var teamName = url.substr(url.indexOf('#')+1)
                    var card = document.createElement('div')
                    card.setAttribute('class', 'card ' + teamName)
                    // console.log(teamName+" "+teamName);
                    
                    //Create img div and include img tag
                    var cardPlayerImageDiv = document.createElement('div')
                    cardPlayerImageDiv.setAttribute('class','card_playerImageDiv')
                    const cardPlayerImage = document.createElement('img')
                    cardPlayerImage.setAttribute('class','card_playerImage');
                    cardPlayerImage.setAttribute('src', player.image);

                    var icon_container = document.createElement('div');
                    icon_container.setAttribute('class', 'icons');
                
                    if(player.id===captianId){
                        var captain_icon = document.createElement('img');
                        captain_icon.setAttribute('class','player-icon')
                        captain_icon.src = './images/copyright.png'
                        icon_container.appendChild(captain_icon);
                    }
                    if(player.id===wicketKeeperId){
                        var wicket_icon = document.createElement('img');
                        wicket_icon.setAttribute('class','player-icon')
                        wicket_icon.src = './images/wicket.png'
                        icon_container.appendChild(wicket_icon);
                    }
                    if(player.nationality != 'Indian'){
                        var nationality = document.createElement('img');
                        nationality.setAttribute('class','player-icon')
                        nationality.src = './images/plane.png'
                        icon_container.appendChild(nationality);
                    }
                    cardPlayerImageDiv.appendChild(icon_container)
                    

                    //Profile
                    var profile = document.createElement('div')
                    profile.setAttribute('class','player-profile')

                    var playerName = document.createElement('h2')
                    playerName.setAttribute('class','card_playerName')
                    playerName.textContent = player.name

                    var playerYear = document.createElement('span')
                    playerYear.setAttribute('class','player_year')
                    playerYear.textContent = 'IPL 2019';

                    var statsTable = document.createElement("TABLE");
                    statsTable.setAttribute('id', 'statsTable');

                    var stats = document.createElement("TR");
                    stats.setAttribute('id', 'stats');
                    statsTable.appendChild(stats);

                    var matches = document.createElement("TD");
                    var match = document.createTextNode("cell");
                    // match.setAttribute('id', 'matches');
                    match.textContent = player.stats.matches;
                    matches.appendChild(match);
                    stats.appendChild(matches);

                    var runs = document.createElement("TD");
                    var run = document.createTextNode("cell");
                    // run.setAttribute('id', 'runs');
                    run.textContent = player.stats.runs;
                    runs.appendChild(run);
                    stats.appendChild(runs);

                    var wickets = document.createElement("TD");
                    var wicket = document.createTextNode("cell");
                    // wicket.setAttribute('id', 'wickets');
                    wicket.textContent = player.stats.wickets;
                    wickets.appendChild(wicket);
                    stats.appendChild(wickets);

                    var heading = document.createElement("TR");
                    heading.setAttribute('id', 'heading');
                    statsTable.appendChild(heading);

                    var matchesHeading = document.createElement("TD");
                    var matchHeader = document.createTextNode("cell");
                    // match.setAttribute('id', 'matches');
                    matchHeader.textContent = 'MATCHES';
                    matchesHeading.appendChild(matchHeader);
                    heading.appendChild(matchesHeading);

                    var runsHeading = document.createElement("TD");
                    var runHeader = document.createTextNode("cell");
                    // run.setAttribute('id', 'runs');
                    runHeader.textContent = 'RUNS';
                    runsHeading.appendChild(runHeader);
                    heading.appendChild(runsHeading);

                    var wicketsHeading = document.createElement("TD");
                    var wicketHeader = document.createTextNode("cell");
                    // wicket.setAttribute('id', 'wickets');
                    wicketHeader.textContent = 'WICKETS';
                    wicketsHeading.appendChild(wicketHeader);
                    heading.appendChild(wicketsHeading);

                    teamContainer.appendChild(gridItem)
                    gridItem.appendChild(card)
                    card.appendChild(cardPlayerImageDiv)
                    cardPlayerImageDiv.appendChild(cardPlayerImage)
                    card.appendChild(profile)
                    profile.appendChild(playerName)
                    profile.appendChild(playerYear)
                    profile.appendChild(statsTable)
                } 
            }).catch((error) => {
                console.log(error);
                document.getElementById('loader').style.display = 'none';
                    errorPage();
            });
}

function getCssClassForTeam(teamName){
    switch(teamName){
        case "Chennai Super Kings":
            return "chennai-super-kings";
        case "Delhi Capitals":
            return "delhi-capitals";  
        case "Kings XI Punjab":
            return "kings-xi-punjab";
        case "Kolkata Knight Riders":
            return "kolkata-knight-riders";
        case "Mumbai Indians":
            return "mumbai-indians";
        case "Rajasthan Royals":
            return "rajasthan-royals";
        case "Royal Challengers Bangalore":
            return "royal-challengers-bangalore";
        case "Sunrisers Hyderabad":
            return "sunrisers-hyderabad";                      
    }
}

function getTeamColor(teamName){
    switch(teamName){
        case "chennai-super-kings":
            return "#F9CD05";
        case "delhi-capitals":
            return "#00008B";  
        case "kings-xi-punjab":
            return "#ED1B24";
        case "kolkata-knight-riders":
            return "#2E0854";
        case "mumbai-indians":
            return "#004BA0";
        case "rajasthan-royals":
            return "#254AA5";
        case "royal-challengers-bangalore":
            return "#2B2A29";
        case "sunrisers-hyderabad":
            return "#FF822A";                      
    }
}

function errorPage(){
    console.log("In error page")
    var errorDiv= document.createElement('div');
    errorDiv.setAttribute('class','errorDiv');
    var h1= document.createElement('h1');
    h1.setAttribute('class','errorMsgHeading');
    h1.textContent = "Something went wrong";
    var div= document.createElement('div');
    div.setAttribute('class','errorDescription');
    div.textContent = "Please try again later.";
    const app = document.getElementById('app');
    errorDiv.appendChild(h1);
    errorDiv.appendChild(div)
    app.appendChild(errorDiv);
}