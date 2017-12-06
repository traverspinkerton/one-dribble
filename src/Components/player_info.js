import React from 'react';

function PlayerInfo(props) {
  if (props.list[0]) {
    const about = props.list[0].rowSet[0];
    const currAvgs = props.list[1].rowSet[0];
    console.log(currAvgs);

    return  (
        <div>
        <h2>{about[3]}</h2>
        <h3>{about[20]} {about[17]}, {about[14]}, #{about[13]}</h3>
        <p> {about[10]}, {about[11]} lbs, School/Origin: {about[7]}, Country: {about[8]}</p>
        <p> {currAvgs[2]} season: {currAvgs[3]} pts, {currAvgs[5]} reb, {currAvgs[4]} ast, PIE {currAvgs[5]}</p>

        </div>
      );
  } else {
    return <div></div>;
  }
}

export default PlayerInfo;
