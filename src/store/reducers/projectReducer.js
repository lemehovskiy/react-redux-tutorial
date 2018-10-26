const initialState = {
    projects: [
        {id: 1, title: 'Title 1', content: 'Content 1'},
        {id: 2, title: 'Title 2', content: 'Content 2'},
        {id: 3, title: 'Title 3', content: 'Content 3'}
    ]
};

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create_project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create_project_error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;