import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../admin-navbar";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      <Container>{children}</Container>
    </div>
  );
}

export default AdminLayout;
