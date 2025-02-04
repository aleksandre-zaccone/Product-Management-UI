import { styled } from "@mui/material/styles";
// import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 200;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  const [selectProductLine, setSelectProductLine] = useState<
    string | undefined
  >(undefined);
  const [allProductLine, setAllProductLine] = useState<string[] | undefined>(
    undefined
  );
  const [showDashboards, setShowDashboards] = useState(false);
  // const [selectPostLine, setSelectPostLine] = useState<string | undefined>(
  //   undefined
  // );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch the categories, which will be an array of { id, name, code }
        const result = await ProductService.getAllProductCategories();

        // Extract the names from the categories
        const categoryNames = result.map((category) => category.name);

        console.log(categoryNames); // For debugging
        setAllProductLine(categoryNames); // Store the names in state
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectProductLine(value);
    navigate(`/products/${value.toLowerCase().replace(/\s+/g, "-")}`);
  };

  // const handleSelectChangePost = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value;
  //   setSelectPostLine(value);
  //   navigate(`/posts/${value.toLowerCase().replace(/\s+/g, "-")}`);
  // };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      ></Box>
      <Divider />

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        /> */}
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
            pb={3}
          >
            Product Management V6.3
          </Typography>
          <div>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              <Link
                to={"/home"}
                style={{
                  textDecoration: "none",
                  padding: "4px 8px 4px 0",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                <Box display="flex" alignItems="center">
                  <HomeIcon style={{ marginRight: 8 }} />
                  Home
                </Box>
              </Link>
            </Typography>
          </div>
          <div>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              <Link
                to={"/products"}
                style={{
                  textDecoration: "none",
                  padding: "4px 8px 4px 0",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                <Box display="flex" alignItems="center">
                  <QrCodeScannerIcon style={{ marginRight: 8 }} />
                  Products
                </Box>
              </Link>
              <Box>
                <select
                  value={selectProductLine}
                  onChange={handleSelectChange}
                  aria-label="Select product line"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    marginLeft: "8px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <option value="">All Product Line</option>
                  {allProductLine?.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </Box>
            </Typography>
          </div>
          {/* <div>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              <Link
                to={"/posts"}
                style={{
                  textDecoration: "none",
                  padding: "4px 8px 4px 0",
                  fontSize: "14px",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                Posts
              </Link>
              <Box>
                <select
                  value={selectPostLine}
                  onChange={handleSelectChangePost}
                  aria-label="Select post line"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  <option value="">All Post</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </Box>
            </Typography>
          </div> */}
          <div>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              <Link
                to={"/dashboards"}
                style={{
                  textDecoration: "none",
                  padding: "4px 8px 4px 0",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ marginTop: "25px" }}
                  onClick={() =>
                    setShowDashboards((curposition) => !curposition)
                  }
                >
                  <DashboardIcon style={{ marginRight: 8 }} />
                  Dashboard
                </Box>
              </Link>
              {showDashboards && (
                <Link
                  to={"/dashboards/products"}
                  style={{
                    textDecoration: "none",
                    padding: "4px 8px 4px 0",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ marginLeft: "20px" }}
                  >
                    Products
                  </Box>
                </Link>
              )}
            </Typography>
          </div>
        </Box>
      </Stack>
    </Drawer>
  );
}
