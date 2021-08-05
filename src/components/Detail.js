import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            const { state: {
                poster,
                title,
                year,

                summary }
            } = location;
            return (

                <div className="movie-detail">
                    <img src={poster} alt={title} title={title} />
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{year}</h5>
                        <p className="movie__summary">{summary}</p>
                    </div>
                </div>

            )
        }
        else {
            return null;
        }
    }
}

export default Detail;