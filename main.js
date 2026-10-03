import React from 'react';
import ReactDOM from 'react-dom/client';

const div = (<div id="parent1" key="1">
    <div id="children">Hello React</div>;
</div>);
const div2 = <div id="parent2" key="2"> Hello React 1</div>;

const parentDiv = (<div id="grandparent">
    {div}
    {div2}
</div>);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parentDiv);