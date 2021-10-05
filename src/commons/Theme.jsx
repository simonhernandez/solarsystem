import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors: {
        white: "#fff",
        dimWhite: "rgba(255,255,255,.5)",
        space: "#070724",
        gray: "#838391",
        darkGray: "#38384F",
        dimGray: "rgba(216, 216, 216, .2)",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6F2ED6",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
    },
    fonts: {
        primary: "Spartan",
        secondary: "Antonio",
    },
    fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
    },
    fontSizes: {
        h1: {
            mobile: "2.5rem",
            tablet: "3rem",
            desktop: "5rem",
        },
        h2: {
            mobile: "1.25rem",
            tablet: "1.5rem",
            desktop: "2.5rem",
        },
        h3: {
            mobile: ".5625rem",
            tablet: ".5625rem",
            desktop: ".75rem",
        },
        h4: {
            mobile: ".5rem",
            tablet: ".5rem",
            desktop: ".6875rem",
        },
        body: {
            mobile: ".6875rem",
            tablet: ".6785rem",
            desktop: ".875rem",
        },
        big: {
            mobile: "1.25rem",
            tablet: "1.5rem",
            desktop: "2.5rem",
        },
    },
    lineHeight: {
        h1: {
            mobile: "auto",
            tablet: "auto",
            desktop: "6.4375rem",
        },
        h2: {
            mobile: "auto",
            tablet: "auto",
            desktop: "3.25rem",
        },
        h3: {
            mobile: "auto",
            tablet: "auto",
            desktop: "1.5625rem",
        },
        h4: {
            mobile: "1rem",
            tablet: "1rem",
            desktop: "1.5625rem",
        },
        body: {
            mobile: "1.375rem",
            tablet: "1.375rem",
            desktop: "1.5625rem",
        },
        big: {
            mobile: "auto",
            tablet: "auto",
            desktop: "3.25rem",
        },
    },
    letterSpacing: {
        h1: {
            mobile: "normal",
            tablet: "normal",
            desktop: "normal",
        },
        h2: {
            mobile: "-1.5px",
            tablet: "-1.5px",
            desktop: "-1.5px",
        },
        h3: {
            mobile: "2.6px",
            tablet: "2.6px",
            desktop: "2.6px",
        },
        h4: {
            mobile: "1px",
            tablet: "1px",
            desktop: "1px",
        },
        body: {
            mobile: "normal",
            tablet: "normal",
            desktop: "normal",
        },
        big: {
            mobile: "-1.5px",
            tablet: "-1.5px",
            desktop: "-1.5px",
        },
    },
    space: {
        s0: "0rem",       //  0px
        s0x: "0.25rem",   //  4px
        s0xx: "0.5rem",   //  8px
        s0xxx: "0.75rem", // 12px
        s1: "1rem",       // 16px
        s1x: "1.25rem",   // 20px
        s1xx: "1.5rem",   // 24px
        s1xxx: "1.75rem", // 28px
        s2: "2rem",       // 32px
        s2x: "2.25rem",   // 36px
        s2xx: "2.5rem",   // 40px
        s2xxx: "2.75rem", // 44px
        s3: "3rem",       // 48px
        s3x: "3.25rem",   // 52px
        s3xx: "3.5rem",   // 56px
        s3xxx: "3.75rem", // 60px
        s4: "4rem",       // 64px
        s4x: "4.25rem",   // 68px
        s4xx: "4.5rem",   // 72px
        s4xxx: "4.75rem", // 76px
        s5: "5rem",       // 80px
        s5x: "5.25rem",   // 84px
        s5xx: "5.5rem",   // 88px
        s5xxx: "5.75rem", // 92px
        s6: "6rem",       // 96px
        s6x: "6.25rem",   // 100px
        s6xx: "6.5rem",   // 104px
        s6xxx: "6.75rem", // 108px
        s7: "7rem",       // 112px
        s7x: "7.25rem",   // 116px
        s7xx: "7.5rem",   // 120px
        s7xxx: "7.75rem", // 124px
        s8: "8rem",       // 128px
        s8x: "8.25rem",   // 132px
        s8xx: "8.5rem",   // 136px
        s8xxx: "8.75rem", // 140px
        s9: "9rem",       // 144px
        s9x: "9.25rem",   // 148px
        s9xx: "9.5rem",   // 152px
        s9xxx: "9.75rem", // 156px
    },
    zIndex: {
        back: "-1",
        normal: "1",
        tooltip: "10",
        fixed: "100",
        modal: "1000",
    },
    buttons: {
        primary: {
            bg: "transparent",
            color: "#FFF",
            borderColor: "rgba(255, 255, 255, .2)",
            active: {
                bg: "#419EBB",
                color: "#FFF",
            },
            hover: {
                bg: "rgba(216, 216, 216, .2)",
                color: "#FFF",
            },
        },
    },
    breakpoint: {
        up:{
            medium: "640px",
            large: "1024px",
            xlarge: "1460px",
        },
        down:{
            medium: "639px",
            large: "1023px",
            xlarge: "1459px",
        },
    },
};

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;