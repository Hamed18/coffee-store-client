import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h3 className="text-center">User</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              /* dynacmic row */
              loadedUsers.map((userData) => (
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>{userData.email}</td>
                  <td>{userData.createdAt}</td>
                  <td>Blue</td>
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
