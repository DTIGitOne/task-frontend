import { useState } from "react";
import { DeleteUserCall } from "../Api/Calls";

const DeleteUser = () => {
    const [userDeleted, setUserDeleted] = useState(null);
    const [idInput, setIdInput] = useState("");

    const deleteUserFunc = async () => {
        try {
            // Call the deleteUser function from the API
            const response = await DeleteUserCall(idInput);
            
            // Update state based on the response
            setUserDeleted(response);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    const handleDelete = () => {
        if (idInput !== "") {
            deleteUserFunc();
        }
    }

    return (
        <div className="h-screen w-full flex bg-orange-200">
            <div className="h-full w-1/2 flex justify-center items-center flex flex-col gap-5">
                <input 
                    value={idInput} 
                    onChange={(e) => setIdInput(e.target.value)} 
                    placeholder="User ID" 
                    className="p-3 rounded-md" 
                />
                <button 
                    onClick={handleDelete} 
                    className="bg-orange-400 p-4 rounded-md hover:bg-lime-700"
                >
                    Delete user
                </button>
            </div>
            <div className="h-full w-1/2 flex justify-center items-center flex">
                {userDeleted && (
                    <p>{userDeleted ? "User deleted successfully." : "Failed to delete user."}</p>
                )}
            </div>
        </div>
    );
}

export default DeleteUser;
