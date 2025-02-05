import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListingView from "../pages/product/productListing/view/productListing.view";
import HeaderFooterLayout from "../shared/layout/headerFooterLayout";
import SignIn from "../pages/auth/SignIn"
import SignUp from "../pages/auth/SignUp"
import Verify from "../pages/auth/Verify"
import Profile from "../pages/auth/Profile"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderFooterLayout />}>
          <Route index element={<ProductListingView />} />

        {/* Authentication Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify/:name" element={<Verify />} />
        <Route path="/my-profile" element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
