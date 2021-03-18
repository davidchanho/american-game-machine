import React from 'react'
import AdminLayout from '../../../components/admin/admin-layout';
import AdminNewsList from '../../../components/admin/admin-news-list';
import NewsForm from '../../../components/admin/news-form';

function AuthNews() {
    return (
      <AdminLayout>
        <NewsForm />
        <AdminNewsList />
      </AdminLayout>
    );
}

export default AuthNews
