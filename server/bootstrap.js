import Tweets from '../lib/tweets'

Meteor.startup(() => {
  // Bootstrap the app with some data
  Tweets.remove({});
  _.times(100, () => {
    let newTweet = {
      content: faker.hacker.phrase(),
      created_at: faker.date.recent(365),
      likes: faker.random.number(1000),
      retweets: faker.random.number(250) ,
      tweeter: {
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }
    Tweets.insert(newTweet)
  })

  // Now simulate data coming in...
  Meteor.setInterval(() => {
    let newTweet = {
      content: faker.hacker.phrase(),
      created_at: new Date(),
      likes: faker.random.number(10),
      retweets: faker.random.number(4),
      tweeter: {
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }
    console.log(`inserting new tweet from ${newTweet.tweeter.name}` )
    Tweets.insert(newTweet)
  }, 3000)


})