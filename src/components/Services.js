import React, { Component } from "react";

import {
  FaCocktail,
  FaHamburger,
  FaShuttleVan,
  FaThermometerThreeQuarters
} from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Complementary Cocktails",
        info: "A wide array of spirits and beverages is available"
      },
      {
        icon: <FaHamburger />,
        title: "Complementary Breakfast",
        info: "Natural freshly made breakfast throughout your stay"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van Service",
        info: "Transportation to and from the airport"
      },
      {
        icon: <FaThermometerThreeQuarters />,
        title: "Temperature Controled Rooms",
        info: "State of the art temperature controls"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
