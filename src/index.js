import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/app';
//import Axios from 'axios';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// class HelloWorld extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             contents: []
//         };
//         // Axios.get('https://s3.ap-northeast-2.amazonaws.com/hyungu/sample.json')
//         //     .then(response => {
//         //         this.setState({
//         //             contents: response.data.contents
//         //         })
//         //     })
//         //     .catch(error => {
//         //         console.log('catch');
//         //         console.log(error);
//         //     });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1 className={ style.title }>
//                     Hello world!
//                 </h1>
//                 <Header />
//                 {/*<div>{ this.renderContents() }</div>*/}
//             </div>
//         )
//     }
//
//     // renderContents() {
//     //     return this.state.contents
//     //         .filter((item, i) => i === 0 )
//     //         .map((item, i) => <div key={ `content-${i}` }>{ item.title }</div>)
//     // }
// }
