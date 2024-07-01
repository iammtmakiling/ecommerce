// function App() {
//   return (
//     <div className='App'>
//       <header>
//           <h1>Products Grid</h1>

//           <p>But first, a word from our sponsors:</p>
//           <img
//             className='ad'
//             src={`http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`}
//             alt='ad'/>
//       </header>

//       products goes here..
//     </div>
//   );
// }

// export default App;

import React from 'react';
import HomePage from './components/pages/HomePage';

const App = () => (
  <div className="App">
    <HomePage />
  </div>
);

export default App;
