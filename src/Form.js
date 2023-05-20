import React from "react";
import { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { connect } from "react-redux";
import { actions } from "./actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Form = (props) => {
  const { savedFormDataRes, formDataArr, getFormdata, saveFormData } = props;

  console.log("savedFormData", props.formDataArr);





  const [data, setData] = useState({ fileArr: [] })

  const [fileObj, setFileObj] = useState({})
  const [disable, setDisable] = useState(false)
  const [dateValidation, setDateValidation] = useState(false)




  const validateDate = (e) => {
    let currentDate = new Date()
    let dob = new Date(e)
    let age = currentDate.getFullYear() - dob.getFullYear()
    let month = currentDate.getMonth() - dob.getMonth()
    if (month < 0 || (month === 0 && currentDate.getDate() < dob.getDate())) {
      age--;
    }
    if (age >= 18) {
      setDateValidation(true)
    }
    setData({ ...data, DOB: dob.getDate() + "/" + (dob.getMonth() + 1) + "/" + dob.getFullYear() })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.fileArr.length !== 2) {
      alert("Upload atleast 2 documents");
    } else if (!dateValidation) {
      alert("Age must be 18 years and above");
    } else {
      // axios call here
      saveFormData(data);
      setDateValidation(false)
      setData({
        DOB: "",
        email: "",
        fileArr: [],
        firstName: "",
        lastName: "",
        paStreet1: "",
        paStreet2: "",
        raStreet1: "",
        raStreet2: ""
      })
    }
  };

  return (
    <Grid container sx={{ marginBottom: '30px' }}>
      <Grid item xs={2}></Grid>

      <Grid item xs={12} lg={8} sx={{ backgroundColor: "white" }}>

        <Box display={"flex"} sx={{ justifyContent: "center" }}>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: "800",
              fontSize: "26px",
              lineHeight: "120%",
              color: "#25324B",
              marginTop: "5%"
            }}
          >
            Candidate's Document Submission Form
          </Typography>
        </Box>
        <hr style={{ width: "20%" }} />

        <form onSubmit={handleSubmit}>
          <Grid item container sx={{ marginTop: "5%", textAlign: "left", justifyContent: "space-between" }}>
            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#515B6F",

                }}

              >
                First Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput required value={data.firstName} onChange={(e) => {
                setData({ ...data, firstName: e.target.value })
              }} placeholder="Enter your first name here.." fullWidth />
            </Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Last Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput required value={data.lastName} onChange={(e) => {
                setData({ ...data, lastName: e.target.value })
              }} placeholder="Enter your last name here.." fullWidth />
            </Grid>



            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#515B6F",

                }}
              >
                E-mail <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput required value={data.email} onChange={(e) => {
                setData({ ...data, email: e.target.value })
              }} type="email" placeholder="ex: myname@example.com" fullWidth />
            </Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Date of Birth <span style={{ color: "red" }}>*</span>
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker slotProps={{ textField: { fullWidth: true } }} label={"Date of Birth"} onChange={(e) => validateDate(e)} />
              </LocalizationProvider>

              <Typography sx={{ color: "#515B6F", fontSize: "0.8rem" }}>(Min. age should be 18 Years)</Typography>
            </Grid>


            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ margin: "1% 1% -1% 1%" }}><Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "18px",
                color: "#515B6F",

              }}
            >
              Residential Address
            </Typography></Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",

                }}
              >
                Street 1 <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput required value={data.raStreet1} onChange={(e) => {
                setData({ ...data, raStreet1: e.target.value })
              }} fullWidth />
            </Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Street 2 <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput required value={data.raStreet2} onChange={(e) => {
                setData({ ...data, raStreet2: e.target.value })
              }} fullWidth />
            </Grid>


            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ margin: "3% 1% -1% 1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#515B6F",

                }}
              >
                <Checkbox {...label} onClick={(e) => {
                  if (e.target.checked) {
                    setData({ ...data, paStreet1: data.raStreet1, paStreet2: data.raStreet2 })
                    setDisable(true)
                  } else {
                    setData({ ...data, paStreet1: "", paStreet2: "" })
                    setDisable(false)

                  }
                }} />
                Same as Residential Address
              </Typography></Grid>


            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ margin: "1% 1% -1% 1%" }}><Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "18px",
                color: "#515B6F",

              }}
            >
              Permanent Address
            </Typography></Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",

                }}
              >
                Street 1
              </Typography>
              <OutlinedInput disabled={disable} value={data.paStreet1} onChange={(e) => {
                setData({ ...data, paStreet1: e.target.value })
              }} fullWidth />
            </Grid>

            <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Street 2
              </Typography>
              <OutlinedInput disabled={disable} value={data.paStreet2} onChange={(e) => {
                setData({ ...data, paStreet2: e.target.value })
              }} fullWidth />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ margin: "3% 1% 1% 1%" }}><Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "18px",
                color: "#515B6F",

              }}
            >
              Upload Documents
            </Typography></Grid>

            <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                File Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <OutlinedInput value={fileObj.fileName} onChange={(e) => {
                setFileObj({ ...fileObj, fileName: e.target.value })
              }} fullWidth />
            </Grid>
            <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Type of File <span style={{ color: "red" }}>*</span>
              </Typography>
              <Select

                sx={{ width: "100%" }}
                value={fileObj.type ? fileObj.type : ""}

                onChange={(e) => {
                  setFileObj({ ...fileObj, type: e.target.value })
                }}
              >
                <MenuItem value={""}>Select your input</MenuItem>
                <MenuItem value={"image/*"}>image</MenuItem>
                <MenuItem value={"application/pdf"}>pdf</MenuItem>
              </Select>
              <Typography sx={{ color: "#515B6F", fontSize: "0.8rem" }}>(image, pdf.)</Typography>
            </Grid>
            <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#515B6F",
                }}
              >
                Upload Document <span style={{ color: "red" }}>*</span>
              </Typography>
              <label>
                <input type="file" accept={fileObj.type} onChange={(e) => {
                  console.log(e.target.files[0])
                  setFileObj({ ...fileObj, file: e.target.files[0] })
                  console.log(fileObj.file)
                }} style={{ display: "none" }} />
                <div style={{ position: "relative" }}><OutlinedInput disabled value={fileObj.file ? fileObj.file.name : ""} fullWidth /><FileUploadIcon style={{ position: "absolute", top: "15%", right: "1%", fontSize: 35, cursor: "pointer" }} /></div>
              </label>
            </Grid>
            <Grid item lg={1} sx={{ margin: "1%" }}>
              <Typography
                sx={{
                  visibility: "hidden"
                }}
              >
                .
              </Typography>
              <AddBoxIcon onClick={() => {
                if (fileObj.fileName && fileObj.type && fileObj.file) {
                  let Arr = data.fileArr
                  Arr.push(fileObj)
                  setData({ ...data, fileArr: Arr })
                  setFileObj({ fileName: "", type: "", file: "" })
                } else {
                  alert("Incomplete Fields")
                }
              }} sx={{ fontSize: 45, cursor: "pointer" }} />
            </Grid>


            {data.fileArr?.map((item, index) => {
              return (<Grid container id={index}>
                <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#515B6F",
                    }}
                  >
                    File Name
                  </Typography>
                  <OutlinedInput disabled value={item.fileName} fullWidth />
                </Grid>
                <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#515B6F",
                    }}
                  >
                    Type of File
                  </Typography>
                  <OutlinedInput disabled value={item.type === "image/*" ? "image" : "pdf"} fullWidth />

                  <Typography sx={{ color: "#515B6F", fontSize: "0.8rem" }}>(image, pdf.)</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={12} sm={12} xs={12} sx={{ margin: "1%" }}>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#515B6F",
                    }}
                  >
                    Uploaded Document
                  </Typography>
                  <label>
                    {/* <OutlinedInput type="file" style={{ display: "none" }} fullWidth /> */}
                    <div style={{ position: "relative" }}><OutlinedInput disabled value={item.file.name} fullWidth /></div>
                  </label>
                </Grid>
                <Grid item lg={1} sx={{ margin: "1%" }}>
                  <Typography
                    sx={{
                      visibility: "hidden"
                    }}
                  >
                    .
                  </Typography>
                  <DeleteIcon onClick={() => {
                    let Arr = data.fileArr.slice()
                    Arr.splice(index, 1)
                    setData({ ...data, fileArr: Arr })
                    console.log(Arr, data.fileArr)
                  }} sx={{ fontSize: 45, cursor: "pointer" }} />
                </Grid>
              </Grid>)
            })
            }


            <Grid item container lg={12} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  ':hover': {
                    backgroundColor: '#fcfcfc',
                    color: '#313131'
                  },
                  width: "20%",
                  height: "44px",
                  fontFamily: "poppins",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#FCFCFC",
                  textTransform: "capitalize",
                  marginTop: '6%',
                  backgroundColor: '#313131'

                }}
              >
                Submit
              </Button>
            </Grid>

          </Grid>
        </form>

      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
};

const mapDipatchToProps = (dispatch) => {
  return {
    saveFormData: (params) => dispatch(actions.saveFormData(params)),
    getFormdata: () => dispatch(actions.getFormdata()),
  };
};
const mapStateToProps = (state) => {
  return {
    formDataArr: state.formDataArr,
    savedFormDataRes: state.savedFormDataRes,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Form);
