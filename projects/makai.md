---
layout: project
type: project
image: img/makai/cmdr-logo.png
title: Makai
date: 2023
published: true
labels:
  - Next.js
  - React
  - MongoDB
  - Tailwind
  - Hackathon
summary: "Web application designed to facilitate marine debris reporting, removal, and disposal throughout the Hawaiian Islands. Third-place winner of the 2023 Hawaii Annual Code Challenge."
---
<div class="my-3">
  <i>Makai was developed for the Hawai'i Annual Code Challenge (HACC) 2023, where it came in 3rd place out of 41 teams.</i>
</div>

<div class="mt-2"></div>
The removal and disposal of marine debris is a complicated process that involves a lot of moving pieces and requires the collaboration of a number of different organizations throughout the islands. The Center for Marine Debris Research (CMDR) did not have a good system to track marine debris through the process of reporting, removal, storage, sorting, and disposal, and lacked a centralized database to track marine debris data. As a result, accurate tracking was challenging, and data analysis was nearly impossible. My team created Makai as a solution to this problem. Makai is intended for use by both the public and organizations responsible for large debris removal and features a centralized database that stores all debris reports in one place, enabling marine debris researchers to accurately monitor types of debris and debris hotspots, track current status of debris removal and disposal, and generate meaningful statistics that can be used to further study marine debris.

Makai was built with Next.js. The frontend was built with React, Tailwind, and DaisyUI, and MongoDB was used for the backend. We used Google's Dialogflow CX to create a chatbot for the website, as well as an automated call center for new marine debris reports. The team consisted of myself and four other computer science students: Ana Catarina Oliveira Araújo, Giorgio Tran, James Louie Grande, and Shin Saito. Throughout the development of the app, we collaborated via GitHub for hosting our repository and tracking issues, and Discord for meetings and chat-based communication. Each team member took on specific tasks and issues and we met multiple times each week to make sure that we were all on the same page.

<div class="col d-flex justify-content-center">
  <img width="60%" src="../img/makai/map.png" alt="Landing page map and chat">
</div>
<div class="text-center small">
  A heatmap on the landing page displays the location of marine debris reports throughout the islands. Users can also use the chatbot to learn more about marine debris.
</div>

<div class="col d-flex justify-content-center mt-2">
  <img width="60%" src="../img/makai/track-debris.png" alt="Track marine debris page">
</div>
<div class="text-center small">
  Users can track a specific marine debris report, from the initial report to disposal.
</div>

<div class="col d-flex justify-content-center mt-2">
  <img width="60%" src="../img/makai/data-insights.png" alt="Marine debris statistics page">
</div>
<div class="text-center small">
  A major feature of Makai is the generation of statistics. This Sankey diagram shows the flow of marine debris from each island, to debris type, to disposal method.
</div>
<br>
<p style="text-align:center;">
  <a href="https://github.com/HACC-2023/makai" target="_blank">GitHub Repository</a>
  <a href="https://makai-marine.vercel.app/" target="_blank">Live website</a>
</p>
