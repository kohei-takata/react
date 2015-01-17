var CommentBox1 = React.createClass({displayName: 'CommentBox1',
 render: function() {
  return (
   React.createElement('div', {className: "commentBox1"},
    "Hello, world! I am CommentBox1."
    )
  );
 }
});

React.render(
 React.createElement(CommentBox1, null),
 document.getElementById('content1')
);
