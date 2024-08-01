import { getUsers } from "../Api/Calls";

const { useState } = require("react");

const GetUsersComponenet = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            
            const data = await response;
            setUsers(data);

            console.log(data);
            
        } catch (e) {
            console.error('Error fetching users:', e);
        }
    };

    const handleSend = () => {
        fetchUsers();
    }

    return (
        <div className=" h-screen w-full flex bg-red-300">
            <div className=" w-1/2 h-full flex justify-center items-center">
              <button className=" bg-red-800 hover:bg-red-950 p-5 text-white rounded-md" onClick={handleSend}>Get Users</button>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center overflow-auto">
              {users.length > 0 ? (
                    <ul className=" flex flex-col gap-3 overflow-auto">
                        {users.map(user => (
                            <li className=" p-2 bg-slate-200 rounded-md" key={user._id}>
                                {user.firstName} {user.lastName} ({user.email})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No users available.</p>
                )}
            </div>
        </div>
    );
}

export default GetUsersComponenet;