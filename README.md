Webpage creation using:

HTML
CSS
Bootstrap
SASS
GULP
-----------------------------------------------------------

We have used:

1. html
2. css
3. bootstrap 4.1
4. gulp
5. node JS
6. popper
7. jQuery

-----------------------------------------------------------

Motive: We are using gulp command to automatically convert .scss to .css file

-----------------------------------------------------------
* To init npm 
* npm init                          
// It will ask for project name and will create package.json
// If you want current folder name as project name, just press enter.

* To update npm version
npm install npm@latest -g
npm i -g npm

* To reinstall all dependencies defined in package.json
npm install

* To install bootstrap via npm:
npm install bootstrap --save        // --save: To save in dependencies property
npm install bootstrap --save-dev    // --save-dev: To save in dev-dependencies

* To install jQuery via npm:
npm install jquery --save

* To install popper via npm:
npm install popper.js --save

* To install all 3 above using one command:
npm install bootstrap jquery popper.js --save

* To install gulp globally (Wont' be saved in package.json):
npm install -g gulp          // -g is for global

* To install sass globally (Wont' be saved in package.json):
npm install -g sass         // -g is for global

* To install gulp-sass:
npm install gulp-sass --save

* To install browser-sync:
npm install browser-sync --save

-----------------------------------------------------------

* Sass commands:

// To check version
sass --version	

// To convert one file.scss to file.css
sass --watch input.scss output.css	

// To convert whole scss folder to css folder
sass --watch sourceFolder/sassFolder:targetFolder/cssFolder	

// To convert particular path file.scss to specific path with specific name newFileName.css
sass --watch sourceFolder/sourceFilename.scss:targetFolder/targetFilename.css	

-----------------------------------------------------------

* To run project:

Go to root folder (containing gulpfile.js), open cmd and type "gulp"

- It will start listening to port

