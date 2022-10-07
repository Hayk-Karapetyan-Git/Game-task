const button = document.getElementById("btn");

const manipuliations = () => {
  const width = 28;
  const grid = document.querySelector("#root");
  const layout = [
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1,
    1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4,
    1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4,
    1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4,
    4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4,
    1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1,
    1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 1, 1, 1, 1, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
    4, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 1,
    1, 4, 1, 4, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1,
    4, 4, 1, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 4, 4,
    4, 4, 4, 4, 4, 1, 1, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 1,
    1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1,
    1, 4, 1, 1, 4, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1,
    1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1,
    4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1,
    1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 1, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1,
    1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1,
    4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4,
    4, 1, 1, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
    4, 4, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 4,
  ];

  const Iterators = [];
  function createMap() {
    for (let i = 0; i < layout.length; i++) {
      const it = document.createElement("div");
      grid.appendChild(it);
      Iterators.push(it);
      if (layout[i] === 1) {
        Iterators[i].classList.add("wall");
      }
    }
  }
  createMap();
  const clearMap = () => {
    for (let i = 0; i < layout.length; i++) {
      Iterators[i].remove();
    }
  }

  let rabbitCurrentIndex = Math.trunc(Math.random() * 784);

  while (
    Iterators[rabbitCurrentIndex].classList.contains("wolf") ||
    Iterators[rabbitCurrentIndex].classList.contains("wall") ||
    Iterators[rabbitCurrentIndex].classList.contains("home")
  ) {
    rabbitCurrentIndex = Math.trunc(Math.random() * 784);
  }

  Iterators[rabbitCurrentIndex].classList.add("rabbit");
  Iterators[rabbitCurrentIndex].innerHTML = "🐰";

  let homeCurrentIndex = 53;
  Iterators[homeCurrentIndex].classList.add("home");
  Iterators[homeCurrentIndex].innerHTML = "🏡";

  function moveRabbit(e) {
    Iterators[rabbitCurrentIndex].classList.remove("rabbit");
    Iterators[rabbitCurrentIndex].innerHTML = "";
    switch (e.keyCode) {
      case 37:
        if (
          rabbitCurrentIndex % width !== 0 &&
          !Iterators[rabbitCurrentIndex - 1].classList.contains("wall")
        ) {
          rabbitCurrentIndex -= 1;
        } else if (rabbitCurrentIndex % width == 0) {
          rabbitCurrentIndex += width - 1;
        }
        wolfes.forEach((wolf) => moveWolf(wolf));

        break;
      case 38:
        if (
          rabbitCurrentIndex - width >= 0 &&
          !Iterators[rabbitCurrentIndex - width].classList.contains("wall")
        ) {
          rabbitCurrentIndex -= width;
        } else if (rabbitCurrentIndex - width <= 0) {
          rabbitCurrentIndex += width * (width - 1);
        }
        wolfes.forEach((wolf) => moveWolf(wolf));

        break;
      case 39:
        if (
          rabbitCurrentIndex % width < width - 1 &&
          !Iterators[rabbitCurrentIndex + 1].classList.contains("wall")
        )
          rabbitCurrentIndex += 1;
        if (rabbitCurrentIndex % width == width - 1) {
          rabbitCurrentIndex -= width - 1;
        }
        wolfes.forEach((wolf) => moveWolf(wolf));

        break;
      case 40:
        if (
          rabbitCurrentIndex + width < width * width &&
          !Iterators[rabbitCurrentIndex + width].classList.contains("wall")
        ) {
          rabbitCurrentIndex += width;
        } else if (rabbitCurrentIndex + width >= width * width) {
          rabbitCurrentIndex -= width * (width - 1);
        }
        wolfes.forEach((wolf) => moveWolf(wolf));

        break;
    }
    Iterators[rabbitCurrentIndex].classList.add("rabbit");
    Iterators[rabbitCurrentIndex].innerHTML = "🐰";
    checkForGameOver();
    checkForWin();
  }
  document.addEventListener("keyup", moveRabbit);
  class Wolf {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;
    }
  }
  wolfes = [
    new Wolf("wolf", Math.trunc(Math.random() * 768), 250),
    new Wolf("wolf", Math.trunc(Math.random() * 768), 400),
    new Wolf("wolf", Math.trunc(Math.random() * 768), 300),
    new Wolf("wolf", Math.trunc(Math.random() * 768), 500),
  ];
  wolfes.forEach((wolf) => {
    while (
      Iterators[wolf.currentIndex].classList.contains("wolf") ||
      Iterators[wolf.currentIndex].classList.contains("wall") ||
      Iterators[wolf.currentIndex].classList.contains("rabbit") ||
      Iterators[wolf.currentIndex].classList.contains("home")
    ) {
      wolf.currentIndex = Math.trunc(Math.random() * 784);
    }
    Iterators[wolf.currentIndex].classList.add(wolf.className);
    Iterators[wolf.currentIndex].classList.add("wolf");
    Iterators[wolf.currentIndex].innerHTML = "🐺";
    Iterators[homeCurrentIndex].innerHTML = "🏡";
  });

  function moveWolf(wolf) {
    const directions = [-1, +1, width, -width];
    let direction;
    let range = rabbitCurrentIndex - wolf.currentIndex;
    let wolfK = [
      wolf.currentIndex % width,
      Math.floor(wolf.currentIndex / width),
    ];
    let rabbitK = [
      rabbitCurrentIndex % width,
      Math.floor(rabbitCurrentIndex / width),
    ];
    if (range > 0) {
      if (wolfK[1] < rabbitK[1]) {
        direction = width;
      } else {
        direction = 1;
      }
    } else {
      if (wolfK[1] >= rabbitK[1]) {
        if (wolfK[0] > rabbitK[0]) {
          direction = -1;
        } else {
          direction = -width;
        }
      } else {
        direction = -1;
      }
    }

    if (range == width) {
      direction = width;
    } else if (range == 1) {
      direction = 1;
    } else if (range == -width) {
      direction = -width;
    } else if (range == -1) {
      direction = -1;
    }

    const move = (direcion) => {
      if (wolf.currentIndex < width) {
        direction == -width && (direction = -direction);
      } else if (wolf.currentIndex % width == 0) {
        direction == -1 && (direction = +1);
      } else if (wolf.currentIndex % width == width - 1) {
        direction == +1 && (direction = -1);
      } else if (wolf.currentIndex >= width * (width - 1)) {
        direction == +width && (direction = -width);
      }

      Iterators[wolf.currentIndex].classList.remove(wolf.className);
      Iterators[wolf.currentIndex].innerHTML = " ";

      wolf.currentIndex += direction;
      Iterators[wolf.currentIndex].classList.add(wolf.className, "wolf");
      Iterators[wolf.currentIndex].innerHTML = "🐺";
    };
    if (
      !Iterators[wolf.currentIndex + direction].classList.contains("wolf") &&
      !Iterators[wolf.currentIndex + direction].classList.contains("wall")
    ) {
      move(direction);
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
      if (
        !Iterators[wolf.currentIndex + direction].classList.contains("wolf") &&
        !Iterators[wolf.currentIndex + direction].classList.contains("wall")
      ) {
        move(direction);
      }
    }

    checkForGameOver();
  }
  function checkForGameOver() {
    if (Iterators[rabbitCurrentIndex].classList.contains("wolf")) {
      // wolfes.forEach(wolf => clearInterval(wolf.timerId))
      document.removeEventListener("keyup", moveRabbit);
        alert("Game Over");
      clearMap()
      button.addEventListener("click",manipuliations ,{once:true});
    }
  }
  function checkForWin() {
    if (rabbitCurrentIndex == homeCurrentIndex) {
      // wolfes.forEach(wolf => clearInterval(wolf.timerId))
      document.removeEventListener("keyup", moveRabbit);
        alert("You have WON!");
      clearMap()
      button.addEventListener("click",manipuliations ,{once:true});
    }
  }
}

button.addEventListener("click",manipuliations ,{once:true});
