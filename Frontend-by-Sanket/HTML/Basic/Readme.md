# Introduction to Tables and Focus on Labels

# CSS Top 30 properties

color: Sets the text color.

background-color: Sets the background color of an element.

font-size: Specifies the size of the font.

font-family: Defines the font to be used for text.

font-weight: Sets the thickness or boldness of text.

text-align: Aligns text horizontally (left, center, right, justify).

text-decoration: Adds decorations to text (e.g., underline, strike-through).

line-height: Sets the height of lines of text.

letter-spacing: Adjusts the space between characters.

word-spacing: Adjusts the space between words.

margin: Sets the outer margin of an element.

padding: Sets the inner padding of an element.

border: Specifies the border around an element.

width: Defines the width of an element.

height: Defines the height of an element.

display: Determines how an element is displayed (e.g., block, inline).

position: Specifies the positioning method of an element (e.g., relative, absolute).

top, right, bottom, left: Positions an element relative to its containing element.

float: Controls the horizontal alignment of an element.

clear: Specifies how elements should behave regarding floating elements.

z-index: Sets the stacking order of elements.

opacity: Adjusts the transparency of an element.

visibility: Controls the visibility of an element.

text-transform: Transforms text (e.g., uppercase, lowercase).

box-sizing: Defines how the width and height of an element are calculated.

list-style: Specifies the style of list items (e.g., bullets, numbers).

cursor: Defines the cursor type when hovering over an element.

background-image: Sets a background image for an element.

background-position: Defines the starting position of a background image.

transition: Adds smooth transitions to property changes.

These are just some of the most commonly used CSS properties, and there are many more available for fine-tuning the appearance and layout of web pages. CSS allows for a high degree of control over the visual presentation of web content.

# Border Properties

#demo {
border: 1px solid black;
border-radius: 2px;
border-color: blue;
border-style: dashed;
border-top: 2px;
border-left: 3px;
border-width: 1px;
border-right: 2px;
border-collapse: collapse;
border-spacing: 2px;
}

html {
box-sizing: border-box;
}

_,
_:before,
\*:after {
box-sizing: inherit;
}

#parent {
/_ flex-container _/
border: solid red 3px;
/_ display flex always in the parent (flex-container) _/
display: flex;
/_ this direction by default, flex-direction is row _/
/_ 1 2 3 = flex-direction: row;_/
/_ flex-direction: row; _/
/_ 3 2 1 = flex-direction: row-reverse;_/
/_ flex-direction: row-reverse; _/
/_ 1
2
3 = flex-direction: column;_/
/_ flex-direction: column; _/

/_ 3
2
1 = flex-direction: column-reverse;_/
/_ flex-direction: column-reverse; _/
/_ flex-wrap will display content in the same line _/
/_ flex-wrap: wrap; _/
/_ default value of flex-wrap is no-wrap _/
/_ flex-wrap: nowrap; _/

/_ It will perform the same result as of flex-direction:row and flex-wrap: nowrap _/
flex-flow: row nowrap;

/\* Main axis and cross axis
The two axes of flexbox
When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it. Everything we do with flexbox refers back to these axes, so it is worth understanding how they work from the outset.

The main axis
The main axis is defined by flex-direction, which has four possible values:

row
row-reverse
column
column-reverse

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
\*/

/_ To arrange elements on main-axis _/
/_ justify-content: start; _/
/_ To arrange elements at the end _/
/_ justify-content: end; _/
/_The items are evenly distributed within the alignment container along the main axis. _/
/_ justify-content: space-evenly; _/

/_Flex items are evenly distributed in the line, with half-size spaces on either end. _/
/_ justify-content: space-around; _/

/_ Flex items are evenly distributed in the line. _/
justify-content: space-between;
height: 500px;
}

#parent div {
/_ flex-items _/
border: solid blue 2px;
padding: 20px;
background-color: aqua;
/_ each child minimum width is 100px ,this value 100px is fixed _/
min-width: 100px;
max-width: 200px;
max-height: 100px;
}

/_ Positional alignment _/
justify-content: center; /_ Pack items around the center _/
justify-content: start; /_ Pack items from the start _/
justify-content: end; /_ Pack items from the end _/
justify-content: flex-start; /_ Pack flex items from the start _/
justify-content: flex-end; /_ Pack flex items from the end _/
justify-content: left; /_ Pack items from the left _/
justify-content: right; /_ Pack items from the right _/

/_ Baseline alignment _/
/_ justify-content does not take baseline values _/

/_ Normal alignment _/
justify-content: normal;

/_ Distributed alignment _/
justify-content: space-between; /_ Distribute items evenly
The first item is flush with the start,
the last is flush with the end _/
justify-content: space-around; /_ Distribute items evenly
Start and end gaps are half the size of the space
between each item _/
justify-content: space-evenly; /_ Distribute items evenly
Start, in-between, and end gaps have equal sizes _/
justify-content: stretch; /_ Distribute items evenly
Stretch 'auto'-sized items to fit
the container _/

/_ Overflow alignment _/
justify-content: safe center;
justify-content: unsafe center;

/_ Global values _/
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;

html {
box-sizing: border-box;
}

_,
_:before,
\*:after {
box-sizing: inherit;
}

#parent {
border: 10px solid black;
background-color: chartreuse;
display: flex;
height: 500px;
flex-flow: row nowrap;
/_ To arrange the elements on main axis _/
justify-content: start;

/_ To arrange the elements on cross axis _/
/_ align-items: start; _/
align-items: center;
align-content: space-evenly;
}

#parent div {
border: 3px solid blue;
padding: 20px;
background-color: beige;
min-width: 100px;
/_ max-width: 200px; _/
max-height: 100px;
/_ min-height: 100px; _/
}

#child1 {
/_ the width of box1 will increase by 50% _/
/_ flex-basis: 50%; _/
flex-grow: 1;
}

#child2 {
/_ box2 will expand by 2 _/
flex-grow: 2;
}
