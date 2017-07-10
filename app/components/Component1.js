//Component1.jsx
import React from 'react';

class Component1 extends React.Component {
    constructor(props){
      super(props);
      this.state = {liked:false};
    }

    click(){
      console.log("w hai bushi hen hui lelke");
      this.setState({liked:true});
    }

    render() {
        return (
            <div  onClick={this.click.bind(this)} >Hello Worldsadasd!</div>
        )
    }
}

//导出组件
export default Component1;
