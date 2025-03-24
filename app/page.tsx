import React from "react";
import Children from "./_components/Children";
import { Box } from "@mui/material";

const ParentPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue",
        gap: 1,
      }}
    >
      {/* 赤いボックス */}
      <Children
        title={"親で入力するtitle01"}
        sx={{ backgroundColor: "red", p: 1, borderRadius: 1 }}
      ></Children>
      {/* 青いボックス */}
      <Children
        title={"親で入力するtitle02"}
        sx={{
          backgroundColor: "blue",
          p: 4,
          borderRadius: "50%",
          color: "white",
        }}
      />
      {/* 影付きボックス */}
      <Children
        title={"シャドウ付き"}
        sx={{
          backgroundColor: "green",
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
          color: "white",
        }}
      />

      {/* 枠線ありのボックス */}
      <Children
        title={"枠線ボックス"}
        sx={{
          border: "2px solid black",
          p: 2,
          borderRadius: 2,
          color: "black",
        }}
      />

      {/* 角を丸くして影を強調 */}
      <Children
        title={"角丸＋影"}
        sx={{
          backgroundColor: "purple",
          p: 3,
          borderRadius: "50px",
          boxShadow: 5,
          color: "white",
        }}
      />

      {/* グラデーションボックス */}
      <Children
        title={"グラデーション"}
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          p: 2,
          borderRadius: 3,
          boxShadow: 4,
          color: "white",
        }}
      />

      {/* 円形ボックス */}
      <Children
        title={"円形ボックス"}
        sx={{
          backgroundColor: "gold",
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontWeight: "bold",
          boxShadow: 4,
        }}
      />
    </Box>
  );
};

export default ParentPage;
