"use strict";
var React = require("react");
var Input = require("../common/textInput");

var AuthorForm = React.createClass({
    render: function () {
        return (
            <div className="col-md-6">
                <form className="form-horizontal">
                    <h1>Manage Author Form</h1>
                    <Input name="firstName"
                        label="FirstName"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange} />

                    <Input name="lastName"
                        label="LastName"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange} />
                        
                    <button type="submit" 
                        onClick={this.props.onSave}
                        className="btn btn-primary btn-sm">
                        Save
                    </button>
                </form>
            </div>
        );
    }
});
module.exports = AuthorForm;