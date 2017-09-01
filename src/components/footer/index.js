import React from 'react';
import { Avatar } from "../avatar/index";
const style = require('./style.pcss');

export class Footer extends React.Component{
    render(){
        return(
            <div className={ style.wrap }>
                <div>
                    <p>
                        Show your support
                    </p>
                    <p>Clapping shows how much you appreciated Lee Hyungu’s story.
                    </p>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}