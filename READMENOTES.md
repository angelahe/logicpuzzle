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
npm install classnames --save-dev
npm install bootstrap --save-dev
```
https://medium.com/@kaiz.hudda/how-to-setup-jest-enzyme-in-your-existing-react-app-in-5-mins-bf21841f4738
https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
myStyle: {
    transform: [{ rotate: '90deg'}]
}
https://reactnative.dev/docs/transforms.html#proptypes
https://medium.com/@therealmaarten/how-to-layout-rotated-text-in-react-native-6d55b7d71ca5
https://reactnative.dev/

## further reading
https://reactjs.org/docs/lists-and-keys.html
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
nested proptypes:
https://www.javascriptstuff.com/validate-nested-proptypes/
https://medium.com/ag-grid/learn-to-customize-react-grid-in-less-than-10-minutes-2ce6845646bb

https://www.grapecity.com/blogs/editable-datagrid-in-a-react-redux-application
https://redux.js.org/recipes/structuring-reducers/initializing-state#:~:text=There%20are%20two%20main%20ways,to%20use%20as%20a%20default.
javascript value vs reference
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
loading data in redux:
https://hackernoon.com/handling-loading-actions-the-proper-way-in-redux-t3k36e8
load and display data with redux:
https://blog.isquaredsoftware.com/2016/12/practical-redux-part-5-loading-and-displaying-data/
redux examples (106):
https://react.rocks/tag/Redux
https://daveceddia.com/redux-tutorial/
https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/
https://github.com/reduxjs/redux/tree/master/examples
https://www.taniarascia.com/redux-react-guide/
https://www.tutorialspoint.com/redux/redux_react_example.htm

for state of game and undo
https://react.rocks/example/react-redux-sudoku
for animation and possible future word games:
https://react.rocks/example/redux-tetris

next to read:
## for loading data
https://blog.isquaredsoftware.com/2016/12/practical-redux-part-5-loading-and-displaying-data/
## for game history and undo
https://react.rocks/example/react-redux-sudoku
## tests
npm test

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