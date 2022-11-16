console.log("connected") 

//week 5 js file menu app 
//taken from video pretty much verbatim - but I understand the methodology of what I was coding in, works. 
//when hard coing along with video learned alot, esp trouble shooting minor mistakes. 

class Player {
    constructor(name, position) {

        this.name = name; //name of player 
        this. position = position; // position of player
    }

    describe() {

        return `${this.name} plays at ${this.position}.`; //method on the class, describe player 
    }
}

class Team {
    constructor(name) {

        this.name = name; 
        this.players = [] // empty array of players for team add
    }

        addPlayer(player) {

            if (player instanceof Player) {

                this.players.push(player); //push player.push 
            } else {
                
                throw new Error(`You can only add instance of Player. Argument is not a player: ${player}`)//error thrown 

            }
        }

            describe() {

                return `${this.name} has ${this.players.length} players.`; //name of team how many players on team 
            }
}

//new class menu teams 

class Menu {

    constructor() {

        this.teams = [];
        this.selectedTeam = null; //set to null on start 
    }

    start() {

        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {

                case '1':   // switch case base on selection chosen 
                    this.createTeam()
                    break; 
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                case '4':
                    this.displayTeams();
                    break; 
                    default: 
                    selection = 0; //anything else selected selection = 0 


            }

            selection = this.showMainMenuOptions();

        }

        alert("Goodbye!"); //out of the loop alert goodbye
    }

    showMainMenuOptions() {
        //return prompts 
        return prompt(` 
        
        0) exit
        1) create new team
        2) view team 
        3) delete team
        4) display all teams 
        
            `);
    }

    showTeamMenuOptions(teamInfo) { //takes description of team, prints out info and returns prompt 

        return prompt(`
            0) back 
            1) create player
            2) delete player
            -------------- 

            ${teamInfo}
        
        `);
    }
        displayTeams() {

            let teamString = " ";
            for (let i = 0; i < this.teams.length; i++) {

                teamString += i + ' )' + this.teams[i].name + '\n'; //teams show up on a different line 
            }

            alert(teamString); //alert team string see all teams 
        }

        createTeam() {

            let name = prompt("Enter name for new team: "); //prompt user name for team 
            this.teams.push(new Team(name));//pass in name gets pushed to teams array 
        }

        
        viewTeam() {

            let index = prompt("Enter the index of the team you want to view: ");
            if (index > -1 && index < this.teams.length) {
                this.selectedTeam = this.teams[index];
                let description = 'Team name: ' + this.selectedTeam.name + ' \n';

                for (let i = 0; i < this.selectedTeam.players.length; i++) //for loop iteration for teams array 
                    description += i + ') ' + this.selectedTeam.players[i].name 
                    + ' - ' + this.selectedTeam.players[i].position + '\n'; //line break 
            }

            let selection = this.showTeamMenuOptions(description);
                switch (selection) {

                    case '1':
                        this.createPlayer(); 
                    case '2': 
                        this.deletePlayer();

                }

                
        }

        deleteTeam() {

            let index = prompt("enter the index of the tema you want to delete");
            if (index > -1 && index < this.teams.length) {

                this.teams.splice(index, 1);
            }
        }


        createPlayer() {

            let name = prompt( "enter name for new player: ");
            let position = prompt("enter position for the new player");
            this.selectedTeam.players.push(new Player(name, position)); //add new player this.selectedTeam 
        }

        
        deletePlayer() {

            let index = prompt("enter the index of the player you want to delete");

            if (index > -1 && index < this.selectedTeam.players.length) {

                this.selectedTeam.players.splice(index, 1); 
         
            }
       
        }

    
}

let menu = new Menu();
menu.start();

