import React from 'react';
import '../styles/error.css';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="block-error">
      <div className="error">
        <div className="content">
          <h1>Oops!</h1>
          <h2>404 - Page not found</h2>
        </div>
        <a href="/" className="btn btn--secondary_gradient">
          Go to Homepage
        </a>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
