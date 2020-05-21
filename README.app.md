# logic puzzle
will use redux for state management
will use enzyme and react test renderer for front end tests

## setup
```
npx create-react-app logicpuzzle
npm i react-redux --save-dev
npm install classnames --save-dev
npm install enzyme enzyme-adapter-react-16 enzyme-to-json --save-dev
npm install react-test-renderer --save-dev
npm i redux --save-dev
```
https://medium.com/@kaiz.hudda/how-to-setup-jest-enzyme-in-your-existing-react-app-in-5-mins-bf21841f4738

# vim shortcuts
https://vim.rtorr.com/
move: eg 4 j go down 4 lines
h j k l
H M L
w e b
W E B
0 - start of line
^ - 1st non blank char
gg - 1st line of doc
G - last line
5G - line 5
{ } - jump to next/prev paragraph
move screens: down 1, up 1, up 1 screen, down 1 screen, 1/2 screen
Ctrl+e y b f d u

insert:
r - replace character
i - before cursor
I - at beginning of line
a - after cursor
A - end of line
o - append new line below current
O - apprend above current line

cut/paste:
yy - copy line (2yy for 2 lines)
y$ - copy to end of line
p - paste
dd - delete 1 line, 2dd
dw - delete word
D - delete to end of line
d$ cut to end of line
x - delete
> shift text right
< shift text left

#using react getting started
https://create-react-app.dev/docs/getting-started/
first: npm uninstall -g create-react-app
npx create-react-app logicpuzzle

#using jest in harmony with react-scripts test
npm run jest /jest

#resources for dev
css-tricks.com/snippets/css/text-rotation