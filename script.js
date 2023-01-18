let redAttack = document.querySelector(".red-attack")
let blueAttack = document.querySelector(".blue-attack")
let redHealth = document.querySelector(".health1")
let blueHealth = document.querySelector(".health2")
let redHeal = document.querySelector(".red-heal")
let blueHeal = document.querySelector(".blue-heal")

let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")



let player1object = {
    name: "player1",
    health: 100,
    attack: 20,
    heal: 20,
    attackblue: function () {
        player2.classList.add("animate__rubberBand")
        setTimeout(() => {
          player2.classList.remove('animate__rubberBand')
        }, 1500)
        
        
        
        
            blueHealth.innerText =  player2object.health -= this.attack
          if(player2object.health == 0) {
             blueHealth.innerText = "Dead"

             this.attack = 0

             setTimeout(() => {
              player2.classList.add('animate__bounceOutDown')
             }, 1000)

          } },

    healred: function () {
      redHealth.innerText = this.health += this.heal
      player1.classList.add('animate__zoomIn')
          setTimeout(() => {
            player1.classList.remove('animate__zoomIn')
          }, 1500)
      
    }
    
}

let player2object = {
    name: "player2",
    health: 100,
    attack: 20,
    heal: 20,
    attackred: function () {
        player1.classList.add("animate__rubberBand")
        setTimeout(() => {
          player1.classList.remove('animate__rubberBand')
        }, 1500)
        
        redHealth.innerText =  player1object.health -= this.attack
        if(player1object.health == 0) {
           redHealth.innerText = "Dead"

           this.attack = 0

           setTimeout(() => {
            player1.classList.add('animate__bounceOutDown')
           }, 1000)

        }  },
    
        healblue: function () {
          blueHealth.innerText = this.health += this.heal
          player2.classList.add('animate__zoomIn')
          setTimeout(() => {
            player2.classList.remove('animate__zoomIn')
          }, 1500)
          
        }
    
}

redHealth.innerText += player1object.health
blueHealth.innerText += player2object.health

redAttack.addEventListener('click', e =>  {player1object.attackblue()})
blueAttack.addEventListener('click', e =>  {player2object.attackred()})
redHeal.addEventListener('click', e => (player1object.healred()))
blueHeal.addEventListener('click', e => (player2object.healblue()))











