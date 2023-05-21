// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Define a functional component VideoCard, that takes a nested 'video' prop
const VideoCard = ({
  video: {
    id: { videoId }, // videoId is nested within the video prop
    snippet, // snippet object nested within the video prop
  },
}) => (
  // The component return a Card component
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "301px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    {/* A clickable thumbnail that routes to the video page */}
    <Link to={videoId && `/video/${videoId}`}>
      {/* CardMedia for the video thumbnail */}
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>

    {/* CardContent for the video details */}
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "100px" }}>
      {/* A clickable title that routes to the video page */}
      <Link to={videoId && `/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {/* Display first 50 characters of the video title */}
          {snippet?.title.slice(0, 50)}
        </Typography>
      </Link>
      {/* A clickable channel name that routes to the channel page */}
      <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
        <Typography variant="subtitle2" color="gray">
          {/* Display the date when the video was published */}
          <Box sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}>
            {new Date(snippet?.publishedAt).toLocaleDateString()}
          </Box>
          {/* Display the channel name with a CheckCircleIcon */}
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

// Export the VideoCard component as the default export
export default VideoCard;
