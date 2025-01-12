import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Asidebar } from "./Asidebar";
import { useParams } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Box,
} from "@mui/material";
import Swal from 'sweetalert2';

export function Add_Pro() {
  const [state, setState] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
  });
  const [update, setUpdate] = useState(true);

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const Token = localStorage.getItem("Token");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9596/product/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setState({
            name: res.data.name,
            image: res.data.image,
            price: res.data.price,
            description: res.data.description,
            category: res.data.category,
            subcategory: res.data.subcategory,
          });
        });
      setUpdate(false);
    }
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = update
        ? "http://localhost:9596/add"
        : `http://localhost:9596/product/${id}`;
      const method = update ? "POST" : "PUT";
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(state)
      })
      .then((res) => res.json())
      .then(data =>{
        console.log(data);
        if(data.data == "Access denied")
        {
          Swal.fire({
            icon: 'error',
            title: 'Access denied',
            text: "Your Not Authorization",
           
          });
        }
        else{
          Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: update ? 'Product added successfully!' : 'Product updated successfully!',
            confirmButtonText: 'Okay'
          });
        }
        
      })
      
      
        
      setUpdate(true)
      setState({
        name: "",
        image: "",
        price: "",
        description: "",
        category: "",
        subcategory: "",
      })
    } catch (error) {
      alert("Backend server error.");
    }
  };

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/getCategory`).then((res) => {
      setCategory(res.data.data);
    });
  }, [state]);

  useLayoutEffect(() => {
    axios.get(`http://localhost:9596/subget`).then((res) => {
      setSubcategory(res.data.data);
    });
  }, [state]);

  return (
    <div className="bg-dark h-auto flex-wrap">
      <Box className="d-flex flex-wrap">
        <div className="col-lg-3 col-md-5 col-12">
          <Asidebar />
        </div>
        <div className="col-lg-6 col-md-7">
          <Box flex={1} p={4}>
            <Container maxWidth="sm">
              <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "white" }}>
                {update ? "Add Product" : "Update Product"}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Product Name"
                      name="name"
                      value={state.name}
                      onChange={change}
                      variant="outlined"
                      required
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Image URL"
                      name="image"
                      value={state.image}
                      onChange={change}
                      variant="outlined"
                      required
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Price"
                      name="price"
                      value={state.price}
                      onChange={change}
                      variant="outlined"
                      required
                      type="number"
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      value={state.description}
                      onChange={change}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Category"
                      name="category"
                      value={state.category}
                      onChange={change}
                      variant="outlined"
                      required
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    >
                      <MenuItem value="">Select Category</MenuItem>
                      {category.map((el) => (
                        <MenuItem key={el._id} value={el._id}>
                          {el.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Subcategory"
                      name="subcategory"
                      value={state.subcategory}
                      onChange={change}
                      variant="outlined"
                      required
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                      }}
                    >
                      <MenuItem value="">Select Subcategory</MenuItem>
                      {subcategory.map((el) => (
                        <MenuItem key={el._id} value={el._id}>
                          {el.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: "white", color: "black" }}
                    >
                      {update ? "Submit" : "Update"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
        </div>
      </Box>
    </div>
  );
}
