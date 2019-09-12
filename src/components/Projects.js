import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component  {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0 ) {
      return(
        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>
          {/*<h1 style={{paddingLeft:'50%'}}>Projects</h1>*/}

        <hr/>
        {/* project 1 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', fontSize: '20px', height: '176px', background: 'url(donationApp.png) center/ cover'}}><h3 style={{marginTop:'150px'}}>DoNation</h3></CardTitle>
          <CardText>
          <p style={{fontWeight:'bold'}}>Ruby on Rails + React.js</p>
          DoNation is a charity app, which allows users to research numerous charitable organizations to award donations.
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://github.com/tanuka16/DoNation-Back-end" target='_blank' colored>GitHub</Button>
            <Button href="https://youtu.be/RnQherXmMkk" target='_blank' colored>Live Demo</Button>
          </CardActions>

        </Card>

        {/* project 2 */}
        <Card className='card' shadow={5} style={{minWidth:'450', merginBottom: '20px'}}>

          <CardTitle style={{color: '#fff', height: '176px', background: 'url(shoeApp.png) center/ cover'}}><h3 style={{marginTop:'150px'}}>House of Shoes</h3></CardTitle>
          <CardText>
          <p style={{fontWeight:'bold'}}>Ruby on Rails</p>
          House of Shoes is a shoe wish-list app, it holds shoes of different brands and category. Users have access to search and filter by brand and type; Users can create an account and add their favorite shoes in their wish list.
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://github.com/tlam212/Shoe_App" target='_blank' colored>GitHub</Button>
            <Button href="https://youtu.be/t1xcK1T7Y8o" target='_blank' colored>Live Demo</Button>
          </CardActions>

        </Card>

        {/* project 3 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
          <CardTitle style={{color: 'black', fontWeight:'bold', height: '176px', background: 'url(https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center/ cover'}}>Instagram Lite
            </CardTitle>

          <CardText>
          <p style={{fontWeight:'bold'}}>Ruby</p>
          Instagram Lite is a social media app, allows users to create an account, post images, like pictures and add comments on other users account.
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://github.com/April17/module-one-final-project-guidelines-dumbo-web-051319" target='_blank' colored>GitHub</Button>
            {/*<Button colored>Live Demo</Button>*/}
          </CardActions>

        </Card>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return (
        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', fontSize: '20px', height: '176px', background: 'url(http://f201437.wpengine.com/wp-content/uploads/2014/10/FormsResourcesImage.jpg) center/ cover'}}></CardTitle>
          <CardText>
          <h5 style={{fontWeight:'bold', color: 'black'}}>HTML form to form_with in Rails</h5>
          Let’s talk about forms!
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://medium.com/@tanuka.das12/html-forms-to-html-forms-in-rails-4a345d9aaed2" target='_blank' colored>Medium</Button>
          </CardActions>
        </Card>

        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', fontSize: '20px', height: '176px', background: 'url(http://f201437.wpengine.com/wp-content/uploads/2014/10/FormsResourcesImage.jpg) center/ cover'}}></CardTitle>
          <CardText>
          <h5 style={{fontWeight:'bold', color: 'black'}}>Optimization of LinkedIn Profile for New Developers</h5>
          Let’s talk about forms!
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://medium.com/@tanuka.das12/html-forms-to-html-forms-in-rails-4a345d9aaed2" target='_blank' colored>Medium</Button>
          </CardActions>
        </Card>

        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', fontSize: '20px', height: '176px', background: 'url(http://f201437.wpengine.com/wp-content/uploads/2014/10/FormsResourcesImage.jpg) center/ cover'}}></CardTitle>
          <CardText>
          <h5 style={{fontWeight:'bold', color: 'black'}}>Optimization of LinkedIn Profile for New Developers</h5>
          Let’s talk about forms!
          </CardText>
          <CardActions className="buttons" border>
            <Button href="https://medium.com/@tanuka.das12/html-forms-to-html-forms-in-rails-4a345d9aaed2" target='_blank' colored>Medium</Button>
          </CardActions>
        </Card>


        </div>
      )
    }
  }


  render (){
    return (
      <div>
      <div className="tabs" style={{background: '#2980B9'}}>
      {/* use the tabs for future projects */}
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Blogs</Tab>

        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>

        <footer style={{color:"grey", textAlign:'center', paddingTop: '35px', paddingBottom: '15px'}}>
        © Tanuka Das. All rights reserved except the logos, which belong to the respective companies.
        </footer>
      </div>
    )
  }
}

export default Projects;
