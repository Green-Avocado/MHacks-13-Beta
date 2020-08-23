# Javascript functions

## Existing authentication check

[`auth_checks/preAuth.js`](auth_checks/preAuth.js) is to be imported for any page only accessible to unauthenticated users, such as the login and register pages.

[`auth_checks/authRequired.js`](auth_checks/authRequired.js) is to be imported for any page requiring authentication, such as a user's chat or matches.

## Database structure

 - users
    - _example user_
        - chats
        - friends: _example array_
        - ignored: _example array_
        - name: _example name_
        - profile-picture: _example link_
        - subjects
            - _example subject_
                - grade: _example grade_
 - chats
    - _example chatroom_
        - members
            - _example user_
        - messages
            - _example message_
                - content: _example text_
                - sender: _example user_
                - timestamp: _example unix time_

