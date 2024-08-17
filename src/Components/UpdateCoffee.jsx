import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

	const HandleUpdateCoffee = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;
	
		// create an object from user input data
		const UpdatedCoffee = {name,quantity,supplier,taste,category,details,photo}
		console.log(UpdatedCoffee);
	
		// send data to the server (CREATE Operation)
		fetch(`http://localhost:5000/coffee/${_id}`,{   // net::ERR_CONNECTION_REFUSED  // MongoNotConnectedError: Client must be connected before running operations
			method: 'PUT',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(UpdatedCoffee)
		})
		  .then(res => res.json())
		  .then(data => {
			console.log(data);
		    if (data.modifiedCount > 0){
			Swal.fire({
			  title: "Success",
			  text: "Coffee Updated Successfully",
			  icon: "success",
			  confirmButtonText: 'OK'
			});
		   }
		  })
	}

	return (
		<div className="max-w-6xl ">
		<h3 className="text-center">Update Coffee</h3>
		<form onSubmit={HandleUpdateCoffee} className="mt-12">
		<div className="md:flex justify-center md:space-x-5 mt-8 w-full">
		  <div>
			<label className="input input-bordered flex items-center gap-2">
			  Name
			  <input
				type="text"
				name="name"
				defaultValue={name}
				className="grow"
				placeholder="Enter Coffee Name" />
			</label>
		  </div>
		  <div>
			<label className="input input-bordered flex items-center gap-2">
				  quantity
			  <input
				type="text"
				name="quantity"
				defaultValue={quantity}
				className="grow"
				placeholder="Enter Coffee quantity" />
			</label>
		  </div>
		</div>
  
		<div className="md:flex justify-center md:space-x-5 mt-8">
		  <div>
			<label className="input input-bordered flex items-center gap-2">
			  Supplier
			  <input
				type="text"
				name="supplier"
				defaultValue={supplier}
				className="grow"
				placeholder="Enter Coffee Supplier" />
			</label>
		  </div>
		  <div className="">
			<label className="input input-bordered flex items-center gap-2">
			  Taste
			  <input
				type="text"
				name="taste"
				defaultValue={taste}
				className="grow"
				placeholder="Enter Coffee Taste" />
			</label>
		  </div>
		</div>
  
		<div className="md:flex justify-center md:space-x-5 mt-8">
		  <div>
			<label className="input input-bordered flex items-center gap-2">
			  Category
			  <input
				type="text"
				name="category"
				defaultValue={category}
				className="grow"
				placeholder="Enter Coffee Category" />
			</label>
		  </div>
		  <div>
			<label className="input input-bordered flex items-center gap-2">
			  Details
			  <input
				type="text"
				name="details"
				defaultValue={details}
				className="grow"
				placeholder="Enter Coffee detais" />
			</label>
		  </div>
		</div>
  
		<div className="flex justify-center mt-2">
			<label className="input input-bordered flex items-center gap-2">
			  Photo
			  <input
				type="text"
				name="photo"
				defaultValue={photo}
				className="grow w-full"
				placeholder="Enter Photo URL" />
			</label>
		</div>
		<button className="btn btn-neutral flex justify-center items-center">Neutral</button>
  
		</form>
	</div>
	);
};

export default UpdateCoffee;