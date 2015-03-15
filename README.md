# Vinstagram

 [Heroku link][heroku]

 [heroku]: https://vinstagram.herokuapp.com/session/new

## Minimum Viable Product
Vinstagram is a clone of Instagram built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Upload Posts
- [x] View Posts
- [x] Follow Users
- [x] View a feed of Users' Posts
- [x] View a feed of Posts
- [x] Search for Users
- [x] View a feed of subscribed Users' Posts
- [ ] Posts are Images

- [ ] Like Posts
- [ ] Comment on Posts
- [ ] Create Tags for topics in Comments
- [ ] Create Tags for Users in Comments
- [ ] Search for Posts by tag

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
I will implement user authentication in Rails. By the end of this phase, users will be able to create users and log in using a text form. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Accounts and Posts (~2 days)
I will add API routes to serve user and post data, then add Backbone models and collections that fetch data from those routes. I will need to integrate filePicker for picture uploads.  By the end of this phase, users will be able to upload and view pictures and users.

[Details][phase-two]

### Phase 3: Creating and Displaying Comments with tags (~2 days)
I will add commenting and tagging functionality to posts.  I'll need to make sure that the text is properly escaped and formatted to allow the tagging of both users and topics.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a feed route that uses the current_user's followees to serve a list of posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches from the new route.  Ultimately, this will be the page users see after logging in.

[Details][phase-four]

### Phase 5: Searching for Users and Tags (~2 days)
I'll need to add `search` routes to both the users and tags controller. On the Backbone side, there will be a `SearchResults` composite view has `Usersindex` and `TagsIndex` subviews. These views will use `users` and `tags` collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] "Like" button and counter for posts
- [ ] Pagination/infinite scroll
- [ ] Activity history (e.g. likes, follows, posts)
- [ ] User avatars
- [ ] Typeahead search bar
- [ ] Picture Filters
- [ ] Picture Cropping

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
