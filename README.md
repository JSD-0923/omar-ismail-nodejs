# omar-ismail-nodejs
read files and count the words inside them.

## Description

Node.js program that reads a list of file paths from a configuration file and processes each file asynchronously. The processing involves counting the number of words in each file and displaying the results.

## Configuration
Create a config.json file in the project directory to store the list of file paths to be processed.
```JSON
{
  "files": [
    "files/file1.txt",
    "files/file2.txt",
    "files/file3.txt"
  ]
}
```


## Output

```log
files/file1.txt: 5 words
files/file2.txt: empty file
files/file3.txt: 23 words
```

## Testing

My handle the following

- Empty files
- Files with special characters
- Files that do not exist
