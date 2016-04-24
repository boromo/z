'use strict';

var React = require('react'),
    MainNavItem = require('./MainNavItem');

// Temp nav items list
var navItems = [
    {
        label: 'Dog',
        slug: 'dog'
    },
    {
        label: 'Cat',
        slug: 'cat'
    },
    {
        label: 'Small pet',
        slug: 'small-pet'
    },
    {
        label: 'Bird',
        slug: 'bird'
    },
    {
        label: 'Aquatic',
        slug: 'aquatic'
    },
    {
        label: 'Vet',
        slug: 'vet',
        icon: {
            className: 'fa-plus'
        }
    },
    {
        label: 'Exclusives',
        slug: 'exclusives',
        icon: {
            className: 'fa-star'
        }
    },
    {
        label: 'Top brands',
        slug: 'top-brands'
    },
    {
        label: 'Special offer',
        slug: 'special-offer',
        icon: {
            className: 'fa-tag'
        }
    }
]

var MainNavigation = React.createClass({

    render: function () {
        var items = [];

        for (var i = 0; i < navItems.length; i++) {
            items.push(
                <MainNavItem
                    item={ navItems[i] }
                    key={ 'main-nav-' + i }/>
            );
        }

        return (
            <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            { items }
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = MainNavigation;
