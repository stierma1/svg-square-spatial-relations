var path = require("./path");
module.exports = ({tag, attr, id}) => {
  if(tag === "path"){
    return path(id, attr);
  }
}
