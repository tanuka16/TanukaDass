import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';


const Bounce = styled.div`animation: 2s ${keyframes `${bounceIn}`} `;


class HomePage extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>

        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src= {process.env.PUBLIC_URL + '/pic5.jpg'}
              alt='avatar'
              className='avatar-img'
              />
              <Bounce>
              <div className="banner-text" style={{marginBottom: '100px'}}>
                <h1>Full Stack Web Developer</h1>

                <hr/>
                <p>Ruby | Ruby on Rails | JavaScript | React | HTML/CSS </p>

                <div className="social-links">

                  {/* LinkedIn */}
                    <a href="http://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>

                    </a>

                  {/* GitHub */}
                    <a href="https://github.com/tanuka16" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                  {/* Medium */}
                    <a href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-medium" aria-hidden="true"/>
                    </a>

                  {/* Gmail */}
                    <a href = "mailto: tanuka.das12@gmail.com" >
                      <i className="fa fa-envelope" aria-hidden="true"/>
                    </a>
                </div>
              </div></Bounce>
          </Cell>
        </Grid>
        <footer style={{color:"grey", textAlign:'center', paddingTop: '35px'}}>
          © Tanuka Das. All rights reserved except the logos, which belong to the respective companies.
        </footer>
      </div>
    )
  }
}

export default HomePage;
