import React from 'react';
import ImgLoader from '../ImgLoader/ImgLoader';
import './ImgLoaderContainer.scss';
import PropTypes from 'prop-types';

function ImgLoaderContainer(props) {
    return (
        <div className="img-loader-container">
            <div className="img-loader-container__title-wrap">
                <h2 className="img-loader-container__title">Company Logo</h2>
                <span className="img-loader-container__sub-title">Logo should be square, 100px size and in png, jpeg file format.</span>
            </div>
            <ImgLoader url={props.url} onChange={props.onChange} />
        </div>
    );
}

ImgLoaderContainer.propTypes = {
    url: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ImgLoaderContainer;
