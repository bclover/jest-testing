// import React
import React from 'react';

// import components
import CommentBox from 'components/CommentBox.jsx';
import CommentList from 'components/CommentList.jsx';

export default() => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
};
