import React, { Component } from "react";
import './Hello.css';

const Hello = (props)=>{
        return (
            <div className='f1 tc'>
            <h1>Hello WORLD</h1>
            <p>Just for your knowlegde that must use () 
                when working with the default cuz it give  only single output </p>
            <p>{this.props.greetings}</p>
            </div>
        );
}
export default Hello
//default gives the single output so if you want to give multiple output you have to use brackets ()