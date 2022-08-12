import React from "react";
import "./AddItems.css";
import { useForm } from "react-hook-form";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:7000/addItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      <input
        required
        {...register("itemName")}
        placeholder=" Enter Product Item"
      />

      <input
        required
        {...register("description")}
        placeholder=" Enter Product Description"
      />

      <input
        required
        type="number"
        {...register("price")}
        placeholder=" Product Price"
      />

      <input required placeholder="Quantity" {...register("quantity")} />

      <input
        required
        placeholder="SupplierName"
        {...register("supplierName")}
      />

      <input required placeholder="Img URL" {...register("imgURL")} />

      {/* <input {...register("itemName")} /> */}

      <input type="submit" />
    </form>
  );
};

export default AddItems;
