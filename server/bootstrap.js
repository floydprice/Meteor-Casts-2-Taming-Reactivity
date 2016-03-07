import Tweets from '../lib/tweets'

let insertNewTweet = (randomDates = false) => {
  let newTweet = {
    content: faker.hacker.phrase(),
    created_at: randomDates ? faker.date.recent(2) : new Date(),
    likes: faker.random.number(10),
    retweets: faker.random.number(4),
    tweeter: {
      name: faker.name.findName(),
      avatar: faker.internet.avatar()
    }
  }
  console.log(`inserting new tweet from ${newTweet.tweeter.name}`)
  Tweets.insert(newTweet)
}

let insertNewTweets = (times, randomDates = false) => {
  _.times(times, () => {
    insertNewTweet(randomDates)
  })
}

Meteor.startup(() => {
  // Bootstrap the app with some data
  Tweets.remove({})
  insertNewTweets(25, true)

  // Now simulate data coming in...
  Meteor.setInterval(() => {
    insertNewTweets(3)
  }, 7000)
})