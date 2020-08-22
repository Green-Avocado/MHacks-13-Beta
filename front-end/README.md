# Javascript functions

## Existing authentication check

`preAuth.js` is to be imported for any page only accessible to unauthenticated users, such as the login and register pages.

`authRequired.js` is to be imported for any page requiring authentication, such as a user's chat or matches.

## Database structure

 - users
    - _example user_
        - chats
        - friends
        - profile
 - chats
    - _example chatroom_
        - members
            - _example user_
        - messages
            - _example message_
                - content: _example text_
                - sender: _example user_
                - timestamp: _example unix time_

