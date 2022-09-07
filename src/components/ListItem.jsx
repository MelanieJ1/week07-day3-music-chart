import React from "react";

const ListItem = ({ song , index}) => {
    return (
        <p>{song["im:name"]["label"]} - <b>{song["im:artist"]["label"]}</b> Chart Position: {index+1}</p>
        )
}

export default ListItem;