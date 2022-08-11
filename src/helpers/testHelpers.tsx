import React, { ReactComponentElement } from 'react';

export const MockComponent = (
  name: string,
  props: object
): ReactComponentElement<any> => {
  return (
    <div aria-label={name}>
      <p>{name}</p>
      <p>{JSON.stringify(props).replace(/"/g, "'")}</p>
    </div>
  );
};
