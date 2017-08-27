import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
const style = require('./style.pcss');

class HelloWorld extends React.Component {
    constructor() {
        super();

        this.state = {
            contents: [
                { title: 'title1' },
                { title: 'title2' },
                { title: 'title3' },
                { title: 'title4' },
                { title: 'title5' }
            ]
        };
        // axios -> promise
        // Axios.get('https://s3.ap-northeast-2.amazonaws.com/hyungu/sample.json')
        //     .then(response => {
        //         this.setState({
        //             contents: response.data.contents
        //         })
        //     })
        //     .catch(error => {
        //         console.log('catch');
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                <h1 className={ style.title }>
                    Hello world!
                </h1>

                <div>{ this.renderContents() }</div>

                {/* 로딩 상태면, 로딩하는 뺑뺑이를 띄워준다 */}
                {/* 데이터가 불러와지면? 데이터를 뿌린다 */}
            </div>
        )
    }

    renderContents() {
        // return this.state.contents
        //     .filter((item, i) => i === 0 )
        //     .map((item, i) => <div key={ `content-${i}` }>{ item.title }</div>)
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);