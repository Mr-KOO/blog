import React from 'react';
const style = require('./style.pcss');

export class Posts extends React.Component{
    render(){
        return(
            <div>
                <div className={ style.postImgBox }>
                    <img src="https://cdn-images-1.medium.com/max/1500/1*c3INaGwFw9CsqYleHHicEw.jpeg" className={ style.postImg } />
                </div>
                <h1 className={ style.postHeader }>
                    Want to Become the Best at What You Do? Read this.
                </h1>
                <div className={ style.postContent }>
                    <p>
                        It doesn’t matter how good your strategy is, if you’re not skilled at what you do, that strategy won’t take you very far.
                    </p>
                    <p>
                        As Jason Fried and DHH have said:
                    </p>
                    <p>
                        “Many amateur golfers think they need expensive clubs. But it’s the swing that matters, not the club. Give Tiger Woods a set of cheap clubs and he’ll still destroy you.”
                    </p>
                </div>
            </div>
        )
    }
}