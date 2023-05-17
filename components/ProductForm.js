import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  // images: existingImages,
  // category: assignedCategory,
  // properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(String(existingPrice) || ""); // Convert existingPrice to a string
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  // const [category, setCategory] = useState(assignedCategory || "");
  // const [productProperties, setProductProperties] = useState(
  //   assignedProperties || {}
  // );

  // const [images, setImages] = useState(existingImages || []);

  // const [isUploading, setIsUploading] = useState(false);
  // const [categories, setCategories] = useState([]);

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      price.trim() === ""
    ) {
      setError("Please fill out all the fields.");
    }
    if (_id) {
      // Update
      await axios.put("/api/products", { ...data, _id });
    } else {
      // Create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  };

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      {/* <h1>New Product</h1> */}
      <label>Product Name</label>
      <input
        type="text"
        placeholder="new products"
        value={title}
        onChange={(ev) => {
          setTitle(ev.target.value);
        }}
      ></input>
      <label>Description</label>

      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => {
          setDescription(ev.target.value);
        }}
      ></textarea>

      <label>Price (inUSD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => {
          setPrice(ev.target.value);
        }}
      ></input>

      <button type="submit" className="btn-primary">
        SAVE
      </button>
      <hr></hr>
      {error ? <h2>{error}</h2> : "Let Fill in the form"}
    </form>
  );
}
