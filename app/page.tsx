import React from "react";
import Children from "./_components/Children";
import { Box } from "@mui/material";
import Image from "next/image";
import Header from "./_components/header";

const ParentPage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // スマホでは縦並び、PCでは横並び
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "50%" }, // スマホでは全幅、PCでは半分
          }}
        >
          {/* 赤いボックス */}

          <Children
            title={"親で入力するtitle01"}
            sx={{ backgroundColor: "red", p: 1, borderRadius: 1, width: "90%" }}
          />
          {/* 青いボックス */}

          <Children
            title={"親で入力するtitle02"}
            sx={{
              backgroundColor: "blue",
              p: 4,
              borderRadius: "50%",
              color: "white",
              width: "90%",
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
              width: "90%",
            }}
          />

          <Children
            title={"枠線ボックス"}
            sx={{
              border: "2px solid black",
              p: 2,
              borderRadius: 2,
              color: "black",
              width: "90%",
            }}
          />
          {/* 枠線ありのボックス */}

          <Children
            title={"角丸＋影"}
            sx={{
              backgroundColor: "purple",
              p: 3,
              borderRadius: "50px",
              boxShadow: 5,
              color: "white",
              width: "90%",
            }}
          />

          <Children
            title={"グラデーション"}
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              p: 2,
              borderRadius: 3,
              boxShadow: 4,
              color: "white",
              width: "90%",
            }}
          />
          {/* 角を丸くして影を強調 */}

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

        {/* 画像エリア（スクロール可能） */}
        <Box
          sx={{
            ml: { xs: 0, md: 3 },
            mt: 3,
            maxHeight: "500px",
            overflowY: "auto",
            border: "2px solid gray",
            padding: 2,
            borderRadius: 2,
            gap: 2,
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="/photo/01.jpg"
            alt="Sample Image"
            width={400}
            height={400}
            style={{
              borderRadius: 20,
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/photo/3.jpg"
            alt="Sample Image"
            width={400}
            height={400}
            style={{
              borderRadius: 20,
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/photo/5.jpeg"
            alt="Sample Image"
            width={400}
            height={400}
            style={{
              borderRadius: 20,
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/photo/4.jpeg"
            alt="Sample Image"
            width={400}
            height={400}
            style={{
              borderRadius: 20,
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ParentPage;
