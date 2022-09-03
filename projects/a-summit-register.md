---
layout: project
type: project
image: img/summit-register/sr-icon.png
title: "Summit Register"
date: 2020
published: true
labels:
  - Python
summary: "A tool to find alpine adventures. Query a database to find a hike that matches search criteria and keep a log of hikes completed."
---

A summit register is a logbook that can be found at the top of many mountain peaks. In these logbooks, visitors record their name and the date of their ascent, along with other optional information such as their hometown and a brief description of the hike.

This program was my final project for ICS 211. Written in Python, the program uses an SQL database to store information about a number of different hikes and their statistics, such as distance, elevation gain, maximum elevation, prominence (in the case of peaks), and difficulty rating. The program implements Tkinter to display a simple GUI where users is able to see a list of hikes and sort them as they wish. Users can also to mark hikes as completed and add their own notes about each hike.

This was my first time trying to make Tkinter GUI look "good" rather than just using the default Tkinter parameters. I learned that Tkinter is very customizable and programmers are not stuck with the default layout. This was also one of my first times implementing an SQL database into an application instead of simply storing the information directly in the program's code.

<p style="text-align:center;">
  <img height="400" src="../img/summit-register/sr-menu.png" alt="Summit Register Menu">
  <img height="400" src="../img/summit-register/sr-search.png" alt="Summit Register Search">
</p>

<p style="text-align:center;">
  <a href="https://github.com/robertgodfrey/Summit-Register" target="_blank">GitHub Repository</a>
</p>
