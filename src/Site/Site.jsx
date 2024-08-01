import CreateUser from "../Components/CreateUser";
import DeleteUser from "../Components/DeleteUser";
import GetSingleUser from "../Components/GetSingleuser";
import GetUsersComponenet from "../Components/getUsers";

const Site = () => {
    return (
        <div className=" w-full h-full flex flex-col">
            <GetUsersComponenet />
            <GetSingleUser />
            <CreateUser />
            <DeleteUser />
        </div>
    );
}

export default Site;