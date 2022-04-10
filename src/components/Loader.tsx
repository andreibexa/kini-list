import { CircularProgress, Box } from "@mui/material";
import red from "@mui/material/colors/red";

export default function Loader() {
return(<Box sx={{ position: 'fixed', top: '50%', left: '50%', zIndex: 1000 }}>
    <CircularProgress size={100} sx={{color:red[900]}}  />
  </Box>
)
}
