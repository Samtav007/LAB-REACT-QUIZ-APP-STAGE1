import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='main'>
        <div className='Box'>
            <h1>Question</h1>
            <p>1 of 15</p>
            <h3>Which is the only mammal that can jump?</h3>

            <div className='options'>
                <div className="option">Dog</div>
                <div className="option">Elephant</div>
                <div className="option">Goat</div>
                <div className="option">Lion</div>    
            </div>

            <div className='controls'>
                <div className="previous">previous</div>
                <div className="next">next</div>
                <div className="quit">quit</div>
            </div>

        </div>
      </div>
    )
  }
}