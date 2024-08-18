import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handleSignUp = e =>{
		e.preventDefault();
		console.log(e.currentTarget); // will render whole form's html structure
        const form = new FormData(e.currentTarget); // will render form data
        console.log(form);
        console.log(form.get("password")); // will render the password user have set
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

		createUser(email,password)
		.then(result =>{
		  console.log(result.user)
		})
		.catch(error =>{
		  console.error(error)
		})
	  
	}

  return (
        <div>
          <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>
          <form onSubmit={handleSignUp} className="md:w-3/4 lg:w-1/2 mx-auto">
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

export default SignUp;