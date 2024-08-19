import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const User = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers)

  const [users,setUsers] = useState(loadedUsers);
  const handleDelete = id => {
	fetch(`http://localhost:5000/user/${id}`,{
		method: 'DELETE'
	})
	.then(res => res.json())
	.then(data => {
		if (data.deletedCount > 0){
			console.log('deleted successfully');
		}
	})
	const result = loadedUsers.filter(obj => obj._id != id)
	setUsers(result);
  }

  return (
    <div>
	  <Header></Header>
      <h3 className="text-center">User</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th className="text-center">Created At</th>
              <th className="text-center">Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              /* dynacmic row */
              users.map((userData) => (
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>{userData.email}</td>
                  <td>{userData.createdAt}</td>
                  <td></td>
                  <td>
					<button onClick={()=>handleDelete(userData._id)} className="btn"> X </button>
				  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
