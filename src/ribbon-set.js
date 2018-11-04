var Ribbon = require("./ribbon");
var {relate2D, categorize} = require("spatial-relationships-169");
var svgParser = require("svg-json-parser");
var svgTraverse = require("./svg-traverse");

class RibbonSet{
  constructor(ribbons){
    this.ribbons = ribbons || [];
  }

  static fromSVGData(data){
    return new RibbonSet(svgTraverse(svgParser.parse(data)))
  }

  getRelationships(ribbon){
    var pointA = ribbon.getHighPoint();
    var widthA = ribbon.width();
    var heightA = ribbon.height();

    return this.ribbons.map((r) => {
      var pointB = r.getHighPoint();
      var widthB = r.width();
      var heightB = r.height();

      var relation = relate2D(pointA, heightA, widthA, pointB, heightB, widthB);
      return {id:r.id, relation, category:categorize(relation)};
    });
  }

  getPairwiseRelationships(ribbonSet){
    return ribbonSet.ribbons.map((ribbon) => {
      var relate = this.getRelationships(ribbon);

      return relate.map((rel) => {
        rel.Aid = ribbon.id;
        return rel;
      });
    }).reduce((red, ele) => {return red.concat(ele)}, [])
  }

}

module.exports = RibbonSet;
