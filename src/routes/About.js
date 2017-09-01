import React from 'react';
import { Header } from '../components/header';
import { Avatar } from "../components/avatar";
import { Posts } from "../components/posts/index";
import { Footer } from "../components/footer/index";
const style = require('./about.pcss');

export class About extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={ style.container } >
                    <Avatar/>
                    <Posts/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
