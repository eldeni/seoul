import React from 'react';
import styled from 'styled-components';

import { ComponentType } from '@@universal/constants';
import useComponentType from '@@universal/hooks/useComponentType';

const StyledTop = styled.div<any>({
  padding: '15px 40px',
});

const StyledButton = styled.button<any>((props) => ({
  fontWeight: props.active ? 500 : 400,
  marginRight: 30,
}));

const Top = ({
  handleChangeComponentType,
}) => {
  const { componentType } = useComponentType();

  const MemoizedButton = React.useMemo(() => {
    const Button = ({
      active,
      label,
      value,
    }) => (
      <StyledButton
        active={active}
        onClick={handleChangeComponentType}
        type="button"
        value={value}
      >
        {label}
      </StyledButton>
    );
    return Button;
  }, []);

  return (
    <StyledTop>
      <MemoizedButton
        active={componentType === ComponentType.EMOTION}
        label="Emotion"
        value={ComponentType.EMOTION}
      />
      <MemoizedButton
        active={componentType === ComponentType.STYLED}
        label="Styled"
        value={ComponentType.STYLED}
      />
    </StyledTop>
  );
};

export default Top;
