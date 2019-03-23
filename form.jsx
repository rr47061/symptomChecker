import React,{Component}  from 'react';

class Form extends Component {
    render() {
        return (

            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="age" placeholder="age.."/>
                    <input type="text" name="gender" placeholder="gender.."/>
                    <button>Get weather</button>



                </form>
            </div>

        );
    }
}

export default Form
