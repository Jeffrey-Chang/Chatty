import React, {Component} from 'react'

import Image from './Image.jsx'

class Message extends Component {
  render() {
    const { color, content, username } = this.props.message
    const imageRegex = /(http)?s?:?(\/\/[^"']*\.(?:jpg|gif|png))/
    const UserColor = { color }

    return (
      <div className="message">
        {username ? <span style={UserColor} className="message-username">{username}</span> : null}
          <span className="message-content">
                  {
                    content.split(' ').map((message, index) => {
                      if(imageRegex.test(message)) {
                        return <Image index={index} url={message} />
                      }

                      return <span key={index}>{message}</span>
                    })
                  }
                </span>
      </div>
    )
  }
}

export default Message