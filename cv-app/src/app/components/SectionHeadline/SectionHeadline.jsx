import React from "react";
import './SectionHeadline.scss';
import PropTypes from 'prop-types';

const SectionHeadline = ({ text, version }) => {
    return (
        <>
            {version === 1 ? (
                <div className="SectionHeadline">
                    {text}
                </div>
            ) : (
                <div className="SectionHeadline2">
                    {text}
                </div>)
            }
        </>
    );
};

SectionHeadline.propTypes = {
    text: PropTypes.string,
    version: PropTypes.number
};

SectionHeadline.defaultProps = {
    text: null,
    version: 1,
}

export default SectionHeadline;
