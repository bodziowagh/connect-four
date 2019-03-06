# Connect Four

### In order to run:
- clone the repository
- `npm i`
- make sure nothing is blocking a port `8081`
- `npm start`
- open `localhost:8081` in your browser

### Rules


<p align="center">
  <img src="https://github.com/bodziowagh/connect-four/blob/master/demo/regular.gif?raw=true">
</p>

The default variant follows the standard Connect Fout rules (7 on 6 board, 4 adjacent tiles to win, 2 players). However it's quite easy to modify those, take a look <a href="https://github.com/bodziowagh/connect-four/blob/master/src/redux/game/model.ts">here</a> for details.

### Examples of altered rules:

Bigger board, and less adjacent tiles required to win:

<p align="center">
  <img src="https://github.com/bodziowagh/connect-four/blob/master/demo/big-board-3-to-win.gif?raw=true">
</p>

More players:


<p align="center">
  <img src="https://github.com/bodziowagh/connect-four/blob/master/demo/4-players.gif?raw=true">
</p>
