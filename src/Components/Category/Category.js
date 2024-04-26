import React, { useState } from "react";
import "./Category.css";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import KingBedIcon from "@mui/icons-material/KingBed";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
import CableIcon from "@mui/icons-material/Cable";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Box, IconButton, Modal } from "@mui/material";
import PostAds from "../PostAds/PostAds";
import { Close } from "@mui/icons-material";

const cardData = [
  { id: 1, text: "DIRECT BY FARM", icon: <AgricultureIcon /> },
  { id: 1, text: "SELF MADE", icon: <CleanHandsIcon /> },
  { id: 1, text: "RENTAL ITEMS", icon: <CarRepairIcon /> },
  { id: 1, text: "REAL ESTATE", icon: <CorporateFareIcon /> },
  { id: 1, text: "VEHICLE", icon: <CarRepairIcon /> },
  { id: 1, text: "MOBILES", icon: <MobileScreenShareIcon /> },
  { id: 1, text: "FURNITURE", icon: <KingBedIcon /> },
  { id: 1, text: "FASHION", icon: <ElderlyWomanIcon /> },
  { id: 1, text: "ELECTRONICS", icon: <CableIcon /> },
  { id: 1, text: "TOUR AND TRAVELS", icon: <TheaterComedyIcon /> },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "15px",
  "&:focus": {
    outline: "none",
  },
};
const innerData = [
  { id: 1, text: "ANJ /GRAIN", icon: <AgricultureIcon /> },
  { id: 1, text: "EGGS", icon: <CleanHandsIcon /> },
  { id: 1, text: "FISH", icon: <CarRepairIcon /> },
  { id: 1, text: "FRUITS", icon: <CorporateFareIcon /> },
  { id: 1, text: "MILK", icon: <CarRepairIcon /> },
  { id: 1, text: "VEGETABLES", icon: <MobileScreenShareIcon /> },
];

const Category = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [openTwo, setOpenTwo] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenTwo = () => setOpenTwo(true);

  const handleClose = () => setOpen(false);
  const handleCloseTwo = () => setOpenTwo(false);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  return (
    <div className="modalConatiner">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div className="HeaderText">POST YOUR ADD</div>
        <div>
          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <hr />
      </div>
      <p>CHOOSE A CATEGORY</p>
      <div className="dualCard">
        <div className="cardOne">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCardId === card.id ? "selected" : ""}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="cardIcon">{card.icon}</div>
              <p className="cardText">{card.text}</p>
            </div>
          ))}
        </div>
        {selectedCardId && (
          <div className="cardTwo">
            {innerData.map((data) => (
              <div
                className="card"
                key={data.id}
                onClick={() => handleOpen(data.id)}
              >
                <div className="cardIcon">{data.icon}</div>
                <p className="cardText">{data.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <PostAds />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Category;
