function gameObject() {
    const Teams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    Number: 0, 
                    Shoe: 16, 
                    Points: 22, 
                    Rebounds: 12, 
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 1, 
                },
                "Reggie Evans": {
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    SlamDunks: 7,
                },
                "Brook Lopez": {
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 15,
                },
                "Mason Plumlee": {
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    SlamDunks: 5,
                },
                "Jason Terry": {
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    SlamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    Number: 4, 
                    Shoe: 18, 
                    Points: 10, 
                    Rebounds: 1, 
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    SlamDunks: 2, 
                },
                "Bismak Biyombo": {
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    SlamDunks: 10,
                },
                "DeSagna Diop": {
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    SlamDunks: 5,
                },
                "Ben Gordon": {
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    SlamDunks: 0,
                },
                "Brendan Haywood": {
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    SlamDunks: 12,
                },
            },
        },
    }
    return Teams;
}
gameObject();
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}
function numPointsScored(playerName) {
    const game = gameObject();
    let teamObj = [game.home, game.away];
    
    for (let a = 0; a < teamObj.length; a++) {
        const players = teamObj[a].players;
        for (let name in players) {
            if (name === playerName) {
                const player = players[name];
                const points = player.Points;
                return points;
            }
        }
    }
}
function shoeSize(playerName) {
    const game = gameObject();
    let teamObj = [game.home, game.away];
    
    for (let a = 0; a < teamObj.length; a++) {
        const players = teamObj[a].players;
        for (let name in players) {
            if (name === playerName) {
                const player = players[name];
                const shoeSize = player.Shoe;
                return shoeSize;
            }
        }
    }
}
function teamColors(teamName) {
    const game = gameObject();

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === teamName) {
            let teamColor = teamObj.colors;
            return teamColor;
        }
    }
}
function playerNumbers(teamName) {
    const game = gameObject();

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === teamName) {
            let teamNumbers = [];
            const teamPlayer = teamObj.players;
            for (let playerName in teamPlayer) {
                let player = teamPlayer[playerName];
                teamNumbers.push(player.Number);
            }
            return teamNumbers;
        }
    }
}
/*function playerStats(playerName) {
    const game = gameObject();

    for (let gameKey in game) {
        let teamObj = game[gameKey];

        for (let teamkey in teamObj) {
            let playerObj = teamObj[teamkey].players;
            let playerList = {};
            if (playerObj === playerName) {
                for (let playerkey in playerObj) {
                    let playerStats = playerObj[playerkey];
                    for (let statKey in playerStats) {
                        playerList.push{playerStats[statKey]}
                    }
                }
            }
            return playerList;
        }
    }
}*/
function playerStats(playerName) {
    const teams = gameObject();

    for (let teamKey in teams) {
        let players = teams[teamKey].players;

        if (playerName in players) {
            return players[playerName];
        }
    }

    return null;
}
function bigShoeRebounds() {
    let largestShoeSize = 0;
    let rebounds = 0;
    const game = gameObject();

    for (let teamKey in game) {
        let teamObj = game[teamKey];
        let players = teamObj.players;

        for (let playerName in players) {
            let player = players[playerName];
            let shoeSize = player.Shoe;

            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;
                rebounds = player.Rebounds;
            }
        }
    }

    return rebounds;
}