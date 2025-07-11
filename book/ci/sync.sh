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