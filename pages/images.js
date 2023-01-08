import React, { Component } from 'react';
import axios from 'axios';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        axios.get('https://dailyfollowers.co/how-it-works')
            .then(response => {
                const images = this.parseHTML(response.data);
                this.setState({ images });
            })
            .catch(error => {
                console.error(error);
            });
    }

    parseHTML(html) {
        const imageRegex = /]+src="([^">]+)"/g;
        let images = [];
        let match;
        while (match = imageRegex.exec(html)) {
            images.push(match[1]);
        }
        return images;
    }

    render() {
        const { images } = this.state;
        const csv = images.join(',');
        return (
            <div>
                Image List

                {images.map(image => { image })}

            </div>
        );
    }
}

export default ImageList;