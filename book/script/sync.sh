#!/bin/bash

BASE=".."

categories=(
    "CSRF"
    "Cross-Site-Scripting"
    "Forensics"
    "Javascript"
    "PHP"
    "SQL-Injection"
    "Steganography"
)

for dir in "${categories[@]}"; do
    if [ -d "$BASE/$dir" ]; then
        echo "Copying $dir to src/$dir"
        mkdir -p "src/$dir"
        cp -r "$BASE/$dir/"* "src/$dir/"
    else
        echo "Directory $dir does not exist, skipping."
    fi
done

if [ -z $BASE/README.md ]; then
    echo "README.md does not exist, skipping."
else
    echo "Copying README.md to src/README.md"
    cp $BASE/README.md src/README.md
fi