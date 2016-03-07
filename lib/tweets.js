Tweets = new Mongo.Collection('tweets')

const Tweet = new SimpleSchema({
  content: {
    type: String,
    max: 144
  },
  tweeter: {
    type: Object
  },
  "tweeter.name": {
    type: String
  },
  "tweeter.avatar": {
    type: String
  },
  created_at: {
    type: Date
  },
  retweets: {
    type: Number,
    defaultValue: 0
  },
  likes: {
    type: Number,
    defaultValue: 0
  }
})

Tweets.attachSchema(Tweet)

export default Tweets
