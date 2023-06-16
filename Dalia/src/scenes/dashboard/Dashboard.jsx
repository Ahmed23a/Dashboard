import { Box } from "@mui/material";
import Header from "./../../components/Header";

export default function Dashboard() {
  return (
    <Box className="containr text-center" m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="اللوحة الرئيسية"
          subtitle="مرحبا بك فى اللوحة الرئيسية"
        ></Header>
      </Box>
    </Box>
  );
}
