const fs = require("fs");
const path = require("path");
const readline = require("readline");

async function main(callback_main) {
  const projects = fs.opendirSync("public/thesaurus/projects");
  const writtings = fs.opendirSync("public/thesaurus/writtings");
  let json = {};

  async function run(callback_run, theme, theme_name) {
    let result = {};
    let item;
    while ((item = theme.readSync()) !== null) {
      let description = "";
      let title = "";
      let hour = "";
      let img = "";
      let _item = item;
      let numb;
      const data_stream = await readline.createInterface({
        input:
          theme_name == "projects"
            ? fs.createReadStream("public/thesaurus/projects/" + _item.name)
            : fs.createReadStream("public/thesaurus/writtings/" + _item.name),
        output: process.stdout,
        terminal: false,
      });
      data_stream.on("line", (line) => {
        
        if (line.includes("#")) {
          let letter;
          for (letter of line) {
            if (letter != "#") {
              title += letter;
            }
          }
        } else if (line.includes("*")) {
          let letter;
          for (letter of line) {
            if (letter != "*") {
              description += letter;
            }
          }
        } else if (line.includes("-") && /^\d{4}-\d{2}-\d{2}$/.test(line)) {
          let letter;
          for (letter of line) {
            hour += letter;
          }
        }else if (line.includes("![")) {
          let letter;
          let path=false;
          for (letter of line) {
            if(letter=="("){
              path=true;
            }
            else if(letter==")"){
              path=false;
            }
            else if(path){
              img += letter;
            }
            numb=img.slice(-5).charAt(0)
          }
        }
        const array = {"numb":numb,"title": title, "description": description, "hour": hour, "img":img };
        result[_item.name] = array;
        callback_run(result);
      });
    }
  }
  
  
  run((result_projects) => {
    run((result_writtings) => {
        callback_main({"projects":result_projects,"writtings":result_writtings});
      }, writtings,"writtings");
  }, projects,"projects");

}

function writteFile(data) {
const dataString = JSON.stringify(data);
fs.writeFile("public/tree.json", dataString, (err) => {
if (err) throw err;
});
}

main((json) => {
writteFile(json)
});
