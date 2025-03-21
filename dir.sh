#!/bin/bash

# Function to add .gitkeep to empty directories
add_gitkeep() {
    for dir in $(find . -type d); do
        if [ -z "$(ls -A "$dir")" ]; then
            touch "$dir/.gitkeep"
            echo "Added .gitkeep to $dir"
        fi
    done
}

# Run the function
add_gitkeep