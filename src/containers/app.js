import React from 'react';
import { Header } from '../components/header';
import { Profile } from "../components/Profile";
import {Contents} from "../components/contents/index";

export class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Profile/>
                <Contents/>
            </div>
        )
    }
}