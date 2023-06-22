import React, { Component } from "react";
import "./main.css";
import { glassesArr } from "./dataGlasses";

export default class Ex_Glasses extends Component {
  state = {
    type: "v1",
    selectedName: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };
  handleChangeType = (value, name, desc) => {
    this.setState({ type: value, selectedName:name, desc: desc });
  };
  render() {
    let { type } = this.state;
    let {selectedName} = this.state;
    let {desc} = this.state;
    return (
      <div>
        <div
          id="ex_glasses"
          style={{
            background: "./../../../public/glassesImage/background.jpg",
          }}
        >
          <h2 className="text-center bg-secondary py-4 opacity-75 text-white">
            TRY GLASS APP ONLINE
          </h2>
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-6  ">
                <img
                  className="w-75 position-relative"
                  src="./glassesImage/model.jpg"
                  alt="Models"
                />
                <img
                  className="position-absolute"
                  src={`./glassesImage/${type}.png`}
                  alt="Glasses"
                />
                <div className="position-absolute">
                  <h5 className="text-primary">{`${selectedName}`}</h5>
                  <p className="text-white">{`${desc}`}</p>
                </div>
              </div>
              <div className="col-6 ">
                <img
                  className="w-75 "
                  src="./glassesImage/model.jpg"
                  alt="Models"
                />
              </div>
            </div>
          </div>
          <div className="container bg-secondary p-5 mt-5">
            <img
              className=""
              src="./glassesImage/v1.png"
              onClick={() => {
                this.handleChangeType("v1", "GUCCI G8850U", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.");
              }}
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v2", "GUCCI G8759H",  "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v2.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v3", "DIOR D6700HQ",  "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v3.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v4", "DIOR D6005U", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v4.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v5", "PRADA P8750",  "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v5.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v6", "PRADA P9700", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v6.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v7", "FENDI F8750","Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v7.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v8","FENDI F8500", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v8.png"
              alt="Glasses"
            />
            <img
              className=""
              onClick={() => {
                this.handleChangeType("v9", "FENDI F4300", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ");
              }}
              src="./glassesImage/v9.png"
              alt="Glasses"
            />
          </div>
        </div>
      </div>
    );
  }
}
