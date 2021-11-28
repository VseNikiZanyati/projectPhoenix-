import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useProducts } from "../../contexts/ProductsContext";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "300px",
    padding: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [slider, setSlider] = useState([200, 15000]);

  const { fetchByParams } = useProducts();

  const handleSlider = (e, value) => {
    setSlider(value);
    // console.log(value)
  };
  const handleFilterPrice = () => {
    fetchByParams("price_lte", slider);
  };

  return (
    <Grid item md={3}>
      <Paper
        className={classes.root}
        // style={{
        //   backgroundImage: `url("https://images.theconversation.com/files/306448/original/file-20191211-95111-fbz9rf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop")`,
        // }}
      >
        <Grid>
          <FormControl component="fieldset">
            <FormLabel component="label">Size</FormLabel>
            <RadioGroup
              aria-label="size"
              name="size1"
              onChange={(e) => fetchByParams("size", e.target.value)}
            >
              <FormControlLabel value="S" control={<Radio />} label="S" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="XL" control={<Radio />} label="XL" />
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl component="fieldset">
            <FormLabel component="label">Price</FormLabel>
            <RadioGroup
              aria-label="price"
              name="price1"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel
                value="1000"
                control={<Radio />}
                label="до 1000"
              />
              <FormControlLabel
                value="2000"
                control={<Radio />}
                label="до 2000"
              />
              <FormControlLabel
                value="5000"
                control={<Radio />}
                label="до 5000"
              />
              <FormControlLabel
                value="10000"
                control={<Radio />}
                label="до 10000"
              />
              <FormControlLabel
                value="15000"
                control={<Radio />}
                label="до 15000"
              />
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <Slider
            min={200}
            max={20000}
            value={slider}
            onChangeCommitted={handleFilterPrice}
            onChange={handleSlider}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
