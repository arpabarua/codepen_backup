// add logic to components
// Use Es6 spread operator and destructuring technique.


const Logo = (props) => {
  const {
    source,
    logoClass
  } = props;
  return(
  <img src={source} className={logoClass} />
  );
}

const Contact = (props) => {
   const {
   addressClass,
    address,
    mobileClass,
   mobile
  } = props;
  return(
    <div className="contactFooter">
       <div className={addressClass}>Address: {address}</div>
       <div className={mobileClass}>Phone: {mobile}</div>
    </div>
  );
}

const MainContent = (props) => {
   const {
   titleClass,
   title,
   subtitleClass,
   subtitle
  } = props;
  return(
    <div className="mainContent">
       <div className={titleClass}>{title}</div>
       <div className={subtitleClass}>{subtitle}</div>
    </div>
  );
}

//  every single react component has a props object and a state object. always, and sometimes those 2 objecs are empty. but they exist/.
class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'pink' };
  }

  toggleBg = () => {
    this.setState((prevState) => {
      return {
        color: (prevState.color == 'pink' ? 'teal' : 'pink')
      };
    });
  };

  render() {
    return (
    <div className="business-card-vertical_mode" onClick={ this.toggleBg } style={ { backgroundColor: this.state.color} }>

      <Logo
       source = { this.props.logoImage }
       logoClass = "logo"  />


       <MainContent
        titleClass="title"
        title={this.props.title}
        subtitleClass="subtitle"
        subtitle={this.props.subtitle}
        />


       <Contact
        addressClass="address"
        address={this.props.address}
        mobileClass="mobile"
        mobile={this.props.mobile}
        />


    </div>
  );
  }
}

ReactDOM.render(
<BusinessCard
  title = "Arpa Barua"
  subtitle = "Graduate Software Engineer"
  address = "Burwood, VIC"
  mobile = "xxxxxxxx"
  logoImage="https://sep.yimg.com/ca/I/yhst-19112491217658_2268_2093522491"
 />,
document.getElementById('app')
);




 
