```
mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    
    browser->>server:POST https://studies.cs.helsinki.fi/exampleapp/notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    
    server-->>browser: RESPONSE main.css

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js

    server-->>browser: RESPONSE main.js

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    
    server-->>browser: RESPONSE data.json with new note

```
