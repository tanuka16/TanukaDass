import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
            <img
            /*src= "https://freepngimg.com/thumb/wonder_woman/20973-1-wonder-woman-picture.png"*/
              src= "pic5.jpg"
              alt='avatar'
              className='avatar-img'
              />
              <div className="intro-text" style={{marginTop: '30px'}}>
                <h3>Hello, and welcome to my website. </h3>

                <p>I am a Full Stack Web Developer, based in Jamaica, New York. I focus on implementing intricate and detailed code.
                My fascination in coding, began by adding computer science courses to my undergraduate studies and later grew into developing and building web applications.
                I am passionate about building excellent websites that improves the lives of those around me. </p>

                <p>When I am not working, I love reading books, hiking, exploring new places, and meeting new people. </p>
                <br/>

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

              </div>

          </Cell>

        </Grid>

        <footer style={{color:"grey", textAlign:'center', paddingTop: '25px'}}>
          © Tanuka Das. All rights reserved except the logos, which belong to the respective companies.
        </footer>

      </div>
    )
  }
}

export default AboutMe;
