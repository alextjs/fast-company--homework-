import React, {useState, useEffect} from "react";
import Users from "./components/users";
import API from "./api";


function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
      API.users.fetchAll().then((data) => setUsers(data))
    }, [])

    const handleDelete = (userId) => {
      setUsers(users.filter((item) => item._id !== userId));
    };

    console.log(users);


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
        {users && 
          <Users
          userAll={users}
          onHandleDelete={handleDelete}
          onHandleToggleMark={handleToggleBookMark}
          />

        }
        </>
    );
}

export default App;