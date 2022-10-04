#!/bin/bash
echo Building...

#Install JavaScript package manager
sudo apt install npm
npm init @eslint/config
#install JavaScript linter
npm i eslint --save-dev
# npx eslint --init

#install HTML linter
npm i htmlint@0.0.7

#run the linters
npx eslint src/js/*.js
node node_modules/htmlint src/*.html

#Zip the src folder, should include linted .js and .html files
zip -r build.zip src

exit 0