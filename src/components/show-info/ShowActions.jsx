import React from "react";
import { connect } from "react-redux";

import { removeAction, sortActions } from "../../redux/actions";
import css from "./showActions.module.css";

const ShowInfo = ({ actions, removeAction, sortActions }) => {
  return (
    <div>
      <h1>Actions:</h1>
      <div className={css.showBoxHeader}>
        <RenderHead click={true} sortActions={sortActions} />
        <div />
      </div>
      {actions.length === 0
        ? "no action"
        : actions.map((value, index) => (
            <div className={css.showBox} key={index}>
              <RenderHead value={value} click={false} />
              <div>
                <button onClick={() => deleteAction(removeAction, value.id)}>
                  x
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

const RenderHead = ({ value, click = false, sortActions }) => {
  const arrayHead = [
    "title",
    "description",
    "location",
    "time",
    "creator",
    "members"
  ];
  return click
    ? arrayHead.map(head => (
        <div onClick={() => sortActions(head)} key={head}>
          {head}
        </div>
      ))
    : arrayHead.map(head => (
        <div key={head}>
          {value.hasOwnProperty(head) ? value[head] : `no ${head}`}
        </div>
      ));
};

const deleteAction = (removeAction, index) => {
  removeAction(index);
};

const mapStateToProps = state => {
  return { actions: state };
};

export default connect(
  mapStateToProps,
  { removeAction, sortActions }
)(ShowInfo);
