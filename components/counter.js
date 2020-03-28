var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps(): Invoked once and cached when the class is created. Values in the mapping will be set on this.props if that prop is not specified by the parent component. This method is invoked before any instances are created and thus cannot rely on this.props. In addition, be aware that any complex objects returned by getDefaultProps() will be shared across instances, not copied.');
    },

    getInitialState: function() {
        console.log('getInitialState(): Invoked once before the component is mounted. The return value will be used as the initial value of this.state.');
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

     componentWillMount: function(){
        console.log('componentWillMount(): Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.');
    },

    componentDidMount: function() {
        console.log('componentDidMount(): Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The componentDidMount() method of child components is invoked before that of parent components.');
    },

    componentWillReceiveProps: function(nextProps){
        if (nextProps.reset) {
            this.setState({
                counter: 0
            });
            console.log('componentWillReceiveProps(): Invoked when a component is receiving new props. This method is not called for the initial render.Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.');
        };
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('shouldComponentUpdate(): Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.Use this as an opportunity to return false when you are certain that the transition to the new props and state will not require a component update.');
        return true;
    },

    componentWillUpdate: function(){
        console.log('componentWillUpdate(): Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.Use this as an opportunity to perform preparation before an update occurs.');
    },

    componentDidUpdate: function(){
        console.log('componentDidUpdate(): Invoked immediately after the components updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.');
    },

    render: function() {
        console.log('render(): When called, it should examine this.props and this.state and return a single child element. This child element can be either a virtual representation of a native DOM component (such as <div /> or React.DOM.div()) or another composite component that you defined yourself.');
        return React.createElement('div', {className: 'container'},
            React.createElement('span', {}, 'Stan licznika: ' + this.state.counter),
            React.createElement('button', { onClick: this.increment}, '+'),
            React.createElement('button', { onClick: this.decrement}, '-'),
        );
    },

    componentWillUnmount: function(){
        console.log('componentWillUnmount(): Invoked immediately before a component is unmounted from the DOM.Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.');
    },

});

