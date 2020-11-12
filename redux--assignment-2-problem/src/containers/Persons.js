import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../action/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdditionOfPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletionOfPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdditionOfPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onDeletionOfPerson: (id) =>
      dispatch({ type: actionTypes.DELETE_PERSON, ID: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
