import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
 // DELETE Operation 
  const handleDelete = (_id) => {
	console.log(_id);
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
	  }).then((result) => {
		if (result.isConfirmed) {
		//  console.log("delete confirmed")
		  fetch(`http://localhost:5000/coffee/${_id}`,{
			method: 'DELETE'
		  })
		  .then(res => res.json())
		  .then(data => {
			console.log(data);
			if (data.deletedCount > 0){
				Swal.fire({
					title: "Deleted!",
					text: "Your coffee has been deleted.",
					icon: "success"
				  });
			}
		  })
		}
	  });
  } 

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
              <button onClick={ () => handleDelete(_id)} className="btn btn-outline btn-warning">Delete</button>
			</div>
          </div>
        </div>
      </div>
  );
};

export default CoffeeCard;
