```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    
    server-->>browser: RESPONSE HTML Document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

    server-->>browser: RESPONSE spa.js

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    
    server-->>browser: RESPONSE data.json
