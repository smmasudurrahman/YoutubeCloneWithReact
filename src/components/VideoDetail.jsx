// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// VideoDetail component definition
const VideoDetail = () => {
  // Define state variables for videoDetail and videos
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  // useParams hook to get the id parameter from the URL
  const { id } = useParams();

  // useEffect hook to fetch the video details and related videos when the component mounts
  useEffect(() => {
    // Fetch the video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0]) // Set the fetched data to the videoDetail state variable
    );

    // Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items) // Set the fetched data to the videos state variable
    );
  }, [id]); // Depend on the id so that useEffect runs every time the id changes

  // Render a Loader component until the videoDetail data is fetched
  if (!videoDetail?.snippet) return <Loader />;

  // Destructure necessary data from videoDetail
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  // Render the video player, video details and related videos
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            {/* Render the video player */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            {/* Render the video title */}
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={1}
              pb={0}
            >
              {title}
            </Typography>

            {/* Render the video details */}
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              {/* Link to the channel */}
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              {/* Display view and like counts */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Render related videos */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

// Export VideoDetail as the default export of this module
export default VideoDetail;
