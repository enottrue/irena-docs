import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Добро пожаловать" description="Внутренняя документация">
      <main>
        <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Добро пожаловать в Irena Docs
        </h1>
      </main>
    </Layout>
  );
}