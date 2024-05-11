import BJW from '../../../assets/images/BJW.png';
import Zesty from '../../../assets/images/zestyClip1.png';
import Planner from '../../../assets/images/Planner.jpg';
import Weather from '../../../assets/images/Weather.png';
import Quiz from '../../../assets/images/Quiz.jpg'
import Mountain from '../../../assets/images/Mountain.jpg'

export default function Portfolio() {
    return (
      <div>
        <p className="font70 class-textnuni black title beau" style={{ marginTop: "15px" }}>
          Some things I've worked on...</p>

      
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center my-5">
       <div className="text-center">
        <a href="https://hamsterbrain.onrender.com/" class="font50 nuni black">
          Hamster Brain
        </a>
       </div>
       <a href="https://hamsterbrain.onrender.com/" className="font50 nuni black container d-flex flex-column align-items-center justify-content-center my-5">
       <img src={Mountain} style={{ width: "70%", height: "auto", borderRadius: "40px", 
       border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
       </a>
       <p className="nuni font20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The focus for this app was to be a task management system that featured a partner based accountability
        system. One user could pair with another and they would be able to check off the other persoons task. This would
        reward points to the users account. For future development we wanted to use a cash system instead of points
        to create a 'put your money where your mouth is' rewards system for people to struggle to focus on things
        they need to get done. We also laid the ground work for for a community hub where users could create posts
        and comment on them. My input was coding the initial setup for the task system that the team would expand on
        as well as the community board features.
       </p>
       <p className="nuni font20">Technologies used: Apollo Server, React/Vite, Bootstraps, and MongoDB</p>
      </div>

        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">  
        <a href="https://bjw-6acf89df7f9b.herokuapp.com/classic" class="font50 nuni black">
          Black Jack Wild
          </a>
          </div>
          <a href="https://bjw-6acf89df7f9b.herokuapp.com/classic" className="container d-flex flex-column align-items-center justify-content-center my-5">
          <img src={BJW} style={{ width: "70%", height: "auto", borderRadius: "40px", 
        border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black"}} />
          </a>
          <p className="nuni font20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was a fun one to work on, it is a stand alone fully functional Black Jack app.
          Users can make an account and start playing right away. It even features a chip counter
          that maintains across multiple session and also has a win stat tracker. The stat tracker was my idea
          as well as most of the front end log in/out functionality and its styling. I also edited and
          coded the sound effects.
          </p>
          <p className="nuni font20">
            Technologies used: Express, Handlebars, mySql2, and JavaScripts built in audio player
          </p>

       </div>



       <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://warhawk1950.github.io/Zesty-Bytes/" class="font50 nuni black">
            Zesty Bytes
          </a>
        </div>
        <a href="https://warhawk1950.github.io/Zesty-Bytes/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Zesty} style={{ width: "70%", height: "auto", borderRadius: "40px",
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
      <p className="nuni font20">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My first major group project, ZestyBytes is a light weight and easy to use recipe app.
        Not only does it look up recipes but also a plethora of other useful information
        like nutrional value, cost per serving, and a user score based of the Spoonacular API.
        Searches can be further customized by parameters like choice of protien and flavor profile.
      </p>
      <p className="nuni font20">
        Technologies used: Spoonacular, Tailwind
      </p>
        </div>



        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://justinh144.github.io/DailyPlanner/" class="font50 nuni black">
            Daily Planner
          </a>
        </div >
        <a href="https://justinh144.github.io/DailyPlanner/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Planner} style={{ width: "70%", height: "auto", borderRadius: "40px", 
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
        </a>
        </div>


        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div  className="text-center">
          <a href="https://justinh144.github.io/WeatherApp/" class="font50 nuni black">
            Real Time Weather App
          </a>
        </div>
        <a href="https://justinh144.github.io/WeatherApp/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Weather} style={{ width: "70%", height: "auto", borderRadius: "40px", 
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
        </div>


        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://justinh144.github.io/JavaQuiz/" class="font50 nuni black">
            Java Quiz
          </a>
        </div>
        <a href="https://justinh144.github.io/JavaQuiz/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Quiz} style={{ width: "70%", height: "auto", borderRadius: "40px",
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
        </div>
        
       </div>
       </div>
       
       
     
       
       
    );
  }
  