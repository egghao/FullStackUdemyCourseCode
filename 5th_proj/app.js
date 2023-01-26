const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// getContext() method會回傳一個canvas的drawing context
// drawing context可以用來在canvas內畫圖

const unit = 20;
const row = canvas.height / unit;
const col = canvas.width / unit;
let direction = "right";

class Food {
  constructor() {
    this.x = Math.floor(Math.random() * col) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }

  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }

  regen(snake) {
    let new_x = Math.floor(Math.random() * col) * unit;
    let new_y = Math.floor(Math.random() * row) * unit;
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x == new_x && snake[i].y == new_y) {
        this.regen(snake);
      }
    }
    if (this.x == new_x && this.y == new_y) {
      this.regen(snake);
    }
    this.x = new_x;
    this.y = new_y;
  }
}
let food = new Food();
let best_score;
if (localStorage.getItem("best_score") === null) {
  best_score = 0;
  localStorage.setItem("best_score", best_score);
} else {
  best_score = localStorage.getItem("best_score");
}

let current_score = 0;

let currScore = document.querySelector("#myScore");
let bestScore = document.querySelector("#bestScore");

let snake = []; // Array每個元素都是一個物件
// 物件的工作是儲存身體的x,y座標
snake[0] = {
  x: 80,
  y: 0,
};
snake[1] = {
  x: 60,
  y: 0,
};
snake[2] = {
  x: 40,
  y: 0,
};
snake[3] = {
  x: 20,
  y: 0,
};

function isOverlap(snake) {
  let head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      return true;
    }
  }
  return false;
}

function changeDirection(e) {
  e.preventDefault();
  if (e.key == "ArrowDown" && direction != "up") {
    direction = "down";
  } else if (e.key == "ArrowUp" && direction != "down") {
    direction = "up";
  } else if (e.key == "ArrowRight" && direction != "left") {
    direction = "right";
  } else if (e.key == "ArrowLeft" && direction != "right") {
    direction = "left";
  }
  window.removeEventListener("keydown", changeDirection);
}

function draw() {
  currScore.innerText = "目前分數：" + current_score;
  bestScore.innerText = "最佳分數：" + best_score;
  localStorage.setItem("best_score", best_score);
  // Clear
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Render snake
  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white";
    // x, y, width, height
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }
  // Determine if overlap
  if (isOverlap(snake)) {
    alert("遊戲結束");
    clearInterval(myGame);
    // window.location.reload();
  }

  // Update snake with current direction
  let pt_x = snake[0].x;
  let pt_y = snake[0].y;
  if (direction == "right") {
    pt_x += unit;
  } else if (direction == "left") {
    pt_x -= unit;
  } else if (direction == "up") {
    pt_y -= unit;
  } else if (direction == "down") {
    pt_y += unit;
  }
  new_head = {
    x: (canvas.width + pt_x) % canvas.width,
    y: (canvas.height + pt_y) % canvas.height,
  };
  // Draw food
  food.draw();
  let isFoodEaten = new_head.x == food.x && new_head.y == food.y;
  snake.unshift(new_head);
  if (!isFoodEaten) {
    snake.pop();
  } else {
    current_score += 1;
    if (best_score < current_score) {
      best_score = current_score;
    }
    food.regen(snake);
  }
  window.addEventListener("keydown", changeDirection);
}

let myGame = setInterval(draw, 100);

window.addEventListener("keydown", changeDirection);
