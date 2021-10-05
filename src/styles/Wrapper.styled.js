import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: inherit;
    grid-template-columns: inherit;
    grid-template-rows: inherit;
    grid-template-areas: inherit;
    grid-row: 1/-1;
    grid-column: 1/-1;
    gap: inherit;
    column-gap: inherit;
    row-gap: inherit;
    justify-content: inherit;
    align-items: inherit;
    flex-direction: inherit;

    /* Mobile */
    padding: 0 ${(props) => props.theme.space.s1xx};
    
    /* Tablet */
    @media screen and (min-width: ${(props) => props.theme.breakpoint.up.medium}){
        padding: 0 ${(props) => props.theme.space.s2xx};
    }

    /* Desktop */
    @media screen and (min-width: ${(props) => props.theme.breakpoint.up.large}){
        padding: 0 ${(props) => props.theme.space.s2};
    }


`;