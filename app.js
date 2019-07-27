function Player(name, position, offense, defense,goodGame,badGame,printStats){

this.name=name;
this.position=position;
this.offense=offense;
this.defense=defense;
this.goodGame=function(){
 if((Math.floor(Math.random()*2))===0){
     this.defense++;
     console.log(this.name+"'s offense has gone up")
 }
 else{
     this.offense++;
     console.log(this.name+"'s offense has gone up");
 }
};
this.badGame=function(){
    if((Math.floor(Math.random()*2)===0){
        this.defense++;
        console.log(this.name+"'s offense has gone down");
    }
    else{
        this.offense--;
        console.log(this.name+"'s offense has gone down");
    } 

}

};

   
Player.prototype.printInfo=function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nDefense: " + this.age + "\nOffense: " + this.language);
    console.log("---------------");
}

var inquirer=require('inquirer');

var count=0;
var team=[];

var createPlayer= function(){

    if(count<4){

        inquirer.promot([{
            name:"name",
            message :"what is your name?"
                }, {
            name:"position",
            message: "what is your position?"
                }, {
            name:"offense",
            message:"how good is your defense?"
                },{
            name:"offense",
            message:"how good is your defense?"   
                }
            ]).then(function(answers){
                var newPlayer=new Player(answrs.name,answers.position,answers.offense,answers.defense);
                  team.push(newPlayer);
                  count++;
                  createPlayer();
            });
            
            }
            else{
            for (j=0; j<team.length;j++){

                team[j].printInfo;
            }
                
            }

}
