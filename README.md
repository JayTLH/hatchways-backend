# Hatchways Back-end Assessment - Blog Posts
Created by Jason Huang

In this assessment, I made a simple backend JSON API using Node.js and Express.js with data from Hatchways' own API. It is set to run on PORT = 8080

## Usage
To start the app, run...

```
npm install
```

then...

```
node index.js
```

## Info
### Route 1 - ```GET /api/ping```

A simple ping to see if the server is running that will return a success message.

```
{
  "success": true
}
```

### Route 2 = ```GET /api/posts```
A route that requires a query to return data. The query MUST include a tag.
```
/api/posts?tag=xyz
```

On success it will return an object with the posts...

```
{
  posts: [Array]
}
```

Optional queries can be added to sort the posts by `id`, `likes`, `reads` and `popularity` using the `sortBy` key.

```
/api/posts?tag=xyz&sortBy=popularity
```

And/or you can sort by descending or ascending using the `direction` key and passing it a value of `desc` or `asc`.

```
/api/posts?tag=xyz&sortBy=popularity&direction=desc
```

or...

```
/api/posts?tag=xyz&direction=desc
```

The appropriate error messages are returned if the tag is missing or if the sortBy or direction values are invalid.

### Step 3 - Testing
Testing is done with `Mocha` and `Chai` within `/test/test.js`. It asserts that the data returned will be in the correct format and contain all the nessary keys and values.

Tests can be run with...
```
npm test
```

### Step 4 - Caching
To reduce the number of API calls, the server makes use of in-memory caching to store information for subsequent API calls. This is done using the `memory-cache` package.

## Additional Info
`/config.json` will provide the information for Hatchways to run the app and complete the assessment.
