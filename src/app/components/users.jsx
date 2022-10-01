import User from "./user";
import Pagination from "./pagination";
import {useState} from "react";
import {paginise} from "../../utilits/paginise";
import GroupList from "./groupList";
import { useEffect } from "react";
import SearchStatus from "./searchStatus";
import { professions } from "../api/fake.api/professions.api";
import API from "../api";

const Users = ({ userAll, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [profession,setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 4;

    useEffect(() => {
      API.professions.fetchAll().then((data) => setProfession(data))
    }, []);

    console.log(userAll);

    useEffect(() => {
      setCurrentPage(1)
    }, [selectedProf])



    const handleProfessionSelect = (item) => {
      setSelectedProf(item)
    }
     

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }

    
    const filteredUsers = selectedProf 
    ? userAll.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) 
    : userAll;
    console.log(filteredUsers);
    const count = filteredUsers.length;
    const userCrop = paginise(filteredUsers, currentPage, pageSize);
    

    const clearFilter = () => {
      setSelectedProf();
    }

  return (
    <div className="d-flex">
    
    {profession && (
      <div className="d-flex flex-column flex-shrink-0 p-3">
      <GroupList items={profession} 
        onItemSelect={handleProfessionSelect} 
        valueProperty="_id" 
        contentProperty="name" 
        selectedItem={selectedProf}
        />
        <button className="btn btn-secondary mt-2" onClick={clearFilter}>Clear</button>
        </div>
    )}

        <div className="d-flex flex-column">
        <SearchStatus length={count}/>
        { count > 0 && (
          
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качество</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился,раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    userCrop.map((item) => (
                            <User key={item._id} {...item} {...rest}/>
                        )
                    )
                }
                </tbody>
            </table>
        )}
        <div className="d-flex justify-content-center">
        <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
        </div>
        </div>
        </div>
)
}

export default Users;