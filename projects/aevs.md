---
layout: project
type: project
image: img/aevs/aevs-logo.png
title: Autonomous Electric Vehicle System
date: 2023
published: true
labels:
  - Node.js
  - Flask
  - NVIDIA Jetson
summary: "Mechanical engineering project with the goal of fully autonomous delivery around the University of Hawai'i at Manoa campus."
---

<div class="col d-flex justify-content-center">
  <img width="75%" class="shadow" src="../img/aevs/control-center.png" alt="AEVS control center">
</div>

<img width="200px" class="float-end" hspace="10px" src="../img/aevs/aev-mockup.png" alt="AEVS mockup">

<div class="mt-4"></div>
The Autonomous Electric Vehicle System (AEVS) is a Vertically Integrated Project (VIP) for the College of Engineering at the University of Hawai'i at Manoa. VIP consists of mechanical engineering students who complete the project in their final year, and volunteers from other majors. The project's goal is fully autonomous delivery of packages around the UH Manoa campus.

The software side of the AEVS is broken up into three major components:
- The user website, where users can schedule and modify deliveries (Node.js, Express, MongoDB)
- The control center, where a team member can monitor AEV status and manually control the AEV if necessary (Node.js, Express)
- The AEV itself (NVIDA's Python AI libraries for object detection and avoidance, running a server built with Flask to stream video, relay telemetry, and receive remote commands)


<div class="col d-flex justify-content-center">
  <img width="75%" class="shadow" src="../img/aevs/logic.png" alt="AEVS control center">
</div>

<div class="row" >
  <div class="col d-flex justify-content-center">
    <img height="500px" src="../img/aevs/door-opening.gif" alt="AEV door opening">
  </div>
  <div class="col d-flex justify-content-center">
    <img height="500px" src="../img/aevs/driving.gif" alt="AEV in operation">
  </div>
</div>
<div class="row mt-2" >
  <div class="col text-center px-5">
    Linear actuators opening the AEV's door (command received remotely from the user website)
  </div>
  <div class="col text-center px-5">
    The AEV in operation (remotely controlled over the internet via the command center website)
  </div>
</div>



<br>
<p style="text-align:center;">
  <a href="https://github.com/HACC-Cassiopeia/Legislative-Scraper-Production" target="_blank">GitHub Repository</a>
</p>
