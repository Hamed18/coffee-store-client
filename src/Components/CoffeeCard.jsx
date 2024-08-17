const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
      <div className="card bg-base-100 card-side shadow-xl">
		<figure><img src={photo} alt="" className=""/></figure>
        <div className="flex justify-between w-full pr-4">
		  <div>
		    <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
		  </div>
          <div className="card-actions justify-end">
			<div className="btn-group btn-group-vertical space-y-4">
			  <button className="btn btn-outline btn-info">View</button>
              <button className="btn btn-outline btn-success">Edit</button>
              <button className="btn btn-outline btn-warning">Delete</button>
			</div>
          </div>
        </div>
      </div>
  );
};

export default CoffeeCard;
