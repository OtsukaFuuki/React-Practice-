"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { bounceAnimation, COLORS } from "../utils/theme";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: COLORS.secondary }}>
      <Toolbar>
        <Link
          style={{
            flexGrow: 1,
            textAlign: "left",
            fontWeight: "bold",
            color: COLORS.background,
          }}
          href="/menu"
        >
          日高さんReact
        </Link>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            marginLeft: 2,
            padding: "5px 10px",
            backgroundColor: COLORS.border,
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            animation: `${bounceAnimation} 1s ease infinite`,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            {" "}
            Click!!! &rarr;
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
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
