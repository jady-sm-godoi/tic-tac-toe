<template>
  <!-- header -->
  <div id="title">
    <h1>TIC-TAC-TOE</h1>
  </div>
  <!-- get players name -->
  <identify-players @setPlayer="setPlayer" v-if="section === 1" />
  <!-- show the game -->
  <grid-full
    :player="player"
    :reset="reset"
    :winner="winner"
    @getNumber="getNumber"
    v-if="section === 2 || section === 3"
  />
  <!-- shows the name of the current player -->
  <div class="alert" role="alert" v-if="section === 2">
    <div :class="playerTurnOne">X - {{ playerXName }}</div>
    <div :class="playerTurnTwo">O - {{ playerOName }}</div>
  </div>
  <!-- show the winner and controls buttom -->
  <div id="winner" v-if="winner">
    <p>Who win? {{ whoWinner }} !</p>
    <button id="control1" @click="reStart">RESTART</button>
    <button id="control2" @click="quit">NEW GAME</button>
  </div>
</template>

<script>
import GridFull from "./components/GridFull.vue";
import IdentifyPlayers from "./components/identifyPlayers.vue";
import "./css/global.css";

export default {
  components: { GridFull, IdentifyPlayers },
  name: "App",
  data() {
    return {
      seqWin: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ],
      player: "player1",
      playerXName: "",
      playerOne: [],
      playerOName: "",
      playerTwo: [],
      usedNumbers: [],
      winner: null,
      reset: false,
      section: 1,
      shots: 0,
    };
  },
  watch: {
    winner() {
      if (this.winner) {
        this.winner;
      }
    },
    shots() {
      if (this.shots === 9) {
        this.winner = "draw";
      }
    },
  },
  computed: {
    playerTurnOne() {
      return this.player === "player1" ? "turn" : "unturn";
    },
    playerTurnTwo() {
      return this.player === "player2" ? "turn" : "unturn";
    },
    whoWinner() {
      if (this.winner === "player1") {
        return this.playerXName;
      } else if (this.winner === "player2") {
        return this.playerOName;
      } else {
        return "draw";
      }
    },
  },
  methods: {
    setPlayer(playerXName, playerOName) {
      this.playerXName = playerXName ? playerXName : "player X";
      this.playerOName = playerOName ? playerOName : "player O";
      this.section = 2;
    },
    getNumber(num) {
      if (this.player === "player1") {
        this.playerOne.push(+num);
        this.usedNumbers.push(+num);
        if (this.playerOne.length >= 3) {
          this.checkWin(this.playerOne);
        }
        this.player = "player2";
      } else {
        this.playerTwo.push(+num);
        this.usedNumbers.push(+num);
        if (this.playerTwo.length >= 3) {
          this.checkWin(this.playerTwo);
        }
        this.player = "player1";
      }
      this.shots++;
    },
    checkWin(list) {
      for (let seq of this.seqWin) {
        let temp = [];
        for (let i in list) {
          if (seq.indexOf(list[i]) >= 0) {
            temp.push(list[i]);
          }
        }
        if (temp.length === 3) {
          this.winner = this.player;
        }
      }
    },
    reStart() {
      this.playerOne = [];
      this.playerTwo = [];
      this.usedNumbers = [];
      this.winner = null;
      this.reset = !this.reset;
      this.section = 2;
      this.shots = 0;
    },
    quit() {
      this.playerXName = "";
      this.playerOName = "";
      this.playerOne = [];
      this.playerTwo = [];
      this.usedNumbers = [];
      this.winner = null;
      this.reset = !this.reset;
      this.section = 1;
      this.shots = 0;
    },
  },
};
</script>

<style>
#app section {
  width: 80%;
}
h1 {
  margin: 50px 0 30px;
}

body {
  background-image: url("https://cdn.pixabay.com/photo/2016/02/09/04/39/texture-1188274_960_720.jpg");
}
#winner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  font-size: 20pt;
  font-weight: bolder;
  color: rgb(250, 219, 142);
  text-shadow: 2px 2px 8px #020202;
}
#control1,
#control2 {
  margin: 10px 0;
  padding: 5px 20px;
  border: 0;
  border-radius: 17px;
  color: rgb(250, 250, 250);
}

#control1 {
  background-color: rgb(165, 101, 42);
}
#control2 {
  background-color: brown;
}
button:hover {
  opacity: 0.9;
}
.turn {
  color: red;
  text-shadow: 2px 2px 8px #020202;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: horizontal;
  align-content: center;
}
.unturn {
  color: rgb(252, 249, 249);
  text-shadow: 2px 2px 8px #020202;
  font-size: 15px;
  display: flex;
  flex-direction: horizontal;
  align-content: center;
}
</style>
