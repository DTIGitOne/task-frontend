import { useState } from "react";
import { createUser } from "../Api/Calls";

const CreateUser = () => {
    const [createdUser, setCreatedUser] = useState(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleCreate = async () => {
        try {
             const response = await createUser(name, surname, email, phone);

             setCreatedUser(response);
        } catch(e) {
            console.log(e);
        }
    }

    const handleSend = () => {
        if (name !== "" && surname !== "" && email !== "" && phone !== "") {
            handleCreate();
        }
    }

    return (
        <div className=" w-full h-screen bg-blue-200 flex">
            <div className=" h-full w-1/2 flex justify-center items-center flex-col gap-4">
             <input value={name} onChange={(e) => setName(e.target.value)} className=" p-3 rounded-md" placeholder="Name"/>
             <input value={surname} onChange={(e) => setSurname(e.target.value)} className=" p-3 rounded-md" placeholder="Surname"/>
             <input value={email} onChange={(e) => setEmail(e.target.value)} className=" p-3 rounded-md" placeholder="example@gmail.com"/>
             <input value={phone} onChange={(e) => setPhone(e.target.value)} className=" p-3 rounded-md" placeholder="Number"/>
             <button onClick={handleSend} className=" p-3 bg-slate-400 hover:bg-slate-500 px-10 rounded-md ">Create</button>
            </div>
            <div className=" h-full w-1/2 flex justify-center items-center">
            {createdUser ? (
                    <div className="p-2 bg-slate-100 rounded-md ">
                        <p><strong>Name:</strong> {createdUser.firstName} {createdUser.lastName}</p>
                        <p><strong>Email:</strong> {createdUser.email}</p>
                        <p><strong>Phone:</strong> {createdUser.phoneNumber}</p>
                    </div>
                ) : (
                    <p>No user created.</p>
             )}
            </div>
        </div>
    );
}

export default CreateUser;