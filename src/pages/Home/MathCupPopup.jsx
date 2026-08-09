import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const MATH_CUP_IMAGE =
  "https://res.cloudinary.com/dh4j8hdty/image/upload/v1783949119/NDMC_Math_Cup_2026_transparent_lqpffn.png";

const MathCupPopup = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 1000);
    const timer2 = setTimeout(() => setExpanded(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (closed) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        left: visible ? "20px" : "-160px",
        bottom: "30px",
        zIndex: 9999,
        transition: "left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        cursor: "pointer",
      }}
      onClick={() => navigate("/math-cup")}
    >
      <Box
        sx={{
          width: expanded ? "300px" : "50px",
          height: expanded ? "320px" : "100px",
          background:
            "linear-gradient(135deg, #4e2fc4 0%, #786fef 50%, #4e2fc4 100%)",
          border: "2px solid #a89bff",
          borderRadius: expanded ? "10px" : "25px",
          boxShadow: expanded
            ? "0 10px 30px rgba(0,0,0,0.5)"
            : "0 5px 15px rgba(120, 111, 239, 0.5)",
          overflow: "hidden",
          transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: expanded ? "20px" : "0",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            width: "30px",
            height: "4px",
            background: "#a89bff",
            borderRadius: "2px",
            opacity: expanded ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "4px",
            height: "60%",
            background: "linear-gradient(to bottom, #a89bff, #786fef)",
            opacity: expanded ? 0 : 1,
            transition: "opacity 0.3s",
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            width: "30px",
            height: "4px",
            background: "#a89bff",
            borderRadius: "2px",
            opacity: expanded ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />

        <Box
          sx={{
            opacity: expanded ? 1 : 0,
            transform: expanded ? "scale(1)" : "scale(0.8)",
            transition: "all 0.6s ease 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            height: "90%",
            justifyContent: "space-between",
            visibility: expanded ? "visible" : "hidden",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={MATH_CUP_IMAGE}
              alt="NDMC Math Cup 2026"
              sx={{
                width: "150px",
                marginBottom: "15px",
                filter: "drop-shadow(0 0 8px rgba(168, 155, 255, 0.5))",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "10px",
                lineHeight: 1.2,
              }}
            >
              Leaderboard is live now!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#e0e0ff",
                fontSize: "0.9rem",
                lineHeight: 1.5,
                px: 1,
              }}
            >
              See where you stand in the NDMC Math Cup 2026
            </Typography>
          </Box>

          <Box
            sx={{
              mt: "auto",
              borderBottom: "1px solid #a89bff",
              pb: 0.5,
              width: "fit-content",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#fff", letterSpacing: 2, fontWeight: "bold" }}
            >
              VIEW LEADERBOARD
            </Typography>
          </Box>
        </Box>
        {expanded && (
          <Box
            onClick={(e) => {
              e.stopPropagation();
              setClosed(true);
            }}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
              opacity: 0.5,
              "&:hover": { opacity: 1 },
              zIndex: 2,
            }}
          >
            <CloseIcon fontSize="small" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MathCupPopup;
