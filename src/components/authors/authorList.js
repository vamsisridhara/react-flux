"use strict";
var React = require('react');
var AuthorList = React.createClass({
    propTypes:{
        authors: React.PropTypes.array.isRequired
    },
    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/"+ author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (
            <div className="col-md-8">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});
module.exports = AuthorList;