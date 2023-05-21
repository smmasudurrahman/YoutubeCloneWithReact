// Import necessary libraries and components
import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

// Define a functional component 'ChannelCard' which takes props channelDetail and marginTop
const ChannelCard = ({ channelDetail, margin, marginTop }) => (
  // Box component is used to wrap the CardContent and provides styling
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "100%", sm: "358px", md: "301px" },
      height: "300px",
      margin,
      marginTop, // marginTop prop used here
    }}
  >
    {/* // Link to the channel page when clicked */}
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      {/* // CardContent to hold the channel details */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* // CardMedia for the channel picture */}
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            margin: "auto",
            border: "1px solid #e3e3e3",
          }}
        />
        {/* // Typography for channel title */}
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
          />
        </Typography>
        {/* // If subscriberCount exists, show the count */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

// Export the ChannelCard component as the default export
export default ChannelCard;
