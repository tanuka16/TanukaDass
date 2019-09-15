import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import { Button } from 'reactstrap';

class Contact extends Component  {
  render (){
    return (
      <div className='contact-body'>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Get in touch</h2>
            <img
              src="https://freepngimg.com/thumb/wonder_woman/20973-1-wonder-woman-picture.png"
              alt='avatar'
              style={{height:'250px'}}
            />
            <p style={{width:"75%", margin: 'auto', paddingTop:'1em'}}>

            If you would like to get in touch, talk about projects or just say hi, feel free to email or send me a message on LinkedIn.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Info</h2>
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


                <ListItem>
                <Button color="red" size="large" shape='action' view='smooth'>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <a href="https://github.com/tanuka16"  target="_blank" style={{color:'black'}}>
                        Github</a>
                  </ListItemContent>
                  </Button>
                </ListItem>

              </List>
            </div>
          </Cell>

          <div style={{paddingTop: '95px'}}>
          <Cell col={12}>
            <footer style={{color:"grey", textAlign:'center'}}>
            © Tanuka Das. All rights reserved except the logos, which belong to the respective companies.
            </footer>
          </Cell>
          </div>
        </Grid>

      </div>
    )
  }
}

export default Contact;
