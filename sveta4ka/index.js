
// const image = "/Users/alina/Desktop/sveta4ka_dr/ready/1/1.jpg";
// let currentLevel = 0;
const data = [
  {
    image: 'ready/1/1.jpg',
    clues: [
      'ready/1/clue1.png',
      'ready/1/clue2.png',
      'ready/1/clue3.png',
    ]
  },
  {
    image: 'ready/2/2.jpg',
    clues: [
      'ready/2/clue1.png',
      'ready/2/clue2.png',
      'ready/2/clue3.png',
    ]
  },
  {
    image: 'ready/3/3.jpg',
    clues: [
      'ready/3/clue1.png',
      'ready/3/clue2.png',
      'ready/3/clue3.png',
    ]
  },
  {
    image: 'ready/4/4.jpg',
    clues: [
      'ready/4/clue1.png',
      'ready/4/clue2.png',
    ]
  },
  {
    image: 'ready/5/5.jpg',
    clues: [
      'ready/5/clue1.png',
      'ready/5/clue2.png',
    ]
  },
  {
    image: 'ready/6/6.jpg',
    clues: [
      'ready/6/clue1.png',
      'ready/6/clue2.png',
      'ready/6/clue3.png',
      'ready/6/clue4.png',
    ]
  },
]

// const data = [
//   {
//     image: 'ready/photo_2022-12-04_01-48-45.jpg',
//     clues: [
//       ''
//     ]
//   },
//   {
//     image: 'ready/photo_2022-12-04_01-48-45.jpg',
//   }
// ];

const container = document.getElementById('collage');
const containerComplete = document.getElementById('collage-dumb');
const containerCompleteGrid = document.getElementById('collage-dumb-grid');
const nextButton = document.querySelector('.next');

let currentLevel = 0;


const CELLS_WIDTH = 4;
const CELLS_HEIGHT = 4;

const imageSize = 900; //px
const cellSize = imageSize / CELLS_WIDTH;

const createElements = () => {
  const image = data[currentLevel].image;
  for (let i = 0; i < CELLS_HEIGHT; i++)
    for (let j = 0; j < CELLS_WIDTH; j++) {
      const index = i * CELLS_WIDTH + j;
      const xPos = (CELLS_WIDTH - j) * cellSize;
      const yPos = (CELLS_WIDTH - i) * cellSize;

      //dynamic creation of cells
      const newCell = document.createElement("div");
      const newCellWrapper = document.createElement("div");
      const newCellFront = document.createElement("div");
      const newCellBack = document.createElement("div");

      newCell.classList.add("collage-cell");
      newCellWrapper.classList.add("wrapper");
      newCellFront.classList.add("front");
      newCellBack.classList.add("back");

      newCellBack.style.backgroundImage = `url('${image}')`;
      newCellBack.style.backgroundPosition = `${xPos}px ${yPos}px`;
      newCellWrapper.appendChild(newCellFront);
      newCellWrapper.appendChild(newCellBack);
      newCell.appendChild(newCellWrapper);
      container.appendChild(newCell);
    }

  let elements = document.querySelectorAll('.front')
  // data.map((image, index) => {
  data[currentLevel].clues.forEach((clue) => {
    let random = Math.floor(Math.random() * (Math.floor(16) - Math.floor(1) + 1) + 1);
    console.log(clue)
    elements[random].style.backgroundImage = `url(${clue})`;
  })
}

const completed = () => {
  const cells = document.querySelectorAll(".collage-cell");
  for (cell of cells) {
    if (!cell.className.includes('active'))
      return false;
  }
  return true;
}

const run = () => {
  createElements();
}

const clear = () => {
  const cells = document.querySelectorAll(".collage-cell");
  container.innerHTML = '';
}

const win = () => {
  container.style.display = 'none';
  containerComplete.style.display = 'block';
  containerCompleteGrid.style.display = 'grid';
}

const restart = () => {

  clear();
  currentLevel++;
  console.log(data.length === currentLevel)
  if (currentLevel === data.length) {
    win();
    return;
  }
  createElements();
}

document.body.addEventListener('click', function (event) {
  if (event.target.className.includes('collage-cell')) {
    event.target.classList.add('active');
    if (completed()) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      nextButton.classList.add('active');
    }
  }
});

nextButton.addEventListener('click', () => {
  if (!completed()) return;
  nextButton.classList.remove('active');
  restart();
});

run();


for (let i = 1; i <= 12; i++) {
  let cell = document.querySelector('.cell' + i)
  cell.style.backgroundImage = `url('dumb/${i}.jpg')`;
  cell.style.backgroundRepeat = 'no-repeat';
  cell.style.backgroundSize = 'cover';
}

