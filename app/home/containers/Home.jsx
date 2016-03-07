import React from 'react'
import {composeWithTracker} from 'react-komposer'
import Home from '../components/Home'
import Tweets from '../../../lib/tweets'

let feedDate = new ReactiveVar(new Date())
const showNewTweets = () => {
  feedDate.set(new Date())
}

function composer(props, onData) {
  var sub = Meteor.subscribe("tweets")
  if(sub.ready()){
    const tweets = Tweets.find({created_at: {$lte: feedDate.get()}}, {sort: {created_at: -1}}).fetch();
    const newTweets = Tweets.find({created_at: {$gt: feedDate.get()}}, {sort: {created_at: -1}}).fetch();

    onData(null, {tweets, newTweets, showNewTweets})
  }
}

export default composeWithTracker(composer)(Home)