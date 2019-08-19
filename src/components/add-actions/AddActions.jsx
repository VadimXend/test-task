import React from "react";
import { connect } from "react-redux";

import { addAction } from "../../redux/actions";
import css from "./addActions.module.css";

let inputs = {
  title: "",
  description: "",
  location: "",
  time: "",
  creator: "",
  members: ""
};

const AddActions = ({ actions, addAction, history }) => {
  const id = actions.length ? actions[actions.length - 1].id + 1 : 0;
  const arrayTitle = [
    "title",
    "description",
    "location",
    "time",
    "creator",
    "members"
  ];

  return (
    <div className={css.addBox}>
      <h1>Enter Data:</h1>

      <RenderInputs arr={arrayTitle} />

      <button onClick={() => handleClick(id, addAction, history)}>Ok</button>
    </div>
  );
};

const RenderInputs = ({ arr }) => {
  return arr.map(value => (
    <input
      type={value === "time" ? "time" : "text"}
      name={value}
      placeholder={value}
      onInput={inp => handleInput(inp)}
      key={value}
    />
  ));
};

const handleInput = inp => {
  inputs[inp.target.name] = inp.target.value;
};

const handleClick = (id, addAction, history) => {
  if (!Object.values(inputs).includes("")) {
    let data = [{ id: id, ...inputs }];
    history.push("/");
    addAction(data);
  } else {
    alert("fill in at least one field");
  }
};

const mapStateToProps = state => {
  return { actions: state };
};

export default connect(
  mapStateToProps,
  { addAction }
)(AddActions);
