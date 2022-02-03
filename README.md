# gametrest-frontend

## Team AstroDev

![teamLogo](https://static.vecteezy.com/system/resources/previews/004/815/102/non_2x/cute-astronaut-working-as-a-programmer-free-vector.jpg)

#

## Overview

#

GameTerest allows users to view and comment on anticpated videogames. Users will be shown a list of games in which they can like, add to their profile, and leave comments/reviews. Users will have to sign up in order to interact with the videogames, but guests can view games and read comments. 


#

## Schemas

```
const commentSchema = mongoose.Schema(
    {
        comment: { type: String, required: true, trim: true},
    },
    { timestamps: true }
);

// const favoriteSchema = mongoose.Schema(
//     {
//         favorite:
//     }
// )


const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true, trim: true},
        firstName: { type: String, required: true, trim: true},
        lastName: { type: String, required: true, trim: true},
        email: { type: String, required: true, trim: true},
        password: { type: String, required: true, trim: true},
        confirmPassword: { type: String, required: true, trim: true},
        avatar: { type: String, required: true, trim: true},
        comments: [commentSchema],
        // favorites: [favoriteSchema],
        isAdmin: false,
    },
    { timestamps: true }
);

```

#

## Whimsical

Components Architecture
[Click here](https://whimsical.com/gameterest-Dg4UiSceLQWpFjVuBActiX) to review our component architecture

Design

[Click here](https://www.figma.com/file/POIF6n9solHxRYnuyD3qLe/Gametrest?node-id=0%3A1)
to review our visual representation of the design of our application.  

#

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1gEEEZLYQv1FVZnj01EOuUKc1Dxf7jszYB9pLbA_D53M/edit?usp=sharing)

Listed above contains our roles, what are coding practices will be, and what are values/ expectations are as a team. 

#

## GitHub Project Board

The link below is a list of our MVP's and post-MVP's. Each person will be assigned set of tasks that are posted on the to-do list either individually or as a group. Once they start working on this task, they will bring it to the in progress. After they have completed their assignment, they will set it as done. Additional tasks may be added as we continue this ambition, but we will consult with each other who would be okay with getting the new task.

[GitHub Project Board](https://github.com/users/Elvedin123/projects/1/views/1)

#

