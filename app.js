function Player(name, position, offense, defense,goodGame,badGame,printStats){

this.name=name;
this.position=position;
this.offense=offense;
this.defense=defense;
this.goodGame=function(){
 if((Math.floor(Math.random()*2)===0){
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

}