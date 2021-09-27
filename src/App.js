import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Slider from './slider';


function App() {

  
  return (
    <div className="App">
     <div className="projects">
     <h2>My Projects</h2>
     </div>
     <div className="wow">
     
            
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://2c0vo0297zmb1rhk1a1tbimd-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/iStock-827972112-2-1-1024x768.jpg"></img>
         <div className="p-0 card-body">
           <span className="class-title">Faculty Finder</span>
           <p class="class-bio pt-1 card-text">This App lets the user find the faculty/staff members within an organisation. </p>
           <span className="skill-tag">Android Studio</span>
           <span className="skill-tag">Java</span>
           <span className="skill-tag">Firebase</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
       
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png"></img>
         <div className="p-0 card-body">
           <span className="class-title">Project PotHole</span>
           <p class="class-bio pt-1 card-text"> The Project helps the Administrations of our society to take care of the potholes. </p>
           <span className="skill-tag">Nodejs</span>
           <span className="skill-tag">React</span>
           <span className="skill-tag">Express</span>
           <span className="skill-tag">MongoDB</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/544_794407_tech.hero.jpg"></img>
         <div className="p-0 card-body">
           <span className="class-title">Blog App</span>
           <p class="class-bio pt-1 card-text">Users can create their blogs on this website . They can create , update and Delete their blogs  </p>
           <span className="skill-tag">Android Studio</span>
           <span className="skill-tag">Java</span>
           <span className="skill-tag">Firebase</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/desk_resize_md.jpg"></img>
         <div className="p-0 card-body">
           <span className="class-title">NotesApp</span>
           <p class="class-bio pt-1 card-text">This App lets the user to create and manage their notes on the go. this is very easy to use and to maintain . </p>
           <span className="skill-tag">Android Studio</span>
           <span className="skill-tag">Java</span>
           <span className="skill-tag">Firebase</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/501_545292_management.hero.jpg"></img>
         <div className="p-0 card-body">
           <span className="class-title">SplitWise</span>
           <p class="class-bio pt-1 card-text">Users can keep the track of their expenses and also can share and manage their bills within friends .  </p>
           <span className="skill-tag">Android Studio</span>
           <span className="skill-tag">Java</span>
           <span className="skill-tag">Firebase</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
       <div className=" profile-card card">
         <img className="card-img avatar" src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/533_794653_accounting.hero.jpg"></img>
         <div className="p-0 card-body">
           <span className="class-title">Jambo</span>
           <p class="class-bio pt-1 card-text">This is a dating app . where users can find people of same interests based on their geolocations </p>
           <span className="skill-tag">Android Studio</span>
           <span className="skill-tag">Java</span>
           <span className="skill-tag">Firebase</span>
           <button type="button" class="btn">View Code</button>
         </div>
       </div>
      </div>
    
     </div>
    
  );
}

export default App;
