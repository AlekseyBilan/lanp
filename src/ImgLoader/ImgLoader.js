import React from 'react';
import PropTypes from 'prop-types';
import './ImgLoader.scss';

class ImgLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            condition: 'default'
        }
    }

    stopPropagation = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    onChange = (e) => {
        this.props.onChange(); //onChange handler
        const file = e.target.files[0];
        this.getBase64(file, this.drawPicture);
    }

    onDrop = (e) => {
        this.stopPropagation(e);
        let file = e.dataTransfer.items[0].getAsFile();
        this.getBase64(file, this.drawPicture);
    }

    onDragOver = (e) => {
        this.stopPropagation(e);
    }
    
    onDragEnter = (e) => {
        this.stopPropagation(e);
        this.setState({
            condition: 'drag-hover'
        })
    }

    onDragLeave = (e) => {
        this.stopPropagation(e);
        this.setState({
            condition: 'drag-hover-end'
        })
    }

    getBase64 = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            callback(reader.result)
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    drawPicture = (base64) => {
        this.setState({
            url: base64,
            condition: 'loaded'
        })
    }

    render() {
        const dragContainerClassName = this.state.condition === 'drag-hover' ? 'draggable-area drag-hover' : 'draggable-area';
        return (
            <div
                onDragOver={this.onDragOver}
                onDragLeave = {this.onDragLeave}
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
                className={dragContainerClassName}>
                <div className="draggable-area__logo-img-wrap">
                    <img ref={this.imgRef} className="draggable-area__logo-img" src={this.state.url} alt="logo" />
                </div>
                <div className="draggable-area__description">
                    <h3 className="draggable-area__title">Drag &amp; drop here</h3>
                    <span className="draggable-area__subtitle">- or -</span>
                    <label htmlFor="file-loader" className="draggable-area__label">Select file to upload</label>
                    <input type="file" id="file-loader" className="draggable-area__file-loader" onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

ImgLoader.propTypes = {
    url: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ImgLoader;