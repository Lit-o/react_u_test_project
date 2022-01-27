import './app-info.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 25px;    
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
    h1 {
        font-size: 42px
    }
    h2 {
        color: ${props => props.active ? 'orange' : '#fff'}
    }
`;

const BlueWrapper = styled(Wrapper)`
    background-color: #3d5a80;
`;

const AppInfo = ({emloyees, increased}) => {
    // const {data} = props;
    // const newArrayWithIncrease = data.filter(el => el.isIncrease)
    // const {emloyees, increased} = props
    return (
        // <div className="appInfo">
        //     <h1>Учет сотрудников компании</h1>
        //     <h2>Общее число сотрудников: {emloyees} </h2>
        //     <h2>Премию получат: {increased}</h2>
        // </div>
        <BlueWrapper as="nav" active="">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее число сотрудников: {emloyees} </h2>
            <h2>Премию получат: {increased}</h2>
        </BlueWrapper>
    )
}

export default AppInfo;