import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const variants = {
  aesthetic: {
    color: "#6e3cf5",
    darkcolor: "#663bda",
    bgColor: "#e9e1ff",
    darkbg: "#251f36",
  },
  primary: {
    color: "#3368e3",
    darkcolor: "#215ff1",
    darkbg: "#1d263a",
    bgColor: "#dce6f8",
  },
  secondary: {
    color: "#c58a30",
    darkcolor: "#fd9e0d",
    bgColor: "#f7ead0",
    darkbg: "#3a3824",
  },
  success: {
    color: "#37a071",
    darkcolor: "#69d07e",
    bgColor: "#d3efdf",
    darkbg: "#1b2d29",
  },
  info: {
    color: "#0dcaf0",
    darkcolor: "#31d2f2",
    bgColor: "#cff4fc",
    darkbg: "#055160",
  },
  warning: {
    color: "#ffc107",
    darkcolor: "#ffcd39",
    bgColor: "#fff3cd",
    darkbg: "#664d03",
  },
  danger: {
    color: "#ff3030",
    darkcolor: "#ff3030",
    bgColor: "#f8d1c8",
    darkbg: "#3e2f2c",
  },
  gold: {
    color: "#b8860b",
    darkcolor: "#ffd700",
    bgColor: "#fff8dc",
    darkbg: "#3b2f0b",
  },
  silver: {
    color: "#708090",
    darkcolor: "#c0c0c0",
    bgColor: "#f5f5f5",
    darkbg: "#2f3436",
  },
  bronze: {
    color: "#8b4513",
    darkcolor: "#cd7f32",
    bgColor: "#fdf5e6",
    darkbg: "#4a2e1b",
  },
};
const StyledLabel = styled(Typography)`
  padding: 9px;
  border-radius: 7px;
  font-weight: 600;
  border: 2px solid
    ${(props) =>
      props.variant ? variants[props.variant].color : variants.primary.color};
  color: ${(props) =>
    props.variant
      ? props.theme.palette.mode === "light"
        ? variants[props.variant].color
        : variants[props.variant].darkcolor
      : variants.primary.color};

  ${(props) =>
    props.filled
      ? props.theme.palette.mode === "light"
        ? `background-color:${variants[props.variant].bgColor};border:none`
        : `background-color:${variants[props.variant].darkbg};border:none`
      : ""}
`;
const Label = ({ variant, text, filled }) => {
  return (
    <StyledLabel variant={variant} filled={filled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
