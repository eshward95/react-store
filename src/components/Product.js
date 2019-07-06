import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from  'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'
import Joyride from "react-joyride";
import { Steps, Hints } from 'intro.js-react';
import "../App.css";
import 'intro.js/introjs.css';
import '../index.css';
import '../style.css'
export default class Product extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            steps: [
            {
            placement:"top",
            target: ".card",
            content: "Click me"
            },
            {
            target: ".card-btn",
            content: "Everyone's learning Joyride!"
            }
            ]
            };
        }
    render() {
        // const { steps } = this.state;
        // const { stepsEnabled, steps, initialStep, hintsEnabled, hints } = this.state;
      
        const {id,title,img,price,inCart}=this.props.product;
        
        return (

            <ProductWrapper className=" col-9 mx-auto col-md-6 col-lg-3 my-3">
     {/* <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
        <Hints
          enabled={hintsEnabled}
          hints={hints}
        /> */}
        {/* <Joyride steps={steps} /> */}
              <div className='card'>
               
                    <ProductConsumer>
                    {(value)=>(
                        <div 
                    className="img-fluid img-container p-5" onClick={()=>
                    value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top img-fluid"></img>
                        </Link>
                        <button className="card-btn" disabled={inCart?true:false} onClick={()=>
                        {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                            {inCart?(
                                <p className="text-capitalize mb-0 " disabled>
                                in cart
                                </p>
                                ):(
                                    <i className="fas fa-cart-plus"></i>
                                    )}
                        </button>
                    </div>)}
                    
                    </ProductConsumer>
                    
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0" >
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">&#8377;</span>
                            {price}
                        </h5>
                    </div>
                </div>
                
            </ProductWrapper>
           
        )
    }
}
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
const ProductWrapper=styled.div `
.card{
    border-color:transparent;
    transition:all 1s linear;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.08s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }  
    .card-footer{
        background:rgba(247,247,247)
    }
}
.img-container{
   position:relative
    overflow:hidden;
}
.card-img-top
{
transition:all 0.3s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    border:none;
    background-color:var(--lightBlue)!important;
    padding:0.2rem 0.4rem;
    color:var(--mainWhite)!important;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%)!important;
}
.img-container:hover .card-btn{
    transform:translate(0,0)!important;
    transition:all 0.3s linear;
    
}
.card-btn:hover{
    color:var(--mainBlue)!important;
    cursor:pointer;
}
`