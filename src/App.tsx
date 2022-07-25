import {Layout} from 'antd'
import {Content} from 'antd/lib/layout/layout'
import React from 'react'
import './App.css'
import AppRoutes from './components/AppRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRoutes />
      </Content>
    </Layout>
  )
}

export default App
