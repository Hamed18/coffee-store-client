import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // will render whole form's html structure
    const form = new FormData(e.currentTarget); // will render form data
    console.log(form);
    console.log(form.get("password")); // will render the password user have set
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email,password)
	.then(result => {
		console.log(result.user);
		const user = {
			email,
			lastLoggedAt: result.user?.metadata?.lastSignInTime
		}
		// update last logged at time in the database
		fetch('http://localhost:5000/user',{  // no dynamic id needed as email is unique
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)  // sending the user obj in database
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			alert("user data has updated in database using Patch")
		})
	})
	.catch(error => {
		console.error(error);
	})
  };

  return (
    <div>
      <Header></Header>
      <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>
      <form onSubmit={handleSignIn} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
