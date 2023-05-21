// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// Define a functional component 'ChannelDetail'
const ChannelDetail = () => {
  // Initialize state variables 'channelDetail' and 'videos' with useState hooks
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  // Use useParams hook to get the 'id' parameter from the URL
  const { id } = useParams();

  // Use useEffect hook to fetch channel details and videos when 'id' changes
  useEffect(() => {
    const fetchResults = async () => {
      // Fetch channel details from API and set it to 'channelDetail' state
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      // Fetch videos related to the channel from API and set it to 'videos' state
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
    };

    // Execute the function
    fetchResults();
  }, [id]); // This useEffect is dependent on 'id', will re-run whenever 'id' changes

  // Render the channel details and videos
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "120px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        {/* // Pass channel details to the ChannelCard component */}
        <ChannelCard
          channelDetail={channelDetail}
          margin="auto"
          marginTop="-130px"
        />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {/* // Pass videos to the Videos component */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

// Export the ChannelDetail component as the default export
export default ChannelDetail;
