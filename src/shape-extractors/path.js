var {parse} = require("svg-parse");
var Ribbon = require("../ribbon");

module.exports = (id, attr) => {
  var {d} = attr;
  var [move, ...lines] = parse(d, {generalize:true});
  lines.pop();

  var upperLeft = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  var lowerRight = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

  lines.map((l) => {
    if(l.props.x < upperLeft[0]){
      upperLeft[0] = l.props.x;
    }
    if(l.props.x > lowerRight[0]){
      lowerRight[0] = l.props.x;
    }
    if(l.props.y > upperLeft[1]){
      upperLeft[1] = l.props.y;
    }
    if(l.props.y < lowerRight[1]){
      lowerRight[1] = l.props.y;
    }
  });
  return new Ribbon(id, upperLeft, lowerRight);
}
