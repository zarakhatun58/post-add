/* eslint-disable */
import * as React from "react";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@mui/material";
import FileUpload from "react-material-file-upload";
import "./PostAds.css";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const PostAds = () => {
  const [count, setCount] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);

  const [selectedImages, setSelectedImages] = React.useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <div className="mb">
      <div className="container">
        <p className="header">POST YOUR ADD</p>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="text">
              DIRECT BY FARM
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="text"
            >
              ANJ /GRAIN
            </Link>
            <Typography color="primary" className="text">
              Change
            </Typography>
          </Breadcrumbs>
        </div>
        <form>
          <div className="row">
            <div className="col-100">
              <label for="fname">
                Title<span className="color-red"> *</span>
              </label>
              <input type="text" id="fname" name="title" placeholder="title" />
              <div className="count">{countTwo}/70</div>
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <label for="lname">
                Description<span className="color-red"> *</span>
              </label>
              <textarea
                type="text"
                rows={5}
                className="full_height_Width"
                onChange={(e) => setCount(e.target.value.length)}
              />
              <div className="count">{count}/400</div>
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <label for="price">
                Set Price <span className="color-red"> *</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-100 input-group">
              <span className="input-group-addon">$ /</span>
              <select className="form-control">
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-100 lineBorder">
              <label for="subject">Product Pics:</label>
              <div>Upload Upto 8 Images</div>
              <div className="imageBorder">
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div onClick={handleUploadClick} className="iconDiv">
                  <AddAPhotoOutlinedIcon />
                  <p className="upload">Upload Images</p>
                </div>
                <div>
                  {selectedImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        margin: "5px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="review"> Review Your Details</div>
          <div className="row">
            <div className="col-50">
              <label for="subject">
                State<span className="color-red"> *</span>
              </label>
              <select>
                <option value="West Bengal"> West Bengal </option>
                <option value="Maharashtra"> Maharashtra</option>
                <option value="Nagpur"> Nagpur</option>
              </select>
            </div>
            <div className="col-50">
              <label for="subject">
                Your City<span className="color-red"> *</span>
              </label>
              <select>
                <option value="select"> Kolkata </option>
                <option value="mumbai"> mumbai</option>
                <option value="chennai"> chennai</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <label for="lname">
                Your Area<span className="color-red"> *</span>
              </label>
              <textarea
                type="text"
                rows={5}
                className="full_height_Width"
                onChange={(e) => setCount(e.target.value.length)}
              />
            </div>
          </div>
          <div className="row ">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAds;
