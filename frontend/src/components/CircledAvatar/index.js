import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import randomColor from 'randomcolor';

import { Avatar } from './styles';

export default function CircledAvatar(props) {
  const [avatarColor, setAvatarColor] = useState('');
  const [initials, setInitials] = useState('');
  const { children, className } = props;

  useEffect(() => {
    setAvatarColor(randomColor({ count: 1, luminosity: 'light' }));
  }, []);

  useEffect(() => {
    const splitName = 'Clarice Ribeiro'.split(' ');

    if (splitName.length === 1) {
      setInitials(splitName[0].substring(0, 2).toUpperCase());
    } else {
      setInitials(
        splitName[0].substring(0, 1).toUpperCase() +
          splitName[splitName.length - 1].substring(0, 1).toUpperCase()
      );
    }
  }, []);

  return (
    <Avatar avatarColor={avatarColor} className={className}>
      {children} {initials}
    </Avatar>
  );
}

CircledAvatar.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.element.isRequired,
};
