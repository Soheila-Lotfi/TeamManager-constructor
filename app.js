function Player(name, position, offense, defense,goodGame,badGame,printStats){

this.name=name;
this.position=position;
this.offense=offense;
this.defense=defense;
this.goodGame=function(){
 if((Math.floor(Math.random()*2))===0){
     this.defense++;
 }
 else{
     this.offense++;
 }
};
this.badGame=function(){
    if((Math.floor(Math.random()*2)===0){
        this.defense++;
    }
    else{
        this.offense--;
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
var playerArray=[];

var askQuestion= function(){

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
                  playerArray.push(newPlayer);
                  count++;
                  askQuestion();
            });
            
            }
            else{
            
            }

}
