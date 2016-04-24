'use strict';

var React = require('react'),
    MainNavigation = require('./navigation/MainNavigation'),
    Breadcrumbs = require('./Breadcrumbs');

var Zoo = React.createClass({

    render: function () {
        return (
            <div>
                <MainNavigation />
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
        );
    }
});

module.exports = Zoo;
