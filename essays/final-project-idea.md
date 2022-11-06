---
layout: essay
type: essay
title: "Final Project Idea"
date: 2022-11-01
labels:
  - Software Engineering
  - Meteor
---

## Hike-Finder Application

*Collaboratively written by [Colby Kagamida](https://colbykag.github.io/), [Kayla Hirano](https://khirano7.github.io/), and [Rob Godfrey](https://robertgodfrey.github.io/)*.

### Overview:

*Problem:*
Students may have difficulty finding good hikes around UH Manoa without needing to rely on recommendations, since online sources tend to only list the more popular hikes. Students may also have difficulty meeting other students with similar hiking preferences to themselves.

*Solution:*
Application to find hikes: users can add new hikes around UH Manoa, rate hikes, form groups to plan hiking trips together. Info about hikes can include distance from UH, how to get there, what to bring, hike distance, difficulty, etc.

### Approach

This application would have two user roles, administrator and regular user. All users must login with their UH ID. Regular users can browse the list of hikes available, rate and review hikes, add new hikes, and plan hikes with other students. Admins make sure site content is appropriate. They may remove inappropriate hikes/reviews and delete users for violating the site policies.

Users can specify their experience level, which hikes they are interested in doing, and when they are free. They can also indicate whether they have transportation and would be willing to give other students a ride.

**Mockup page ideas**

- Landing page
- User home page
    - “Hike suggestion” page: A form that general users can fill out to request approval for a hike from an admin
    - List of hikes that users can search through
    - Maybe show activity from the hiking groups / other users that the user is following
- Admin home page
    - List all users with options to remove users and reset passwords
    - List all hikes with options to remove hikes and reviews
- User profile page
    - User information (experience level, hikes of interest, availability, transportation)
    - Show all reviews created by the user
    - Show hiking groups / other users that the user is following
- Hike list page
    - Browse hike by distance from UH, how to get there, what to bring, hike distance, difficulty, etc
- Upcoming planned hikes page
    - Users can plan a hike and create an ‘event’ where other users can indicate that they are interested in going

### Use case ideas

- New user goes to the landing page, logs in, gets the home page, sets up a minimal profile. There is a quick tutorial on how to use the site after creating a new account.
- Admin goes to the landing page, logs in, gets the home page, edits the site. Admins have the ability to remove users and remove inappropriate/illegal hikes & content. New hikes added must be approved by an admin.
- User goes to the landing page, logs in, and looks for hikes of interest. Users can also go to the hike suggestion page to request that a hike be added to the site.

### Beyond the basics
- Add a “following” system where users can follow certain groups of hikes and/or other users that they enjoyed hiking with previously.
- Add a “report” system where users can report hikes and content that are inappropriate/illegal to admins.
- Add a block feature for users. Hikes that have blocked users attending are filtered out.
