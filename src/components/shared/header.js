import * as React from 'react';
import { HiMenu } from 'react-icons/hi';

export default function Header(props) {
    return <div className={"header"}>
            <div className={"header__button-container"}>
                <HiMenu className={"header__button-icon"}/>
            </div>
            <div className={"header__title"}>Website Test</div>
        </div>
}