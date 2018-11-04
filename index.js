var RibbonSet = require("./src/ribbon-set");

module.exports = {
    getRelations: function(svg1, svg2, options) {
        var set1 = RibbonSet.fromSVGData(svg1);
        var set2 = RibbonSet.fromSVGData(svg2);

        return set2.getPairwiseRelationships(set1);
    }
}
