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
        game: { type: String, required: true, trim: true},
        comment: { type: String, required: true, trim: true},
        likes: { type: Number, required: true, trim: true}
    },
    { timestamps: true }
);

const favoriteSchema = mongoose.Schema(
    {
        gameId: { type: String, required: true, trim: true},
        name: { type: String, required: true, trim: true},
        image: { type: String, required: true, trim: true},
    }
)

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
## Code Snippet
```
const Nav = () => {
  const token = localStorage.getItem('token');
  return (
    <nav className={navcss.nav}>
      <div >
        <div className="links">
          {token ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
```
### Above: We created two variables: authenticatedOptions and unauthenticatedOptions. With the authenticatedOptions, what it contains in the Navbar is an option to select profile, while unauthenticated does not. So with the teniary conditional statement, it is asking if there is a token in the local storage, it will return the authenticatedOptions variable, allowing registered users to nagivate to their profile
```
Favorite.create(req.body, (error, favorite) => {
        if (error) {
          res.json(errorHandler(true, "error adding Favorite"))
        }
        let i = 0
        while (i < user.favorites.length - 1) {
          i++
          // console.log(user.favorites[i].name)
          if (user.favorites[i].name.includes(newFavorite.name)) {
            return res.send(errorHandler(true, "already in your favorites"))
          }
        }
        // console.log(i)
        user.favorites.push(favorite)
        user.save((error) => {
          // console.log(error)
          return res.json(errorHandler(false, "Added a favorite", favorite))
        })
      });
    });
```
### Above: We created a variable (this is the middle part of it), to allow a user to add a game to their favorites. The while loop allows the user to select a game to their favorites but cannot add it again, preventing duplicates in their favorites section on their profile.

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

