import './app-info.css';

const AppInfo = ({emloyees, increased}) => {
    // const {data} = props;
    // const newArrayWithIncrease = data.filter(el => el.isIncrease)
    // const {emloyees, increased} = props
    return (
        <div className="appInfo">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее число сотрудников: {emloyees} </h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;