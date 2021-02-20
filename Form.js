class Form{
    constructor(){
        this.input = createInput("Enter Name")
        this.button = createButton("Play!")
        this.greeting = createElement("h3")

    }
    display(){

        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(130,0)
        
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
        player.name = this.input.value()
      
        this.input.hide()
        this.button.hide()
        
            PlayerCount = PlayerCount + 1
            player.index = PlayerCount
            player.update()
            player.updateCount(PlayerCount)
           
            this.greeting.html("Hiya "+player.name )
            this.greeting.position(130,160)
        })

    }   
     hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}