import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/productAction";
const Create = () => {
  const [creates, setCreate] = useState({
    brand: "",
    thumbnail: "",
    description: "",
    price: "",
    rating: "",
    category: "",
  });
  const dispatch = useDispatch()
  const handleCreate = (event) => {
    setCreate({ ...create, [event.target.name]: event.target.value });
  };
//   function handleClick() {
//     fetch("https://dummyjson.com/products/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(create),
//     })
//       .then((res) => res.json())
//       .then(console.log);
//   }
  return (
    <div>
        
      <form onSubmit={()=> dispatch(create(creates))  } className="flex flex-col">
        <h6>Brand</h6>
        <input type="text" required name="brand" onChange={handleCreate} className="input"/>
        <h6>Description</h6>
        <input
          type="text"
          required
          name="description"
          onChange={handleCreate}
        />
        <h6>Number</h6>
        <input type="number" required name="price" onChange={handleCreate} />
        <h6>Rating</h6>
        <input type="number" maxLength={5} required name="rating" onChange={handleCreate} />
        <h6>Category</h6>
        <input type="text" required name="category" onChange={handleCreate} />
        <h6>File Image</h6>
        <input type="file" required name="thumbnail" onChange={handleCreate} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
