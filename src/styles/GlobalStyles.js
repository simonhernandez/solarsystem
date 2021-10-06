import { createGlobalStyle } from "styled-components";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import chevronIcon from "../assets/icon-chevron.svg";
import starsBg from "../assets/background-stars.svg";

const GlobalStyle = createGlobalStyle`

    // Resets
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img { 
        max-width: 100%;
        height: auto;
        display: block;
    }

    button {
        cursor: pointer;
        outline: none;
        background: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
    }

    // Global Media Queries

    :root{
        // Font Sizes
        --fs-h1: ${(props) => props.theme.fontSizes.h1.mobile};
        --fs-h2: ${(props) => props.theme.fontSizes.h2.mobile};
        --fs-h3: ${(props) => props.theme.fontSizes.h3.mobile};
        --fs-h4: ${(props) => props.theme.fontSizes.h4.mobile};
        --fs-body: ${(props) => props.theme.fontSizes.body.mobile};
        --fs-big: ${(props) => props.theme.fontSizes.big.mobile};

        // Line Height
        --lh-h1: ${(props) => props.theme.lineHeight.h1.mobile};
        --lh-h2: ${(props) => props.theme.lineHeight.h2.mobile};
        --lh-h3: ${(props) => props.theme.lineHeight.h3.mobile};
        --lh-h4: ${(props) => props.theme.lineHeight.h4.mobile};
        --lh-body: ${(props) => props.theme.lineHeight.body.mobile};
        --lh-big: ${(props) => props.theme.lineHeight.big.mobile};

        // Letter Spacing
        --ls-h1: ${(props) => props.theme.letterSpacing.h1.mobile};
        --ls-h2: ${(props) => props.theme.letterSpacing.h2.mobile};
        --ls-h3: ${(props) => props.theme.letterSpacing.h3.mobile};
        --ls-h4: ${(props) => props.theme.letterSpacing.h4.mobile};
        --ls-body: ${(props) => props.theme.letterSpacing.body.mobile};
        --ls-big: ${(props) => props.theme.letterSpacing.big.mobile};
        
        @media screen and (min-width: ${(props) => props.theme.breakpoint.up.medium}) {
            --fs-h1: ${(props) => props.theme.fontSizes.h1.tablet};
            --fs-h2: ${(props) => props.theme.fontSizes.h2.tablet};
            --fs-h3: ${(props) => props.theme.fontSizes.h3.tablet};
            --fs-h4: ${(props) => props.theme.fontSizes.h4.tablet};
            --fs-body: ${(props) => props.theme.fontSizes.body.tablet};
            --fs-big: ${(props) => props.theme.fontSizes.big.tablet};

             // Line Height
            --lh-h1: ${(props) => props.theme.lineHeight.h1.tablet};
            --lh-h2: ${(props) => props.theme.lineHeight.h2.tablet};
            --lh-h3: ${(props) => props.theme.lineHeight.h3.tablet};
            --lh-h4: ${(props) => props.theme.lineHeight.h4.tablet};
            --lh-body: ${(props) => props.theme.lineHeight.body.tablet};
            --lh-big: ${(props) => props.theme.lineHeight.big.tablet};

            // Letter Spacing
            --ls-h1: ${(props) => props.theme.letterSpacing.h1.tablet};
            --ls-h2: ${(props) => props.theme.letterSpacing.h2.tablet};
            --ls-h3: ${(props) => props.theme.letterSpacing.h3.tablet};
            --ls-h4: ${(props) => props.theme.letterSpacing.h4.tablet};
            --ls-body: ${(props) => props.theme.letterSpacing.body.tablet};
            --ls-big: ${(props) => props.theme.letterSpacing.big.tablet};
        }

        @media screen and (min-width: ${(props) => props.theme.breakpoint.up.large}) {
            --fs-h1: ${(props) => props.theme.fontSizes.h1.desktop};
            --fs-h2: ${(props) => props.theme.fontSizes.h2.desktop};
            --fs-h3: ${(props) => props.theme.fontSizes.h3.desktop};
            --fs-h4: ${(props) => props.theme.fontSizes.h4.desktop};
            --fs-body: ${(props) => props.theme.fontSizes.body.desktop};
            --fs-big: ${(props) => props.theme.fontSizes.big.desktop};

             // Line Height
            --lh-h1: ${(props) => props.theme.lineHeight.h1.desktop};
            --lh-h2: ${(props) => props.theme.lineHeight.h2.desktop};
            --lh-h3: ${(props) => props.theme.lineHeight.h3.desktop};
            --lh-h4: ${(props) => props.theme.lineHeight.h4.desktop};
            --lh-body: ${(props) => props.theme.lineHeight.body.desktop};
            --lh-big: ${(props) => props.theme.lineHeight.big.desktop};

            // Letter Spacing
            --ls-h1: ${(props) => props.theme.letterSpacing.h1.desktop};
            --ls-h2: ${(props) => props.theme.letterSpacing.h2.desktop};
            --ls-h3: ${(props) => props.theme.letterSpacing.h3.desktop};
            --ls-h4: ${(props) => props.theme.letterSpacing.h4.desktop};
            --ls-body: ${(props) => props.theme.letterSpacing.body.desktop};
            --ls-big: ${(props) => props.theme.letterSpacing.big.desktop};
        }
    }

    // Typography

    h1, h2, h3, h4{
        font-family: ${(props) => props.theme.fonts.secondary}, sans-serif;
    }
    
    h1, h2 {
        font-weight: ${(props) => props.theme.fontWeight.medium};
    }
    
    h3, h4 {
        font-family: ${(props) => props.theme.fonts.primary}, sans-serif;
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    h1 {
        font-size: var(--fs-h1);
        line-height: var(--lh-h1);
        letter-spacing: var(--ls-h1);
    }
    h2 {
        font-size: var(--fs-h2);
        line-height: var(--lh-h2);
        letter-spacing: var(--ls-h2);
    }
    h3 {
        font-size: var(--fs-h3);
        line-height: var(--lh-h3);
        letter-spacing: var(--ls-h3);
    }
    h4 {
        font-size: var(--fs-h4);
        line-height: var(--lh-h4);
        letter-spacing: var(--ls-h4);
    }
    body {
        background-color: ${(props) => props.theme.colors.space};
        background-image: url(${starsBg});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: white;
        font-family: ${(props) => props.theme.fonts.primary}, sans-serif;
    }
    p, button {
        font-size: var(--fs-body);
        line-height: var(--lh-body);
        letter-spacing: var(--ls-body);
        font-weight: ${(props) => props.theme.fontWeight.regular};
    }

    .text-big{
        font-family: ${(props) => props.theme.fonts.secondary}, sans-serif;
        font-weight: ${(props) => props.theme.fontWeight.medium};
        font-size: var(--fs-big);
        line-height: var(--lh-big);
        letter-spacing: var(--ls-big);
    }

    .text-dimWhite {
        color: ${ props => props.theme.colors.dimWhite};
    }

    // Navigation
    .nav {
        padding: ${(props) => props.theme.space.s1} ${(props) => props.theme.space.s1xx};
        position: fixed;
        z-index: ${props => props.theme.zIndex.fixed};
        background-color: rgba(7, 7, 36, .75);
        backdrop-filter: blur(10px);
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, .2);

        @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
            flex-direction: column;
        }

        @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
            flex-direction: row;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
            margin-bottom: ${ props => props.theme.space.s8};
        }

        &__logo{

            flex-shrink: 0;

            h2{
                text-transform: uppercase;
                color: ${(props) => props.theme.colors.white};
            }
        }

        .btn--hamburger{
            display: none;

            @media screen and (max-width: ${(props) => props.theme.breakpoint.down.medium}) {
                display: block;
                width: 24px;
                height: 17px;
                background-image: url(${hamburgerIcon});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center center;
            }
        }

        &__list{
            background-color: ${(props) => props.theme.colors.space};
            

            @media screen and (max-width: ${(props) => props.theme.breakpoint.down.medium}){
                position: absolute;
                top: 100%;
                left: 0;
                z-index: ${ (props) => props.theme.zIndex.tooltip};
                padding: 0 ${(props) => props.theme.space.s1xx};
                height: 100vh;
                width: 100%;
                transform: translateY(-900px);
                transition: .45s ease-out transform;

                &.isOpen{
                    transform: initial;
                    transition: .45s ease-out transform;
                }
            }

            @media screen and (min-width: ${ (props) => props.theme.breakpoint.up.medium}) {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: ${ (props) => props.theme.space.s2xx};
                background-color: initial;
            }

            @media screen and (min-width: ${ (props) => props.theme.breakpoint.up.large}) {
                justify-content: flex-end;
                margin-top: initial;
            }

        }

        &__item{
            position: relative;
            color: rgba(255, 255, 255, .75);

            &::before{
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 4px;
                        bottom: 0;
                        left: 0;
            }

            &.active-link,
            &:hover{
                color: ${(props) => props.theme.colors.white};

                &.mercury{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.mercury};
                    }
                }
                &.venus{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.venus};
                    }
                }
                &.earth{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.earth};
                    }
                }
                &.mars{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.mars};
                    }
                }
                &.jupiter{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.jupiter};
                    }
                }
                &.saturn{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.saturn};
                    }
                }
                &.uranus{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.uranus};
                    }
                }
                &.neptune{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.neptune};
                    }
                }
            }

            button{
                font-weight: ${(props) => props.theme.fontWeight.bold};
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.36px;
            }

            @media screen and (max-width: ${(props) => props.theme.breakpoint.down.medium}){
                padding: ${(props) => props.theme.space.s1x} 0;
                padding-left: ${(props) => props.theme.space.s2xxx};

                &::before{
                        content: '';
                        display: block;
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                }

                &::after{
                    content: '';
                    display: block;
                    width: 4px;
                    height: 8px;
                    position: absolute;
                    right: 10px;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    background-image: url(${chevronIcon});
                    background-size: contain;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                &:not(:last-of-type){
                    border-bottom: 1px solid rgba(255, 255, 255, .1);
                }

                &.mercury{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.mercury};
                    }
                }
                &.venus{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.venus};
                    }
                }
                &.earth{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.earth};
                    }
                }
                &.mars{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.mars};
                    }
                }
                &.jupiter{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.jupiter};
                    }
                }
                &.saturn{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.saturn};
                    }
                }
                &.uranus{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.uranus};
                    }
                }
                &.neptune{
                    &::before{
                        background-color: ${ (props) => props.theme.colors.neptune};
                    }
                }
            }

            @media screen and (min-width: ${ (props) => props.theme.breakpoint.up.large}) {
                margin-right: ${ props => props.theme.space.s2};
            }
        }
    }



`;

export default GlobalStyle;