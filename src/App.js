import AllRoutes from "./routes"

function App() {
  return (
    <div>
      <AllRoutes />
    </div>
  )
}

export default App

// import React from "react";


// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false
//     };
//   }

//   handleClick = () => {
//     if (!this.state.showModal) {
//       document.addEventListener("click", this.handleOutsideClick, false);
//     } else {
//       document.removeEventListener("click", this.handleOutsideClick, false);
//     }

//     this.setState(prevState => ({
//       showModal: !prevState.showModal
//     }));
//   };

//   handleOutsideClick = e => {
//     if (!this.node.contains(e.target)) this.handleClick();
//   };

//   render() {
//     return (
//       <div
//         ref={node => {
//           node = node;
//         }}
//       >
//         <button onClick={this.handleClick}>Open Modal</button>
//         {this.state.showModal && (
//           <div className="modal">
//             I'm a modal!
//             <button onClick={() => this.handleClick()}>close modal</button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }


