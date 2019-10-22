//'O' = no Piece
//'X' = Piece
function pieces() {
  this.piece = [
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O']
  ];
  this.vel = 20;
  this.posx = 80;
  this.posy = -20;
  this.r = random([0, 1, 2, 3, 4, 5, 6]);

  this.test = [17];


  this.randomPiece = function(r) {
    switch (r) {
      case 0:
        return this.piece = [ //I
          ['O', 'O', 'O', 'O'],
          ['O', 'O', 'O', 'O'],
          ['X', 'X', 'X', 'X'],
          ['O', 'O', 'O', 'O']
        ];
      case 1:
        return this.piece = [ //J
          ['O', 'O', 'O', 'O'],
          ['X', 'O', 'O', 'O'],
          ['X', 'X', 'X', 'O'],
          ['O', 'O', 'O', 'O']
        ];
      case 2:
        return this.piece = [ //L
          ['O', 'O', 'O', 'O'],
          ['O', 'O', 'X', 'O'],
          ['X', 'X', 'X', 'O'],
          ['O', 'O', 'O', 'O']
        ];
      case 3:
        return this.piece = [ //O
          ['O', 'O', 'O', 'O'],
          ['O', 'X', 'X', 'O'],
          ['O', 'X', 'X', 'O'],
          ['O', 'O', 'O', 'O']
        ];
      case 4:
        return this.piece = [ //S
          ['O', 'O', 'O', 'O'],
          ['O', 'X', 'X', 'O'],
          ['X', 'X', 'O', 'O'],
          ['O', 'O', 'O', 'O']
        ];
      case 5:
        return this.piece = [ //Z
          ['O', 'O', 'O', 'O'],
          ['O', 'X', 'O', 'O'],
          ['X', 'X', 'X', 'O'],
          ['O', 'O', 'O', 'O']
        ];
      case 6:
        return this.piece = [ //T
          ['O', 'O', 'O', 'O'],
          ['X', 'X', 'O', 'O'],
          ['O', 'X', 'X', 'O'],
          ['O', 'O', 'O', 'O']
        ];
    }
  }

  this.display = function() {
    let tetromino = this.randomPiece(this.r);
    for (let i = 0; i < tetromino.length; i++) {
      //console.log(i);
      for (let j = 0; j < tetromino[i].length; j++) {
        //console.log(j);
        if (tetromino[i][j] == 'X') {
          push();
          fill(50);
          rect(this.posx + (j * 20), this.posy + (i * 20), 20, 20);
          pop();
        }
      }
    }
  }

  this.update = function() {
    this.posx = this.posx;
    this.posy += this.vel;
  }
}