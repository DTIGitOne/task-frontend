import axiosInstance from "./Axios";

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get("/users");
        console.log('Users:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
 }

 export const getUser = async (id) => {
  try {
      const response = await axiosInstance.get(`/users/${id}`);
      console.log('User:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
}

export const createUser = async (name, surname, email, phone) => {
  try {
    const userData = {
      firstName: name,
      lastName: surname,
      email: email,
      phoneNumber: phone
    };

    const response = await axiosInstance.post('/users', userData);

    console.log('Created User:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const DeleteUserCall = async (id) => {
  try {
      const response = await axiosInstance.delete(`/users/${id}`);
      console.log('User deleted:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
}