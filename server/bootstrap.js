import Tweets from '../lib/tweets'
import {insertNewTweet, insertNewTweets} from './tweet_factory'

Meteor.startup(() => {

  Tweets.remove({})
  insertNewTweets(25, true)

  Meteor.setInterval(() => {
    insertNewTweets(3)
  }, 7000)

})