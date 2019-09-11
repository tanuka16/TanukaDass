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
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center/ cover'}}>DoNation</CardTitle>
          <CardText>
          DoNation is a charity app, which allows users to research numerous charitable organizations to award donations.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/tanuka16/DoNation-Back-end" colored>GitHub</Button>
            <Button href="https://youtu.be/RnQherXmMkk" colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* project 2 */}
        <Card className='card' shadow={5} style={{minWidth:'450', merginBottom: '20px'}}>

          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center/ cover'}}>House of Shoes</CardTitle>
          <CardText>
          House of Shoes is a shoe wish-list app, it holds shoes of different brands and category. Users have access to search and filter by brand and type; Users can create an account and add their favorite shoes in their wish list.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/tlam212/Shoe_App" colored>GitHub</Button>
            <Button href="https://youtu.be/t1xcK1T7Y8o" colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>

        </Card>

        {/* project 3 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center/ cover'}}>Instagram Lite</CardTitle>
          <CardText>
          Instagram Lite is a social media app, allows users to create an account, post images, like pictures and add comments on other users account.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/April17/module-one-final-project-guidelines-dumbo-web-051319" colored>GitHub</Button>
            {/*<Button colored>Live Demo</Button>*/}
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return (
        <div><h1>This is Rails</h1></div>
      )
    }
  }


  render (){
    return (
      <div className="tabs">
      {/*  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          {/*<Tab>Projects</Tab>
          <Tab>Rails</Tab>
          <Tab>React</Tab>
        </Tabs>
        */}

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>

      </div>
    )
  }
}

export default Projects;
