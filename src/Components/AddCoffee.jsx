const AddCoffee = () => {
  const handleAddCoffee = event => {
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
	const newCoffee = {name,quantity,supplier,taste,category,details,photo}
	console.log(newCoffee);

  }
  return (
    <div className="max-w-6xl ">
      <h3 className="text-center">Add Coffee</h3>
	  <form onSubmit={handleAddCoffee} className="mt-12">
	  <div className="md:flex justify-center md:space-x-5 mt-8 w-full">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
			  name="name"
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
              className="grow"
              placeholder="Enter Photo URL" 
			  className="w-full"/>
          </label>
      </div>
	  <button className="btn btn-neutral flex justify-center items-center">Neutral</button>

	  </form>
  </div>
  );
};

export default AddCoffee;
