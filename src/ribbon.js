class Ribbon{
  constructor(id, upperLeft, lowerRight){
    this.id = id || null;
    this.upperLeft = upperLeft || [0,0];
    this.lowerRight = lowerRight || [0,0];
  }

  getHighPoint(){
    return [
      this.upperLeft[0] < this.lowerRight[0] ? this.upperLeft[0] : this.lowerRight[0],
      this.upperLeft[1] > this.lowerRight[1] ? this.upperLeft[1] : this.lowerRight[1]
    ]
  }

  width(){
    return Math.abs(this.upperLeft[0] - this.lowerRight[0]);
  }

  height(){
    return Math.abs(this.upperLeft[1] - this.lowerRight[1]);
  }

  beginA(){
    return this.upperLeft[0];
  }

  endA(){
    return this.lowerRight[0];
  }

  beginB(){
    return this.upperLeft[1];
  }

  endB(){
    return this.lowerRight[1];
  }
}

module.exports = Ribbon;
