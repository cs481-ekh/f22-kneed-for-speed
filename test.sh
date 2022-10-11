#!/bin/bash
echo Testing...

#Decided to use unzip program seems its more straightforward than tar
sudo apt install unzip
#This directory will contain the linted src directory
mkdir lintedDirectory
sudo unzip build.zip -d /lintedDirectory

#Test the differences between the linted directory and the src directory
diff -q src/ lintedDirectory/

exit 0
