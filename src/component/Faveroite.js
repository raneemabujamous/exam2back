import axios from "axios";
import React, { Component } from "react";
import FavCard from "./FavCard";
import FormUpdate from "./FormUpdate";
const url = process.env.REACT_APP_URL;

export class Faveroite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCurd: [],
      showFav: false,
      slug: "",
      instructions: "",
      photo: "",
      shoeUpdateForm: false,
    };
  }
  componentDidMount = async () => {
    const reqPost = await axios.get(`${url}/postdata`);
    this.setState({
      dataCurd: reqPost.data,
      showFav: true,
    });
  };
  deletecard = async (slug) => {
    const deleters = await axios.delete(`${url}/delete${slug}`);
    this.setState({
      dataCurd: deleters.data,
    });
  };
  updateItem = async (slug, instructions, photo) => {
    this.setState({
      slug: slug,
      instructions: instructions,
      photo: photo,
      shoeUpdateForm: true,
    });
  };
  updateFromCird = async () => {
    const updated = {
      photo: this.state.photo,
      instructions: this.state.instructions,
    };
    const reqUbdate = await axios.put(
      `${url}/update${this.state.slug}`,
      updated
    );
    this.setState({
      dataCurd: reqUbdate.data,
    });
  };
  changinstructions = (e) => {
    this.setState({ instructions: e.target.value });
  };
  changphoto = (e) => {
    this.setState({ photo: e.target.value });
  };
  render() {
    return (
      <div>
        {this.state.shoeUpdateForm && (
          <FormUpdate
            instructions={this.state.instructions}
            photo={this.state.photo}
            updateFromCird={this.updateFromCird}
            changphoto={this.changphoto}
            changinstructions={this.changinstructions}
          />
        )}
        {this.state.showFav && (
          <FavCard
            dataCurd={this.state.dataCurd}
            deletecard={this.deletecard}
            updateItem={this.updateItem}
          />
        )}
      </div>
    );
  }
}

export default Faveroite;
