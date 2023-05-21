// Import necessary libraries and components
import React from "react";
import { Stack } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

// Define a functional component Videos, that takes 'videos' and 'direction' as props
const Videos = ({ videos, direction }) => {
  // If there are no videos yet (videos.length is falsy), return the Loader component
  if (!videos?.length) return <Loader />;

  // Return a Stack (a flex container component from Material UI) that will contain either VideoCard or ChannelCard components
  return (
    <Stack
      direction={direction || "row"} // Direction of the stack is either the passed prop 'direction' or "row" as default
      flexWrap="wrap" // If there's no space on the line for an item, it'll move to a new line
      justifyContent="start" // Items are aligned starting from the left of the line
      alignItems="start" // Items are aligned to the start of the cross axis
      gap={2} // Spacing between items is 2
    >
      {videos.map((item, idx) => (
        <React.Fragment key={idx}>
          {/* Render a VideoCard with it if the item is a video */}
          {item.id.videoId && <VideoCard video={item} />}
          {/* Render a ChannelCard with it if the item is a channel */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </React.Fragment>
      ))}
    </Stack>
  );
};

// Export the Videos component as the default export
export default Videos;
