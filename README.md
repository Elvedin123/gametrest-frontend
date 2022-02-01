# gametrest-frontend

## Team JEVH

<!-- ![teamLogo](pictures/astroscropped.jpg) -->

#

## Overview

#

GameTerest allows users to view and comment on anticpated videogames. Users will be shown a list of games in which they can like, add to their profile, and leave comments/reviews. Users will have to sign up in order to interact with the videogames, but guests can view games and read comments. 


#

## Schemas

```

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirmPassword: { type: String, required: true, trim: true },
    isBusiness: false/true,
    posts: [postSchema],
  },
  { timestamps: true }
);

const postSchema = mongoose.Schema(	{
  title/event: { type: String, required: true, trim: true },
	body/content: { type: String, required: true, trim: true },
	numberNeeded: { type: Number, required: true, trim: true },
	Comments: [commentSchema]
}) {


const commentSchema = mongoose.Schema({
  content: { type: String, required: true, trim: true },
  likes: { type: Number, required: true, trim: true },
})

const contactSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true }
})

```

#

## Whimsical

Components Architecture
![image](pictures/Volunteer-App-Architecture.png)

Design

Click [here](https://www.figma.com/file/POIF6n9solHxRYnuyD3qLe/Gametrest?node-id=0%3A1) to view our design concept for GameTerest!

#

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1gEEEZLYQv1FVZnj01EOuUKc1Dxf7jszYB9pLbA_D53M/edit?usp=sharing)

Listed above contains our roles, what are coding practices will be, and what are values/ expectations are as a team. 

#

## GitHub Project Board

This contains a list of our MVP's and post-MVP's. Each person will be assigned something that is posted on the to-do list. When that person starts to work on it, they will drag it from the to-do into the in progress board. Once they have finished this they will put it in the done board and delete the assignment entry in the assignment board. As the project becomes clearer things may be added to the to-do list. Before assigning someone a task we will check in with each other if thats okay.

[GitHub Project Board](https://github.com/users/ImmanuelCurrah/projects/1/views/1)

#