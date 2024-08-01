import { useState } from "react";
import { getUser } from "../Api/Calls";

const GetSingleUser = () => {
    const [user, setUser] = useState(null);
    const [idInput, setIdInput] = useState("");

    const fetchUser = async () => {
        try {
            const response = await getUser(idInput);

            setUser(response);

            console.log(response);
        } catch(e) {
            console.error(e);
        }
    }

    const handleSearch = () => {
        if (idInput !== "") {
            fetchUser();
        }
    }

    return (
        <div className=" h-screen w-full bg-lime-200 flex">
            <div className=" h-full w-1/2 flex justify-center items-center flex flex-col gap-5">
             <input value={idInput} onChange={(e) => setIdInput(e.target.value)} placeholder="User ID" className=" p-3 rounded-md" />
             <button onClick={handleSearch} className=" bg-lime-500 p-4 rounded-md hover:bg-lime-700">Search for user</button>
            </div>
            <div className=" h-full w-1/2 flex justify-center items-center flex ">
            {user ? (
                    <div className="p-2 bg-slate-100 rounded-md ">
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phoneNumber}</p>
                    </div>
                ) : (
                    <p>No user available.</p>
             )}
            </div>
        </div>
    );
}

export default GetSingleUser;