const MyLink = (props) => {
  return (

    <a href={props.url} className={props.linkClass}>{props.label}</a>

  );
};

const MyButton = (props) => {
  return (
   <button className={props.buttonClass}>{props.label}</button>
  );
};

const NumberList = (props) => {

  return (
        <ul>
          {props.colors.map(function(listValue){
            return <li>{listValue}</li>;
          })}

        </ul>
      );
};

const Main = (props) => {
  return (
  <div>

        <MyButton label="button" buttonClass="btn-primary"/>
        <MyLink url="#" label="link" linkClass="link-primary"/>
      <NumberList colors={props.colors} />
      <div>{props.ipsumText}</div>
      </div>
  );
};

React.render(
  <Main ipsumText= "Hello from Paddl."
    colors= {['Green', 'Red', 'Pink', 'Yellow', 'Orange']} />,
  document.getElementById('impl')
);

{

  //   hard coded way
  //   return (
  //   <ul>
  //     <li>{props.myColors[0]}</li>
  //     <li>{props.myColors[1]}</li>
  //     <li>{props.myColors[2]}</li>
  //   </ul>
  // );

  //   loop THREE items using while loop
  //   return (
  //   <ul>
  //     <li>{props.myColors[0]}</li>
  //     <li>{props.myColors[1]}</li>
  //     <li>{props.myColors[2]}</li>
  //   </ul>
  // );

  //   loop THREE items using FOR loop

  //    for(let i = 0; i < props.colors.length; i++) {
  //     // For each element, push a React element into the array

  //       // <li>{props.colors[0]}</li>
  //     console.log(props.colors[i])
  //   }
};
