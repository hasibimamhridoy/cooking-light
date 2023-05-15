import React from "react";
import Pdf from "react-to-pdf";
import { FaBeer } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

const controlled = React.createRef();
const props = React.createRef();
const node = React.createRef();
const chook = React.createRef();
const allPage = React.createRef();
const Blog = () => {

  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [15,50],
   
};
  const cOption = {
    orientation: 'portrait',
    unit: 'in',
    format: [15,15],
   
};
 
  return (
    <div>
     <Pdf targetRef={allPage} options={options} filename="PropsTypes.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf} className="flex m-5 mt-5 custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm w-fit gap-2 items-center">
                <button className="">
                  Print Full Pages
                </button>
                <AiFillFilePdf />
              </div>
            )}
          </Pdf>

      <div ref={allPage} className="lg:px-20 h-fit w-fit px-3 py-10 bg-[#fffaf0]">
  
        <div ref={controlled} className="con-uncontroll p-5">
          <h1 className="text-lg lg:text-3xl text-center font-bold my-10">
            Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <div>
            <img
              className="w-full lg:h-96 h-72"
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*SX2dWWAPDrLfGbNyoHJThw.png"
              alt=""
            />

            <p>
              Uncontrolled and contrrolled concept has come when the react form
              elements such as inputs ,selecs and textareas fuctinalilt handled
              by the developer, This element can be two diferent approaches.This
              is uncontrolled components and controlled components.
            </p>

            <br />

            <p>
              First differences between these two approaches are state
              management system. we know that with uncontrolled components the
              form data is handled by the dom element not by React state.This
              means that we don't need to write event handlers to update the
              state when the form data changes.On the other hand controlled
              components we manage the form databy updating React state with
              event handlers.
            </p>

            <br />
            <p>
              Secondly the big differcens is dataflow. Uncontrolled dont know
              when the data is change in form until the dom updated but
              controlled components this know because when the state is updated
              then page has re render so we can easly get the updated valeu in
              every changes.
            </p>
            <br />
            <p>
              Thirdly,On those purpose in controlled components validation and
              password test is more easily better then uncontrolled components.
            </p>
            <br />
            <p>
              So we can say thatuncontrolled components are easier to implement
              but offer less control and flexibility. Controlled components
              require more code but provide better control, data flow, and
              validation.
            </p>
          </div>
          <Pdf targetRef={controlled} options={cOption}  filename="Uncontrold-Conttrolled.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf} className="flex mt-5 custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm w-fit gap-2 items-center">
                <button className="" >
                  Download
                </button>
                <AiFillFilePdf />
              </div>
            )}
          </Pdf>
        </div>
        <div ref={props} className="propstypes p-5">
          <h1 className="text-lg lg:text-3xl text-center font-bold my-10">
            How to validate React props using PropTypes ?
          </h1>
          <div>
            <img
              className="w-full lg:h-96 h-72"
              src="https://frontend-stuff.com/static/748d1d64242652e4f5dae24d47767156/0acc2/react.jpg"
              alt=""
            />

            <p>
              We know that We can use React props, short for properties, to send
              data from one component to another. If a component receives the
              wrong type of props, it can cause bugs and unexpected errors in
              your app. In this type of error case JavaScript doesn’t have a
              built-in type checking solution. But react has an internal
              solution for validate the props types.
            </p>

            <br />

            <p>
              So when should we useing propsType validation? Think about a
              situation we have a react components that pass many props as a
              time. Like string type,boolen type,function number etc.Suppose a
              button components and they reacievd two difference type props like
              one of is label which is string and the other is a onclick which
              function. So we can easy declere this type of functinality that
              lebel props must be string type of props and onclick must be
              function type of props.
            </p>

            <br />
            <p>
              React provides a package called prop-types to define the types of
              props that a component expects to receive. This is useful for
              checking that the props passed to the component have the correct
              type, and can help prevent bugs caused by incorrect usage.
            </p>
            <br />
            <p>
              If we use this packeges at first install the packeage like npm
              install prop-types then import the package when we use like import
              PropTypes from 'prop-types';
            </p>
            <br />
            <p>
              "stringProp:PropTypes.string," numberProp: PropTypes.number,
              boolProp: PropTypes.bool, arrayProp: PropTypes.array, objectProp:
              PropTypes.object, functionProp: PropTypes.func, nodeProp:
              PropTypes.node, elementProp: PropTypes.element, Here stringProp
              must be a string type and numberProp is must be a number type. And
              other is same thing.
            </p>
          </div>
          <Pdf targetRef={props} options={cOption} filename="PropsTypes.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf} className="flex mt-5  custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm w-fit gap-2 items-center">
                <button className="">
                  Download
                </button>
                <AiFillFilePdf />
              </div>
            )}
          </Pdf>
        </div>

        <div ref={node} className="node-express p-5">
          <h1 className="text-lg lg:text-3xl text-center font-bold my-10">
            Tell us the difference between nodejs and express js.
          </h1>
          <div>
            <img
              className="w-full lg:h-96 h-72"
              src="https://www.sysleaf.com/static/4df94bc06ab3c9cbcafa31fe010c96e4/c1ced/nodejs-express.png"
              alt=""
            />

            <p>
              Node.js is a server-side runtime environment for executing
              JavaScript code. On the other hand Express.js is a web application
              framework built on top of Node.js. Express.js provides a set of
              features for building web applications such as routing,
              middleware, and templates. On the other hand Node js. provides the
              ability to execute JavaScript code outside of a web browser.
              Node.js allows developers to build scalable, high-performance
              applications using JavaScript on the server-side.
            </p>

            <br />

            <p>
              So we can say that in summary In summary, Node.js provides the
              runtime environment for executing JavaScript code outside of a web
              browser, while Express.js provides a framework built on top of
              Node.js for building web applications.
            </p>
          </div>

          <Pdf targetRef={node} options={cOption} filename="Node-Express.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf} className="flex mt-5 custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm w-fit gap-2 items-center">
                <button className="" >
                  Download
                </button>
                <AiFillFilePdf />
              </div>
            )}
          </Pdf>
        </div>

        <div ref={chook} className="custom-hook p-5">
          <h1 className="text-lg lg:text-3xl text-center font-bold my-10">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <div>
            <img
              className="w-full lg:h-96 h-72"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--DOa78YSe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wxv8h0991pet5scm2qzv.jpg"
              alt=""
            />

            <p>
              Custom hooks are a way to abstract away complex or repetitive code
              that is used by multiple components in an application. Custom hook
              sharing logic between components.
            </p>

            <br />

            <p>
              The question is why will you create a custom hook? There are many
              reasong to use custom hook because lot of advantage is here.
              Emagine a situation, let's you have two components that need to
              fetch data from an API and display it.so We could write a custom
              hook to encapsulate the API call and state management logic, and
              then reuse that hook in both components. This way, we can avoid
              duplicating the same code in multiple places and make your code
              more efficient and maintainable.
            </p>

            <br />
            <p>
              Some advantage of custom hook is encapsulating complex or
              repetitive logic, making it easier to manage and reuse across
              components and also promoting code reusability and maintainability
              as well as more advantage.
            </p>
          </div>
          <Pdf targetRef={chook} options={cOption} filename="Customhook.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf} className="flex mt-5 custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm w-fit gap-2 items-center">
                <button className="" >
                  Download
                </button>
                <AiFillFilePdf />
              </div>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
};

export default Blog;
