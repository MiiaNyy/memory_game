import {v4 as uuidv4} from 'uuid';

// all images are on this page unless otherwise noted https://sailormoon.fandom.com/wiki/Sailor_Moon_Wiki

import artemis from '../images/Artemis.png'; //https://www.pngkey.com/detail/u2e6a9a9q8o0e6w7_artemis-sailor-moon-luna-sailor-jupiter-sailor-moon/
import ddGirls from '../images/dd-girls.png';
import luna from '../images/luna.png';
import kakyuu from '../images/princess-kakyuu.png';
import nehelenia from '../images/Queen_Nehelenia.jpg'; //https://ultimatepopculture.fandom.com/wiki/Queen_Nehelenia
import beryl from '../images/queen-beryljpg.jpg'; // https://i.pinimg.com/474x/83/b0/9e/83b09e7daa906cee13153d63e71b3f26.jpg
import serenity from '../images/queen-serenity.jpg'; //https://sailormooncrystal.fandom.com/wiki/Queen_Serenity
import chibiMoon from '../images/Chibi_Bust.png';
import jupiter from '../images/Jupiter_Bust.png';
import mars from '../images/Mars_Bust.png';
import moon from '../images/Moon_Bust.png';
import venus from '../images/Venus_Bust.png';
import galaxia from '../images/sailor-galaxia.jpg'; //https://realdeathbattleimp.blogspot.com/2020/07/how-strong-is-sailor-galaxia-death.html
import mercury from '../images/Mercury_Bust.png';
import neptune from '../images/Neptune_Bust.png';
import pluto from '../images/Sailor-Pluto.png';
import saturn from '../images/Sailor_Saturn.png';
import uranus from '../images/Uranus_Bust.png';
import starLights from '../images/starlights.jpg'
import tuxedoMask from '../images/tuxedo-mask.jpg';

const characterData = [
    {
        name: 'Artemis',
        image: artemis,
        description: 'White cat with moon circle in his forehead',
        id: uuidv4(),
    },
    {
        name: 'DD-Girls',
        image: ddGirls,
        description: 'Five different color villain looking women',
        id: uuidv4(),
    },
    {
        name: 'Luna',
        image: luna,
        id: uuidv4(),
        description: '',
    },
    {
        name: 'Princess Kakyuu',
        image: kakyuu,
        description: 'Black cat with moon circle in his forehead',
        id: uuidv4(),
    },
    {
        name: 'Queen Nehelenia',
        image: nehelenia,
        description: 'Black haired woman with green and white dress',
        id: uuidv4(),
    },
    {
        name: 'Queen Beryl',
        image: beryl,
        description: 'Red haired woman with long staff and purple dress',
        id: uuidv4(),
    },
    {
        name: 'Queen Serenity',
        image: serenity,
        description: 'White haired woman with gray eyes',
        id: uuidv4(),
    },
    {
        name: 'Sailor Chibi Moon',
        image: chibiMoon,
        description: 'Little girl in a pink sailor outfit',
        id: uuidv4(),
    },
    {
        name: 'Sailor Jupiter',
        image: jupiter,
        description: 'Brown haired woman with white and green colored sailor outfit',
        id: uuidv4(),
    },
    {
        name: 'Sailor Mars',
        image: mars,
        description: 'Black haired woman with green and white sailor outfit ',
        id: uuidv4(),
    },
    {
        name: 'Sailor Moon',
        image: moon,
        description: 'Main character with long blond hair',
        id: uuidv4(),
    },
    {
        name: 'Sailor Venus',
        image: venus,
        description: 'Blond haired woman with yellow sailor outfit',
        id: uuidv4(),
    },
    {
        name: 'Sailor Galaxia',
        image: galaxia,
        description: 'Royalty with long sword and gold armor',
        id: uuidv4(),
    },
    {
        name: 'Sailor Mercury',
        image: mercury,
        description: 'Woman with short blue hair and blue sailor outfit',
        id: uuidv4(),
    },
    {
        name: 'Sailor Neptune',
        image: neptune,
        description: 'Little girl with green hair and green and blue colored sailor outfit',
        id: uuidv4(),
    },
    {
        name: 'Sailor Pluto',
        image: pluto,
        description: 'Green hair and sailor outfit with long staff',
        id: uuidv4(),
    },
    {
        name: 'Sailor Saturn',
        image: saturn,
        description: 'Shiny black hair, purple sailor outfit and long staff',
        id: uuidv4(),
    },
    {
        name: "Sailor Starlight's",
        image: starLights,
        description: 'Three short haired woman with black bikinis',
        id: uuidv4(),
    },
    {
        name: 'Sailor Uranus',
        image: uranus,
        description: 'Woman with short blond hair',
        id: uuidv4(),
    },
    {
        name: 'Tuxedo Mask',
        image: tuxedoMask,
        description: 'A man with tuxedo, black cape and a hat',
        id: uuidv4(),
    },
];

export default characterData;


