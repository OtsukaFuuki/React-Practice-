"use client";
import React from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS } from "../utils/theme";

const courses = [
  { id: "1", title: "初めてのReact", description: "propsについて" },
];

const MenuPage = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center p-4"
        style={{ backgroundColor: COLORS.background }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: COLORS.secondary }}
        >
          学習メニュー
        </Typography>
        <div className="w-full max-w-md">
          {courses.map((course) => (
            <Link
              key={course.id}
              href="/props"
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  mb: 3,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: 8,
                    opacity: 0.95,
                  },
                  background: `linear-gradient(145deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{
                        color: COLORS.background,
                        fontWeight: "bold",
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: COLORS.border,
                      }}
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
