import React, { useState } from "react";
import { Asidebar } from "./Asidebar";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";

export function Subcategory() {
  const [state, setState] = useState({
    name: "",
   
  });

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://ecommerce-backend-zlrs.onrender.com/subcategory";
      const method = "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Product added successfully");
          console.log(data);
        });

      setState({
        name: "",
     
      });
    } catch (error) {
      alert("Internal error", error);
    }
  };

  return (
    <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
      <Box className="d-flex flex-wrap">
        <div className="col-lg-3 col-md-5 col-12">
          <Asidebar />
        </div>
        <div className="col-lg-6 col-md-7 col-12">
          <Box flex={1} p={4}>
            <Container maxWidth="sm">
              <Typography variant="h4" component="h1" gutterBottom align="center">
              SubCategory
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="SubCategory"
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
                 <Grid item xs={6}>
                 <div className="d-flex justify-content-center align-items-center">
                    <Button type="submit" variant="contained" color="" fullWidth    sx={{ backgroundColor: "white", color: "black" }}>
                      Submit
                    </Button>
                 </div>
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
