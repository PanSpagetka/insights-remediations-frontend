import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Modal
} from '@patternfly/react-core';

export default function ConfirmationDialog ({
    isOpen = true,
    title = 'Remove system?',
    text = 'This action cannot be undone',
    onClose = f=>f
}) {

    return (
        <Modal
            className="ins-c-dialog"
            width={ '50%' }
            title={ title }
            isOpen={ isOpen }
            onClose={ () => onClose(false) }
            isFooterLeftAligned
            actions={ [
                <Button key="confirm" variant="danger" onClick={ () => onClose(true) }>Remove system</Button>,
                <Button key="cancel" variant="secondary" onClick={ () => onClose(false) }>Cancel</Button>
            ] }
        >
            <h2>{ text }</h2>
        </Modal>
    );
}

ConfirmationDialog.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
    onClose: PropTypes.func
};
