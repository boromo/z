'use strict';

var React = require('react');

var Breadcrumbs = React.createClass({

    render: function () {
        return (
            <div>

                <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Small pets</a></li>
                    <li><a href="#">Small pet food</a></li>
                    <li><a href="#">Hamster food</a></li>
                    <li className="active"><a href="#">Versele Laga Premium Mini Hamster Nature</a></li>
                </ol>
            </div>
        );
    }
});

module.exports = Breadcrumbs;
