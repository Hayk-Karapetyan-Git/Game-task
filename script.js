document.addEventListener('DOMContentLoaded', () => {
  
  const width = 28
  const grid = document.querySelector('.grid')
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,4,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,1,
    1,4,1,1,1,1,4,1,1,4,4,4,1,1,1,1,1,4,4,4,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,4,4,4,4,4,4,4,4,4,4,4,1,4,1,1,1,1,4,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,1,1,1,1,1,1,4,1,4,4,4,1,1,
    1,1,1,1,1,1,4,1,1,4,4,4,4,4,4,1,4,4,4,1,1,4,1,4,4,4,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,1,4,4,1,1,4,4,1,1,4,1,4,4,4,1,1,
    1,1,1,1,1,1,4,1,1,4,1,4,4,4,4,4,4,4,4,1,1,4,1,4,4,4,1,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,1,
    1,1,1,1,1,1,4,1,1,4,1,4,4,4,4,4,4,1,4,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,1,1,1,4,1,1,4,1,1,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,1,1,1,4,1,1,4,1,1,1,1,1,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,1,1,4,4,4,1,
    1,1,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,4,1,1,4,1,1,4,1,1,1,
    1,1,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,4,1,1,4,1,1,4,1,1,1,
    1,4,4,4,4,4,4,1,1,4,4,4,4,1,1,4,4,4,4,1,1,4,4,4,4,4,4,1,
    1,4,1,1,1,4,4,4,4,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,
    1,4,1,1,1,4,4,4,4,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  
  
  const Iterators = []
  function createMap() {
    for (let i = 0; i < layout.length; i++) {
      const it = document.createElement('div')
      grid.appendChild(it)
      Iterators.push(it)
    if (layout[i] === 1) {
        Iterators[i].classList.add('wall')
      } 
    }
  }
  createMap()

  let rabbitCurrentIndex = 485
  Iterators[rabbitCurrentIndex].classList.add('rabbit')
  Iterators[rabbitCurrentIndex].innerHTML = '🐰'


  let homeCurrentIndex = 53
  Iterators[homeCurrentIndex].classList.add('home')
  Iterators[homeCurrentIndex].innerHTML = '🏡'

  function moveRabbit(e) {
    Iterators[rabbitCurrentIndex].classList.remove('rabbit')
    Iterators[rabbitCurrentIndex].innerHTML = ''
    switch(e.keyCode) {
      case 37:
        if(
          rabbitCurrentIndex % width !== 0 &&
          !Iterators[rabbitCurrentIndex -1].classList.contains('wall')
          )
        rabbitCurrentIndex -= 1
        if (Iterators[rabbitCurrentIndex -1] === Iterators[363]) {
          rabbitCurrentIndex = 391
        }
        break
      case 38:
        if(
          rabbitCurrentIndex - width >= 0 &&
          !Iterators[rabbitCurrentIndex -width].classList.contains('wall')
          ) 
        rabbitCurrentIndex -= width
        break
      case 39:
        if(
          rabbitCurrentIndex % width < width - 1 &&
          !Iterators[rabbitCurrentIndex +1].classList.contains('wall')
        )
        rabbitCurrentIndex += 1
        if (Iterators[rabbitCurrentIndex +1] === Iterators[392]) {
          rabbitCurrentIndex = 364
        }
        break
      case 40:
        if (
          rabbitCurrentIndex + width < width * width &&
          !Iterators[rabbitCurrentIndex +width].classList.contains('wall')
        )
        rabbitCurrentIndex += width
        break
    }
    Iterators[rabbitCurrentIndex].classList.add('rabbit')
    Iterators[rabbitCurrentIndex].innerHTML = '🐰'
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', moveRabbit)
  class Wolf {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }
  wolfes = [
    new Wolf('wolf', 348, 250),
    new Wolf('wolf', 376, 400),
    new Wolf('wolf', 351, 300),
    new Wolf('wolf', 379, 500)
    ]
  wolfes.forEach(wolf => {
    Iterators[wolf.currentIndex].classList.add(wolf.className)
    Iterators[wolf.currentIndex].classList.add('wolf')
    Iterators[wolf.currentIndex].innerHTML = '🐺'

    })

  wolfes.forEach(wolf => moveWolf(wolf))

  function moveWolf(wolf) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    wolf.timerId = setInterval(function() {
      if  (!Iterators[wolf.currentIndex + direction].classList.contains('wolf') &&
        !Iterators[wolf.currentIndex + direction].classList.contains('wall') ) {
          Iterators[wolf.currentIndex].classList.remove(wolf.className)
          Iterators[wolf.currentIndex].innerHTML = ' '

          wolf.currentIndex += direction
          Iterators[wolf.currentIndex].classList.add(wolf.className, 'wolf')
          Iterators[wolf.currentIndex].innerHTML = '🐺'

      } else direction = directions[Math.floor(Math.random() * directions.length)]
      if(wolf.isScared && Iterators[wolf.currentIndex].classList.contains('rabbit')) {
        Iterators[wolf.currentIndex].classList.remove(wolf.className, 'wolf')
        Iterators[wolf.currentIndex].innerHTML = ' '

        wolf.currentIndex = wolf.startIndex
        score +=100
        Iterators[wolf.currentIndex].classList.add(wolf.className, 'wolf')
        Iterators[wolf.currentIndex].innerHTML = '🐺'

      }
    checkForGameOver()
    }, wolf.speed)
  }
  function checkForGameOver() {
    if (Iterators[rabbitCurrentIndex].classList.contains('wolf')) {
      wolfes.forEach(wolf => clearInterval(wolf.timerId))
      document.removeEventListener('keyup', moveRabbit)
      setTimeout(function(){ alert("Game Over"); }, 500)
    }
  }
  function checkForWin() {
    if (rabbitCurrentIndex == homeCurrentIndex) {
      wolfes.forEach(wolf => clearInterval(wolf.timerId))
      document.removeEventListener('keyup', moveRabbit)
      setTimeout(function(){ alert("You have WON!"); }, 500)
    }
  }
})