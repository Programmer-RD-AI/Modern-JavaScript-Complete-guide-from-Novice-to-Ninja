# Data Types

Numbers - 1,2,3,4,5,6,100,3.14
String - 'hello world', "mario@thenetninja.co.uk"
Boolean - true / false
Null - Explicitly set a variable
Undefined - Variables that aren't defined yet
Object - Complex data structures (Arrays, Dates, Literals, etc...)
Symbol - Used with objects..

# Control Flow

- Use loops for cycling through data
- Use conditional statement for checking conditions

# Function

- A function is like a box that runs the code inside it and we can call it and the box runs and we can use the same code again and again... `showScores()`

# Objects

- Real life have properties and they also do...
- For example an phone
  - properties
    - color
    - size
    - model
  - things it can do (methods / functions)
    - ring
    - take a picture
    - play music

# Primitive vs Reference types

## Primitive

Stored in the stack, the space in there is limited, much more faster
The stacks variable values refer to the actual variable name such as 'hello' -> greeting and so on...s
When one variable is assigned to another variable the value is copied.

- numbers
- strings
- booleans
- null
- undefined
- symbols

## Reference

Stored in the heap, the space is much more but more slower
The objects are stored in the heap but the pointers or the thing that will let us know which variable is which is still stored in the stack, and in turn the program has to go to the stack and find the data in the `heap`.
When one variable is assigned to another variable the value is the same meaning the point is the same for both variables and if the value is changed for 1 it is changed for both

- all types of objects
  - object literals
  - arrays
  - functions
  - dates
  - all other objects

# Document Object Model (DOM)

It the heart of an web page manipulation
Created by the browser, can be accessed through `document` object
The following is the structure of an DOM:
html -> body -> h1
-> div
-> p
-> p
-> div
-> head -> title

# CSS Selectors

- ID = #id
- CSS Class = .class
- Tag with Class = tag.class
- * = all

