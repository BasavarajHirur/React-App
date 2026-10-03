import React from 'react';
import ReactDOM from 'react-dom/client';

const div = React.createElement('div', { id: "child1", }, 'HelloReact');
const div1 = React.createElement('div', { id: "parent1", key: "1" }, div);
const div2 = React.createElement('div', { id: "parent2", key: "2" }, "HelloReact1");

const parentDiv = React.createElement('div', { id: "grandparent" }, [div1, div2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parentDiv);