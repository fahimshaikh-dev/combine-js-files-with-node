# JavaScript Bundler

This repository contains a simple Node.js script to bundle JavaScript files from a `src` directory into a single file in the `dist` directory. The bundling process combines all `.js` files in the `src` directory into a single `bundle.js` file in the `dist` directory.

## Project Structure

Here is an overview of the project structure:

<pre>
my_project/
├── src/
│   ├── file1.js
│   ├── file2.js
│   └── file3.js
├── dist/
│   └── (empty initially) // bundle.js (combined JavaScript file)
├── index.html // references bundle.js
├── combine.js // Node.js script to bundle files
├── package.json // npm configuration file
└── README.md // this file
</pre>

- **`src/`**: Contains individual JavaScript files to be bundled.
- **`dist/`**: Initially empty; will contain the `bundle.js` file after bundling.
- **`index.html`**: HTML file that includes the `bundle.js` script.
- **`combine.js`**: Node.js script to bundle files into `bundle.js`.

## Installation

First, install the necessary Node.js packages. You’ll need to create a `package.json` file if you don’t have one already:

```bash
npm init -y
```

Install `fs` for file system operations (if you are using Node.js for scripting):

```bash
npm install fs
```

## Bundling Script

Create a `combine.js` script with the following Node.js code:

```js
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const distFile = path.join(__dirname, "dist", "bundle.js");

// Read all JavaScript files from src directory
fs.readdir(srcDir, (err, files) => {
  if (err) throw err;

  const jsFiles = files.filter((file) => file.endsWith(".js"));

  let bundledContent = "";

  jsFiles.forEach((file, index) => {
    const filePath = path.join(srcDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    bundledContent += fileContent + "\n";

    if (index === jsFiles.length - 1) {
      // Write bundled content to dist/bundle.js
      fs.writeFileSync(distFile, bundledContent);
      console.log(`Bundled ${jsFiles.length} files into ${distFile}`);
    }
  });
});
```

## Running the Bundler

To bundle all JavaScript files from the `src` directory into `bundle.js`, run:

```bash
node combine.js
```

This will create a `bundle.js` file in the `dist` directory containing all combined JavaScript files.

## Notes

- Ensure that the `dist` directory exists before running the script. You can create it manually or modify the script to create it if it doesn’t exist.
- This simple bundling script does not handle module dependencies or advanced features like minification. For more complex scenarios, consider using bundlers like Webpack or Rollup.

## Contributing

Feel free to submit issues or pull requests to improve the script.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
