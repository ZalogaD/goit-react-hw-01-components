import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 150px 15px 10px;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  transition: all 0.3s ease;
  background-color: #fff;
  &:hover {
    transform: scale(1.2);
    background-color: #b0e0e6;
  }
`;

export const ItemStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.online ? 'green' : 'red';
  }};
`;

export const AvatarItem = styled.img`
  border-radius: 10%;
  background-color: #afeeee;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #000;
`;