import React from 'react';
import './App.css';
import { Layout, Button } from 'antd';
import { Router, Route, Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content className="container">
            <Button>按钮</Button>
            <ul>
              {/* <li><Link to="/about">About</Link></li> */}
              {/* <li><Link to="/inbox">Inbox</Link></li> */}
            </ul>
            {/* {this.props.children} */}
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
