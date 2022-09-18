import React from "react";
import Qualities from "./qualitie";
import BookMark from "./bookmark";


const User = (props) => {
    const { name, qualities, _id, profession, rate, completedMeetings, onHandleDelete, onHandleToggleMark, bookmark } = props;
    return (

        <tr key={_id}>
            <th>{name}</th>
            <td>{qualities.map((user) => (
                <Qualities key={user._id} {...user}/>
            ))}</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{`5/${rate}`}</td>
            <td><BookMark id={_id} onToggleMark={onHandleToggleMark} mark={bookmark}/></td>
            <td><button className={"btn btn-danger p-1"} onClick={() => onHandleDelete(_id)}>Delete</button></td>
    </tr>
    )
}

export default User;