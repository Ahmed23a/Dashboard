import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DescriptionIcon from "@mui/icons-material/Description";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PercentIcon from "@mui/icons-material/Percent";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <QuestionMarkIcon />
      </ListItemIcon>
      <ListItemText primary="بنك الأسئلة" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="الامتحانات" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="الطلاب" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QrCodeScannerIcon />
      </ListItemIcon>
      <ListItemText primary="الفواتير\الأكواد" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PercentIcon />
      </ListItemIcon>
      <ListItemText primary="النتائج" />
    </ListItemButton>
  </React.Fragment>
);





// import { Suspense, useState, useTransition } from 'react';
// import IndexPage from './IndexPage.js';
// import ArtistPage from './ArtistPage.js';
// import Layout from './Layout.js';

// export default function App() {
//   return (
//     <Suspense fallback={<BigSpinner />}>
//       <Router />
//     </Suspense>
//   );
// }

// function Router() {
//   const [page, setPage] = useState('/');
//   const [isPending, startTransition] = useTransition();

//   function navigate(url) {
//     startTransition(() => {
//       setPage(url);
//     });
//   }

//   let content;
//   if (page === '/') {
//     content = (
//       <IndexPage navigate={navigate} />
//     );
//   } else if (page === '/the-beatles') {
//     content = (
//       <ArtistPage
//         artist={{
//           id: 'the-beatles',
//           name: 'The Beatles',
//         }}
//       />
//     );
//   }
//   return (
//     <Layout isPending={isPending}>
//       {content}
//     </Layout>
//   );
// }

// function BigSpinner() {
//   return <h2>🌀 Loading...</h2>;
// }
