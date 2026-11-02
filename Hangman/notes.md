## How is Hangman played?

1. Draw the starting point
2. pick a word -> A list of possible words, save one of them into a variable
3. Draw dashes -> 1 dash for each letter in the word?
    a. For loop?
4. Guess Time
    a. give an input -> letter
    b. Check is the letter is in the string
        a. If its in the string, replace dash with the letter
        b. If not in the sting, draw the next limb
        c. No matter, keep track of guesses user did
            a. cannot guess the same letter, blank space, or number
5. Game Ends
    a. If hhey guess the whole word -> game ends -> you win
    b. if the full body is drawn, game ends, you lose