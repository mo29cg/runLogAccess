import fs from "fs";

const addTimeStamp = process.argv.includes("--time");

const piped_input = fs.readFileSync("/dev/stdin", "utf-8");

const formattedLinesArray: string[] = [];

const uniqueNamesObject: { [key: string]: boolean } = {};

const inputArray = piped_input.split("\n");

const matchRegex = /(.*?)(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{7}Z)/;
inputArray.forEach((eachline) => {
  const result = eachline.match(matchRegex);

  if (result !== null && uniqueNamesObject[result[1]] === undefined) {
    uniqueNamesObject[result[1]] = true;
    formattedLinesArray.push(result[1].replace(/\t/g, " "));
  }
  if (result !== null && addTimeStamp) {
    formattedLinesArray.push(
      `${eachline.replace(matchRegex, "")} ${result[2]}`
    );
  } else {
    formattedLinesArray.push(eachline.replace(matchRegex, ""));
  }
});

console.log(formattedLinesArray.join("\n"));
