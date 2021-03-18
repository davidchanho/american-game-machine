import Link from "next/link";
import React from "react";
import { Navbar } from "react-bootstrap";

function AdminNavbar() {
  return (
    <Navbar>
      <Link href="/admin/news">News</Link>
      <Link href="/admin/products">Products</Link>
      <Link href="/admin/photos">Photos</Link>
    </Navbar>
  );
}

export default AdminNavbar;
