"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Image from "next/image";

import { keyframes } from "@mui/system";

// アニメーションの定義（上下に軽く動く）
const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#f0f0f0" }}>
      <Toolbar>
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", md: "left" },
            fontWeight: "bold",
            color: "black",
          }}
        >
          日高さん用sample
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            marginLeft: 2,
            padding: "5px 10px",
            backgroundColor: "#f9934e",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            animation: `${bounceAnimation} 1s ease infinite`,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "black", fontWeight: "bold" }}>
            Click!!! &rarr;
          </Typography>

          <Box
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            pointerEvents: "cursor",
          }}
        >
          <a
            href="https://github.com/OtsukaFuuki/React-Practice-/blob/master/app/page.tsx"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button>
              <Image
                src="/photo/09.png"
                alt="GitHub"
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Button>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
