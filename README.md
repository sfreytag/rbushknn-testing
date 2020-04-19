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

The webpage should print out some console output, ideally the results of the search, but more likely the `Queue is not a constructor` error.

There's also a script to run the same code via CommonJS modules using Node:

```
npm run commontest
```

This will complete OK and print out the expected console output.