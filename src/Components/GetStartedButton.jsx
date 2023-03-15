import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function GetStartedButton() {
  const navigate = useNavigate();
  const navRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <Button variant="contained" onClick={navRegister} sx={{ py: 3, px: 7 }}>
      <Typography>Get Started</Typography>
    </Button>
  );
}
