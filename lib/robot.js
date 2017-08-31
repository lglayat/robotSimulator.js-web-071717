'use strict';

class Robot {
  // implement your solution here!
  constructor(){
    this.bearing = "north"
    this.coordinates = [0,0]
  }

  orient(direction){
    let arr = ['north','east','west','south']
    if (arr.includes(direction)){
      this.bearing = direction
    } else {
        throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }

  }

  at(x,y){
    this.coordinates = [x,y]
  }

  advance(){
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch(this.bearing){
      case 'north':
        this.coordinates = [x,y+1]
        break;
      case 'east':
        this.coordinates = [x+1,y]
        break;
      case 'south':
        this.coordinates = [x,y-1]
        break;
      case 'west':
        this.coordinates = [x-1,y]
        break;
    }
  }

  instructions(command){
    let arr = []
    for(let i in command){
      switch(command[i]){
        case 'A':
          arr.push("advance")
          break;
        case 'L':
          arr.push("turnLeft")
          break;
        case 'R':
          arr.push("turnRight")
          break;
      }
    }
    return arr
  }

  place({x,y,direction}){
    this.coordinates = [x,y]
    this.bearing = direction
  }

  evaluate(command){
    for(let i in command){
      switch(command[i]){
        case 'A':
          this.advance()
          break;
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
      }
    }
  }

}
