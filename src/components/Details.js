import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Joyride from "react-joyride";
import { Steps, Hints } from 'intro.js-react';
import "../App.css";
import ReactGA from 'react-ga';
import 'intro.js/introjs.css';
import '../index.css';
import '../style.css';
export default class Details extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            steps: [
            {
            placement:"top",
            target: ".ml-3",
            content: "Click me"
            },
            {
            target: ".card-btn",
            content: "Everyone's learning Joyride!"
            }
            ]
            };
        }
        handleClick1(a) {
            ReactGA.event({
                category: 'Navigation',
                action: 'Clicked Link'+a
            });
        }
    render() {
        // const divStyle = {
            const { steps } = this.state;
   
        //     color: "#ffa400",
        //   };
        return (
            
            <ProductConsumer>
             
                {value=>{
                    
                  const {id,company,img,info,price,title,inCart}=
                  value.detailProduct;
                  return(
                      <div className="container py-5">
                      {/* <Joyride steps={steps} /> */}
                          <div className="row">
                              <div className="col-10 mx-auto text-center text-slated text-blue my-5">
                                <h1>{title}</h1>
                               </div>
                          </div>

                          {/* Product Info */}
                          <div className='row'>
                              <div className="col-10 mx-auto col-md-6 my-3
                              text-capitalize">
                                <img src={img} className="img-fluid" alt="product"/> 
                              </div>
                              <div className="col-10 mx-auto col-md-6 my-3
                              text-capitalize">
                                  <h2>model:{title}</h2>
                                  <h4 className="text-title text-uppercase
                                  text-muted mt-3 mb-2">
                                 
                                      made by : <span className="text-uppercase">{company}</span> </h4>
                                      <h4 className='text-blue'>
                                          <strong>price:<span>&#8377;</span>{price}</strong>
                                      </h4>
                                      <p className="text-capitalize font-weight-bold
                                       mt-3 mb-0">
                                           some info about product:
                                       </p>
                                       <p className="text-muted lead">
                                           {info}
                                       </p>
                                       {/* button */}
                                       <div>
                                           <Link  to='/'>
                                              <ButtonContainer>back to products</ButtonContainer> 
                                           </Link> 
                                           <ButtonContainer cart className="ml-3 " 
                                           disabled={inCart?true:false} onClick={()=>{
                                               this.handleClick1(id);
                                               value.addToCart(id);
                                               value.openModal(id);
                                           }}>
                                             {inCart? " inCart ": "add to cart"}
                                           </ButtonContainer>                                     
                                        </div>
                              </div>
                          </div>
                      </div>
                  )
                }}
            </ProductConsumer>
        )
    }
}
