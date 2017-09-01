import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "../avatar/index";
const style = require('./style.pcss');

export class Contents extends React.Component{
    render(){
        return(
            <div className={ style.wrap }>
                <div className={ style.container }>
                    <div className={ style.latest }>
                        Latest
                    </div>
                    <div className={ style.postBox }>
                        <Avatar />
                        <div className={ style.postArticle }>
                            <Link to = "/about" className={ style.postHeader }>
                                Want to Become the Best at What You Do? Read this.
                            </Link>
                            <div className={ style.postImgBox }>
                                <Link to = "/about">
                                    <img src="https://cdn-images-1.medium.com/max/1500/1*c3INaGwFw9CsqYleHHicEw.jpeg" className={ style.postImg } />
                                </Link>
                            </div>
                        </div>
                        <div className={ style.readMore }>
                            <Link to = "/about" className={ style.readMoretxt }>
                                Read more...
                            </Link>
                        </div>
                        <div className={ style.btnBox }>
                            <div className={ style.clapBox}>
                                <div className={ style.clap }>
                                    <svg width="25" height="25" viewBox="0 0 25 25">
                                        <path d="M11.739 0l.761 2.966L13.261 0z">
                                        </path>
                                        <path d="M14.815 3.776l1.84-2.551-1.43-.471z">
                                        </path>
                                        <path d="M8.378 1.224l1.84 2.551L9.81.753z">
                                        </path>
                                        <path d="M20.382 21.622c-1.04 1.04-2.115 1.507-3.166 1.608.168-.14.332-.29.492-.45 2.885-2.886 3.456-5.982 1.69-9.211l-1.101-1.937-.955-2.02c-.315-.676-.235-1.185.245-1.556a.836.836 0 0 1 .66-.16c.342.056.66.28.879.605l2.856 5.023c1.179 1.962 1.379 5.119-1.6 8.098m-13.29-.528l-5.02-5.02a1 1 0 0 1 .707-1.701c.255 0 .512.098.707.292l2.607 2.607a.442.442 0 0 0 .624-.624L4.11 14.04l-1.75-1.75a.998.998 0 1 1 1.41-1.413l4.154 4.156a.44.44 0 0 0 .624 0 .44.44 0 0 0 0-.624l-4.152-4.153-1.172-1.171a.998.998 0 0 1 0-1.41 1.018 1.018 0 0 1 1.41 0l1.172 1.17 4.153 4.152a.437.437 0 0 0 .624 0 .442.442 0 0 0 0-.624L6.43 8.222a.988.988 0 0 1-.291-.705.99.99 0 0 1 .29-.706 1 1 0 0 1 1.412 0l6.992 6.993a.443.443 0 0 0 .71-.501l-1.35-2.856c-.315-.676-.235-1.185.246-1.557a.85.85 0 0 1 .66-.16c.342.056.659.28.879.606L18.628 14c1.573 2.876 1.067 5.545-1.544 8.156-1.396 1.397-3.144 1.966-5.063 1.652-1.713-.286-3.463-1.248-4.928-2.714zM10.99 5.976l2.562 2.562c-.497.607-.563 1.414-.155 2.284l.265.562-4.257-4.257a.98.98 0 0 1-.117-.445c0-.267.104-.517.292-.706a1.023 1.023 0 0 1 1.41 0zm8.887 2.06c-.375-.557-.902-.916-1.486-1.011a1.738 1.738 0 0 0-1.342.332c-.376.29-.61.656-.712 1.065a2.1 2.1 0 0 0-1.095-.562 1.776 1.776 0 0 0-.992.128l-2.636-2.636a1.883 1.883 0 0 0-2.658 0 1.862 1.862 0 0 0-.478.847 1.886 1.886 0 0 0-2.671-.012 1.867 1.867 0 0 0-.503.909c-.754-.754-1.992-.754-2.703-.044a1.881 1.881 0 0 0 0 2.658c-.288.12-.605.288-.864.547a1.884 1.884 0 0 0 0 2.659l.624.622a1.879 1.879 0 0 0-.91 3.16l5.019 5.02c1.595 1.594 3.515 2.645 5.408 2.959a7.16 7.16 0 0 0 1.173.098c1.026 0 1.997-.24 2.892-.7.279.04.555.065.828.065 1.53 0 2.969-.628 4.236-1.894 3.338-3.338 3.083-6.928 1.738-9.166l-2.868-5.043z">
                                        </path>
                                    </svg>
                                </div>
                                <div className={ style.clapCount }>
                                    <p>1,020</p>
                                </div>
                            </div>
                            <div className={ style.markBox }>
                                <div className={ style.responses }>
                                    <a>31 responses</a>
                                </div>
                                <div className={ style.optBtn }>
                                    <button className={ style.bookMark }>
                                        <svg width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </button>
                                    <button className={ style.storyOpt }>
                                        <svg width="19" height="19" viewBox="0 0 19 19">
                                            <path d="M4 7.331l6.032 6.67.495.547.495-.547 5.973-6.603-.989-.895-5.974 6.603h.99l-6.033-6.67z" fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}