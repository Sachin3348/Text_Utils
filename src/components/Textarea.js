import React from 'react'
import {useState} from 'react'

const Textarea = () => {

    const [text, setText] = useState('Enter Text Here')

    const handleChange = (event) => {
        //const newText = event.value.target
        setText( event.target.value )
    }
    const changeToUpper = () => {
        console.log('Button clicked')
        const newText = text.toUpperCase()
        setText(newText)
    }
    return (
        <div className="div container my-4" >
            <h1>Enter your text here</h1>
       <div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange= {handleChange} rows="8"></textarea>
            </div>
        </div>
        <div className="btn btn-primary" onClick={changeToUpper}>Change to upper-case</div>
        </div>
    )
}

export default Textarea
