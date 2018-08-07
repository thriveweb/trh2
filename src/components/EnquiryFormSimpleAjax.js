import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleUpload = (event, target) => {
    const file = event.target.files[0]
      ? event.target.files[0].name
      : this.state[target]

    this.setState({
      [target]: file
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <form
        className="EnquiryForm"
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=""
        data-netlify-honeypot="_gotcha"
      >
        {this.state.alert && (
          <div className="EnquiryForm--Alert">{this.state.alert}</div>
        )}
        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </label>
        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </label>

        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="phone"
            placeholder="phone"
            name="phone"
            required
          />
        </label>

        <label className="EnquiryForm--Label">
          <textarea
            className="EnquiryForm--Input EnquiryForm--Textarea"
            placeholder="Message"
            name="message"
            rows="10"
            required
          />
        </label>

        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input type="hidden" name="form-name" value={name} />

        <div className="file-download">
          <div className="file-download-item">
            <label className="EnquiryForm--Label title">
              <input
                className="file-download-EnquiryForm--Input"
                type="file"
                placeholder="Upload your CV"
                name="upload-cv"
                onChange={event => this.handleUpload(event, 'resume')}
                required
              />
              {this.state.resume && <p>{this.state.resume}</p>}
            </label>
          </div>

          <input
            className="Button EnquiryForm--SubmitButton"
            type="submit"
            value="Send"
            disabled={this.state.disabled}
          />
        </div>
      </form>
    )
  }
}

export default Form
