
// class dictionaries --- for display

const rogueDict = {
  name: 'Rogue',
  health: 10,
  att: 3,
  mp: 0,
  armor: 0,
  speed: 0,
  moves: [
    'Quick Attack',
    'Invisible',
    'Bleed',
    'Sharpen',
    'Vengeance',
    'Steal'
  ],

  backgroundColor: "#E92D2D",
  buttonColor: "#677574",
  abilities: {
    abilityOne: function (self, enemy){
      attack(self, enemy, 'basic')
      self.updateDouble(true)
      writeToConsole('first strike landed')
    },
    abilityTwo: function (self, enemy){
      self.updateInvis(2)
      writeToConsole('invisible for 2 turns')
    },
    abilityThree: function (self, enemy){
      self.updateBleed(2)
      writeToConsole('bleeding for 2 turns')
    },
    abilityFour: function (self, enemy){
      self.updateMulti(2)
      writeToConsole('blades sharpened')
    },
    abilityFive: function (self, enemy){
      attack(self, enemy, 'modified', enemy.lastAttack)
    },
    abilitySix: function (self,enemy){
      if (self === playerTwo){
        var elems = document.getElementsByClassName("playerOneMoves");
        for(var i = 0; i < elems.length; i++) {
          if (elems[i].style.backgroundColor === 'white'){
            if (i === 0){
              playerOne.abilities.abilityOne(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            } else if (i === 1){
              playerOne.abilities.abilityTwo(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            } else if (i === 2){
              playerOne.abilities.abilityThree(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            } else if (i === 3){
              playerOne.abilities.abilityFour(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            } else if (i === 4){
              playerOne.abilities.abilityFive(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            } else if (i === 5){
              playerOne.abilities.abilitySix(playerTwo, playerOne)
              elems[i].style.backgroundColor = playerOne.backgroundColor
            }
            
          }
        } 
      } else if (self === playerOne){
        var elems = document.getElementsByClassName("playerTwoMoves");
        for(var i = 0; i < elems.length; i++) {
          if (elems[i].style.backgroundColor === 'white'){
            if (i === 0){
              playerTwo.abilities.abilityOne(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            } else if (i === 1){
              playerTwo.abilities.abilityTwo(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            } else if (i === 2){
              playerTwo.abilities.abilityThree(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            } else if (i === 3){
              playerTwo.abilities.abilityFour(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            } else if (i === 4){
              playerTwo.abilities.abilityFive(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            } else if (i === 5){
              playerTwo.abilities.abilitySix(playerOne, playerTwo)
              elems[i].style.backgroundColor = playerTwo.backgroundColor
            }
            
          }
        }
      }
    }
  }
}

const archerDict = {
  name: 'Archer',
  health: 12,
  att: 2,
  mp: 0,
  armor: 0,
  speed: 1,
  moves: [
    'Sharp Shooter',
    'Snare',
    'Wind Em’',
    'Rapid Fire',
    'Honey Trap',
    'Fine Tuned'
  ],
  backgroundColor: "#306B34",
  buttonColor: "#5F3125",
  abilities: {
    abilityOne: function (self, enemy){
      self.updateMulti(2)
      writeToConsole('locked on')
    },
    abilityTwo: function (self, enemy){
        if(hasMove(enemy) != false){
          if (enemy.actionOne === '' && enemy.actionTwo === ''){
            resetClassMoves(enemy)
            writeToConsole(`${enemy.name}'s ability was negated`)
          } else if (enemy.actionOne != '' && enemy.actionTwo != ''){
            let num = Math.ceil(Math.random()*3)
            if (num === 1) {
              resetClassMoves(enemy)
              writeToConsole(`${enemy.name}'s ability was negated`)
            } else if (num === 2){
                resetAction(enemy, 'action one')
                writeToConsole(`${enemy.name}'s action was negated`)
            } else {
                resetAction(enemy, 'action two')
                writeToConsole(`${enemy.name}'s action was negated`)
            }
          }  else if (enemy.actionOne != '' && enemy.actionTwo === ''){
              let num = Math.ceil(Math.random()*2)
              if (num === 1) {
                resetClassMoves(enemy)
                writeToConsole(`${enemy.name}'s ability was negated`)
              } else if (num === 2){
                  resetAction(enemy, 'action one')
                  writeToConsole(`${enemy.name}'s action was negated`)
              }
          } else if (enemy.actionOne === '' && enemy.actionTwo != ''){
            let num = Math.ceil(Math.random()*2)
            if (num === 1) {
              resetClassMoves(enemy)
              writeToConsole(`${enemy.name}'s ability was negated`)
            } else if (num === 2){
                resetAction(enemy, 'action two')
                writeToConsole(`${enemy.name}'s action was negated`)
            }
        }
      }else {
        if (enemy.actionOne != '' && enemy.actionTwo != ''){
          let num = Math.ceil(Math.random()*2)
            if (num === 1){
              resetAction(enemy, 'action one')
              writeToConsole(`${enemy.name}'s action was negated`)
          } else {
              resetAction(enemy, 'action two')
              writeToConsole(`${enemy.name}'s action was negated`)
          }
        } else if (enemy.actionOne != '' && enemy.actionTwo === ''){
            resetAction(enemy, 'action one')
            writeToConsole(`${enemy.name}'s action was negated`)
        } else if (enemy.actionOne === '' && enemy.actionTwo != ''){
            resetAction(enemy, 'action two')
            writeToConsole(`${enemy.name}'s action was negated`)
        } else {
           writeToConsole('nothing was negated')
          }
      }
    },
    abilityThree: function (self, enemy){
      enemy.updateKnockedDown(true)
      writeToConsole('knocking em down')
    },
    abilityFour: function (self, enemy){
      self.updateRapidFire(2)
      writeToConsole('rapid fire is engaged')
    },
    abilityFive: function (self, enemy){
      self.updateTarred(true)
      writeToConsole('tar trap is set')
    },
    abilitySix: function (self, enemy){
      self.updateUpgrade(true)
      writeToConsole('upgrading')
      self.attackUp(1)
    }
  }
}

const mageDict = {
  name: 'Mage',
  health: 12,
  att: 0,
  mp: 3,
  armor: 0,
  speed: 5,
  moves: [
    'Ice Blast',
    'Cold Hearted',
    'Ice Shards',
    'Arcane Focus',
    'Free Will',
    'Ice Queen'
  ],
  status: {
    knockedDown: false,
    nuke: 0,
    icy: 0,
    missiles: 0,
    charged: false,
    raisedMP: 0
  },
  backgroundColor: "#758BFD",
  buttonColor: "#E7ECEF",
  abilities: {
    abilityOne: function (self, enemy){
      self.updateNuke(1)
      writeToConsole('nuke incoming')
    },
    abilityTwo: function (self, enemy){
      self.updateIcy(2)
      writeToConsole('feeling icy for two turns')
    },
    abilityThree: function (self, enemy){
      self.updateMissiles(4)
      writeToConsole('prepare for some missiles')
    },
    abilityFour: function (self, enemy){
      if (self.arcaneFocus === true){
        writeToConsole('failed to focused')
      } else {
        self.updateArcaneFocus(true)
        self.updateMulti(1.5)
        writeToConsole('charging up')
      }

    },
    abilityFive: function (self, enemy){
      if (self === playerOne){
        document.getElementById("magePopupOne").style.display = "block"
      } else if (self === playerTwo) {
        document.getElementById("magePopupTwo").style.display = "block"
      } else {
        writeToConsole('failed to select ability')
      }
      
    },
    abilitySix: function (self, enemy){
      self.updateRaisedMP(2)
      self.mpUp(2)
      writeToConsole(`The ${self.name} raised there mp by two`)
    }
  }
}

const warriorDict = {
  name: 'Warrior',
  health: 14,
  att: 2,
  mp: 0,
  armor: 0,
  speed: 4,
  moves: [
    'Blind Rage',
    'Overwhelm',
    'Bombard',
    'offense stanse (+1 dmg recieved and dished)',
    'Parry',
    'God’s Favorite'
  ],
  backgroundColor: "#404E4D",
  buttonColor: "#6D9F71",
  abilities: {
    abilityOne: function (self, enemy){
      writeToConsole('double time')
      attack(self, enemy, 'basic')
      attack(self, enemy, 'basic')
    },
    abilityTwo: function (self, enemy){
      enemy.updateDaze(true)
    },
    abilityThree: function (self, enemy){
      enemy.resetMulti()
      writeToConsole(`Mutiplie has been reset for the ${enemy.name}`)

    },
    abilityFour: function (self, enemy){
      self.updateStance('offense')
      self.changeDefense(-1)
      self.attackUp(2)
    },
    abilityFive: function (self, enemy){
      self.updateDeflect(true)
    },
    abilitySix: function (self, enemy){
      self.updateShieldsUp(true)
      self.armorUp(6)
    }
  }
}

const shamanDict = {
  name: 'Shaman',
  health: 12,
  att: 2,
  mp: 2,
  armor: 0,
  speed: 3,
  moves: [
    'Holy Fire',
    'Mend',
    'Earth shield',
    'Typhoon',
    'Enhancement',
    'Mother Totem'
  ],
  status: {
    burn: 0,
    earthShield: false,
    knockedDown: false,
    totem:''
  },
  backgroundColor: "#90C2E7",
  buttonColor: "#1768AC",
  abilities: {
    abilityOne: function (self, enemy){
      self.updateBurn(2)
      writeToConsole('feel the burn!')
    },
    abilityTwo: function (self, enemy){
      self.heal(Math.ceil(self.mp*1.5))
      writeToConsole(`the ${self.name} healed for ${Math.ceil(self.mp*1.5)}`)
    },
    abilityThree: function (self, enemy){
      self.updateEarthShield(true)
      writeToConsole(`the ${self.name} has raised an earth shield`)
    },
    abilityFour: function (self, enemy){
      enemy.updateKnockedDown(true)
      writeToConsole(`the ${self.name} has knocked down the ${enemy.name}`)
    },
    abilityFive: function (self, enemy){
      if(self.mp > self.att){
        attack(self, enemy, 'modified', self.att)
      } else {
        attack(self, enemy, 'modified', self.mp)
      }
    },
    abilitySix: function (self, enemy){
      const num = Math.ceil(Math.random()*4)
      if (num === 1){
        self.updateTotem('fire')
        writeToConsole('a fire totem has been placed')
      } else if (num === 2){
        self.updateTotem('water')
        writeToConsole('a water totem has been placed')
      } else if (num === 3){
        self.updateTotem('earth')
        writeToConsole('an earth totem has been placed')
        self.attackUp(1)
      } else if (num === 4){
        self.updateTotem('wind')
        writeToConsole('a wind totem has been placed')
        self.mpUp(1)
      }

    }
  }
}

const druidDict = {
  name: 'Druid',
  health: 12,
  att: 2,
  mp: 2,
  armor: 0,
  speed: 2,
  moves: [
    'Wolf form',
    'Bear form',
    'Regrow',
    'Enlightenment',
    'Suppression',
    'Moon blast'
  ],
  backgroundColor: "#7A893B",
  buttonColor: "#58110E",
  abilities: {
    abilityOne: function (self, enemy){
      self.updateForm('wolf')
      self.attackUp(2)
      writeToConsole(`the ${self.name} has transformed into a wolf`)
    },
    abilityTwo: function (self, enemy){
      self.updateForm('bear')
      writeToConsole(`the ${self.name} has transformed into a bear and gains 2 armor a turn`)
    },
    abilityThree: function (self, enemy){
      self.heal(Math.ceil(self.mp/2))
      self.armorUp(Math.ceil(self.mp/2))
      writeToConsole(`the ${self.name} has called upon the trees to shield and heal them`)
    },
    abilityFour: function (self, enemy){
      if(self.ritual > 0){
        writeToConsole('the ritual has failed to perform again so soon')
      } else {
          self.updateRitual(3)
          self.attackUp(2)
          self.mpUp(2)
        writeToConsole(`the ${self.name} has completed the ritual and gained power`)
      }

    },
    abilityFive: function (self, enemy){
      if(self.suppression > 0){
        writeToConsole('the supression has failed to perform again so soon')
      } else {
          self.updateSuppression(2)
          enemy.attackUp(-2)
          enemy.mpUp(-2)
        writeToConsole(`the ${self.name} has completed the supression and taken power`)
      }
    },
    abilitySix: function (self, enemy){
      attack(self, enemy, 'modified', Math.ceil(self.mp/2))
      writeToConsole(`the ${self.name} has fired a moonblast`)

    }
  }
}


// creating playable characters
class playableClass {
  constructor(dict, race) {
    this.healthMax = 0;
    this.health = 0;
    this.armor = 0;
    this.att= 0;
    this.mp = 0;
    this.multi = 1;
    this.name = '';
    this.moves = [];
    this.race = '';
    this.form = '';
    this.critBlock = false;
    this.bust = false;
    this.def = 0;
    this.speed = 0;
    this.ready = false;
    this.play = false;
    this.classDice = 0;
    this.actionOne = '';
    this.actionTwo = '';
    this.cloak = false;
    this.react = false;
    this.backgroundColor = '#FFF9BE';
    this.buttonColor = '#E57A44';
    this.lastAttack = 0;
    this.rapidFire =0;
    this.double= false;
    this.bleed = 0;
    this.knockedDown = false;
    this.totem = '';
    this.earthShield = false;
    this.ritual = 0;
    this.suppression = 0;
    this.nuke = 0;
    this.invisible
    this.icy = 0;
    this.tarred = false;
    this.missiles = 0;
    this.raisedMP = 0;
    this.upgrade = false;
    this.stance = '';
    this.daze = false;
    this.deflect = false;
    this.shieldsUp = false;
    this.arcaneFocus = false;
    this.burn = 0;
    this.turn = 1;
    this.use = 1;
    this.abilities = {
      abilityOne: function (){},
      abilityTwo: function (){},
      abilityThree: function (){},
      abilityFour: function (){},
      abilityFive: function (){},
      abilitySix: function (){}
    }
  }
  updateNuke(val){
    this.nuke = val
  }
  updateTarred(val){
    this.tarred = val
  }
  updateArcaneFocus(val){
    this.arcaneFocus = val
  }
  updateStance(val){
    this.stance = val
  }
  updateForm(val){
    this.form = val
  }
  updateInvis(num){
    this.invisible = num
  }
  updateUpgrade(val){
    this.upgrade = val
  }
  updateBurn(num){
    this.burn = num
  }
  updateShieldsUp(val){
    this.shieldsUp = val
  }
  updateDeflect(val){
    this.deflect = val
  }
  updateDaze(val){
    this.daze = val
  }
  updateBleed(num){
    this.bleed = num
  }
  updateRaisedMP(num){
    this.raisedMP = num
  }
  updateMissiles(num){
    this.missiles = num
  }
  updateIcy(num){
    this.icy = num
  }
  updateNuke(num){
    this.nuke = num
  }
  updateSuppression(num){
    this.suppression = num
  }
  updateRitual(num){
    this.ritual = num
  }
  updateEarthShield(val){
    this.earthShield = val
  }
  updateTotem(val){
    this.totem = val
  }
  updateKnockedDown(val){
    this.knockedDown = val
  }
  updateBleed(num){
    this.bleed = num
  }
  updateDouble(val){
    this.rapidFire = val
  }
  updateRapidFire(num){
    this.rapidFire = num
  }
  changeDefense(num){
    this.def = this.def + num
  }
  resetDefense(){
    this.def = 0
  }
  resetUse(){
    this.use = 1
  }
  updateUse(){
    this.use = this.use--
  }
  resetMulti (){
    this.multi = 1
  }
  updateMulti (num){
    this.multi = this.multi * num
  }
  resetAttack (num) {
    this.att = num
  }
  resetMP (num) {
    this.mp = num
  }
  resetTurn(){
    this.turn = 1
  }
  updateTurn(){
    this.turn = this.turn++
  }
  updateLastAttack(lastAttack) {
    this.lastAttack = lastAttack
  }
  changeReact (stat) {
    this.react = stat
  }
  changeCloak (stat) {
    this.cloak = stat
  }
  updateActionOne (roll) {
    this.actionOne = roll
  }
  updateActionTwo (roll) {
    this.actionTwo = roll
  }
  updateClassDice (roll) {
    this.classDice = roll
  }
  attacked (att){
    att = att - this.def
    if (att < 0){
      att = 0
    }
    writeToConsole(`the ${this.name} was attacked for ${att}`)
    if (this.armor > att) {
      this.armor = this.armor - att
    } else if (this.armor === 0) {
      this.health = this.health - att 
    } else {
      this.health = this.health + this.armor - att
      this.armor = 0
    }
    if (this.health <  1){
      alert(` the ${this.name} has died`)
    }
  }
  heal (heal) {
    heal = heal * this.multi
    if (heal + this.health < this.healthMax) {
      this.health =  this.health + heal
    } else {
      this.health = this.healthMax
    }
  }
  armorUp(armor) {
    if (this.armor + armor < 0 ){
      this.armor = 0
    }else{
      this.armor = this.armor + armor
    }
    
  }
  attackUp(att) {
    if (this.att + att < 0){
      this.att = 0
    }
    else{
      this.att = this.att + att
    }
  }
  mpUp(mp) {
    if (this.mp + mp < 0){
      this.mp = 0
    }
    else{
      this.mp = this.mp + mp
    }
    
  }
  changeClass(dict) {
    this.healthMax = dict['health'];
    this.health = dict['health'];
    this.armor = dict['armor'];
    this.att= dict['att'];
    this.mp = dict['mp'];
    this.name = dict['name'];
    this.moves = dict['moves'];
    this.speed = dict['speed'];
    this.backgroundColor = dict['backgroundColor'];
    this.buttonColor = dict['buttonColor'];
    this.abilities = dict['abilities']
  }
  changeRace(race){
    this.race = race
  }
  changehealthMax(num){
    this.healthMax = this.healthMax + num
  }

}
const playerOne = new playableClass()
const playerTwo = new playableClass()




function closeForm (closer){
  if (closer === playerOne){
    resetClassMoves(playerOne)
    var select = document.getElementById('mageSelectorOne');
    var option = select.options[select.selectedIndex];
    writeToConsole(`the ${closer.name} chose ability ${option.value}`)
    if (option.value === '1') {
        document.getElementById('playerOneMoveOne').style.backgroundColor = 'white'
    } else if (option.value === '2') {
        document.getElementById('playerOneMoveTwo').style.backgroundColor = 'white'
    } else if (option.value === '3') {
        document.getElementById('playerOneMoveThree').style.backgroundColor = 'white'
    } else if (option.value === '4') {
        document.getElementById('playerOneMoveFour').style.backgroundColor = 'white'
    } else if (option.value === '6') {
        document.getElementById('playerOneMoveSix').style.backgroundColor = 'white'
    }
    document.getElementById("magePopupOne").style.display = "none"
    document.getElementById('mageSelectorOne').selectedIndex = null
  } else if (closer === playerTwo){
    resetClassMoves(playerTwo)
    var select = document.getElementById('mageSelectorTwo');
    var option = select.options[select.selectedIndex];
    writeToConsole(`the ${closer.name} chose ability ${option.value}`)
    if (option.value === '1') {
        document.getElementById('playerTwoMoveOne').style.backgroundColor = 'white'
    } else if (option.value === '2') {
        document.getElementById('playerTwoMoveTwo').style.backgroundColor = 'white'
    } else if (option.value === '3') {
        document.getElementById('playerTwoMoveThree').style.backgroundColor = 'white'
    } else if (option.value === '4') {
        document.getElementById('playerTwoMoveFour').style.backgroundColor = 'white'
    } else if (option.value === '6') {
        document.getElementById('playerTwoMoveSix').style.backgroundColor = 'white'
    }
    document.getElementById("magePopupTwo").style.display = "none"
    document.getElementById('mageSelectorTwo').selectedIndex = null
  } else {
    alert('choose a move')
  }
  
}
/********** Drop Downs *************************************/

function p1UpdateClass() {
  var select = document.getElementById('p1ClassSelect');
  var option = select.options[select.selectedIndex];
  
  if (option.value === 'rogue') {
    playerOne.changeClass(rogueDict)
  } else  if (option.value === 'archer') {
    playerOne.changeClass(archerDict)
  } else  if (option.value === 'mage') {
    playerOne.changeClass(mageDict)
  } else  if (option.value === 'warrior') {
    playerOne.changeClass(warriorDict)
  } else  if (option.value === 'shaman') {
    playerOne.changeClass(shamanDict)
  } else  if (option.value === 'druid') {
    playerOne.changeClass(druidDict)
  } else {
    alert("pick a class")
  }

}

function p2UpdateClass() {
  var select = document.getElementById('p2ClassSelect');
  var option = select.options[select.selectedIndex];
  
  if (option.value === 'rogue') {
    playerTwo.changeClass(rogueDict)
  } else  if (option.value === 'archer') {
    playerTwo.changeClass(archerDict)
  } else  if (option.value === 'mage') {
    playerTwo.changeClass(mageDict)
  } else  if (option.value === 'warrior') {
    playerTwo.changeClass(warriorDict)
  } else  if (option.value === 'shaman') {
    playerTwo.changeClass(shamanDict)
  } else  if (option.value === 'druid') {
    playerTwo.changeClass(druidDict)
  } else {
    alert("pick a class")
  }

}


function p1UpdateRace () {
  var select = document.getElementById('p1RaceSelect');
  var option = select.options[select.selectedIndex];

  if (option.value === 'goblin') {
    playerOne.changeRace(option.value)
  } else  if (option.value === 'orc') {
    playerOne.changeRace(option.value)
  } else  if (option.value === 'elf') {
    playerOne.changeRace(option.value)
  } else  if (option.value === 'dwarf') {
    playerOne.changeRace(option.value)
  } else  if (option.value === 'undead') {
    playerOne.changeRace(option.value)
  } else {
    alert("pick a race playerOne")
  }
 
}

function p2UpdateRace () {
  var select = document.getElementById('p2RaceSelect');
  var option = select.options[select.selectedIndex];

  if (option.value === 'goblin') {
    playerTwo.changeRace(option.value)
  } else  if (option.value === 'orc') {
    playerTwo.changeRace(option.value)
  } else  if (option.value === 'elf') {
    playerTwo.changeRace(option.value)
  } else  if (option.value === 'dwarf') {
    playerTwo.changeRace(option.value)
  } else  if (option.value === 'undead') {
    playerTwo.changeRace(option.value)
  }  else {
    alert("pick a race playerTwo")
  }
 
}
/*********************************************************************
 * Bottom Buttons lock and reset
 * ***********************************************/
const startBackground = '#FFF9BE'
const startButtonColor = '#FFF9BE'

let lockOne = false
let lockTwo = false
let rolls = 2
let uses = 1
function playerOneLock () {  

  if (playerOne.name === '') {
    alert('you for got a class brother')
  } else if(lockOne === true){
    writeToConsole(`you are already locked in player one`)
  } else {
    lockOne = true
    document.getElementById('p1ClassSelect').setAttribute('disabled', 'disabled')
    document.getElementById('p1RaceSelect').setAttribute('disabled', 'disabled')
    document.querySelector('.playerOne .moveOne > p').innerHTML = playerOne.moves[0]
    document.querySelector('.playerOne .moveTwo > p').innerHTML = playerOne.moves[1]
    document.querySelector('.playerOne .moveThree > p').innerHTML = playerOne.moves[2]
    document.querySelector('.playerOne .moveFour > p').innerHTML = playerOne.moves[3]
    document.querySelector('.playerOne .moveFive > p').innerHTML = playerOne.moves[4]
    document.querySelector('.playerOne .moveSix > p').innerHTML = playerOne.moves[5]
    document.querySelector('.playerOne .armor').innerHTML = playerOne.armor
    document.querySelector('.playerOne .health').innerHTML = playerOne.health
    document.querySelector('.playerOne .attack > span').innerHTML = playerOne.att
    document.querySelector('.playerOne .attack > img + span').innerHTML = playerOne.mp
    document.getElementById('playerOneEntireCard').style.backgroundColor = playerOne.backgroundColor
    var elems = document.getElementsByClassName("playerOneButtons");
    for(var i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = playerOne.buttonColor
    }
    if(playerOne.race === 'goblin'){
    } else if (playerOne.race === 'orc'){
      playerOne.changehealthMax(2)
      playerOne.heal(2)
      document.querySelector('.playerOne .health').innerHTML = playerOne.health
    } else if (playerOne.race === 'elf'){
      playerOne.mpUp(1)
      document.querySelector('.playerOne .attack > img + span').innerHTML = playerOne.mp
    } else if (playerOne.race === 'dwarf'){
      playerOne.armorUp(8)
      document.querySelector('.playerOne .armor').innerHTML = playerOne.armor
    } else if(playerOne.race === 'undead'){
      writeToConsole('welcome to the undead army')
    } else {
      alert('you forgot a race brother')
    }
    playerOne.ready = true
  }
  if (playerOne.ready === true && playerTwo.ready === true){
    gameStart()
  }
}

function playerTwoLock () {  

  if (playerTwo.name === '') {
    alert('you for got a class brother')
  }else if(lockTwo === true){
    writeToConsole(`you are already locked in player two`)
  }else {
    lockTwo = true
    document.getElementById('p2ClassSelect').setAttribute('disabled', 'disabled')
    document.getElementById('p2RaceSelect').setAttribute('disabled', 'disabled')
    document.querySelector('.playerTwo .moveOne > p').innerHTML = playerTwo.moves[0]
    document.querySelector('.playerTwo .moveTwo > p').innerHTML = playerTwo.moves[1]
    document.querySelector('.playerTwo .moveThree > p').innerHTML = playerTwo.moves[2]
    document.querySelector('.playerTwo .moveFour > p').innerHTML = playerTwo.moves[3]
    document.querySelector('.playerTwo .moveFive > p').innerHTML = playerTwo.moves[4]
    document.querySelector('.playerTwo .moveSix > p').innerHTML = playerTwo.moves[5]
    document.querySelector('.playerTwo .armor').innerHTML = playerTwo.armor
    document.querySelector('.playerTwo .health').innerHTML = playerTwo.health
    document.querySelector('.playerTwo .attack > span').innerHTML = playerTwo.att
    document.querySelector('.playerTwo .attack > img + span').innerHTML = playerTwo.mp
    document.getElementById('playerTwoEntireCard').style.backgroundColor = playerTwo.backgroundColor
    var elems = document.getElementsByClassName("playerTwoButtons");
    for(var i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = playerTwo.buttonColor
    }
    if(playerTwo.race === 'goblin'){
    } else if (playerTwo.race === 'orc'){
        playerTwo.changehealthMax(2)
        playerTwo.heal(2)
        document.querySelector('.playerTwo .health').innerHTML = playerTwo.health
    } else if (playerTwo.race === 'elf'){
        playerTwo.mpUp(1)
        document.querySelector('.playerTwo .attack > img + span').innerHTML = playerTwo.mp
    } else if (playerTwo.race === 'dwarf'){
        playerTwo.armorUp(8)
        document.querySelector('.playerTwo .armor').innerHTML = playerTwo.armor
    } else if(playerTwo.race === 'undead'){
      writeToConsole('welcome to the undead army')
    }  else {
      alert('you forgot a race brother')
    }
    playerTwo.ready = true
  }
  if (playerOne.ready === true && playerTwo.ready === true){
    gameStart()
  }
}

function playerOneReset () {
  document.getElementById('p1ClassSelect').removeAttribute('disabled')
  document.getElementById('p1RaceSelect').removeAttribute('disabled')
  document.getElementById('p1ClassSelect').selectedIndex = null
  document.getElementById('p1RaceSelect').selectedIndex = null
  document.getElementById('playerOneEntireCard').style.background = startBackground
  var elems = document.getElementsByClassName("playerOneButtons");
  for(var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = startButtonColor
  }
  resetAction(playerOne, 'action one')
  resetAction(playerOne, 'action two')
  writeToConsole('Game Reset by player one')
  gameOver()
}

function playerTwoReset () {
  document.getElementById('p2ClassSelect').removeAttribute('disabled')
  document.getElementById('p2RaceSelect').removeAttribute('disabled')
  document.getElementById('p2ClassSelect').selectedIndex = null
  document.getElementById('p2RaceSelect').selectedIndex = null
  document.getElementById('playerTwoEntireCard').style.background = startBackground
  var elems = document.getElementsByClassName("playerTwoButtons");
  for(var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = startButtonColor
  }
  resetAction(playerTwo, 'action one')
  resetAction(playerTwo, 'action two')
  writeToConsole('Game Reset by player two')
  gameOver()
}

function resetClassMoves (selected) {
  if (selected === playerOne){
    var elems = document.getElementsByClassName("playerOneMoves");
    for(var i = 0; i < elems.length; i++) {
      if (elems[i].style.backgroundColor === 'white'){
        if (i === 0){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        } else if (i === 1){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        } else if (i === 2){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        } else if (i === 3){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        } else if (i === 4){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        } else if (i === 5){
          elems[i].style.backgroundColor = playerOne.backgroundColor
        }
        
      }
    }} else if (selected === playerTwo){
      var elems = document.getElementsByClassName("playerTwoMoves");
      for(var i = 0; i < elems.length; i++) {
        if (elems[i].style.backgroundColor === 'white'){
          if (i === 0){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          } else if (i === 1){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          } else if (i === 2){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          } else if (i === 3){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          } else if (i === 4){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          } else if (i === 5){
            elems[i].style.backgroundColor = playerTwo.backgroundColor
          }
          
        }
      }}
}

function executeAbility (selected) {
  if (selected === playerTwo){
    var elems = document.getElementsByClassName("playerTwoMoves");
    for(var i = 0; i < elems.length; i++) {
      if (elems[i].style.backgroundColor === 'white'){
        if (i === 0){
          playerTwo.abilities.abilityOne(playerTwo, playerOne)
        } else if (i === 1){
          playerTwo.abilities.abilityTwo(playerTwo, playerOne)
        } else if (i === 2){
          playerTwo.abilities.abilityThree(playerTwo, playerOne)
        } else if (i === 3){
          playerTwo.abilities.abilityFour(playerTwo, playerOne)
        } else if (i === 4){
          playerTwo.abilities.abilityFive(playerTwo, playerOne)
        } else if (i === 5){
          playerTwo.abilities.abilitySix(playerTwo, playerOne)
        } else {
          return false
        }
        
      }
    } 
  } else if (selected === playerOne){
    var elems = document.getElementsByClassName("playerOneMoves");
    for(var i = 0; i < elems.length; i++) {
      if (elems[i].style.backgroundColor === 'white'){
        if (i === 0){
          playerOne.abilities.abilityOne(playerOne, playerTwo)
        } else if (i === 1){
          playerOne.abilities.abilityTwo(playerOne, playerTwo)
        } else if (i === 2){
          playerOne.abilities.abilityThree(playerOne, playerTwo)
        } else if (i === 3){
          playerOne.abilities.abilityFour(playerOne, playerTwo)
        } else if (i === 4){
          playerOne.abilities.abilityFive(playerOne, playerTwo)
        } else if (i === 5){
          playerOne.abilities.abilitySix(playerOne, playerTwo)
        } else return false
        
      }
    }
  }
}

function hasMove (selected) {
  if (selected === playerTwo){
    var elems = document.getElementsByClassName("playerTwoMoves");
    for(var i = 0; i < elems.length; i++) {
      if (elems[i].style.backgroundColor === 'white'){
        if (i === 0){
          return [selected , 1]
        } else if (i === 1){
          return [selected, 2]
        } else if (i === 2){
          return [selected, 3]
        } else if (i === 3){
          return [selected, 4]
        } else if (i === 4){
          return [selected, 5]
        } else if (i === 5){
          return [selected, 6]
        } else {
          return false
        }
        
      }
    } 
  } else if (selected === playerOne){
    var elems = document.getElementsByClassName("playerOneMoves");
    for(var i = 0; i < elems.length; i++) {
      if (elems[i].style.backgroundColor === 'white'){
        if (i === 0){
          return [selected, 1]
        } else if (i === 1){
          return [selected, 2]
        } else if (i === 2){
          return [selected, 3]
        } else if (i === 3){
          return [selected, 4]
        } else if (i === 4){
          return [selected, 5]
        } else if (i === 5){
          return [selected, 6]
        } else return false
        
      }
    }
  }
}

function whatIsReady (player){
  if (player === playerOne){
    if((document.getElementById('playerOneActionOneCheck').checked === true && ( playerOne.actionOne === 'crit' ||playerOne.actionOne === 'action point'))&&(document.getElementById('playerOneActionTwoCheck').checked === true && ( playerOne.actionTwo === 'crit' ||playerOne.actionTwo === 'action point'))){
      return 'both';
    } else if (document.getElementById('playerOneActionOneCheck').checked === true && ( playerOne.actionOne === 'crit' ||playerOne.actionOne === 'action point')) {
        return 'action one';
    } else if (document.getElementById('playerOneActionTwoCheck').checked === true && ( playerOne.actionTwo === 'crit' ||playerOne.actionTwo === 'action point')){
        return 'action two';
    } else {
      return 'none';
    }
  }else if (player === playerTwo){
    if((document.getElementById('playerTwoActionOneCheck').checked === true && ( playerTwo.actionOne === 'crit' ||playerTwo.actionOne === 'action point')) 
    &&(document.getElementById('playerTwoActionTwoCheck').checked === true && ( playerTwo.actionTwo === 'crit' ||playerTwo.actionTwo === 'action point'))){
      return 'both';
    } else if (document.getElementById('playerTwoActionOneCheck').checked === true && ( playerTwo.actionOne === 'crit' ||playerTwo.actionOne === 'action point')) {
        return 'action one';
    } else if (document.getElementById('playerTwoActionTwoCheck').checked === true && ( playerTwo.actionTwo === 'crit' ||playerTwo.actionTwo === 'action point')){
        return 'action two';
    } else {
      return 'none';
    }
  }

}
/*********************************************************************
 * Dice
 * ***********************************************/
function roll (roller, dice) {
  if(rolls === 2 || rolls === 1){
    rolls = rolls - 1
    if (dice === 'classDice') {
      classRoll = Math.ceil(Math.random()*6)
      writeToConsole(`${roller.name} rolled ${classRoll}`)
      roller.updateClassDice(classRoll)
      if (roller === playerOne) {
        var elems = document.getElementsByClassName("playerOneMoves");
        for(var i = 0; i < elems.length; i++) {
          elems[i].style.backgroundColor = playerOne.backgroundColor
        }
        if (classRoll === 1) {
          document.getElementById('playerOneMoveOne').style.backgroundColor = 'white'
        } else if (classRoll === 2) {
          document.getElementById('playerOneMoveTwo').style.backgroundColor = 'white'
        } else if (classRoll === 3) {
          document.getElementById('playerOneMoveThree').style.backgroundColor = 'white'
        } else if (classRoll === 4) {
          document.getElementById('playerOneMoveFour').style.backgroundColor = 'white'
        } else if (classRoll === 5) {
          document.getElementById('playerOneMoveFive').style.backgroundColor = 'white'
        } else if (classRoll === 6) {
          document.getElementById('playerOneMoveSix').style.backgroundColor = 'white'
        }
      } else if (roller === playerTwo) {
      var elems = document.getElementsByClassName("playerTwoMoves");
      for(var i = 0; i < elems.length; i++) {
        elems[i].style.backgroundColor = playerTwo.backgroundColor
      }
      if (classRoll === 1) {
        document.getElementById('playerTwoMoveOne').style.backgroundColor = 'white'
      } else if (classRoll === 2) {
        document.getElementById('playerTwoMoveTwo').style.backgroundColor = 'white'
      } else if (classRoll === 3) {
        document.getElementById('playerTwoMoveThree').style.backgroundColor = 'white'
      } else if (classRoll === 4) {
        document.getElementById('playerTwoMoveFour').style.backgroundColor = 'white'
      } else if (classRoll === 5) {
        document.getElementById('playerTwoMoveFive').style.backgroundColor = 'white'
      } else if (classRoll === 6) {
        document.getElementById('playerTwoMoveSix').style.backgroundColor = 'white'
      }
      
      }
    } else if (dice === 'actionOneDice') {
      actionRoll = Math.ceil(Math.random()*20)
      writeToConsole(`the ${roller.name} rolled a ${actionRoll}`)
      if (roller === playerOne) {
        if (actionRoll === 1 && roller.race !== 'goblin') {
          document.getElementById('playerOneActionOne').innerHTML = 'Bust'
          roller.updateActionOne('bust')
        } else if ( actionRoll === 20) {
          document.getElementById('playerOneActionOne').innerHTML = 'Crit'
          roller.updateActionOne('crit')
        } else if ( actionRoll < 20 && actionRoll > 4) {
          document.getElementById('playerOneActionOne').innerHTML = 'Action Point'
          roller.updateActionOne('action point')
        } else if ( actionRoll === 3 || actionRoll === 4) {
          document.getElementById('playerOneBuy').disabled = false
          document.getElementById('playerOneActionOne').innerHTML = 'Buy'
          roller.updateActionOne('buy')
        } else if ( actionRoll === 2) {
          document.getElementById('playerOneActionOne').innerHTML = 'React'
          roller.updateActionOne('react')
          roller.changeReact(true)
        } else if ( actionRoll === 1 && roller.race === 'goblin') {
          document.getElementById('playerOneActionOne').innerHTML = 'Crit'
          roller.updateActionOne('crit')
        } else {
          writeToConsole("we ran into an error on player one action dice")
        }
      } else if (roller === playerTwo) {
        if (actionRoll === 1 && roller.race !== 'goblin') {
          document.getElementById('playerTwoActionOne').innerHTML = 'Bust'
          roller.updateActionOne('bust')
        } else if ( actionRoll === 20) {
          document.getElementById('playerTwoActionOne').innerHTML = 'Crit'
          roller.updateActionOne('crit')
        } else if ( actionRoll < 20 && actionRoll > 4) {
          document.getElementById('playerTwoActionOne').innerHTML = 'Action Point'
          roller.updateActionOne('action point')
        } else if ( actionRoll === 3 || actionRoll === 4) {
          document.getElementById('playerTwoBuy').disabled = false
          document.getElementById('playerTwoActionOne').innerHTML = 'Buy'
          roller.updateActionOne('buy')
        } else if ( actionRoll === 2) {
          document.getElementById('playerTwoActionOne').innerHTML = 'React'
          roller.updateActionOne('react')
        } else if ( actionRoll === 1 && roller.race === 'goblin') {
          document.getElementById('playerTwoActionOne').innerHTML = 'Crit'
          roller.updateActionOne('crit')
        } else {
          writeToConsole("we ran into an error on player Two action dice")
        }
      }
    } else if (dice === 'actionTwoDice') {
      actionRoll = Math.ceil(Math.random()*20)
      roller.updateActionTwo(actionRoll)
      writeToConsole(`the ${roller.name} rolled a ${actionRoll}`)
      if (roller === playerOne) {
        if (actionRoll === 1 && roller.race !== 'goblin') {
          document.getElementById('playerOneActionTwo').innerHTML = 'Bust'
          roller.updateActionTwo('bust')
        } else if ( actionRoll === 20) {
          document.getElementById('playerOneActionTwo').innerHTML = 'Crit'
          roller.updateActionTwo('crit')
        } else if ( actionRoll < 20 && actionRoll > 4) {
          document.getElementById('playerOneActionTwo').innerHTML = 'Action Point'
          roller.updateActionTwo('action point')
        } else if ( actionRoll === 3 || actionRoll === 4) {
          document.getElementById('playerOneBuy').disabled = false
          document.getElementById('playerOneActionTwo').innerHTML = 'Buy'
          roller.updateActionTwo('buy')
        } else if ( actionRoll === 2) {
          document.getElementById('playerOneActionTwo').innerHTML = 'React'
          roller.updateActionTwo('react')
        } else if ( actionRoll === 1 && roller.race === 'goblin') {
          document.getElementById('playerOneActionTwo').innerHTML = 'Crit'
          roller.updateActionTwo('crit')
        } else {
          writeToConsole("we ran into an error on player one action dice")
        }
      } else if (roller === playerTwo) {
        if (actionRoll === 1 && roller.race !== 'goblin') {
          document.getElementById('playerTwoActionTwo').innerHTML = 'Bust'
          roller.updateActionTwo('bust')
        } else if ( actionRoll === 20) {
          document.getElementById('playerTwoActionTwo').innerHTML = 'Crit'
          roller.updateActionTwo('crit')
        } else if ( actionRoll < 20 && actionRoll > 4) {
          document.getElementById('playerTwoActionTwo').innerHTML = 'Action Point'
          roller.updateActionTwo('action point')
        } else if ( actionRoll === 3 || actionRoll === 4) {
          document.getElementById('playerTwoBuy').disabled = false
          document.getElementById('playerTwoActionTwo').innerHTML = 'Buy'
          roller.updateActionTwo('buy')
        } else if ( actionRoll === 2) {
          document.getElementById('playerTwoActionTwo').innerHTML = 'React'
          roller.updateActionTwo('react')
        } else if ( actionRoll === 1 && roller.race === 'goblin') {
          document.getElementById('playerTwoActionTwo').innerHTML = 'Crit'
          roller.updateActionTwo('crit')
        } else {
          writeToConsole("we ran into an error on player Two action dice")
        }
      }
    }
  } else {
    writeToConsole('you are out of rolls')
  }
}

/*********************************************************************
 * Buttons
 * ***********************************************/
let tarred = {
  name: '',
  move: 0,
  ready: false
}

function endingDamage(ender , other){
  rolls = 2
  uses = 1
  if(tarred['ready'] === true && tarred['name'] === ender){
    let selected = tarred['name']
    let i = tarred['move']
    if (selected === playerTwo){
          if (i === 1){
            playerTwo.abilities.abilityOne(playerTwo, playerOne)
          } else if (i === 2){
            playerTwo.abilities.abilityTwo(playerTwo, playerOne)
          } else if (i === 3){
            playerTwo.abilities.abilityThree(playerTwo, playerOne)
          } else if (i === 4){
            playerTwo.abilities.abilityFour(playerTwo, playerOne)
          } else if (i === 5){
            playerTwo.abilities.abilityFive(playerTwo, playerOne)
          } else if (i === 6){
            playerTwo.abilities.abilitySix(playerTwo, playerOne)
          } else {
            return false
          }
    } else if (selected === playerOne){
          if (i === 1){
            playerOne.abilities.abilityOne(playerOne, playerTwo)
          } else if (i === 2){
            playerOne.abilities.abilityTwo(playerOne, playerTwo)
          } else if (i === 3){
            playerOne.abilities.abilityThree(playerOne, playerTwo)
          } else if (i === 4){
            playerOne.abilities.abilityFour(playerOne, playerTwo)
          } else if (i === 5){
            playerOne.abilities.abilityFive(playerOne, playerTwo)
          } else if (i === 6){
            playerOne.abilities.abilitySix(playerOne, playerTwo)
          } else return false
    }
    tarred['ready'] = false
    tarred['name'] = ''
    tarred['move'] = 0
  } else if(tarred['ready'] === false && tarred['name'] != ''){
      tarred['ready'] = true
  }
  if (ender.bleed > 1){
    attack(ender, other, 'specific', 1)
    ender.updateBleed(1)
  } else if (ender.bleed > 0){
    attack(ender, other, 'specific', 1)
    ender.updateBleed( 0)
  }
  if (other.double === true){
    attack(other, ender, 'basic')
    other.updateDouble(false)
    writeToConsole('secondd strike landed')
  }
  if (other.knockedDown === true){
    other.updateKnockedDown(false)
    rolls = 1
    writeToConsole('one roll was taken when knocked down')
  }
  if (ender.nuke === 2){
    if(ender.att > ender.mp) {
      attack(ender, other, 'modified', ender.att)
    } else{
      attack(ender, other, 'modified', ender.mp)
    }
    ender.updateNuke(0)
    writeToConsole('nuke has landed')
  }
  if (other.nuke === 1){
    if(other.att > other.mp) {
      attack(other, ender, 'modified', other.att)
    } else{
      attack(other, ender, 'modified', other.mp)
    }
    other.updateNuke(0)
    writeToConsole('nuke has landed')
  }

  if (ender.missiles > 3){
    attack(ender, other, 'specific', 1)
    ender.updateMissiles(3)
  } else if (ender.missiles > 2){
    attack(ender, other, 'specific', 1)
    ender.updateMissiles(2)
  }else if (ender.missiles > 1){
    attack(ender, other, 'specific', 1)
    ender.updateMissiles(1)
  }else if (ender.missiles > 0){
    attack(ender, other, 'specific', 1)
    ender.updateMissiles(0)
  }

  if (other.daze === true){
    other.updateDaze(false)
    uses = 0
    writeToConsole('can not attack or use ability due to being dazed')
  }

  if (ender.burn > 1){
    attack(ender, other, 'basic')
    ender.updateBurn(1)
  } else if (ender.burn > 0){
    attack(ender, other, 'basic')
    ender.updateBurn(0)
  }

  if (ender.totem === 'fire'){
    attack(ender, other, 'specific', 1 )
    writeToConsole('fire totem delt one dmg')
  } else if (ender.totem === 'water'){
    ender.heal(1)
    writeToConsole('water totem healed for one')
  }

  if (ender.rapidFire > 1){
    attack(ender, other, 'basic')
    ender.updateRapidFire(1)
  } else if (ender.rapidFire > 0){
    attack(ender, other, 'basic')
    ender.updateRapidFire(0)
  }

  if (other.icy > 1){
    other.updateIcy(1)
  } else if (other.icy > 0){
    other.updateIcy(0)
  }

  if (other.raisedMP > 1){
    other.updateRaisedMP(1)
  } else if (other.raisedMP > 0){
    other.updateRaisedMP(0)
    other.mpUp(-2)
  }
  
  if (other.shieldsUp === true){
    writeToConsole('shields down')
    other.updateShieldsUp(false)
    other.armorUp(-2)
  }

  if (other.ritual > 2){
    other.updateRitual(2)
  }else if (other.ritual > 1){
    other.updateRitual(1)
  } else if (other.ritual > 0){
      other.updateRitual(0)
      other.attackUp(-2)
      other.mpUp(-2)
  }
  if (ender.suppression > 1){
    ender.updateSuppression(1)
  } else if (ender.suppression > 0){
      ender.updateSuppression(0)
      other.attackUp(2)
      other.mpUp(2)
  }

  if(ender.form === 'bear'){
    ender.armorUp(2)
  }
  updateStats(ender)
  updateStats(other)
}

 function endTurn (target) {
  if (liveGame === false) {
    alert('the game has not started')
  } else {
    if (target === playerOne) {
      playerOne.play = false
      playerTwo.play = true
      var elems = document.getElementsByClassName("playerTwoButtons");
      for(var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
      }
      document.querySelector('.p1turnDisplay').innerHTML = ''
      document.querySelector('.p2turnDisplay').innerHTML = 'Your turn'
      var elems = document.getElementsByClassName("playerOneButtons");
      for(var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
      }
      playerOne.updateTurn()
      endingDamage(playerOne, playerTwo)
    } else if (target === playerTwo) {
      playerTwo.play = false
      playerOne.play = true
      var elems = document.getElementsByClassName("playerOneButtons");
      for(var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
      }
      document.querySelector('.p2turnDisplay').innerHTML = ''
      document.querySelector('.p1turnDisplay').innerHTML = 'Your turn'
      var elems = document.getElementsByClassName("playerTwoButtons");
      for(var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
      }
      playerTwo.updateTurn()
      endingDamage(playerTwo, playerOne)
    }
    // rolls = 2
    // uses = 1
  }
}

function buy (buyer) {
  item = Math.ceil(Math.random()*8)
  if (buyer.actionOne === 'buy' || buyer.actionTwo === 'buy') {
    if (buyer === playerOne && buyer.actionOne === 'buy') {
      document.getElementById('playerOneActionOne').innerHTML = 'Action'
      buyer.updateActionOne('')
      document.getElementById('playerOneBuy').disabled = true
    } else if (buyer === playerOne && buyer.actionTwo === 'buy') {
      document.getElementById('playerOneActionTwo').innerHTML = 'Action'
      buyer.updateActionTwo('')
      document.getElementById('playerOneBuy').disabled = true
    } else if (buyer === playerTwo && buyer.actionOne === 'buy') {
      document.getElementById('playerTwoActionOne').innerHTML = 'Action'
      buyer.updateActionOne('')
      document.getElementById('playerTwoBuy').disabled = true
    } else if (buyer === playerTwo && buyer.actionTwo === 'buy') {
      document.getElementById('playerTwoActionTwo').innerHTML = 'Action'
      buyer.updateActionTwo('')
    }
    if (item === 1 || item === 5 || item === 6) {
      buyer.heal(4)
      if (buyer === playerOne) {
        document.querySelector('.playerOne  .health').innerHTML = buyer.health
      } else {
        document.querySelector('.playerTwo  .health').innerHTML = buyer.health
      }
      writeToConsole(` the ${buyer.name} bought a potion`)
    } else if (item === 2 || item == 7 || item === 8) {
      buyer.armorUp(4)
      if (buyer === playerOne) {
        document.querySelector('.playerOne  .armor').innerHTML = buyer.armor
      } else {
        document.querySelector('.playerTwo  .armor').innerHTML = buyer.armor
      }
      writeToConsole(` the ${buyer.name} bought armor`)
    } else if (item === 3) {
      if (buyer.att > buyer.mp) {
        buyer.attackUp(1)
        if (buyer === playerOne) {
          document.querySelector('#playerOneAttack > span').innerHTML = buyer.att
        } else {
          document.querySelector('#playerTwoAttack > span').innerHTML = buyer.att
        }
        writeToConsole(` the ${buyer.name} bought a sword`)
      }else {
        buyer.mpUp(1)
        if (buyer === playerOne) {
          document.querySelector('#playerOneAttack > img + span').innerHTML = buyer.mp
        } else {
          document.querySelector('#playerTwoAttack > img +span').innerHTML = buyer.mp
        }
        writeToConsole(` the ${buyer.name} bought a staff`)
      }
    } else if (item === 4) {
      buyer.changeCloak(true)
      writeToConsole(`${buyer.cloak}`)
      if (buyer === playerOne) {
        document.getElementById('playerOneInventory').innerHTML = 'Cloak'
      } else {
        document.getElementById('playerTwoInventory').innerHTML = 'Cloak'
      }
      writeToConsole(` the ${buyer.name} bought a cloak ${buyer.cloak}`)
    }
  } else {
    writeToConsole(`You cant buy right now`)
  }
}

function checkUndead(player){
  if (player.race === 'undead'){
    player.heal(1)
    writeToConsole(`the ${player.name} leeched 1 health`)
  }
}

function useAttack(attacker, target, type){
  if(attacker.invisible > 0){
    attacker.updateInvis( 0)
    writeToConsole('stealth has been broken by attacking')
  }
  if(target.invisible > 0){
    writeToConsole('can not attack what you do not see')
  } else if (whatIsReady(attacker) != 'none' && uses > 0) {
    uses = uses - 1
    if (target.cloak === true) {
      target.changeCloak(false)
      if (target === playerOne) {
        document.getElementById('playerOneInventory').innerHTML = ''
      } else {
        document.getElementById('playerTwoInventory').innerHTML = ''
      }
      writeToConsole(`the attacked was blocked by the ${target.name}'s cloak`)
      useAction(attacker, whatIsReady(attacker))
    
    } else if (target.actionOne === 'react'){
        resetAction(target, 'action one')
        useAction(attacker, whatIsReady(attacker))
        writeToConsole(`the attacked was blocked by the ${target.name}'s react`)
    } else if (target.actionTwo === 'react') {
        resetAction(target, 'action two')
        useAction(attacker, whatIsReady(attacker))
        writeToConsole(`the attacked was blocked by the ${target.name}'s react`)
    } else if (target.icy > 0 && (attacker.name != 'Mage' || attacker.name != 'Archer' || attacker.name != 'Druid')) {
        useAction(attacker, whatIsReady(attacker))
        writeToConsole(`you have attacked an icy fow and fallen ${attacker.name}`)
        attacker.updateKnockedDown(true)
    } else if (target.earthShield === true && (attacker.name != 'Mage' || attacker.name != 'Archer' || attacker.name != 'Druid')) {
        useAction(attacker, whatIsReady(attacker))
        writeToConsole(`you have attacked ${attacker.name}'s earth shield and damage has been reduced`)
        let holder = attacker.att
        attacker.resetAttack(Math.ceil(holder/2))
        attack(attacker, target, 'basic')
        attacker.resetAttack(holder)
        target.updateEarthShield(false)
        attacker.updateArcaneFocus(false)
    } else if (target.earthShield === true && (attacker.name === 'Mage' || attacker.name === 'Archer' || attacker.name === 'Druid')) {
        useAction(attacker, whatIsReady(attacker))
        writeToConsole(`you have attacked ${attacker.name}'s earth shield and damage has been negated`)
        target.updateEarthShield(false)
        attacker.updateArcaneFocus(false)
    } else {
        if (((whatIsReady(attacker) === 'action one' && attacker.actionOne === 'crit') || (whatIsReady(attacker) === 'action two' && attacker.actionTwo === 'crit')) ){
          attack(attacker, target, 'crit')
          useAction(attacker, whatIsReady(attacker))
          attacker.updateArcaneFocus(false)
        } else {
          attack(attacker, target, 'basic')
          useAction(attacker, whatIsReady(attacker))
          attacker.updateArcaneFocus(false)
        }
    }
  } else {
    writeToConsole('cannot attack (check if action selected)')
  }
}

function attack(attacker, target, type, mod=0){
  if (type === 'basic') {
    if (attacker.mp > attacker.att){
      dmg = attacker.mp * attacker.multi
      if(target.deflect === true){
        target.updateLastAttack(dmg)
        attacker.attacked(Math.ceil(dmg/2))
        writeToConsole(`the ${target.name} deflected returning ${Math.ceil(dmg/2)}`)
        dmg = 0
        target.updateDeflect(false)
        attacker.resetMulti()
      }
      attacker.updateLastAttack(dmg)
      target.attacked(dmg)
    }else {
      dmg = attacker.att * attacker.multi
      if(target.deflect === true){
        target.updateLastAttack(dmg)
        attacker.attacked(Math.ceil(dmg/2))
        writeToConsole(`the ${target.name} deflected returning ${Math.ceil(dmg/2)}`)
        dmg = 0
        target.updateDeflect(false)
        attacker.resetMulti()
      }
      attacker.updateLastAttack(dmg)
      target.attacked(dmg)
    }
    attacker.resetMulti()
    checkUndead(attacker)
  } else if (type === 'modified') {
      if(attacker.mp > attacker.att){
        let holder = attacker.mp
        attacker.resetMP(holder + mod)
        attack(attacker, target, 'basic')
        attacker.resetMP(holder)
      }else{
        let holder = attacker.att
        attacker.resetAttack(holder + mod)
        attack(attacker, target, 'basic')
        attacker.resetAttack(holder)
    }
  } else if (type === 'crit'){
    if (attacker.mp > attacker.att){
      dmg = (attacker.mp * attacker.multi*2)
      if(target.deflect === true){
        attacker.attacked(Math.ceil(dmg/2))
        dmg = 0
        target.updateDeflect(false)
      }
      attacker.updateLastAttack(dmg)
      target.attacked(dmg)
    }else {
      dmg = (attacker.att * attacker.multi)*2
      if(target.deflect === true){
        attacker.attacked(Math.ceil(dmg/2))
        dmg = 0
        target.updateDeflect(false)
      }
      attacker.updateLastAttack(dmg)
      target.attacked(dmg)
    }
    checkUndead(attacker)
    attacker.resetMulti()
  } else if (type === 'specific'){
      dmg = mod
      if(target.deflect === true){
        dmg = mod * attacker.multi
        target.updateLastAttack(dmg)
        attacker.attacked(Math.ceil(dmg/2))
        dmg = 0
        target.updateDeflect(false)
      }
      attacker.updateLastAttack(dmg)
      target.attacked(dmg, 'specific')
  }

  attacker.updateArcaneFocus(false)
    updateStats(attacker)
    updateStats(target)
  
}


function abilityType(player , num){
  let ability
  if (num === 1){
    ability = player.abilities.abilityOne
  } else if (num === 2){
    ability = player.abilities.abilityTwo
  } else if (num === 3){
    ability = player.abilities.abilityThree
  } else if (num === 4){
    ability = player.abilities.abilityFour
  } else if (num === 5){
    ability = player.abilities.abilityFive
  } else if (num === 6){
    ability = player.abilities.abilitySix
  }
  if (ability === archerDict['abilities']['abilityFour'] || ability === mageDict['abilities']['abilityOne'] || ability === mageDict['abilities']['abilityThree'] 
  || ability === shamanDict['abilities']['abilityOne'] || ability === druidDict['abilities']['abilitySix']){
    return 'ranged'
  } else if (ability === archerDict['abilities']['abilityFive'] || ability === warriorDict['abilities']['abilityOne'] || ability === warriorDict['abilities']['abilityTwo'] || ability === shamanDict['abilities']['abilityFive']
    ||ability === rogueDict['abilities']['abilityOne'] || ability === rogueDict['abilities']['abilityThree'] || ability === rogueDict['abilities']['abilityFive']){
    return 'melee'
  } else if (ability === rogueDict['abilities']['abilitySix']){
    return 'steal'
  } else if (ability === archerDict['abilities']['abilityTwo']){
    return 'negate'
  } else if (ability === archerDict['abilities']['abilityThree'] || ability === shamanDict['abilities']['abilityFour']){
    return 'knocked down'
  } else if (ability === mageDict['abilities']['abilityFive']){
    return 'pick'
  } else if (ability === shamanDict['abilities']['abilitySix']){
    return 'totem'
  } else if (ability === shamanDict['abilities']['abilityTwo'] || ability === druidDict['abilities']['abilityThree']){
    return 'heal'
  }  else {
    return 'buff'
  }
}

function resetOldStatus(who){
  if ( who.totem === 'water') {
    who.updateTotem('')
  } else if ( who.totem === 'wind') {
    who.updateTotem('')
    who.mpUp(-1)
  }else if ( who.totem === 'earth') {
    who.updateTotem('')
    who.attackUp(-1)
  } else if ( who.totem === 'fire') {
    who.updateTotem('')
  }
  if (who.stance === 'offense') {
    who.updateStance('')
    who.resetDefense()
    who.attackUp(-2)
  } 
  if (who.form === 'bear') {
    who.updateForm('')
  } else if (who.form === 'wolf') {
    who.updateForm('')
    who.attackUp(-2)
  }
}


function useAbility(user, target){
  if(user.invisible > 0){
    user.updateInvis(0)
    writeToConsole('stealth has been broken by attacking')
  }
  if(target.invisible > 0 && (abilityType(hasMove(user)[0], hasMove(user)[1]) === 'ranged' || abilityType(hasMove(user)[0], hasMove(user)[1]) === 'melee')){
    writeToConsole('can not attack what you do not see')
  } else if (whatIsReady(user) != 'none' && uses > 0 && (abilityType(hasMove(user)[0], hasMove(user)[1]) === 'ranged' || abilityType(hasMove(user)[0], hasMove(user)[1]) === 'melee') ) {
    uses = uses - 1
    if (target.icy > 0 && abilityType(hasMove(user)[0], hasMove(user)[1]) === 'melee') {
      resetClassMoves(user)
      useAction(user, whatIsReady(user))
      resetOldStatus(user)
      writeToConsole(`you have attacked an icy foe and fallen ${user.name}`)
      attacker.updateKnockedDown(true)
    } else if (target.cloak === true) {
      target.changeCloak(false)
      if (target === playerOne) {
        document.getElementById('playerOneInventory').innerHTML = ''
      } else {
        document.getElementById('playerTwoInventory').innerHTML = ''
      }
      writeToConsole(`the ability was blocked by the ${target.name}'s cloak`)
      resetClassMoves(user)
      useAction(user, whatIsReady(user))
      resetOldStatus(user)
    
    } else if (target.actionOne === 'react'){
        resetClassMoves(user)
        resetAction(target, 'action one')
        useAction(user, whatIsReady(user))
        resetOldStatus(user)
        writeToConsole(`the ability was blocked by the ${target.name}'s react`)
    } else if (target.actionTwo === 'react') {
        resetClassMoves(user)
        resetAction(target, 'action two')
        useAction(user, whatIsReady(user))
        resetOldStatus(user)
        writeToConsole(`the ability was blocked by the ${target.name}'s react`)
    } else if(target.earthShield === true){
        if(abilityType(hasMove(user)[0], hasMove(user)[1]) === 'ranged'){
          resetClassMoves(user)
          useAction(user, whatIsReady(user))
          resetOldStatus(user)
          writeToConsole(`you have attacked ${user.name}'s earth shield and ability has been negated`)
          target.updateEarthShield(false)
        }else if(abilityType(hasMove(user)[0], hasMove(user)[1]) === 'melee'){
          writeToConsole(`you have attacked ${user.name}'s earth shield and damage has been reduced`)
          let holder = user.att
          if (((whatIsReady(user) === 'action one' && user.actionOne === 'crit') || (whatIsReady(user) === 'action two' && user.actionTwo === 'crit'))){
            user.resetAttack(holder)
            executeAbility(user)
            user.resetAttack(holder)
            resetClassMoves(user)
            useAction(user, whatIsReady(user))
            resetOldStatus(user)
            target.updateEarthShield(false)
          } else{ 
            user.resetAttack(Math.ceil(holder/2))
            executeAbility(user)
            user.resetAttack(holder)
            resetClassMoves(user)
            useAction(user, whatIsReady(user))
            resetOldStatus(user)
            target.updateEarthShield(false)
          }

        }
    } else if (target.tarred === true){
        resetOldStatus(user)  
        useAction(user, whatIsReady(user))
        writeToConsole(`the ${target.name}'s tarr trap has been set, your ability will go off next turn`)
        tarred['name'] = hasMove(user)[0]
        tarred['move'] = hasMove(user)[1]
        resetClassMoves(user)
        target.updateTarred(false)
    } else {
        if(whatIsReady(user) === 'both' &&  (hasMove(user)[1] === 1 && user.name === 'Mage')){
          useAction(user, whatIsReady(user))
          useAction(user, whatIsReady(user))
          resetOldStatus(user)
          self.updateNuke(2)
          writeToConsole('nuke quickly incoming')
          resetClassMoves(user)

        } else if (((whatIsReady(user) === 'action one' && user.actionOne === 'crit') || (whatIsReady(user) === 'action two' && user.actionTwo === 'crit'))){
            writeToConsole('thats a cit')
            resetOldStatus(user)
            user.updateMulti(2)
            executeAbility(user)
            if(((hasMove(user)[1] !== 4 && user.name !== 'Archer')||(hasMove(user)[1] !== 1 && user.name !== 'Shaman'))){
              user.resetMulti()
            }
            useAction(user, whatIsReady(user))
            resetClassMoves(user)
        } else {
            resetOldStatus(user)
            executeAbility(user)
            useAction(user, whatIsReady(user))
            resetClassMoves(user)
        }
    }
  } else if (whatIsReady(user) != 'none' && uses > 0 && abilityType(hasMove(user)[0], hasMove(user)[1]) === 'heal'){
    uses = uses - 1
      if (((whatIsReady(user) === 'action one' && user.actionOne === 'crit') || (whatIsReady(user) === 'action two' && user.actionTwo === 'crit'))){
        writeToConsole('thats a crit heal')
        resetOldStatus(user)
        user.updateMulti(2)
        executeAbility(user)
        user.resetMulti()
        useAction(user, whatIsReady(user))
        resetClassMoves(user)
    } else {
        resetOldStatus(user)
        executeAbility(user)
        useAction(user, whatIsReady(user))
        resetClassMoves(user)
    }
  } else {
      if (user.upgrade === true && (hasMove(user)[1] === 6 && user.name === 'Archer')){
        uses = uses - 1
        if(whatIsReady(user) === 'both'){
          executeAbility(user)
          useAction(user, whatIsReady(user))
          useAction(user, whatIsReady(user))
          resetClassMoves(user)
        }else {
          writeToConsole('need more action points to upgrade')
        }
      } else if(hasMove(user)[1] === 4 && user.name === 'Warrior'||hasMove(user)[1] === 1 && user.name === 'Druid'|| hasMove(user)[1] === 2 && user.name === 'Druid'){
          resetOldStatus(user)
          executeAbility(user)
          useAction(user, whatIsReady(user))
          resetClassMoves(user)
      } else {
          uses = uses - 1
          resetOldStatus(user)
          executeAbility(user)
          useAction(user, whatIsReady(user))
          resetClassMoves(user)
      }

  }
  user.updateArcaneFocus(false)
  updateStats(user)
  updateStats(target)
}

/*********************************************************************
 * Status checks and changes
 * ***********************************************/
 function updateStats (player){
  if (player === playerOne) {
  document.querySelector('.playerOne .armor').innerHTML = player.armor
  document.querySelector('.playerOne .health').innerHTML = player.health
  document.querySelector('.playerOne .attack > span').innerHTML = player.att
  document.querySelector('.playerOne .attack > img + span').innerHTML = player.mp
  // document.querySelector('.playerOne #playerOneCloak').innerHTML = player.cloak
  // document.querySelector('.playerOne #playerOneReact').innerHTML = player.react
  // document.querySelector('.playerOne #playerOneActionOneSpan').innerHTML = player.actionOne
  // document.querySelector('.playerOne #playerOneActionTwoSpan').innerHTML = player.actionTwo
  } else if (player === playerTwo) {
    document.querySelector('.playerTwo .armor').innerHTML = player.armor
    document.querySelector('.playerTwo .health').innerHTML = player.health
    document.querySelector('.playerTwo .attack > span').innerHTML = player.att
    document.querySelector('.playerTwo .attack > img + span').innerHTML = player.mp
    // document.querySelector('.playerOne #playerTwoCloak').innerHTML = player.cloak
    // document.querySelector('.playerOne #playerTwoReact').innerHTML = player.react
    // document.querySelector('.playerOne #playerTwoActionOneSpan').innerHTML = player.actionOne
    // document.querySelector('.playerOne #playerTwoActionTwoSpan').innerHTML = player.actionTwo
    }
}

function useAction(player, action){
  if (action === 'none'){
    writeToConsole("can not preform")
  } else if (action === 'both' || action === 'action one'){
      resetAction(player, 'action one')
  } else if (action === 'action two'){
      resetAction(player, 'action two')
  }
}

function resetAction(player, action) {
  if (player === playerOne ){
      if(action === 'action one'){
        document.getElementById('playerOneActionOne').innerHTML = 'Action'
        playerOne.updateActionOne('')
    } else if (action === 'action two'){
        document.getElementById('playerOneActionTwo').innerHTML = 'Action'
        playerOne.updateActionTwo('')
    }
  } else if (player === playerTwo ){
      if(action === 'action one'){
        document.getElementById('playerTwoActionOne').innerHTML = 'Action'
        playerTwo.updateActionOne('')
    } else if (action === 'action two'){
        document.getElementById('playerTwoActionTwo').innerHTML = 'Action'
        playerTwo.updateActionTwo('')
    }
  } else {
    writeToConsole(`failed to reset ${player.name}'s ${action}`)
  }
}
/*********************************************************************
 * Game status
 * ***********************************************/

let liveGame = false;

function gameOver() {
  liveGame = false
  var playelems = document.getElementsByClassName("playerOneButtons");
  for(var i = 0; i < playelems.length; i++) {
    playelems[i].disabled = true;
  }
  var elems = document.getElementsByClassName("playerTwoButtons");
  for(var i = 0; i < elems.length; i++) {
    elems[i].disabled = true;
  }
  playerOne.resetTurn()
  playerTwo.resetTurn()
}

function gameStart () {
  if (playerOne.speed < playerTwo.speed) {
    playerOne.play = true
    document.querySelector('.p2turnDisplay').innerHTML = ''
    document.querySelector('.p1turnDisplay').innerHTML = 'Your turn'
    var playelems = document.getElementsByClassName("playerOneButtons");
    for(var i = 0; i < playelems.length; i++) {
      playelems[i].disabled = false;
    }
    var elems = document.getElementsByClassName("playerTwoButtons");
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  } else {
    playerTwo.play = true
    document.querySelector('.p1turnDisplay').innerHTML = ''
    document.querySelector('.p2turnDisplay').innerHTML = 'Your turn'
    var playelems = document.getElementsByClassName("playerTwoButtons");
    for(var i = 0; i < playelems.length; i++) {
      playelems[i].disabled = false;
    }
    var elems = document.getElementsByClassName("playerOneButtons");
    for(var i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  }
  liveGame = true

}

/*********************************************************************
 * Console
 * ***********************************************/

function writeToConsole (words){
  document.getElementById('consoleContent').innerHTML += (words + "<br/>")
}