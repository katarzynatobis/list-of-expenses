import React from "react";

export class AddExpanse extends React.Component {
  render() {
    return (
      <section>
        <form className={"form-add-expense"}>
          <div>
            <label className={"input-wrapper"}>
              <span className={"input-description"}>Title of transaction</span>
              <input className={"input"} />
            </label>
            <label className={"input-wrapper"}>
              <span className={"input-description"}>Amount (in PLN)</span>
              <input className={"input"} type={"number"} />
            </label>
          </div>
          <button className={"add-button"}>Add</button>
        </form>
      </section>
    );
  }
}
