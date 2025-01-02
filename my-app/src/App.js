/* values display */
// import logo from './logo.svg';
// import './App.css';

/* function component */
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

/* Applying style */
import './App.css';



/* values display */

// function App() {
//   const names = 'SivaKumar';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>{names}</p>
//       </header>
//     </div>
//   );
// }




/* JSX */

// function App() {

//   function letterFromName(){
//     const myName = "SivaKumar";
//     const index = Math.floor(Math.random() * myName.length);
//     return myName[index];
//   }

//   return (
//     <div>
//         <h1>{letterFromName()} From "SivaKumar"</h1>
//     </div>
//   );
// }




/* function component */

// function App() {
//   return (
//     <div>
//         <Header/>
//         <Content/>
//         <Footer/>
//     </div>
//   );
// }


/* Applying style */

// function App() {
//   return (
//     <div className="App">
//         <Header/>
//         <Content/>
//         <Footer/>
//     </div>
//   );
// }



/* Event section */

// function App() {
//   return (
//     <div className="App">
//         <Header/>
//         {/* event section code in content component */}
//         <Content/>
//         <Footer/>
//     </div>
//   );
// }




/* Use state */

function App() {
  return (
    <div className="App">
        <Header/>
        {/* usestate section code in content component */}
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
