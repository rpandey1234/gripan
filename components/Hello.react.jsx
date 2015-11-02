/** @jsx React.DOM */
React = require('react');
ReactDOM = require('react-dom');

module.exports = Hello = React.createClass({

    componentDidMount: function() {
        console.log('component mounted');
        $.get('/api/users', function(result) {
            console.log(result);
            if (this.isMounted()) {
                this.setState({
                    //username: lastGist.owner.login,
                    //lastGistUrl: lastGist.html_url
                });
            }
        }.bind(this));
    },

    // Render the component
    render: function(){
        console.log('rendering');
        return (
            <p>Hello gripan</p>
        )

    }
});