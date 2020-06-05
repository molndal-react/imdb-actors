import React, { Component } from "react";
import logo from "./logo.svg";
import "./Styling/App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import allContacts from "./Data/contacts.json";

const NR_OF_PHOTOS = 5;

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    const slicedArr = allContacts.slice(0, NR_OF_PHOTOS);
    this.setState({
      contacts: slicedArr,
    });
  }

  addRandomContact = () => {
    const randomContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  sortByName = () => {
    const { contacts } = this.state;

    const contactSorted = contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      contacts: contactSorted,
    });
  };

  sortByPopularity = () => {
    const { contacts } = this.state;
    const contactSorted = contacts.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contacts: contactSorted,
    });
  };

  deleteContact = (contactIndex) => {
    console.log(contactIndex);

    const { contacts } = this.state;
    const contactFiltered = contacts.filter(
      (contact, index) => index !== contactIndex
    );

    this.setState({
      contacts: contactFiltered,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IMDB ACTORS</h1>

        <Button
          onClick={this.addRandomContact}
          text={"Add random contact"}
        ></Button>

        <Button onClick={this.sortByName} text={"Sorted by name"}></Button>

        <Button
          onClick
          onClick={this.sortByPopularity}
          text={"Sorted by popularity"}
        ></Button>

        <table className="card-container">
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, key) => {
              return (
                <Card
                  key={key}
                  index={key}
                  pictureUrl={contact.pictureUrl}
                  name={contact.name}
                  popularity={contact.popularity}
                  buttonName={"Delete"}
                  action={this.deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
