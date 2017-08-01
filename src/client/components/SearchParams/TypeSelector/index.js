import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TypeSelector.css';

const Button = ({ handleChangeActiveButton, name, tabIndex, divStyle }) => {
  let addToClass = 'pt-button searchparams_button';
  if (divStyle === (tabIndex * -1)) {
    addToClass = 'pt-button searchparams_button pt-active';
  }
  return (
    <a
      onMouseDown={() => handleChangeActiveButton(tabIndex * -1)}
      className={addToClass}
      tabIndex={tabIndex}
      role="button"
    >
      {name}
    </a>
  );
};

class TypeSelector extends Component {
  state = {
    selectedButton: 1,
  };

  handleChangeActiveButton = (buttonId) => {
    this.setState({ selectedButton: buttonId });
  }


  render() {
    const { selectedButton } = this.state;
    const { handleChangeTypeOfSale } = this.props;

    return (
      <div className="pt-button-group typeselector" onMouseUp={() => handleChangeTypeOfSale(selectedButton)}>
        <Button
          handleChangeActiveButton={this.handleChangeActiveButton}
          name="Tout"
          tabIndex={-1}
          divStyle={selectedButton}
        />
        <Button
          handleChangeActiveButton={this.handleChangeActiveButton}
          name="Enchères"
          tabIndex={-2}
          divStyle={selectedButton}
        />
        <Button
          handleChangeActiveButton={this.handleChangeActiveButton}
          name="Achat immédiat"
          tabIndex={-3}
          divStyle={selectedButton}
        />
      </div>
    );
  }
}

TypeSelector.propTypes = {
  handleChangeTypeOfSale: PropTypes.func.isRequired,
};

Button.propTypes = {
  handleChangeActiveButton: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  divStyle: PropTypes.number.isRequired,
};

export default TypeSelector;
