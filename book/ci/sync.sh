#!/bin/bash

categories=(
    "CSRF"
    "Cross-Site-Scripting"
    "Forensics"
    "Javascript"
    "PHP"
    "SQL-Injection"
    "Steganography"
    "README.md"
)

cd $(git rev-parse --show-toplevel)

for dir in "${categories[@]}"; do
    if [ -d "$dir" ]; then
        echo "Copying '$dir' to 'book/src/$dir'"
        mkdir -p "book/src/$dir"
        cp -r "$dir/"* "book/src/$dir/"
    elif [ -f "$dir" ]; then
        echo "Copying '$dir' to 'book/src/$dir'"
        cp "$dir" "book/src/$dir"
    else
        echo "Directory $dir does not exist, skipping."
    fi
done