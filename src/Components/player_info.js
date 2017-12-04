import React from 'react';

function PlayerInfo(props) {
  if (props.list[0]) {
    return  (
        <div>
          <ul>
            <li>Hi! {props.list[0].displayFirstLast}</li>
            <li>{props.list[1].playerName}</li>
          </ul>
        </div>
      );
  } else {
    return <div>heya there</div>;
  }
}

export default PlayerInfo;
