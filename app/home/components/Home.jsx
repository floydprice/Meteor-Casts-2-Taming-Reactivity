import React from 'react'
import moment from 'moment'


let twitterHandle = (name) => {
  return `@${name.replace(" ", "").toLowerCase()}`
}

class Home extends React.Component{
  render(){
    return (
      <div className="tweets">
        {
          this.props.tweets.map((tweet) => {
            return (
              <div className="tweet" key={tweet._id}>
                <div className="avatar">
                  <img src={tweet.tweeter.avatar} alt={tweet.tweeter.name}/>
                </div>

                <div className="content">
                  <div className="header">
                    <p>{tweet.tweeter.name} <span className="value">{twitterHandle(tweet.tweeter.name)}</span></p>

                    <p><span className="value">{moment(tweet.created_at).fromNow()}</span></p>
                  </div>
                  <div className="main">
                    <p>{tweet.content}</p>
                  </div>
                  <div className="meta">

                    <p><i className="fa fa-heart"> </i> <span className="value">{tweet.likes}</span></p>
                    <p><i className="fa fa-retweet"> </i> <span className="value">{tweet.retweets}</span></p>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default Home