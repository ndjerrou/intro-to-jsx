import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// JSX - Javascript XML
const name = 'Pierre';
const age = 18;

const pickBackgroundColor = age => {
  return age >= 18 ? 'blue' : 'green';
};

const template = (
  <div>
    <h1
      id='title'
      style={{
        color: age >= 18 ? 'white' : 'black',
        backgroundColor: pickBackgroundColor(age),
      }}
    >
      My hobbies by {name}
    </h1>
    <ul>
      <li>Foot</li>
      <li>Roller</li>
    </ul>
  </div>
);

root.render(template);
