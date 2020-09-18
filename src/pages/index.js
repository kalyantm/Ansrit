import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import HeroImage from '../images/cloud.png';
import howWeDoIt from '../images/how_we_do_it.jpg';
import whatWeDo from '../images/what_we_do.jpg';
import services from '../images/services.jpg';
import erm from '../images/erm.jpg';
import projectMgmt from '../images/project-management.jpg';
import industry from '../images/industry.jpg';
import amazonBg from '../images/aws-bg.jpg';
import googleBg from '../images/google-bg.jpg';
import oracleBg from '../images/oracle-bg.jpg';
import azureBg from '../images/azure-bg.jpg';

import TrainingCard from '../components/TrainingCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/layout/Form';

export default () => {
  return (
    <Layout>
      <section className="pt-20 pb-20 lg:pt-40 lg:h-screen">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              We help companies embrace the new digitalization trends.
            </h1>
            <p className="text-xl lg:text-2xl mt-12 font-light">
              You can focus on delivering your core business. We will get the other parts of your
              business right
            </p>
            <div className="mt-6 lg:mt-3">
              <a href="#contact">
                <Button>Get started</Button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={HeroImage} />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container px-8 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-2/3 mb-8">
            <h2 className="text-4xl font-semibold text-center lg:text-left">Who We Are</h2>
            <p className="lg:w-4/5 text-xl text-center lg:text-left">
              A team of seasoned IT professionals specializing in various domains who have delivered
              enterprise level global projects valued at multimillion USD across various industry
              verticals.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:block">
            <img src={whatWeDo} alt="About Us" style={{ width: 200, height: 200 }} />
          </div>
        </div>
        <div className="container pt-20  mx-auto px-8 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:block">
            <img src={howWeDoIt} alt="How we do it " style={{ width: 200, height: 200 }} />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-semibold text-center lg:text-left">What We Do</h2>
            <p className="lg:w-4/5 text-xl text-center lg:text-left">
              Our consultancy services are fully geared up to provide support in outsourced program
              delivery and digital transformation. We want to help you setup the best in class IT
              platform and take it to the next level.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="lg:mt-40 mt-20">
        <div className="container mx-auto text-center lg:pt-10 sm:pt-5 lg:pb-10 sm:pb-5">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <span className="mb-8 text-xl text-gray-600 text-center">
            Professional services that help your business reach the next level.
          </span>
          <div className="mt-12 mb-8 flex flex-col lg:flex-row lg:-mx-3">
            <div className="flex-1 px-3 flex-col">
              <div className="flex justify-center">
                <img src={erm} style={{ maxWidth: 100, maxHeight: 100 }} />
              </div>
              <h3 className="font-semibold text-xl">Enterprise Risk Management</h3>
              <p className="text-lg mt-2 font-light">
                Learn the systematic and structured approach leading to a common ground between IT
                and business goals. Know who the various stakeholders are and qualitative and
                quantitative metrics to take key business decisions in this one day workshop.
              </p>
            </div>

            <div className="flex-1 px-3 flex-col">
              <div className="flex justify-center">
                <img
                  src={projectMgmt}
                  width={100}
                  height={100}
                  style={{ maxWidth: 100, maxHeight: 100 }}
                />
              </div>
              <h3 className="font-semibold text-xl">Practical Project Management</h3>
              <p className="text-lg mt-2 font-light">
                A one day workshop that demonstrates all phases of project management through an
                immersive case study on how to transition outsourced services to a customer.
              </p>
            </div>

            <div className="flex-1 px-3 flex-col">
              <div className="flex justify-center">
                <img
                  src={services}
                  width={100}
                  height={100}
                  style={{ maxWidth: 100, maxHeight: 100 }}
                />
              </div>
              <h3 className="font-semibold text-xl">IT Services</h3>
              <p className="text-lg mt-2 font-light">
                Focus on the core of your business, we reach out a helping hand to all other aspects
                of running a successful IT business - Cloud Migration, IT Infrastucture and project
                management methodologies
              </p>
            </div>

            <div className="flex-1 px-3">
              <div className="flex justify-center">
                <img
                  src={industry}
                  width={100}
                  height={100}
                  style={{ maxWidth: 100, maxHeight: 100 }}
                />
              </div>
              <h3 className="font-semibold text-xl">Industry Connect</h3>
              <p className="text-lg mt-2 font-light">
                Ramp up college graduates with a customized plan to navigate the ever changing needs
                of the IT industry by offering a skill based, cost efficient solution to adapt to
                the new normal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="training" className="lg:pt-40 pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">Training</h2>
          <span className="mb-8 text-xl text-gray-600 text-center">
            We offer both corporate and public training, remote or on-site.
          </span>
        </div>
        <div
          className="flex flex-col xl:flex-row xl:-mx-3 mt-12"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.08) 10px 0px 5px -5px'
          }}
        >
          <TrainingCard
            title="Amazon Web Services"
            bg={amazonBg}
            primaryContent={
              <>
                <span>
                  <p className="py-4">
                    Learn about the largest cloud provider in the world and the services they have
                    to offer
                  </p>
                  <p className="py-2 ">
                    Master concepts like elastic cloud computing (EC2), simple storage service (S3),
                    routing (Route 53) amongst other buzzwords to become a competent AWS wizard.
                  </p>
                </span>
              </>
            }
            secondaryContent={
              <div className="flex flex-col">
                <div className="py-4">
                  <p className="font-bold ">AWS Solutions Architect</p>
                  <p>
                    Delve into the internals of AWS from the basics to the advanced. Master key AWS
                    Concepts, like EC2, IAM, VPC, Route 53, S3, Deployment, Troubleshooting and
                    Disaster Recovery on their massive infrastructure.
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-bold">AWS Cloud Practitioner</p>
                  <p>
                    Gain a deep understanding of the AWS basics like Cloud Computing, Storage and
                    Networking, Deploying and Management.
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-bold">AWS Systems Operations </p>
                  <p>
                    Master the operational aspects of AWS by learning how the cloud services,
                    storage systems, databases, monitoring and fault tolerance work in the world of
                    AWS
                  </p>
                </div>
              </div>
            }
          />

          <TrainingCard
            title="Microsoft Azure"
            bg={azureBg}
            primaryContent={
              <>
                <span>
                  <p className="py-4">
                    Get to know the best and latest cloud services offered by another big player in
                    the cloud industry.
                  </p>
                  <p className="py-2 ">
                    Dig through Azure concepts like App service, CosmosDB and container services to
                    be exam ready - for both the fundamentals and the professional architect
                    certifications
                  </p>
                </span>
              </>
            }
            secondaryContent={
              <div className="flex flex-col">
                <div className="py-4">
                  <p className="font-bold ">Azure Fundamentals</p>
                  <p>
                    Learn about foundational knowledge of cloud services and how Azure provides
                    those services. Get to know the basics of cloud buzzwords: Network, Storage,
                    Compute, App Development and many more!
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-bold">Azure Solutions Architect Expert</p>
                  <p>
                    Gain a deep understanding of IT operations, including networking,
                    virtualization, security, business continuity and how to manage decisions that
                    could orchestrate an entire solution.
                  </p>
                </div>
              </div>
            }
          />

          <TrainingCard
            title="Google Cloud"
            bg={googleBg}
            primaryContent={
              <>
                <span>
                  <p className=" py-4">
                    Navigate the solutions offered by the tech giant to take full advantage of their
                    world class cloud infrastructure.
                  </p>
                  <p className="py-2 ">
                    Learn how Google solves massive app workloads easily by exploring how their
                    cloud works with respect to computing, storing, networking and persisting large
                    amounts of data.
                  </p>
                </span>
              </>
            }
            secondaryContent={
              <div className="flex flex-col">
                <div className="py-4">
                  <p className="font-bold ">Associate Cloud Engineer</p>
                  <p>
                    Learn the latest techniques about how to deploy, monitor and manage enterprise
                    level solutions, by setting up a cloud environment, configure access and ensure
                    successful operation of cloud based solutions.
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-bold">Cloud Architect</p>
                  <p>
                    Get a thorough understanding of the inner-workings of Google Cloud and deliver
                    an end-to-end solution, from the initial stages of planning and design all the
                    way to ensuring the implementation performs reliably at all times.
                  </p>
                </div>
              </div>
            }
          />

          <TrainingCard
            title="Oracle Cloud"
            bg={oracleBg}
            primaryContent={
              <>
                <span>
                  <p className="py-4">
                    Embrace the world's only autonomous cloud provider and learn how they manage
                    complexity.
                  </p>
                  <p className="py-2">
                    Learn why leading companies like Zoom choose Oracle to manage data and
                    complexity by concepts of the Oracle Cloud like compute, storage, network and
                    integration.
                  </p>
                </span>
              </>
            }
            secondaryContent={
              <div className="flex flex-col">
                <div className="py-4">
                  <p className="font-bold ">Oracle Cloud Infrastucture - Certified Associate </p>
                  <p>
                    Learn basic cloud practices offered by the Oracle cloud like storage,
                    networking, database, security and integration to get certified and be in the
                    best position to expand your horizons to all that the Oracle cloud has to offer.
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-bold">Oracle Cloud Infrastucture - Certified Architect</p>
                  <p>
                    Once you complete the certified associate examination, take your knowledge to
                    the next level - Plan, design, implement and operate entire enterprise solutions
                    on the Oracle Cloud, while learning in-depth about migration, security
                    compliances and hybrid cloud architectures.
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section id="services" className="mt-20 lg:mt-40">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">Testimonials</h2>
          <span className="mb-8 text-xl text-gray-600 text-center">
            Listen to what our clients have to say
          </span>
          <div className="py-4 flex flex-col lg:flex-row lg:-mx-3">
            <Testimonials />
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 pt-5 lg:mt-40 lg:pt-10 pb-5 lg:pb-20 m-0 bg-section">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">Contact Us</h2>
        </div>
        <span className="mb-8 text-xl text-gray-600  text-center flex justify-center">
          Please drop us a line. We will get back to you as soon as possible.
        </span>

        <div className="px-8 mx-auto container">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};
