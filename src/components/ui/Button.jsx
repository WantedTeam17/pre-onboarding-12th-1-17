import styled from 'styled-components';
import { colors } from '../../constants/color';

const Button = ({ children, variant, size, isFullWidth, disabled, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      $isFullWidth={isFullWidth}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const TYPE_VARIANTS = {
  primary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.primary,
    color: colors.white,
    hover: {
      backgroundColor: colors.primaryHover,
      border: `1px solid ${colors.primaryHover}`,
    },
  },
  secondary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: 'transparent',
    color: colors.primary,
    hover: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  textOnly: {
    border: '1px solid transparent',
    backgroundColor: 'transparent',
    color: colors.primary,
  },
};

const TYPE_SIZES = {
  small: {
    fontSize: '13px',
    padding: '3px 9px',
    fontWeight: '500',
  },
  medium: {
    fontSize: '16px',
    padding: '8px 16px',
    fontWeight: '600',
  },
  large: {
    fontSize: '20px',
    padding: '10px 20px',
    fontWeight: '700',
  },
};

const StyledButton = styled.button`
  font-family: inherit;
  outline: none;
  line-height: 24px;
  border-radius: 10px;
  transition: all 0.4s ease;
  width: ${props => (props.isFullWidth ? '100%' : 'auto')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: ${props => (props.disabled ? 'opacity(0.5)' : 'none')};
  ${props => TYPE_VARIANTS[props.variant || 'primary']};
  ${props => TYPE_SIZES[props.size || 'medium']};

  &:hover {
    background-color: ${props =>
      !props.disabled && TYPE_VARIANTS[props.variant || 'primary'].hover.backgroundColor};
    border: ${props => !props.disabled && TYPE_VARIANTS[props.variant || 'primary'].hover.border};
    color: ${props => TYPE_VARIANTS[props.variant || 'primary'].hover.color};
  }
`;
