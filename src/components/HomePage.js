import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class HomePage extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src= "https://freepngimg.com/thumb/wonder_woman/20973-1-wonder-woman-picture.png"
              alt='avatar'
              className='avatar-img'
              />
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr/>
                <p>Ruby | Rails | JavaScript | React | HTML/CSS </p>

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

                </div>
              </div>

          </Cell>

        </Grid>
        <hr/>

      </div>
    )
  }
}

export default HomePage;
