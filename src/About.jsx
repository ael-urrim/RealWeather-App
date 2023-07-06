import "./index.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <h2 className="title">About this Project</h2>
        <div className="body">
          <p>
            This is a weather frecasting app created out of my passion for
            meteorology. This is a portfolio project for my software engineering
            course at ALX and Holberton School of Programming and computer
            Science. My desire for weather forecasting was what birthed the idea
            of this project.{" "}
            <Link to="https://www.holbertonschool.com" className="link">
              Holberton School of Computer Science and Programming
            </Link>{" "}
            gave me this opportunity to make this a reality.
          </p>
          <p>
            {" "}
            The RealWeather App is an app for checking the weather condition of
            a particular location per time. This app is very useful for
            individulas, aviation companies or even for marine machines.
          </p>

          <p>Here are the links to my social media accounts</p>
          <p>
            <ul>
              <li>
                LinkedIn:{" "}
                <Link
                  to="https://www.linkedin.com/in/samuel-obanijesu-86b272212/"
                  className="link"
                >
                  LinkedIn page
                </Link>
              </li>
              <li>
                Github:{" "}
                <Link to="https://github.com/ael-urrim" className="link">
                  Github repo
                </Link>{" "}
              </li>
              <li>
                Twitter:{" "}
                <Link to="https://twitter.com/ael_urrim" className="link">
                  Twitter page
                </Link>
              </li>
              <li>
                Project Github repo:{" "}
                <Link
                  to="https://github.com/ael-urrim/RealWeather-App"
                  className="link"
                >
                  Project repo
                </Link>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="key-features">
        <h2 className="title">Key Features</h2>
        <div className="feature-one">
          <h3>1. Check weather by city and country</h3>
          <p>
            Users can check the weather condition of a city by entering the
            city and country name in the provided input fields.
          </p>
        </div>
        <div className="feature-two">
          <h3>2. Expected weather</h3>
          <p>
            Users will be able to shown the expected weather type of the area
            they searched. For example, they will be able to know if it was
            going to be rainy, sunny, snowy etc in the selected area that
            particular day.
          </p>
        </div>
        <div className="feature-three">
          <h3>3. Temperature range</h3>
          <p>
            Users will also be able to see the minimum and maximum temperatures
            in that particular area at the same time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
