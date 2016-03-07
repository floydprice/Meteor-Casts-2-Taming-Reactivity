Meteor.publish("tweets", () => {
  return Tweets.find()
})