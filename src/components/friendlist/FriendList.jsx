import PropTypes from 'prop-types';
import {
  ListFriends,
  CardFriend,
  Photo,
  Name,
  Status,
} from './FriendList.styled';



export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(friend => (
        <CardFriend key={friend.id}>
          <Status isOnline={friend.isOnline} />
          <Photo src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </CardFriend>
      ))}
    </ListFriends>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};