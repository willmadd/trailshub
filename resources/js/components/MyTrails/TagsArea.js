// import React, { useState } from "react";

// import ReactDOM from "react-dom";
// import { WithContext as ReactTags } from "react-tag-input";

// const TagsArea = () => {
//     const KeyCodes = {
//         comma: 188,
//         enter: 13
//     };

//     const delimiters = [KeyCodes.comma, KeyCodes.enter];

//     const [suggestions, setSuggestions] = useState([
//         { id: "USA", text: "USA" },
//         { id: "Germany", text: "Germany" },
//         { id: "Austria", text: "Austria" },
//         { id: "Costa Rica", text: "Costa Rica" },
//         { id: "Sri Lanka", text: "Sri Lanka" },
//         { id: "Thailand", text: "Thailand" }
//     ]);

//     const [tags, setTags] = useState([
//         { id: "Thailand", text: "Thailand" },
//         { id: "India", text: "India" }
//     ]);

//     const handleDelete = i => {
//         setTags(tags.filter((tag, index) => index !== i));
//     };

//     const handleAddition = tag => {
//         setTags(prevState => ({
//             tags: [...prevState, tag]
//         }));
//     };

//     const handleDrag = (tag, currPos, newPos) => {
//         const tagsCopy = [...tags];
//         const newTags = tagsCopy.slice();
//         newTags.splice(currPos, 1);
//         newTags.splice(newPos, 0, tag);
//         setTags(newTags);
//     };

//     return (
//         <ReactTags
//             tags={tags}
//             suggestions={suggestions}
//             handleDelete={handleDelete}
//             handleAddition={handleAddition}
//             handleDrag={handleDrag}
//             delimiters={delimiters}
//         />
//     );
// };

// export default TagsArea;

import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
 
const KeyCodes = {
  comma: 188,
  enter: 2,
  return: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.return];
 
class TagsArea extends React.Component {
    constructor(props) {
        super(props);
 
        // this.state = {
        //     tags: [
        //         { id: 'Yorkshire', text: 'Yorkshire' },
        //      ],
        //     suggestions: [
        //         { id: 'Yorkshire', text: 'Yorkshire' },
        //      ]
        // };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
 
    handleDelete(i) {
        const { tags } = this.props.tagsArea;
        const {setTagArea} = this.props;
        // this.setState({
        //  tags: tags.filter((tag, index) => index !== i),
        // });
        const newTags = tags.filter((tag, index) => index !== i);
        setTagArea((prevState)=>({
            ...prevState,
            tags:newTags
        }))
    }
 
    handleAddition(tag) {
        const {setTagArea} = this.props;
        setTagArea((prevState)=>({
            ...prevState,
            tags:[...this.props.tagsArea.tags, tag]
        }))
    }
 
    handleDrag(tag, currPos, newPos) {
        const {setTagArea} = this.props;
        const tags = [...this.props.tagsArea.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        // this.setState({ tags: newTags });
        setTagArea((prevState)=>({
            ...prevState,
            tags: newTags
        }))
    }
 
    render() {
        const { tags, suggestions } = this.props.tagsArea;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} 
                    autofocus={false}
                    />
                    
            </div>
        )
    }
};

export default TagsArea;