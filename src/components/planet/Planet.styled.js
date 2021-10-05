import styled from "styled-components";
import sourceIcon from "../../assets/icon-source.svg"

const planetImageWidths = {
    "mercury": {
        "mobile" : "111px",
        "tablet" : "184px",
        "desktop" : "290px",
    },
    "venus": {
        "mobile" : "154px",
        "tablet" : "253px",
        "desktop" : "400px",
    },
    "earth": {
        "mobile" : "173px",
        "tablet" : "285px",
        "desktop" : "450px",
    },
    "mars": {
        "mobile" : "129px",
        "tablet" : "213px",
        "desktop" : "336px",
    },
    "jupiter": {
        "mobile" : "224px",
        "tablet" : "369px",
        "desktop" : "582px",
    },
    "saturn": {
        "mobile" : "256px",
        "tablet" : "422px",
        "desktop" : "666px",
    },
    "uranus": {
        "mobile" : "176px",
        "tablet" : "290px",
        "desktop" : "458px",
    },
    "neptune": {
        "mobile" : "173px",
        "tablet" : "285px",
        "desktop" : "450px",
    },

}

export const Container = styled.div`

    margin-top: ${props => props.theme.space.s3xxx};

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: "img img"
                              "summary buttons"
                              "details details";

        column-gap: ${props => props.theme.space.s4x};
        margin-top: ${props => props.theme.space.s9xxx};
    }

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "img img summary"
                             "img img buttons"
                              "details details details";
        column-gap: ${props => props.theme.space.s2x};
        max-width: 1110px;
        margin-left: auto;
        margin-right: auto;
        margin-top: ${props => props.theme.space.s7x};
    }

`;

export const PlanetButtonContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.2);
    margin-bottom: ${(props) => props.theme.space.s6};
    counter-reset: number;

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        grid-area: buttons;
        border-top: initial;
        border-bottom: initial;
        margin-bottom: initial;
        flex-direction: column;
        justify-content: center;
    }
    
    button{
        padding: ${(props) => props.theme.space.s1x} 0;
        position: relative;
        text-transform: uppercase;
        font-weight: ${(props) => props.theme.fontWeight.bold};
        color: rgba(255, 255, 255, .5);
        letter-spacing: 1.93px;

        &:hover{
            background-color: rgba(216, 216, 216, .2);
        }

        &.active-btn{
            color: ${ props => props.theme.colors.white};
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 2.5px;
                background-color: ${ (props) => props.theme.colors[props.planet]};
                position: absolute;
                bottom: 0;
            }
        }

        @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
            border: 1px solid ${ props => props.theme.colors.dimGray};
            padding: ${(props) => props.theme.space.s0xx} ${(props) => props.theme.space.s1x};
            color: ${ props => props.theme.colors.white};
            text-align: left;

            &:not(:last-of-type){
                margin-bottom: ${(props) => props.theme.space.s1};
            }

            &::before{
                counter-increment: number;
                content: "0" counter(number) "     ";
                white-space: pre;
                color: ${props => props.theme.colors.dimWhite};
            }

            &.active-btn{
                background-color: ${ (props) => props.theme.colors[props.planet]};

                &::after {
                    display: none;
                }
            }
        }

        @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
            margin-bottom: ${ props => props.theme.space.s5xx};
        }
    }
    `;

export const PlanetImg = styled.div`
    width: ${props => { return planetImageWidths[props.planet.toLowerCase()]["mobile"]} };
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.space.s6};
    display: flex;
    align-items: center;
    
    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        width: ${props => { return planetImageWidths[props.planet.toLowerCase()]["tablet"]} };
        grid-area: img;
        margin-bottom: initial;
    }

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
        width: ${props => { return planetImageWidths[props.planet.toLowerCase()]["desktop"]} };
    }

    position: relative;

    .img-top{
        position: absolute;
        top: 60%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 65%;
        
        @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
            width: 40%;
        }
        
        @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
            width: 35%;
        }
    }

`;

export const PlanetSummary = styled.div`
    text-align: center;

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        grid-area: summary;
        text-align: initial;
    }

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}) {
        align-self: flex-end;
    }

    h1 {
        margin-bottom: ${ (props) => props.theme.space.s1};
    }
    
    p {
        margin-bottom: ${ (props) => props.theme.space.s2};
    }

    a {
        position: relative;
        text-decoration: underline;
        &::after {
            content: '';
            display: block;
            width: 12px;
            height: 12px;
            position: absolute;
            top: 0;
            right: -16px;
            background-image: url(${ sourceIcon });
        }

        &:hover{
            color: ${props => props.theme.colors.white};
        }
    }

    .content{
        
        @media screen and (min-width: ${ props => props.theme.breakpoint.up.large}){
            min-height: 175px;
        }
    }

`;

export const PlanetDetailsList = styled.ul`
    margin-bottom: ${ (props) => props.theme.space.s3};

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        grid-area: details;
        display: flex;
        justify-content: space-between;
    }


`;

export const PlanetDetailsItem = styled.li`
    margin-bottom: ${ (props) => props.theme.space.s0xx};
    border: 1px solid ${ (props) => props.theme.colors.dimGray};
    padding: ${ (props) => props.theme.space.s0xx} ${ (props) => props.theme.space.s1xx};
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        border-color: ${props => props.theme.colors.white};
    }
    
    h4 {
        text-transform: uppercase;
        color: rgba(255,255,255,.5);
    }

    @media screen and (min-width: ${ props => props.theme.breakpoint.up.medium}) {
        flex-direction: column;
        flex: 1 1 0px;
        align-items: flex-start;
        padding: ${ (props) => props.theme.space.s1};
        margin-bottom: initial;
        
        &:not(:last-of-type){
            margin-right: ${ (props) => props.theme.space.s0xxx};
        }

        h4 {
            margin-bottom: ${ (props) => props.theme.space.s0xx};
        }
    }
`;