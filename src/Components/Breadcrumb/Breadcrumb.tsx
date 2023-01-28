import './Breadcrumb.css';

function Breadcrumb (){
    return(
        <div className="breadcrumb-area">
        <div className="container">
            <div className="breadcrumb-content">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li className="active">404 Error</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Breadcrumb;