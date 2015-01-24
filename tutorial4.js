var data = [
 {author: "Pete Hunt", text: "This is one comment"},
 {author: "Jordan Walke", text: "This is *another* comment"}
];
var converter = new Showdown.converter();
var CommentBox = React.createClass({
 render: function() {
  return (
   <div className="commentBox">
    <h1>Comments</h1>
    <CommentList data={this.props.data} />
    <CommentForm />
   </div> 
  );
 }
});
var CommentList = React.createClass({
 render: function() {
  var commentNodes = this.props.data.map(function (comment) {
   return (
    <Comment author={comment.author}>
     {comment.text}
    </Comment>
   );
  });
  return (
   <div className="commentList">
    {commentNodes}
   </div>
  );
 }                            
});

var CommentForm = React.createClass({
 handleSubmit: function(e) {
  e.preventDefault();
  var author = this.refs.author.getDOMNode().value.trim();
  var text = this.refs.text.getDOMNode().value.trim();
  if (!text || !author) {
   return;
  }
  this.refs.author.getDOMNode().value = '';
  this.refs.getDOMNode().value = '';
  return;
 },
 render: function() {
  return (
   <form className="commentForm">
    <input type="text" placeholder="Your name" />
    <input type="text" placeholder="Say something..." />
    <input type="submit" value="Post" />
   </form>
  );
 }              
});

var Comment = React.createClass({
 render: function() {
  var rawMarkup = converter.makeHtml(this.props.children.toString());
  return (
   <div className="comment">
    <h2 className="commentAuthor">
     {this.props.author}
    </h2>
    {this.props.children}
    <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
   </div>
  )
 }
});

React.render(
 <CommentBox data={data} />,
 document.getElementById('content2')
);
