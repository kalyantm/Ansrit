import React from 'react';
import axios from 'axios';
import { Form, Input, Select, Button, Alert } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  CloudUploadOutlined
} from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSelectChange = value => {
    setFormState({ ...formState, service: value });
  };

  const handleSubmit = values => {
    console.log('form submission event!', values);
    const formOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: encode({
        'form-name': 'contact-us-form',
        ...formState
      }),
      url: '/'
    };

    axios(formOptions)
      .then(() => {
        setShowAlert(true);
        setAlertMessage('Thank you for submitting your details. We will get in touch soon!');
        setFormState({ name: '', message: '', email: '', phone: '' });
      })
      .catch(() => {
        setShowAlert(true);
        setAlertMessage('Oops, something went wrong. Please try again later');
      });
  };
  console.log('form state', formState);

  return (
    <div id="contact-us" accent>
      <div
        className="lg:w-2/3 mx-auto rounded bg-white p-6 shadow-form"
        style={{ background: '#fff' }}
      >
        <Form
          name="contact-us-form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onFinish={handleSubmit}
        >
          <input type="hidden" name="contact-us-form" value="contact" />
          <div className="my-6">
            <Form.Item rules={[{ required: true, message: 'Please enter your name' }]} name="name">
              <Input
                type="text"
                size="large"
                placeholder="Your Name"
                prefix={<UserOutlined />}
                onChange={handleChange}
                name={'name'}
                value={formState.name}
              />
            </Form.Item>
          </div>

          <div className="my-6">
            <Form.Item
              rules={[
                { required: true, message: 'Please enter your email' },
                {
                  type: 'email',
                  message: 'Please enter a valid email'
                }
              ]}
              name="email"
              value={formState.email}
            >
              <Input
                type="text"
                placeholder="Your Email"
                size="large"
                prefix={<MailOutlined />}
                onChange={handleChange}
                name={'email'}
              />
            </Form.Item>
          </div>

          <div className="my-6">
            <Form.Item rules={[]} name="phone_number">
              <Input
                type="number"
                placeholder="Your Phone Number (optional)"
                size="large"
                prefix={<PhoneOutlined />}
                onChange={handleChange}
                name={'phone_number'}
                value={formState.phone}
              />
            </Form.Item>
          </div>

          <div className="my-6">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please select an option for what you want'
                }
              ]}
              name="course"
            >
              <Select
                onChange={handleSelectChange}
                style={{ width: '100%' }}
                placeholder={<span style={{ width: '100%' }}>Select a service</span>}
                size={'large'}
              >
                <Option style={{ width: '100%' }} value="services">
                  Services
                </Option>
                <Option value="training">Cloud Training</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="my-6">
            <Form.Item rules={[]} name="message">
              <TextArea
                type="text"
                placeholder="Your message (optional)"
                prefix={<MessageOutlined />}
                rows={4}
                onChange={handleChange}
                name="message"
                value={formState.message}
              />
            </Form.Item>
          </div>

          {showAlert ? <div>{alertMessage}</div> : null}
          <div className="my-6">
            <Form.Item>
              <Button
                type="primary"
                icon={<CloudUploadOutlined />}
                size={'large'}
                htmlType="submit"
              >
                Send Details
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
