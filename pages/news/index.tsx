import React from "react";
import NewsList from "../../app/components/news-list";
import MainLayout from "../../app/layouts/MainLayout";

function News() {
  return (
    <MainLayout>
      <NewsList />
    </MainLayout>
  );
}

export default News;
