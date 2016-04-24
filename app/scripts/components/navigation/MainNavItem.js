'use strict';

var React = require('react');

var MainNavItem = React.createClass({

    render: function () {
        var className = '',
            icon;
        if (this.props.active) {
            className = className + ' active';
        }

        if (typeof this.props.item.icon !== 'undefined') {
            icon = <i className={ 'fa ' + this.props.item.icon.className } aria-hidden="true"></i>;
        }

        return (
            <li className={ className }>
                <a href={'#' + this.props.item.slug }>
                    { icon }
                    { this.props.item.label }
                </a>
            </li>
        );
    }
});

module.exports = MainNavItem;
