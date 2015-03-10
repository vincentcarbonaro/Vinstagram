# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
img         | binary    | not null
text        | string    |

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
following_id     | integer   | not null, foreign key (references blogs)
follower_id | integer   | not null, foreign key (references users)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
author_id   | integer   | not null, foreign key (references users)
body        | string    | not null

## likes
column name | data type | details
------------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
post_id     | integer   | not null, foreign key (references posts)

## user_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## topic_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   |
label       | string    | not null, unique
