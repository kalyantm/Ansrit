import React from 'react';
import { Carousel, Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const senthil = require('../images/senthilnathan.jpg');
const rajeev = require('../images/chandra.jpg');
const chandra = require('../images/chandra.jpg');
const sampath = require('../images/sampath.jpg');
const deepak = require('../images/deepak.jpg');

const cardBodyStyle = {
  padding: '24px 24px 0 24px'
};

const iconStyle = {
  fontSize: '24px'
};

const NextArrow = props => {
  return (
    <div className="flex items-center" onClick={props.onClick}>
      <ArrowRightOutlined style={{ ...iconStyle, paddingRight: 8 }} />
    </div>
  );
};

const PrevArrow = props => {
  return (
    <div className="flex items-center" onClick={props.onClick}>
      <ArrowLeftOutlined style={{ ...iconStyle, paddingLeft: 8 }} />
    </div>
  );
};

const settings = {
  infinite: true,
  dots: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  swipeToSlide: true
};

const Testimonials = () => (
  <section className="container">
    <div
      className="mx-auto container"
      style={{
        overflow: 'hidden',
        borderRadius: '2px',
        backgroundColor: '#fff',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
      }}
    >
      <Carousel style={{ display: 'flex', overflow: 'hidden' }} effect="fade" {...settings}>
        <div>
          <Card bodyStyle={cardBodyStyle} bordered={false}>
            <Meta
              avatar={<Avatar src={senthil} size={64} />}
              title={'Senthilnathan N'}
              description={'ITO Consultant, Hewlett Packard'}
              style={{ textAlign: 'initial' }}
            />
            <div className="mt-4">
              <blockquote className="text-left">
                Rangarajan Thodur Madabhushi #Kudos I really appreciate the guidance you provide me
                with #AmazingMentor towards my #AWSSA Certification. Your training and content
                delivery were on dot. I will surely recommend your training to people who wish to
                take #AWSSACERTIFICATION. Your course design is well organized, structured and
                covers almost all important #AWSSA Key concepts. once again I #Thank you for all the
                efforts you took to make us understand the course.
              </blockquote>
            </div>
          </Card>
        </div>

        <div>
          <Card bordered={false} bodyStyle={cardBodyStyle}>
            <Meta
              avatar={<Avatar src={deepak} size={64} />}
              title={'Deepak Rai'}
              description={'Response Implementation Manager, DXC Technology'}
              style={{ textAlign: 'initial' }}
            />

            <div className="mt-4">
              <blockquote className="text-left">
                It was an amazing training experience. The content was very clear, well-structured
                and understandable. I really appreciate your guidance and support. The real-time
                example and the practical that you show was very helpful to understand the concept.
                I would surely recommend your training to the people who wish to take cloud
                training. You are the best mentor. Thank you for all your effort and support.
              </blockquote>
            </div>
          </Card>
        </div>

        <div>
          <Card bordered={false} bodyStyle={cardBodyStyle}>
            <Meta
              avatar={<Avatar src={sampath} size={64} />}
              title={'Sampath Arumugam'}
              description={'Siebel CRM Consultant, Sri Sakti Systems Inc'}
              style={{ textAlign: 'initial' }}
            />

            <div className="mt-4">
              <blockquote className="text-left">
                I attended Rangarajan's AWS Solution Architect course. He was very knowledgable,
                well organized, punctual and responsive. He has a very in-depth knowledge on Cloud
                infrastructure. His lectures and study materials were very easy to understand. I
                will recommend Rangarajan as a Tutor, if anyone is interested in taking AWS courses
              </blockquote>
            </div>
          </Card>
        </div>

        <div>
          <Card bordered={false} bodyStyle={cardBodyStyle}>
            <Meta
              avatar={<Avatar src={rajeev} size={64} />}
              title={'Rajeev Jain'}
              description={'Management & Counsulting, Emerging Technologies in FinTech'}
              style={{ textAlign: 'initial' }}
            />

            <div className="mt-4">
              <blockquote className="text-left">
                I attended one of Ranga's courses on AWS, his course was well organized and covered
                concepts of AWS in detail by demonstrating live with examples. He was patient and
                answered questions well after the course timings, his goal was to ensure we (his
                students) understood the material and prepared to get certified. I highly recommend
                this course to anyone who wants to learn about AWS and wish to get certified.
              </blockquote>
            </div>
          </Card>
        </div>

        <div>
          <Card bordered={false} bodyStyle={cardBodyStyle}>
            <Meta
              avatar={<Avatar src={chandra} size={64} />}
              title={'Chandrashekar Chinnappa'}
              description={'Project Coordinator, DXC Technology'}
              style={{ textAlign: 'initial' }}
            />

            <div className="mt-4">
              <blockquote className="text-left">
                It was an awesome experience getting mentored from you on AWS. The knowledge that
                you have is vast and your real-time experience which you always relate it with the
                AWS services helps us clearly understand! I am very glad to inform that you are a
                true motivator. Thanks a lot for your help and support.
              </blockquote>
            </div>
          </Card>
        </div>
      </Carousel>
    </div>
  </section>
);

export default Testimonials;
