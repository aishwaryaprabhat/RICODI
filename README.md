# RICODI
Remote Interview CODing Interface: InterfaceA prototype for an online coding interview interface (for CS6250 HCI)

# Heroku Build Commands
```
heroku login
heroku container:login
heroku container:push web --app ricodi
heroku container:release web --app ricodi
```