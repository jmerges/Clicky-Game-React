import React from "react";

function Token (props) {
    var charPic = "";
    switch (props.charId) {
        case 1:
            charPic = "./images/fry.jpg";
            break;
        case 2:
            charPic = "./images/Turanga-Leela.png";
            break;
        case 3:
            charPic = "./images/Bender_Rodriguez.png";
            break;
        case 4:
            charPic = "./images/AmyWong.png";
            break;
        case 5:
            charPic = "./images/Professor-Farnsworth.png";
            break;
        case 6:
            charPic = "./images/Hermes-Conrad.jpg";
            break;
        case 7:
            charPic = "./images/zoidberg.jpg";
            break;
        case 8:
            charPic = "./images/Scruffy.jpg";
            break;
        case 9:
            charPic = "./images/Zapp-Brannigan.jpeg";
            break;
        case 10:
            charPic = "./images/Kif-Kroker.png";
            break;
        case 11:
            charPic = "./images/Morbo.jpg";
            break;
        case 12:
            charPic = "./images/Nibbler.jpg";
            break;
    }
    console.log(props);


    function select() {
        props.onPickedChange(props.charId);
        // window.location.reload(false);
    }

    var cardStyle = {
        height: "20rem",
        width: "20rem"
    }

    var imgStyle = {
        height: "17rem",
        width: "20rem"
    }

    return <div className="card" style={cardStyle}>
        <img src={charPic} style={imgStyle} alt={"Character ID: "+props.charId}/>
        <button onClick={select} className="btn">Select</button>
    </div>
}

export default Token;