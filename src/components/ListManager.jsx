var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
   getInitialState: function(){
     return {items: [], newItemText: ''};
   },
   onChange: function(elem){
     this.setState({newItemText: elem.target.value});
   },
   handleSubmit: function(event){
     event.preventDefault();

     var currentItems = this.state.items;

     currentItems.push(this.state.newItemText);

     this.setState({items: currentItems, newItemText: ''});
   },
   render: function(){
     var divStyle = {
       marginTop: 10
     };

     var formStyle = {
       padding: 10,
       marginBottom: 10
     };

     var headingStyle = {};

     if(this.props.headingColor) {
       headingStyle.background = this.props.headingColor;
     };

     return (
       <div style={divStyle} className="col-sm-4">
         <div className="panel panel-danger">
           <div className="panel-heading" style={headingStyle}>
             <h4>
             {this.props.title}
             </h4>
           </div>
           <div className="row panel-body">
             <form style={formStyle} onSubmit={this.handleSubmit}>
               <div className="input-group">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}></input>
                <span className="input-group-btn"><button className="btn btn-danger" style={headingStyle}>add</button></span>
               </div>
             </form>
              <List items={this.state.items} />
             </div>
         </div>
       </div>
     )
     }
 });

module.exports = ListManager;
