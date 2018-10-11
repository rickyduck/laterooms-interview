import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = {
  disabled: {
    pointerEvents: 'none'
  }
};

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon(i) {
    const filled = i <= this.props.value;

    if (filled) {
      return this.props.iconFilledRenderer
        ? this.props.iconFilledRenderer({
            ...this.props,
            index: i
          })
        : this.props.iconFilled;
    } else {
      return this.props.iconNormalRenderer
        ? this.props.iconNormalRenderer({
            ...this.props,
            index: i
          })
        : this.props.iconNormal;
    }
  }

  render() {
    const {
      disabled,
      iconFilled,
      iconHovered,
      iconNormal,
      iconFilledRenderer,
      iconHoveredRenderer,
      iconNormalRenderer,
      itemStyle,
      itemClassName,
      itemIconStyle,
      max,
      style,
      value,
      ...other
    } = this.props;

    const rating = [];

    for (let i = 1; i <= max; i++) {
      rating.push(
        <IconButton
          key={i}
          className={itemClassName}
          iconStyle={itemIconStyle}
          style={itemStyle}
        >
          {this.renderIcon(i)}
        </IconButton>
      );
    }

    return (
      <div
        style={
          this.props.disabled || this.props.readOnly
            ? { ...styles.disabled, ...this.props.style }
            : this.props.style
        }
        {...other}
      >
        {rating}
      </div>
    );
  }
}
Rating.defaultProps = {
  disabled: false,
  iconFilled: <Star className="filled" fill={orange['500']} />,
  iconNormal: <StarBorder className="empty" fill={orange['300']} />,
  max: 5,
  readOnly: false,
  value: 0
};

Rating.propTypes = {
  iconFilled: PropTypes.node,
  iconNormal: PropTypes.node,
  max: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.number
};
