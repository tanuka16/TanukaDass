import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {AwesomeButton, AwesomeButtonSocial} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-blue.css';


class HomePage extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src= "pic.png"
              alt='avatar'
              className='avatar-img'
              />
              <div className="banner-text" style={{marginBottom: '100px'}}>
                <h1>Full Stack Web Developer</h1>

                <hr/>
                <p>Ruby | Ruby on Rails | JavaScript | React | HTML/CSS </p>

                <div className="social-links">


                  {/* LinkedIn */}
                    <AwesomeButton id='social-icon' size='icon' type="primary" href="http://www.linkedin.com/in/tanuka-das" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </AwesomeButton>

                  {/* GitHub */}
                    <AwesomeButton id='social-icon' size='icon' type="primary" href="https://github.com/tanuka16" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </AwesomeButton>

                  {/* Medium */}
                    <AwesomeButton id='social-icon' size='icon' type="primary" href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-medium" aria-hidden="true"/>
                    </AwesomeButton>

                    <a href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank" style={{color:"Mediumslateblue"}}>
                      <i className="fa fa-medium"/>
                    </a>

                </div>
              </div>
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
