#!/bin/bash

cd $GITHUB_WORKSPACE

rm -rf book/src/*
mkdir -p book/src

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
    if [ -d "$dir" ]; then
        echo "Copying $dir to book/src/$dir"
        mkdir -p "book/src/$dir"
        cp -r "$dir/"* "book/src/$dir/"
    else
        echo "Directory $dir does not exist, skipping."
    fi
done

cp README.md book/src/README.md