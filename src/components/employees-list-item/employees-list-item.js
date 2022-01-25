import { Component } from 'react'

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isIncrease: false,
            isLike: false
        }
    }
    
    onIncrease = () => {
        this.setState(({isIncrease}) => ({
            isIncrease: !isIncrease
        }))
    }

    onLike = () => {
        this.setState(({isLike}) => ({
            isLike: !isLike
        }))
    }
    
    render() {
        const {name, salary} = this.props;
        const {isIncrease} = this.state;
        const {isLike} = this.state;
        return (
            <li className={`list-group-item d-flex justify-content-between 
            ${isIncrease && 'increase'} 
            ${isLike && 'like'}`}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }


}

export default EmployeesListItem;