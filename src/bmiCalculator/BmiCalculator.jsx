import React from "react";
import "./BmiCalculator.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

export default function BmiCalculator() {
  function MIDIInput() {
    let getAge = parseInt(document.getElementById("input-age").value);
    if (getAge > 100) {
      alert("Age is not possible");
    }
    let getHeight = parseFloat(document.getElementById("input-h").value);
    let getWeight = parseFloat(document.getElementById("input-w").value);
    let BMIValue = getWeight / (getHeight * getHeight);
    document.getElementById("bmi-val").innerHTML = BMIValue;

    const selectedRadio = document.querySelector(
      'input[name="choice"]:checked'
    );
    let getGender;
    if (selectedRadio.value == "male") {
      getGender = "male";
    } else {
      getGender = "female";
    }

    if (getAge < 18) {
      document.getElementById("comment").innerHTML =
        "For children and adolescents (2-19 years), BMI percentiles are used to determine a healthy weight based on age and sex-specific growth charts.";
    } else if (getAge > 18 && getAge < 34) {
      if (getGender == "male") {
        if (BMIValue < 23) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 25.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 15.5) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 24.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    } else if (getAge > 35 && getAge < 44) {
      if (getGender == "male") {
        if (BMIValue < 23) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 26.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 19) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 23.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    } else if (getAge > 45 && getAge < 54) {
      if (getGender == "male") {
        if (BMIValue < 23) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 28.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 20) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 25.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    } else if (getAge > 55 && getAge < 64) {
      if (getGender == "male") {
        if (BMIValue < 24) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 28.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 23) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 27.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    } else if (getAge > 65 && getAge < 74) {
      if (getGender == "male") {
        if (BMIValue < 25) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 28.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 24) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 28.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    } else {
      if (getGender == "male") {
        if (BMIValue < 25) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 32.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      } else if (getGender == "female") {
        if (BMIValue < 24) {
          document.getElementById("comment").innerHTML =
            "Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        } else if (BMIValue > 29.9) {
          document.getElementById("comment").innerHTML =
            "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices";
        } else {
          document.getElementById("comment").innerHTML = "You are Healthy.";
        }
      }
    }
  }

  function dMode(){
    document.getElementById('on').style.display = 'none';
    document.getElementById('off').style.display = 'block';
    document.body.style.color = "white";
    // document.getElementById("mainPage").style.backgroundImage = "url('./images/e.jpg')";
    document.getElementById('mainPage').style.backgroundColor = "black";
    document.getElementById('bmi-val').style.color = "white";
    document.getElementById('btn').style.backgroundColor = "white";
    document.getElementById('btn').style.color = "black";
    
  
  }
  function lMode(){
    document.getElementById('off').style.display = 'none';
    document.getElementById('on').style.display = 'block';
    document.body.style.color = "black";
    document.getElementById('mainPage').style.backgroundColor = "white";
    document.getElementById('bmi-val').style.color = "black";
    document.getElementById('btn').style.backgroundColor = "black";
    document.getElementById('btn').style.color = "white";
  }
  return (
    <div id="mainPage" className="mainPage">
      <div className="darkMode" id="darkMode">
        <div id="off" onClick={lMode}><LightbulbIcon/></div>
        <div id="on" onClick={dMode}><LightbulbOutlinedIcon/></div>
      </div>
      <div className="container">
        <h2 className="header">BMI Calculator</h2>
        <div className="age">
          <p className="input-title">Your Age</p>
          <input type="text" id="input-age" className="input-val" required />
        </div>
        <div className="gender">
          <input type="radio" id="male" name="choice" value="male" />
          <label for="male">Male </label>
          <input type="radio" id="female" name="choice" value="female" />
          <label for="female">Female</label>
        </div>
        <div className="height">
          <p className="input-title">Your height (in m)</p>
          <input type="text" id="input-h" className="input-val" required />
        </div>
        <div className="weight">
          <p className="input-title">Your Weight (in kg)</p>
          <input type="text" id="input-w" className="input-val" required />
        </div>
        <div className="submit">
          <button type="button" onClick={MIDIInput} className="btn" id="btn">
            Submit
          </button>
        </div>
        <div className="result">
          <p className="input-title">Your MBI value</p>
          <p id="bmi-val">0</p>
          <p id="comment" className="comment">
            Suggesions
          </p>
        </div>
      </div>
    </div>
  );
}
