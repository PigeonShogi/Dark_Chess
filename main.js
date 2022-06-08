/*
0, 帥 1~2, 仕 3~4, 相 5~6, 俥 7~8, 傌 9~10 炮 11~15 兵
16, 將 17~18, 士 19~20, 象 21~22, 車 23~24, 傌 25~26, 包 27~31, 卒
*/

const board = document.querySelector('#board')

const pieceImg = [
  './img/piece_back.png', // 棋子背面
  './img/piece_empty_square.png', // 空白格子
  './img/piece_red_King.png', // index-1, 帥
  './img/piece_red_Solder.png', // index-2, 仕
  './img/piece_red_Elephant.png', // index-, 相
  './img/piece_red_Rook.png', // index-, 俥
  './img/piece_red_Horse.png', // index-, 傌
  './img/piece_red_Cannon.png', // index-, 炮
  './img/piece_red_Pawn.png', // index-, 兵
  './img/piece_black_King.png', // index-, 將
  './img/piece_black_Solder.png', // index-, 士
  './img/piece_black_Elephant.png', // index-, 象
  './img/piece_black_Rook.png', // index-, 車
  './img/piece_black_Horse.png', // index-, 馬
  './img/piece_black_Cannon.png', // index-, 包
  './img/piece_black_Pawn.png', // index-, 卒
]

const view = {
  renderBoard(arrayNumbers) {
    board.innerHTML = ``
    arrayNumbers.forEach((element, index) => {
      board.innerHTML += `
      <div class="square" data-square_id="${1 + index}">
      <img class="piece" data-id="${element}" data-rank="${utility.setRank(element)}" data-state="back" src="${pieceImg[0]}" alt="棋子">
      </div>
     `
    });
  },

  flipPiece(piece) {
    piece.src = `${utility.convertNumberIntoCharacter(Number(piece.dataset.id))}`
    piece.dataset.state = 'front'
  },
  // view end
}

const controller = {

  // controller end
}

const utility = {
  // 洗牌演算法，用以產出隨機起始局面。
  getRandomNumberArray(count) {
    const number = Array.from(Array(count).keys())
    for (let index = number.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1))
        ;[number[index], number[randomIndex]] = [number[randomIndex], number[index]]
    }
    return number
  },
  // 以棋子的 dataset.id 為依據，定義將幾號的 id 轉換為特定的棋子名稱。
  convertNumberIntoCharacter(number) {
    switch (number) {
      case 0:
        return './img/piece_red_King.png'
      case 1:
        return './img/piece_red_Solder.png'
      case 2:
        return './img/piece_red_Solder.png'
      case 3:
        return './img/piece_red_Elephant.png'
      case 4:
        return './img/piece_red_Elephant.png'
      case 5:
        return './img/piece_red_Rook.png'
      case 6:
        return './img/piece_red_Rook.png'
      case 7:
        return './img/piece_red_Horse.png'
      case 8:
        return './img/piece_red_Horse.png'
      case 9:
        return './img/piece_red_Cannon.png'
      case 10:
        return './img/piece_red_Cannon.png'
      case 11:
        return './img/piece_red_Pawn.png'
      case 12:
        return './img/piece_red_Pawn.png'
      case 13:
        return './img/piece_red_Pawn.png'
      case 14:
        return './img/piece_red_Pawn.png'
      case 15:
        return './img/piece_red_Pawn.png'
      case 16:
        return './img/piece_black_King.png'
      case 17:
        return './img/piece_black_Solder.png'
      case 18:
        return './img/piece_black_Solder.png'
      case 19:
        return './img/piece_black_Elephant.png'
      case 20:
        return './img/piece_black_Elephant.png'
      case 21:
        return './img/piece_black_Rook.png'
      case 22:
        return './img/piece_black_Rook.png'
      case 23:
        return './img/piece_black_Horse.png'
      case 24:
        return './img/piece_black_Horse.png'
      case 25:
        return './img/piece_black_Cannon.png'
      case 26:
        return './img/piece_black_Cannon.png'
      case 27:
        return './img/piece_black_Pawn.png'
      case 28:
        return './img/piece_black_Pawn.png'
      case 29:
        return './img/piece_black_Pawn.png'
      case 30:
        return './img/piece_black_Pawn.png'
      case 31:
        return './img/piece_black_Pawn.png'
      default:
        return number
    }
  },
  // 本函式與洗牌演算法搭配使用，以洗牌演算法產出的索引值為依據，定義棋子的階級。
  setRank(number) {
    switch (number) {
      case 0:
        return 1
      case 1:
        return 2
      case 2:
        return 2
      case 3:
        return 3
      case 4:
        return 3
      case 5:
        return 4
      case 6:
        return 4
      case 7:
        return 5
      case 8:
        return 5
      case 9:
        return 6
      case 10:
        return 6
      case 11:
        return 7
      case 12:
        return 7
      case 13:
        return 7
      case 14:
        return 7
      case 15:
        return 7
      case 16:
        return 1
      case 17:
        return 2
      case 18:
        return 2
      case 19:
        return 3
      case 20:
        return 3
      case 21:
        return 4
      case 22:
        return 4
      case 23:
        return 5
      case 24:
        return 5
      case 25:
        return 6
      case 26:
        return 6
      case 27:
        return 7
      case 28:
        return 7
      case 29:
        return 7
      case 30:
        return 7
      case 31:
        return 7
      default:
        return number
    }
  },
  // utility end
}

// 動態渲染隨機起始局面。日後將改以 controller 調用此函式。
view.renderBoard(utility.getRandomNumberArray(32))

// 在所有棋子上設置事件監聽器，完成棋子翻面的功能。
document.querySelectorAll('.piece').
  forEach(element => {
    element.addEventListener('click', event => {
      view.flipPiece(event.target)
    })
  })
