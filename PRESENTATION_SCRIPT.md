# 🎤 FitPulse - Live Presentation Script

## 1. Introduction (1 min)
**[Screen: Show the main Dashboard]**

"Hello everyone. Today I'd like to present **FitPulse**. 
Managing fitness can often feel overwhelming when you have to use one app for your workouts, a different app for diet planning, and another for tracking weight. 
We built FitPulse to solve this. FitPulse is a comprehensive, AI-powered health dashboard that brings all your fitness data under one roof."

---

## 2. Setting Up The User (1 min)
**[Action: Click on 'My Profile' in the sidebar]**

"Let's walk through the app. Every great health plan starts with knowing where you stand. 
Here in the Profile section, users input their basic data: age, weight, and activity level. 

**[Action: Click on 'BMI Calculator']**
We also built a custom BMI calculator. When a user enters their height and weight, the app instantly calculates their Body Mass Index and categorizes their health status. This data is saved to our MongoDB backend and used throughout the application."

---

## 3. The Core Tracking (2 mins)
**[Action: Click on 'Workouts' in the sidebar]**

"At the core of FitPulse is the Workout Logger. 
**[Action: Log a quick workout, e.g., 'Running', 30 mins, 'High' intensity]**
Users can log their daily sessions easily. This section uses full CRUD operations—Create, Read, Update, and Delete—allowing users to manage their entire exercise history. 

**[Action: Click on 'Goals']**
Similarly, we have a Goals tracker. Whether you want to run 50km this month or drop 5kg, you can set an active target here."

---

## 4. The "Wow" Factor: AI Integration (2 mins)
**[Action: Click on 'AI Diet' in the sidebar]**

"Now for the most exciting feature. Generic apps give you generic meal plans. We wanted FitPulse to be smart. 
By integrating the **Google Gemini 2.5 Flash AI API**, FitPulse acts as your personal nutritionist.
**[Action: Fill out the form: Goal -> Muscle Gain, Diet -> High Protein. Click 'Generate AI Plan']**

When I click generate, our Node.js backend securely communicates with Gemini in real-time, taking the user's specific profile metrics and returning a highly customized, one-day meal plan.

**[Action: Click on 'AI Workout' in the sidebar]**
It does the exact same thing for workouts! If you only have dumbbells and want to build endurance, the AI will generate a tailored routine for you on the spot."

---

## 5. Analytics and Conclusion (1 min)
**[Action: Click on 'Dashboard' then 'Stats']**

"Finally, data is only useful if you can understand it. 
Back on the dashboard and the Stats page, we use **Chart.js** to visualize the user's progress. 

**[Action: Point out the water tracker and the donut charts]**
From tracking daily water intake with this interactive circle, to breaking down weekly calorie burns, FitPulse makes health tracking engaging. 

This project was built using the MERN stack—MongoDB, Express, Vanilla JS, and Node.js. 
Thank you for watching, I'm happy to answer any questions!"
