import React from 'react';

const ProjectDetail = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            Project Title - {id}
                        </span>
                        <p>
                            Lorem ipsum
                        </p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>
                            Posted by sdfsdf
                        </div>
                        <div>
                            Date
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
