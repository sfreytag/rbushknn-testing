Clone the repo then install node_modules:

```
npm install
```

Run the webpack build:

```
npm run build
```

Serve it on localhost:

```
npm run serve
```

The web page should show the 'Queue is not a constructor' error.

Now try running the same code via CommonJS modules using Node:

```
npm run commontest
```

This will complete OK and print out the expected console output.