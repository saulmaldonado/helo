import React from 'react'
import { withRouter, Link } from 'react-router-dom'

class Nav extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        if(this.props.location.pathname === '/'){
            return null
        }
        return(
            <div>
                <Link to='/dashboard'><button>Home</button></Link>                
                <Link to='/new'><button>New Post</button></Link>                
                <Link to='/'><button>Logout</button></Link>        
            </div>
        )
    }
}

export default withRouter(Nav)