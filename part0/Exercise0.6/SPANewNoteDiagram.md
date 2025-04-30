```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON Response
    deactivate server

    Note right of browser: The browser sends a POST HTTP request in JSON Format to create a new Note
```
