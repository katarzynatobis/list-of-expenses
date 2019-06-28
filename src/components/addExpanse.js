import React from "react";

export class AddExpanse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
      amountInput: ""
    };
  }

  onTitleChange = ev => {
    this.setState({
      titleInput: ev.currentTarget.value
    });
  };

  onAmountChange = ev => {
    const value = ev.currentTarget.value;
    if (/^[0-9]*[.,]{0,1}[0-9]{0,2}$/.test(value)) {
      this.setState({
        amountInput: value
      });
    }
  };

  onSubmit = ev => {
    ev.preventDefault();
    const { titleInput, amountInput } = this.state;
    this.props.onAddExpanse(
      titleInput,
      parseFloat(amountInput.replace(",", "."))
    );
  };

  render() {
    return (
      <section>
        <form className={"form-add-expense"} onSubmit={this.onSubmit}>
          <div>
            <label className={"input-wrapper"}>
              <span className={"input-description"}>Title of transaction</span>
              <input
                className={"input"}
                value={this.state.titleInput}
                onChange={this.onTitleChange}
                minLength={5}
              />
            </label>
            <label className={"input-wrapper"}>
              <span className={"input-description"}>Amount (in PLN)</span>
              <input
                className={"input"}
                value={this.state.amountInput}
                onChange={this.onAmountChange}
                pattern={"^[0-9]*[.,]{0,1}[0-9]{0,2}$"}
              />
            </label>
          </div>
          <button className={"add-button"}>Add</button>
        </form>
      </section>
    );
  }
}
