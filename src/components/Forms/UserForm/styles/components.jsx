export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;

  width: ${props => props.width || ''};
  margin-top: 0.5rem;

  background-color: ${props => props.theme.componentAccent};
  box-shadow: 4px 2px 16px ${props => props.theme.btnShadow};
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.componentPrimary};

  &:hover ${Svg} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  padding: 14px 28px;
  @media (min-width: 765px) {
    padding: 16px 23px;
  }
`;