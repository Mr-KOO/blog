import React from 'react';
import { Header } from '../components/header';
import { Profile } from "../components/Profile";

export class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Profile />
            </div>
        )
    }
}