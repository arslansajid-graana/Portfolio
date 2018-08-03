import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="./Arslan.jpg"
                alt="avatar"
                style={{height: '200px', width: '190px', borderRadius: '70%'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Arslan Sajid</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Experienced Frontend Developer with a demonstrated history of working on the Computer Software/Web based projects. Skilled in Node.js, React.js, AngularJS and MongoDB. A strong engineering professional, graduated from National University of Sciences and Technology (NUST).</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>House # 518-C Gulgasht Colony Multan </p>
            <h5>Phone</h5>
            <p>(+92) 321-6375414</p>
            <h5>Email</h5>
            <p>arslansajid951@gmail.com</p>
            <h5>Web</h5>
            <p>arslansajid.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="National University of Sciences and Technology (NUST)"
              schoolDescription="Bachelors of Computer Engineering "
               />

               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> */}
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
            <Experience
                startYear={'July 2017'}
                endYear={'August 2108'}
                jobName="Benazir Income Support Programme Islamabad (HQ)"
                jobDescription="Web Development Intern ( Node.js || Angular.js || MongoDB || HTML || CSS || Bootstrap )"
                />

            <Experience
              startYear={'March 2018'}
              endYear={'Present'}
              jobName="Graana Group of Companies"
              jobDescription="Front End Developer ( React.js || Node.js || HTML || CSS || Bootstrap || SASS )"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                  skill="Bootstrap"
                  progress={75}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={75}
                    />
                    <Skills
                      skill="ReactJS"
                      progress={90}
                      />
                      <Skills
                      skill="AngularJS"
                      progress={90}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
