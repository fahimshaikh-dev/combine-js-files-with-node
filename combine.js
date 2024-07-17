const fs = require("fs");
const path = require("path");

// Define the source files
const files = ["src/file1.js", "src/file2.js", "src/file3.js"];

// Define the output file
const outputFile = "dist/bundle.js";

// Initialize the content variable
let content = "";

// Read each file and append its content to the content variable
files.forEach((file) => {
  if (fs.existsSync(file)) {
    content += fs.readFileSync(file, "utf8") + "\n";
  } else {
    console.error(`File not found: ${file}`);
  }
});

// Write the combined content to the output file
fs.writeFileSync(outputFile, content, "utf8");

console.log(`Files combined successfully into ${outputFile}`);
