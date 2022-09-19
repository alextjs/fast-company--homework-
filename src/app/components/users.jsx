import User from "./user";
import Pagination from "./pagination";
import {useState} from "react";
import {paginise} from "../../utilits/paginise";


const Users = ({ userAll, ...rest }) => {
    console.log(userAll)
    console.log(...userAll)
    const count = userAll.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }

    const userCrop = paginise(userAll, currentPage, pageSize);



return (
    <>
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
        <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>

    </>
)
}

export default Users;