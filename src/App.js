import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color:'white', fontWeight:"bold", fontSize:'30px' }} to="/">Tanuka Das</Link>} scroll>
            <Navigation style={{fontWeight:'bold'}}>

                <Link to="/AboutMe" style={{fontWeight:'bold', fontSize: "15px"}}>About Me</Link>
                <Link to="/Projects" style={{fontWeight:'bold', fontSize: "15px"}}>Projects</Link>
                <Link to="/Contact" style={{fontWeight:'bold', fontSize: "15px"}}>Contact</Link>
                <Link to="/Resume" style={{fontWeight:'bold', fontSize: "15px"}}>Resume</Link>
                {/* <Link to="/Resume">Resume</Link>*/}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'black',fontWeight:"bold", fontSize:'30px'  }} to="/">Tanuka Das</Link>}>

            <Navigation style={{fontWeight:'bold'}}>
                <Link to="/AboutMe" style={{fontWeight:'bold', fontSize: "15px"}}>About Me</Link>
                <Link to="/Projects" style={{fontWeight:'bold', fontSize: "15px"}}>Projects</Link>
                <Link to="/Contact" style={{fontWeight:'bold', fontSize: "15px"}}>Contact</Link>
                <Link to="/Resume" style={{fontWeight:'bold', fontSize: "15px"}}>Resume</Link>
                {/* <Link to="/Resume">Resume</Link>*/}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  )
}

export default App;
