import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";


function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(users);
    const handleDelete = (userId) => {
        setUsers(users.filter((item) => item._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                userAll={users}
                onHandleDelete={handleDelete}
                onHandleToggleMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;