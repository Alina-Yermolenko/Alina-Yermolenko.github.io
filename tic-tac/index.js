document.addEventListener('DOMContentLoaded', load, false);

function load() {
  let container = document.getElementsByClassName('container');
  let resetButton = document.getElementById('reset');
  let tile = document.getElementsByClassName('tile');
  let displayPlayer = document.querySelector('.display-player');
  let avatarContainer = document.getElementsByClassName('avatar-container');
  let announcer = document.getElementsByClassName('hide');

  class Game {
    constructor() {
      this.e;
      this.clicking = 0;
      this.chooseAvatar();
      this.move = this.move.bind(this);
      this.cursor = 4;
    }

    startGame() {
      new Input();
      window.addEventListener('keydown', this.move);
      resetButton.addEventListener('click', this.reset);
      container[0].addEventListener('click', event => {

        this.putSign(event.target);

        isEqual()
        function isEqual() {
          let tile1 = tile[0].innerHTML;
          let tile2 = tile[1].innerHTML;
          let tile3 = tile[2].innerHTML;
          let tile4 = tile[3].innerHTML;
          let tile5 = tile[4].innerHTML;
          let tile6 = tile[5].innerHTML;
          let tile7 = tile[6].innerHTML;
          let tile8 = tile[7].innerHTML;
          let tile9 = tile[8].innerHTML;

          straight()
          down()
          diagonal()

          function winX() {
            container[0].style.pointerEvents = 'none';
            announcer[0].innerHTML = 'Player X won';
            announcer[0].style.display = 'block';
            announcer[0].style.width = '100%';
            announcer[0].classList.add('playerX');
          }

          function winO() {
            container[0].style.pointerEvents = 'none';
            announcer[0].innerHTML = 'Player O won';
            announcer[0].style.display = 'block';
            announcer[0].style.width = '100%';
            announcer[0].classList.add('playerO');
          }

          function straight() {
            if (tile1 === 'X' && tile2 === 'X' && tile3 === 'X') {
              winX();
            }

            if (tile4 === 'X' && tile5 === 'X' && tile6 === 'X') {
              winX();
            }

            if (tile7 === 'X' && tile8 === 'X' && tile9 === 'X') {
              winX();
            }

            if (tile1 === 'O' && tile2 === 'O' && tile3 === 'O') {
              winO()
            }

            if (tile4 === 'O' && tile5 === 'O' && tile6 === 'O') {
              winO()
            }

            if (tile7 === 'O' && tile8 === 'O' && tile9 === 'O') {
              winO()
            }

          }

          function down() {
            if (tile1 === 'X' && tile4 === 'X' && tile7 === 'X') {
              winX();
            }
            if (tile2 === 'X' && tile5 === 'X' && tile8 === 'X') {
              winX();
            }
            if (tile3 === 'X' && tile6 === 'X' && tile9 === 'X') {
              winX();
            }
            if (tile1 === 'O' && tile4 === 'O' && tile7 === 'O') {
              winO()
            }
            if (tile2 === 'O' && tile5 === 'O' && tile8 === 'O') {
              winO()
            }
            if (tile3 === 'O' && tile6 === 'O' && tile9 === 'O') {
              winO()
            }
          }

          function diagonal() {
            if (tile1 === 'X' && tile5 === 'X' && tile9 === 'X') {
              winX();
            }
            if (tile3 === 'X' && tile5 === 'X' && tile7 === 'X') {
              winX();
            }

            if (tile1 === 'O' && tile5 === 'O' && tile9 === 'O') {
              winO()
            }
            if (tile3 === 'O' && tile5 === 'O' && tile7 === 'O') {
              winO()
            }
          }
        }
      });
    }

    putSign(target) {
      if (target.className === 'tile' || target.className === 'tile active') {
        this.clicking++;
      }

      if (this.clicking % 2 === 0 && target.innerHTML === '') {
        this.putX(target)
      }
      if (this.clicking % 2 === 1 && target.innerHTML === '') {
        this.putO(target)
      }
    }
    putX(target) {
      displayPlayer.classList.add('playerX');
      displayPlayer.classList.remove('playerO');
      displayPlayer.innerHTML = 'X';
      target.classList.add('playerO');
      target.innerHTML = 'O';
    }

    putO(target) {
      displayPlayer.classList.add('playerO');
      displayPlayer.classList.remove('playerX');
      displayPlayer.innerHTML = 'O';
      target.classList.add('playerX');
      target.innerHTML = 'X';
    }

    move(ev) {
      let oldCursor = this.cursor;
      let tableCell = document.getElementsByClassName('tile');

      if (ev.key === 'Enter') {
        let target = tableCell[this.cursor];
        this.putSign(target);
      }

      if (ev.key === 'ArrowLeft') {
        this.cursor--;
        if (this.cursor < 0) {
          this.cursor = 8;
        }
      }

      if (ev.key === 'ArrowRight') {
        this.cursor++;
        if (this.cursor > 8) {
          this.cursor = 0;
        }
      }
      tableCell[oldCursor].classList.remove('active');
      tableCell[this.cursor].classList.add('active');

    }


    reset() {
      for (let i = 0; i < tile.length; i++) {
        this.clicking = 0;
        tile[i].innerHTML = '';
        displayPlayer.innerHTML = 'X';
        tile[i].classList.remove('playerX');
        tile[i].classList.remove('playerO');
        announcer[0].style.display = 'none';
        container[0].style.pointerEvents = 'auto';
      }
    }

    chooseAvatar() {
      for (let i = 0; i < avatarContainer.length; i++) {
        let dragged;
        let count = 0;

        document.addEventListener('dragstart', function (event) {
          dragged = event.target;
          event.target.style.opacity = 0.7;
        }, false);

        document.addEventListener('dragend', function (event) {
          event.target.style.opacity = 1;
        }, false);

        avatarContainer[i].addEventListener('dragover', function (event) {
          event.preventDefault();
        }, false);

        avatarContainer[i].addEventListener('drop', function (event) {
          event.preventDefault();
          console.log(event.target)
          if (event.target.className === 'avatar-container' && count === 0) {
            event.target.appendChild(dragged);
            count++
          }
        }, false);

      }
    }
  }

  class Input {
    constructor() {
      this.createDiv();
    }

    createDiv() {
      for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.className = 'tile';
        container[0].appendChild(div);
      }
    }
  }

  const GAME = new Game();
  GAME.startGame();
}
