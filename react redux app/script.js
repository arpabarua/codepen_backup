const {
	createStore,
	bindActionCreators
} = Redux;

const {
	Provider,
	connect
} = ReactRedux;

const {
	render
} = ReactDOM;

const attendeeList = [{
	name: 'Arpa',
	color: 'pink',
	id: uuid.v4()
}, {
	name: 'Sam',
	color: 'blue',
	id: uuid.v4()
}, {
	name: 'Avi',
	color: 'red',
	id: uuid.v4()
}, {
	name: 'Manasa',
	color: 'green',
	id: uuid.v4()
}, ];

/* Components */
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Attendees</h1>
					<Attendees attendees={this.props.attendees} />
			</div>
		)
	}
}

	class Attendees extends React.Component {

	render() {
		return (
			<ul className="attendees">
				{this.props.attendees.map((attendee, index) =>
					<li className="attendees__attendee" key={index}>
						<Badge attendee={attendee} />
					</li>
				)}
			</ul>
		)
	}
}

class Badge extends React.Component {

	render() {
		var style = {backgroundColor: this.props.attendee.color};

		return (
			<div className="hello-badge" style={style}>
				<p className="hello-badge__title"><span className="hello-badge__hello">Hello</span><br /> my name is</p>
				<p className="hello-badge__name">{this.props.attendee.name}</p>
			</div>
		)
	}
}

/* Reducers */
function reducer(state = [], action) {
	return state;
};

/* Actions */
const actions = {};

/* Store */
const AppContainer = connect(
	function mapStateToProps(state){
		return {
			attendees: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return bindActionCreators(actions, dispatch);
	}
)(App);

const store = createStore(reducer, attendeeList); //attendeeList is the default state


// Render the app into #app
render(
	<Provider store={store}>
  <AppContainer />
		</Provider>,
	document.getElementById('app')
);
