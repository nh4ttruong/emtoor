#!/bin/bash

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
        echo "Copying $dir to src/$dir"
        mkdir -p "book/src/$dir"
        cp -r "$dir/"* "book/src/$dir/"
    else
        echo "Directory $dir does not exist, skipping."
    fi
done