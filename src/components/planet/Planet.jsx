import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, PlanetButtonContainer, PlanetInfoLink, PlanetImg, PlanetSummary, PlanetDetailsList, PlanetDetailsItem} from "./Planet.styled";

const Planet = ({ planetData }) => {

    const {name, overview, structure, geology, rotation, revolution, radius, temperature, images} = planetData;

    const [imgPathKey, setImgPathKey] = useState('planet');

    const [rotate, setRotate] = useState(0);

    const summaryValues = [
        {"overview": overview}, 
        {"structure": structure}, 
        {"surface" : geology}
    ];

    const [index, setIndex] = useState(0);

    const setPlanetInfo = (info, newIndex) => {

        setIndex(newIndex);

        switch (info) {
            case "overview":
                setImgPathKey('planet');
                break;
            case "structure":
                setImgPathKey('internal');
                break;
            case "surface":
                setImgPathKey('geology');
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        setRotate(rotate + 360);
    }, [name, index]);

    useEffect(() => {
        setIndex(0);
        setImgPathKey('planet');
    }, [name]);

    return (
        <Container>
            <PlanetButtonContainer planet={name.toLowerCase()}>
                {summaryValues.map((summaryValue, newIndex) => {
                    const info = Object.keys(summaryValue)[0];
                    return <motion.button 
                                    className={index === newIndex && 'active-btn'} 
                                    key={newIndex} 
                                    onClick={() => setPlanetInfo(info, newIndex)}
                                    whileTap={ { scale: 0.75}}
                            >
                                {info}
                            </motion.button>;
                })}
            </PlanetButtonContainer>

            <PlanetImg planet={name}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: rotate, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                >
                        {index === 2 ? 
                            <>
                                <img className="img-bottom" src={images['planet']} alt="" />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                      type: "spring",
                                      delay: .2,
                                    }}
                                >
                                    <img className="img-top" src={images['geology']} alt="" /> 
                                </motion.div>
                            </>
                            :
                            <img src={images[imgPathKey]} alt="" />
                        }
                </motion.div>
            </PlanetImg>
            <PlanetSummary>
                <h1>{name}</h1>
                <p className="content">{Object.values(summaryValues[index])[0].content}</p>
                <p className="text-dimWhite">Source: <a href={Object.values(summaryValues[index])[0].source} target="_blank">Wikipedia</a></p>
            </PlanetSummary>
            <PlanetDetailsList>
                <PlanetDetailsItem>
                    <h4>rotation time</h4>
                    <span className="text-big">{rotation}</span>
                </PlanetDetailsItem>

                <PlanetDetailsItem>
                    <h4>revolution time</h4>
                    <span className="text-big">{revolution}</span>
                </PlanetDetailsItem>

                <PlanetDetailsItem>
                    <h4>radius</h4>
                    <span className="text-big">{radius}</span>
                </PlanetDetailsItem>

                <PlanetDetailsItem>
                    <h4>average temp.</h4>
                    <span className="text-big">{temperature}</span>
                </PlanetDetailsItem>
            </PlanetDetailsList>
        </Container>
    );
}

export default Planet;