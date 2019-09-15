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
              src= "pic5.png"
              alt='avatar'
              className='avatar-img'
              />
              <div className="intro-text" style={{marginTop: '30px'}}>
                <h3>Hello, and welcome to my website. </h3>

                <p>I am a full stack web developer, focus on implementing intricate and detailed code. My fascination in coding, began by adding computer science courses to my undergraduate studies and later grew into developing and building apps and websites. I am passionate about building excellent websites that improves the lives of those around me. </p>

                <p>When I am not working, I love reading books, exploring different pages of the world, and hiking. </p>

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
