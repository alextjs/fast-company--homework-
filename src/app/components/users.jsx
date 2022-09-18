import User from "./user";


const Users = ({ userAll, ...rest }) => {

return (
    <>
        { userAll.length > 0 && (
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
                    userAll.map((item) => (
                            <User key={item._id} {...item} {...rest}/>
                        )
                    )
                }
                </tbody>
            </table>
        )}
    </>
)
}

export default Users;