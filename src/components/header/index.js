import React from 'react';
const style = require('./style.pcss');

export class Header extends React.Component {
    render() {
        return (
            <div className={ style.wrap }>
                <div className={ style.newStory }>
                    <a
                        href="https://medium.com/new-story"
                        className={ style.newStoryText }
                    >
                        Write a story
                    </a>
                </div>
                <div className={ style.logoBox }>
                    <div className={ style.logo }>
                        <svg width="160" height="45" viewBox="0 0 160 45">
                            <path d="M80.799 33.74c0 .55 0 .675.375 1.012l2.098 2.049v.087h-9.305v-3.934a6.47 6.47 0 0 1-6.17 4.271c-4.784 0-8.256-3.747-8.256-10.641 0-6.458 3.747-10.767 9.005-10.767a5.496 5.496 0 0 1 5.408 3.348v-8.681a1.074 1.074 0 0 0-.424-1.05l-2-1.922v-.087l9.27-1.088v27.404zm-6.832-1.248V19.539a3.485 3.485 0 0 0-2.773-1.299c-2.26 0-4.446 2.049-4.446 8.131 0 5.696 1.886 7.707 4.234 7.707a3.747 3.747 0 0 0 2.985-1.586zm13.002 4.396V19.402c.06-.39-.081-.785-.375-1.05l-2.06-2.123v-.087h9.305v17.736c0 .55 0 .675.374 1.012l2.049 1.923v.088l-9.293-.013zm-.337-27.14a3.747 3.747 0 1 1 7.494 0 3.747 3.747 0 0 1-7.494 0zm32.312 23.955c0 .55 0 .712.375 1.05l2.098 2.048v.087h-9.355v-4.484a6.77 6.77 0 0 1-6.408 4.821c-4.146 0-6.37-3.022-6.37-8.743 0-2.76 0-5.783.088-9.18a1.062 1.062 0 0 0-.375-1.012l-2.06-2.06v-.088h9.23v11.404c0 3.747.55 6.245 2.897 6.245a3.747 3.747 0 0 0 3.023-1.886v-12.49a1.173 1.173 0 0 0-.375-1.05l-2.073-2.136v-.087h9.305v17.561zm31.675 3.185c0-.674.125-9.267.125-11.24 0-3.748-.587-6.333-3.222-6.333a4.184 4.184 0 0 0-3.31 1.798c.264 1.168.39 2.363.374 3.56 0 2.598-.087 5.908-.125 9.218-.068.38.075.767.375 1.011l2.099 1.924v.087h-9.393c0-.624.125-9.268.125-11.241 0-3.81-.587-6.332-3.185-6.332a3.747 3.747 0 0 0-3.098 1.848v12.74c0 .55 0 .675.375 1.012l2.048 1.923v.088h-9.292V19.464c.06-.39-.082-.784-.375-1.049l-2.06-2.186v-.087h9.304v4.447a6.67 6.67 0 0 1 6.67-4.784c3.098 0 5.196 1.723 6.083 4.996a7.244 7.244 0 0 1 6.994-4.996c4.147 0 6.495 3.06 6.495 8.843 0 2.76-.087 5.908-.125 9.218a1 1 0 0 0 .425 1.011l2.048 1.924v.087h-9.355zM33.723 34.165l2.76 2.636v.087h-14v-.087l2.81-2.636c.3-.244.443-.631.374-1.011v-16.85c0-.712 0-1.673.125-2.498l-9.442 23.42h-.113L6.457 15.68c-.212-.537-.274-.575-.412-.937V28.87a4.909 4.909 0 0 0 .462 2.76l3.935 5.17v.088H0v-.087l3.934-5.184a4.921 4.921 0 0 0 .463-2.747V13.257a3.023 3.023 0 0 0-.65-2.136L.962 7.511v-.087h9.992l8.368 18.248 7.37-18.248h9.78v.087l-2.749 3.06a1.076 1.076 0 0 0-.424 1.05v21.533a1 1 0 0 0 .424 1.011zm10.954-8.443v.087c0 5.346 2.76 7.495 5.996 7.495a6.807 6.807 0 0 0 6.37-3.86h.087c-1.124 5.283-4.396 7.781-9.293 7.781-5.283 0-10.267-3.185-10.267-10.566 0-7.757 4.997-10.854 10.517-10.854 4.447 0 9.18 2.098 9.18 8.843v1.074h-12.59zm0-1.074h6.158V23.56c0-5.495-1.137-6.957-2.848-6.957-2.073 0-3.335 2.186-3.335 8.044h.025z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className={ style.headerBtn }>
                    <div className={ style.btnContainer }>
                        <div className={ style.search }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z">
                                </path>
                            </svg>
                        </div>
                        <div className={ style.notification }>
                            <svg width="25" height="25" viewBox="-293 409 25 25">
                                <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z">
                                </path>
                            </svg>
                        </div>
                        <div className={ style.avatar }>
                            <img src="https://cdn-images-1.medium.com/fit/c/48/48/0*661xPjkhrX9h6GVR." className={ style.avatarImg } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}