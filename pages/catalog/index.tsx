import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "../../data";
import MainTemplate from "../../templates/MainTemplate";

const options = [
  {
    name: "Categories",
    list: [],
  },
  {
    name: "Types",
    list: [],
  },
];

function Catalog() {
  return (
    <MainTemplate>
      <div className="container">
        <div className="row">
          <aside className="col-md-2">
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                types
              </li>
            </ul>
          </aside>
          <div className="col offset-md-1">
            <section className="row row-cols-1 row-cols-md-3">
              {products.map((p) => {
                return (
                  <article key={p.id} className="card">
                    <Image src={p.src} />
                    <p className="card-title">
                      <Link href={p.slug}>{p.name}</Link>
                    </p>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Catalog;
