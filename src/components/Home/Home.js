import React from 'react';



class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    here = async () => {
        const users = await this.props.getUsersQuery.users;
        console.log(users);
    }
    render() {
        return(
            <div>Home
            <button onClick={ this.here }></button>
            </div>
        )
    }
}

export default Home;