import React from 'react';

const LinkTarget = {
  marks: {
    link: (props: any) => {
      return props.value.blank ? (
        <a href={props.value.href} target='_blank' rel='noopener noreferrer'>{props.children}</a>
      ) : (
        <a href={props.value.href}>{props.children}</a>
      );
    }
  }
};

export default LinkTarget;
