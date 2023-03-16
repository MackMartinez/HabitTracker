import * as React from "react";
import {Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
