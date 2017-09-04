import React from 'react';
import { Header } from '../components/header';
import { Profile } from '../components/profile';
import { Contents } from '../components/contents';
import {Footer} from "../components/footer/index";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Profile/>
                <Contents/>
            </div>
        )
    }
}