import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FooterSection, Footer, FooterLinkList} from 'react-mdl';

class LandingPage extends Component{
  render(){
    return(
      <div className='landing-page' style={{ width:'100%', margin:'auto'}}>
        <Grid className= 'landing-grid'>
          <Cell col={12}>
            <img src= './Arslan.jpg'
                 alt= 'Profile Image'
                 className= 'profile-image'
            />
            <div className='banner-text'>
              <h1> Full Stack Web Developer</h1>
              <hr/>
              <p> HTML/CSS | Bootstrap | NodeJS | React | React Native | MongoDB | Express | WordPress </p>
              <div className='social-links'>
                <a href='https://fb.com/arslan.sajid.773' rel='noopener noreferer' target='_blank'>
                <i className='fab fa-facebook-square' aria-hidden='true' />
                </a>

                <a href='https://github.com/arslansajid-graana' rel='noopener noreferer' target='_blank'>
                <i className='fab fa-github' aria-hidden='true' />
                </a>

                <a href='https://www.linkedin.com/in/arslan-sajid-b13005107/' rel='noopener noreferer' target='_blank'>
                <i className='fab fa-linkedin' aria-hidden='true' />
                </a>

                <a href='https://stackoverflow.com/users/8359521/arslan-sajid?tab=profile' rel='noopener noreferer' target='_blank'>
                <i className='fab fa-stack-overflow' aria-hidden='true' />
                </a>

                <a href='www.ggogle.com' rel='noopener noreferer' target='_blank'>
                <i className='fab fa-instagram' aria-hidden='true' />
                </a>
                
              </div>
              
              </div>
            </Cell>
         </Grid>
        </div>
    );
  }
}

export default LandingPage;
