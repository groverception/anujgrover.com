# anujgrover.com
Setup a supabase project   for databaase with 'visit_counter' as table 
## Project setup
```
yarn install
```

In the terminal, create a config.js file and open it up:

```
touch config.js
atom config.js
```
In the config file, enter your API keys in an object like so (naming them whatever you like, and putting the keys in 
as strings). You don't need any other code in this file:

var config = {
    MY_KEY : 'your anon key',
    URL : 'your supabase url',
  }

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
