import React from 'react';
const style = require('./style.pcss');

export class Profile extends React.Component{
    render(){
        return(
            <div className={ style.wrap }>
                <div className={ style.container }>
                    <div>
                        <div className={style.avatarBox}>
                            <div className={ style.avatarInfo}>
                                <h1 className={ style.title }>Lee Hyungu</h1>
                                <p className={ style.description }>Studying Development</p>
                            </div>
                            <div className={ style.avatar }>
                                <img src="https://cdn-images-1.medium.com/fit/c/48/48/0*661xPjkhrX9h6GVR." className={ style.avatarImg } />
                            </div>
                        </div>
                        <div className={ style.snsBox }>
                            <a className={ style.followTxt }><b>200 </b>Following</a>
                            <a className={ style.followerTxt }>2.2K Followers</a>
                            <div className={ style.snsImgBox }>
                                <a href="https://www.facebook.com/Hyun9.lee">
                                    <svg width="21" height="21" viewBox="0 0 21 21">
                                        <path d="M18.26 10.55c0-4.302-3.47-7.79-7.75-7.79-4.28 0-7.75 3.488-7.75 7.79a7.773 7.773 0 0 0 6.535 7.684v-5.49h-1.89v-2.2h1.89v-1.62c0-1.882 1.144-2.907 2.814-2.907.8 0 1.48.06 1.68.087V8.07h-1.15c-.91 0-1.09.435-1.09 1.07v1.405h2.16l-.28 2.2h-1.88v5.515c3.78-.514 6.7-3.766 6.7-7.71">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <button className={ style.followBtn}>
                                <span>Follow</span>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className={ style.navBar }>
                    <ul>
                        <li>Profile</li>
                        <li>Latest</li>
                    </ul>
                </nav>
            </div>
        )
    }
}