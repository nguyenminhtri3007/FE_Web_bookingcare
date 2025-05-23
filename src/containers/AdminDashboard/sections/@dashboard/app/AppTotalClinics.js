// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
// components
import Iconify from "../../../components/Iconify";
import React, { useState, useEffect } from "react";
import { getTotalClinics } from "../../../../../services/userService"; 
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.success.darker,
  backgroundColor: theme.palette.success.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.success.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.success.dark,
    0
  )} 0%, ${alpha(theme.palette.success.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function AppTotalClinics() {
  const [totalClinics, setTotalClinics] = useState(0);

  useEffect(() => {
    let fetchTotalClinics = async () => {
      let res = await getTotalClinics();  
      if (res && res.errCode === 0) {
        let total = res.data.totalClinics;
        if (total) {
          setTotalClinics(total);
        }
      }
    };
    fetchTotalClinics();
  }, []);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="mdi:hospital-building" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(totalClinics)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <FormattedMessage id={"admin-dashboard.dashboard.total-clinics"} />
      </Typography>
    </RootStyle>
  );
}
