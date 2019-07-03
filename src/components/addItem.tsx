import React from "react";

interface Props {
  onAddItem: (title: string, amountPln: number) => void;
}

interface State {
  titleInput: string;
  amountInput: string;
}

export class AddExpenseItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      titleInput: "",
      amountInput: ""
    };
  }

  onTitleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      titleInput: ev.currentTarget.value
    });
  };

  onAmountChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    if (/^[0-9]*[.,]{0,1}[0-9]{0,2}$/.test(value)) {
      this.setState({
        amountInput: value
      });
    }
  };

  onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const { titleInput, amountInput } = this.state;
    this.props.onAddItem(titleInput, parseFloat(amountInput.replace(",", ".")));
    this.setState({ titleInput: "", amountInput: "" });
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
                required
              />
            </label>
            <label className={"input-wrapper"}>
              <span className={"input-description"}>Amount (in PLN)</span>
              <input
                className={"input"}
                value={this.state.amountInput}
                onChange={this.onAmountChange}
                pattern={"^[0-9]*[.,]{0,1}[0-9]{0,2}$"}
                required
              />
            </label>
          </div>
          <button className={"add-button"}>Add</button>
        </form>
      </section>
    );
  }
}
