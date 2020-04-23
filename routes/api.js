const express = require('express');
const router = express.Router();
const axios = require('axios');

// route 1
router.get('/ping', (req, res) => {
  res.status(200).json({ success: true })
});

// route 2
router.get('/post', (req, res) => {
  let tag = req.query.tag
  let sortBy = req.query.sortBy
  let direction = req.query.direction
  let url = 'https://hatchways.io/api/assessment/blog/posts'
  let tagArr = req.query.tag.split(',')
  let reqArr = []
  let dataObj = {}
  let sortErr = { error: 'sortBy parameter is invalid' }

  // validation to ensure the correct queries are in place
  if (!tag) {
    res.status(400).json({ error: 'Tags parameter is required' })
  }

  if (!sortBy) {
    sortBy = 'id'
  } else if (sortBy === 'id' || sortBy === 'reads' || sortBy === 'likes' || sortBy === 'popularity') {
    // sort is correct
  }
  else {
    res.status(400).json(sortErr)
  }

  if (!direction) {
    direction = 'asc'
  } else if (direction === 'asc' || direction === 'desc') {
    // direction is correct
  } else {
    res.status(400).json(sortErr)
  }

  // making a get request for each tag in the query
  tagArr.forEach(tag => {
    reqArr.push(axios.get(`${url}?tag=${tag}`))
  })

  axios.all(reqArr)
    .then(responses => {
      responses.forEach(response => {
        response.data.posts.forEach(post => {
          // for efficiency, to eliminate any duplicate posts i used every object's unique id so that duplicates would simply overwrite the original
          dataObj[post.id] = post
        })
      })

      let dataArr = Object.values(dataObj)

      if (direction === 'asc') {
        dataArr.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
      } else {
        dataArr.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1)
      }

      res.status(200).json({ posts: dataArr })
    })
    .catch(err => {
      console.error('ERROR BELOW', err, 'ERROR ABOVE')
    })
});

module.exports = router;
