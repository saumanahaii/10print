# 10print
An implementation of a single line of Basic code that prints what looks like a maze.

## What?
Long ago someone wrote a fairly simple line of Basic: 

`10 PRINT CHR$(205.5+RND(1)); : GOTO 10`

This line repeatedly logs either a forward slash, /, or a back slash, \\, to the terminal.  Continuing the execution, a series of slashes built up on the page.  And, due to a lack of vertical padding, a really cool pattern emerges.  See this [video](https://www.youtube.com/watch?v=m9joBLOZVEo) for an example.

This is another implementation on canvas in the browser using P5 with a little embellishment.

### Why?

It looked neat and was absurdly simple in logic.  I enjoy maze generation and while this isn't really a maze, to be able to get a similar effect with so little effort is really neat.
