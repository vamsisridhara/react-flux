"use strict";
var React = require("react");
var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    render: function () {
        var createAuthorMapRow = function (author) {
            return (
                <tr key={author.Id}>
                    <td>
                        <a href={"/#authors/" + author.id}>
                            {author.id}
                        </a>
                    </td>
                    <td>
                        {author.firstName} {author.lastName}
                    </td>
                </tr>
            );
        };
        return (
            <div className="col-md-6">
                <h1>Authors</h1>
                <table className="table table-responsive">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorMapRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;