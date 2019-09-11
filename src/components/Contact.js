import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component  {
  render (){
    return (
      <div className='contact-body'>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tanuka Das</h2>
            <img
              src="https://freepngimg.com/thumb/wonder_woman/20973-1-wonder-woman-picture.png"
              alt='avatar'
              style={{height:'250px'}}
            />
            <p style={{width:"75%", margin: 'auto', paddingTop:'1em'}}>
            A MINDSET. A MANTRA. A CONVICTION.
            AND IT’S ABOUT TO MAKE YOU UNSTOPPABLE.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden='true'/>
                  tanuka.das12@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <i className="fa fa-linkedin-square" aria-hidden='true'/>
                  <a href="http://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank" style={{color:'black'}}>
                        My LinkedIn</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <i className="fa fa-github-square" aria-hidden='true'/>
                  <a href="https://github.com/tanuka16"  target="_blank" style={{color:'black'}}>
                        My Github</a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
