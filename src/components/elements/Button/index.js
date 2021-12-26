import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const className = [props.className]
  props.isSmall && className.push("btn-sm");
  props.isLarge && className.push("btn-lg");
  props.isBlock && className.push("btn-block");
  props.isPrimary && className.push("btn-primary");
  props.hasShadow && className.push("shadow-lg");

  const onClick = () => {
    if (props.onClick) props.onClick()
  }

  if (props.isDisabled) {
    props.isDisabled && className.push("disabled")
    return (
      <span
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </span>
    )
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <div>
          <Link
            className={className.join(" ")}
            to={props.href}
            style={props.style}
            onClick={onClick}
          >
            {props.children}
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link
            className={className.join(" ")}
            to={props.href}
            style={props.style}
            onClick={onClick}
          >
            {props.children}
          </Link>
        </div>
      )
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {
        props.isLoading ?
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
          :
          props.children
      }
    </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link", "submit"]),
  href: propTypes.string,
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isPrimary: propTypes.bool,
  hasShadow: propTypes.bool,
  isExternal: propTypes.bool
}