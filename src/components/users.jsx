import React, {useState} from 'react';
import api from "../api";


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((item) => item._id !== userId));
    }

    const renderPhrase = (number) => {
        const lastNumber = Number(number.toString().slice(-1));
        if (lastNumber === 1) return 'Человек тусанёт'
        if (number > 4 && number < 15) return 'Человек тусанёт'
        if ([2,3,4].indexOf(lastNumber) >= 0) return 'Человека тусанут'
        return 'Человек тусанёт'
    }


    return <>
        <h2><span className={`badge ${users.length > 0 ? 'bg-primary' : 'bg-danger'} p-2`}> {users.length > 0 ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня` : 'Никто с тобой не тусанёт'}</span></h2>
        { users.length > 0 && (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качество</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился,раз</th>
                    <th scope="col">Оценка</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item) => (
                            <tr key={item._id}>
                                <th>{item.name}</th>
                                <td>{item.qualities.map((user,id) => (
                                    <span key={id} className={`badge bg-${user.color} me-1`}>{user.name}</span>
                                ))}</td>
                                <td>{item.profession.name}</td>
                                <td>{item.completedMeetings}</td>
                                <td>{`5/${item.rate}`}</td>
                                <td><button className={"btn btn-danger p-1"} onClick={() => handleDelete(item._id)}>Delete</button></td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        )}

    </>
}

export default Users;