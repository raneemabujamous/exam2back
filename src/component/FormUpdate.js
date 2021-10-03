import React, { Component } from "react";

export class FormUpdate extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateFromCird}>
          <input
            onChange={this.props.changinstructions}
            value={this.props.instructions}
            type="text"
          />
          <input
            onChange={this.props.changphoto}
            value={this.props.photo}
            type="text"
          />
          <input value="update" type="submit" />
        </form>
      </div>
    );
  }
}

export default FormUpdate;
