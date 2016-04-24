'use strict';

var React = require('react'),
    MainNavigation = require('./navigation/MainNavigation');

var Zoo = React.createClass({

    render: function () {
        return (
            <div>
                <MainNavigation />
            </div>
        );
    }
});

module.exports = Zoo;
