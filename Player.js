class Player{
    constructor(){
        this.name = null
        this.distance = 0 
        this.index = null
    }
    getCount(){
var playerCountRef = database.ref("PlayerCount")
playerCountRef.on("value",(data) =>{
    PlayerCount = data.val()
})
    }
    updateCount(count){
database.ref('/').update({PlayerCount:count})
    }
update(){
var playerIndex = "Players/Player "+ this.index
database.ref(playerIndex).set({
    Name:this.name,
    Distance:this.distance
})
}
static getInfo(){
var playerInfoRef = database.ref("Players")
playerInfoRef.on("value",(data) =>{
    allPlayers = data.val()
})

}
}