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
        slug: 'exclusives'
    },
    {
        label: 'Top brands',
        slug: 'top-brands'
    },
    {
        label: 'Special offer',
        slug: 'special-offer'
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
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            { items }
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
});

module.exports = MainNavigation;
